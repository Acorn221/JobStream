import { GraphQLError } from 'graphql';
import { StatusEnum } from 'misc-glob';
import { createGeneratedCoverLetter } from './helpers/GeneratedCoverLetterHelper';
import { getJobSuitabilityScore, setJobEmbedding } from './helpers/Embeddings';
import { builderAdditionParams } from '../types';

export const addJob = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('Job', {
    fields: (t) => ({
      id: t.exposeID('id'),
      name: t.exposeString('name', {
        nullable: true,
        description: 'The user assigned name of the job',
      }),
      description: t.exposeStringList('description', {
        description: 'The job description, eg. "You will be paid a ***COMPETITIVE SALARY*** I really promise 🥺🥺🥺"',
      }),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      url: t.exposeString('url'),
      status: t.exposeString('status'),
      GeneratedCv: t.relation('GeneratedCv'),
      GeneratedCoverLetter: t.relation('GeneratedCoverLetter'),
      suitabilityScore: t.exposeFloat('suitabilityScore', { nullable: true }),
      suitabilityScoreDate: t.expose('suitabilityScoreDate', { type: 'Date', nullable: true }),
    }),
  });

  builder.mutationField('Createjob', (t) => t.prismaField({
    type: 'Job',
    args: {
      name: t.arg.string({
        required: false,
        description: 'The user assigned name of the job',
      }),
      description: t.arg.stringList({
        required: true,
        description: 'The job description, eg. "You will be paid a ***COMPETITIVE SALARY*** I really promise 🥺🥺🥺"',
      }),
      url: t.arg.string({
        required: true,
        description: 'The url from where the job was acquired',
      }),
      status: t.arg.string({
        required: false,
        description: 'The status of the job, eg. "Applied"',
      }),
      autoGenerateCv: t.arg.boolean({
        required: false,
        description: 'Whether to automatically generate a cv for this job',
      }),
      autoGenerateCoverLetter: t.arg.boolean({
        required: false,
        description: 'Whether to automatically generate a cover letter for this job',
      }),
    },
    resolve: async (query, _, args, ctx) => {
      const {
        name, description, url, status,
      } = args;

      let jobStatus;

      if (status) {
        // check if status is typeof JobStatus
        if (!Object.values(StatusEnum).includes(status as StatusEnum)) {
          throw new GraphQLError(`Invalid status: ${status}`);
        }
        jobStatus = status as StatusEnum;
      }

      const trimmedDescription = description.map((c) => c.trim());

      const createdjob = await prisma.job.create({
        ...query,
        data: {
          name,
          description: trimmedDescription,
          status: (jobStatus || undefined),
          url,
          user: {
            connect: {
              id: ctx.currentUser.userId,
            },
          },
        },
      });

      await setJobEmbedding(createdjob, prisma);

      const suitabilityScore = await getJobSuitabilityScore(createdjob, prisma);

      if (suitabilityScore) {
        await prisma.job.update({
          where: {
            id: createdjob.id,
          },
          data: {
            suitabilityScore,
            suitabilityScoreDate: new Date(),
          },
        });
      }

      if (args.autoGenerateCv) {
        throw new GraphQLError('Auto generate CV not implemented yet');
      }

      if (args.autoGenerateCoverLetter) {
        // TODO: include the default CV

        const templateIds = await prisma.coverLetterTemplate.findMany({
          where: {
            userId: ctx.currentUser.userId,
          },
          select: {
            id: true,
          },
        });

        await createGeneratedCoverLetter({
          jobId: createdjob.id,
          userId: ctx.currentUser.userId,
          templateIds: templateIds.map((x: any) => x.id),
          prisma,
        });

        const retrivedJob = await prisma.job.findUnique({
          ...query,
          where: {
            id: createdjob.id,
          },
          include: {
            GeneratedCoverLetter: true,
          },
        });
        if (!retrivedJob) {
          throw new GraphQLError('Failed to retrieve job after creating cover letter');
        }
        return retrivedJob;
      }

      return createdjob;
    },
  }));

  builder.mutationField('Updatejob', (t) => t.prismaField({
    type: 'Job',
    args: {
      id: t.arg.string({
        required: true,
        description: 'The id of the job to update',
      }),
      name: t.arg.string({
        required: false,
        description: 'The user assigned name of the job',
      }),
      description: t.arg.stringList({
        required: false,
        description: 'The job description, eg. "You will be paid a ***COMPETITIVE SALARY*** I really promise 🥺🥺🥺"',
      }),
      status: t.arg.string({
        required: false,
        description: 'The status of the job, eg. "Applied"',
      }),
      refreshSuitabilityScore: t.arg.boolean({
        required: false,
        description: 'Whether to refresh the suitability score for this job',
      }),
    },
    resolve: async (query, _, args, ctx) => {
      const {
        id, name, description, status, refreshSuitabilityScore,
      } = args;

      let jobStatus;

      if (status) {
        // check if status is typeof JobStatus
        if (!Object.values(StatusEnum).includes(status as StatusEnum)) {
          throw new GraphQLError(`Invalid status: ${status}`);
        }
        jobStatus = status as StatusEnum;
      }

      const updatedjob = await prisma.job.update({
        ...query,
        where: {
          id,
          AND: {
            userId: ctx.currentUser.userId,
          },
        },
        data: {
          name,
          description: (description || undefined),
          status: (jobStatus || undefined),
        },
      });

      if (description) {
        await setJobEmbedding(updatedjob, prisma);
      }

      if (refreshSuitabilityScore) {
        const suitabilityScore = await getJobSuitabilityScore(updatedjob, prisma);
        if (refreshSuitabilityScore) {
          await prisma.job.update({
            where: {
              id: updatedjob.id,
            },
            data: {
              suitabilityScore,
              suitabilityScoreDate: new Date(),
            },
          });
        }
      }

      return updatedjob;
    },
  }));

  builder.mutationField('UpdateJobs', (t) => t.idList({
    args: {
      ids: t.arg.stringList({
        required: true,
        description: 'The ids of the jobs to update',
      }),
      status: t.arg.string({
        required: true,
        description: 'The Status of the bulk updated jobs',
      }),
    },
    resolve: async (query, args, ctx) => {
      const { ids, status } = args;
      let jobStatus;
      if (status) {
        // check if status is typeof JobStatus
        if (!Object.values(StatusEnum).includes(status as StatusEnum)) {
          throw new GraphQLError(`Invalid status: ${status}`);
        }
        jobStatus = status as StatusEnum;
      }

      const updated = await prisma.job.updateMany({
        where: {
          userId: ctx.currentUser.userId,
          id: {
            in: ids,
          },
        },
        data: {
          status: jobStatus,
        },
      });
      return ids;
    },
  }));

  builder.mutationField('Deletejob', (t) => t.prismaField({
    type: 'Job',
    args: {
      id: t.arg.string({
        required: true,
        description: 'The id of the job to delete',
      }),
    },
    resolve: async (query, _, args, ctx) => {
      const { id } = args;

      const deletedjob = await prisma.job.delete({
        ...query,
        where: {
          id,
          AND: {
            userId: ctx.currentUser.userId,
          },
        },
      });

      return deletedjob;
    },
  }));

  builder.mutationField('DeleteJobs', (t) => t.idList({
    args: {
      ids: t.arg.stringList({
        required: true,
        description: 'The ids of the jobs to delete',
      }),
    },
    resolve: async (query, args, ctx) => {
      const { ids } = args;

      await prisma.job.deleteMany({
        where: {
          userId: ctx.currentUser.userId,
          id: {
            in: ids,
          },
        },
      });
      return ids;
    },
  }));
};
