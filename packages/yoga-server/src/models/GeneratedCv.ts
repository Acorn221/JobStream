import { GraphQLError } from 'graphql';
import { drive_v3 as driveV3, google } from 'googleapis';
import { getExperiencesRelevantToJob } from './helpers/Embeddings';
import { ModifyCV } from './helpers/GenerateCVHelpers';
import { getOauthClient } from './helpers/GetGoogleAuthTokens';
import { getOptimiserFolderId } from './helpers/GoogleDriveFolderManagement';
import { builderAdditionParams } from '../types';

export const addGeneratedCv = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('GeneratedCv', {
    fields: (t) => ({
      id: t.exposeID('id'),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
      user: t.relation('user'),
      cv: t.relation('CV', { nullable: true }), // this should be nullable, so the user can delete the CV
      content: t.expose('content', { type: 'JSON' }),
      experiences: t.relation('ExperiencesUsed'),
      googleDocId: t.exposeString('googleDocId'),
      job: t.relation('job'),
    }),
  });

  builder.queryField('GetGeneratedCvs', (t) => t.prismaField({
    type: ['GeneratedCv'],
    resolve: async (query, root, args, ctx, info) => {
      const GeneratedCvs = await prisma.generatedCv.findMany({
        ...query,
        where: {
          userId: ctx.currentUser.userId,
        },
      });

      return GeneratedCvs;
    },
  }));

  builder.mutationField('CreateGeneratedCv', (t) => t.field({
    type: 'Boolean',
    errors: {
      types: [Error],
    },
    args: {
      jobId: t.arg.string({
        required: true,
        description: 'The id of the job to generate the cv for',
      }),
    },
    resolve: async (root, args, ctx) => {
      // get the experiences, job and cv
      const {
        jobId,
      } = args;
      const { userId } = ctx.currentUser;

      // get the CV from the db
      const cv = await prisma.cV.findFirst({
        where: {
          isDefault: true,
          AND: {
            userId,
          },
        },
      });

      if (!cv) {
        throw new GraphQLError('CV not found');
      }

      // get the job from the db
      const job = await prisma.job.findUnique({
        where: {
          id: jobId,
          AND: {
            userId,
          },
        },
      });

      if (!job) {
        throw new GraphQLError('Job not found');
      }

      const oauth2Client = await getOauthClient(userId, prisma);

      const drive = google.drive({
        version: 'v3',
        auth: oauth2Client,
      });

      const docs = google.docs({
        version: 'v1',
        auth: oauth2Client,
      });

      // get the experiences from the db
      const experiences = await getExperiencesRelevantToJob(
        job,
        0.5,
        8,
        prisma,
      );

      const improveRequests = await ModifyCV(cv, job, experiences);

      // create the generated CV in google drive and save the id to the db
      const folderId = await getOptimiserFolderId(userId);

      try {
        // TODO: when the batch mutations are ready, use them here
        const newFile = await drive.files.copy({
          fileId: cv?.googleDocId,
          requestBody: {
            name: `Generated CV for ${job.name}`,
            parents: folderId ? [folderId] : [],
            description: `Generated Resume by JobStream - From ${job.url}`,
          },
        });

        console.log(improveRequests);

        await docs.documents.batchUpdate({
          documentId: newFile.data.id!,
          requestBody: {
            requests: improveRequests,
          },
        });

        const updated = await docs.documents.get({
          documentId: newFile.data.id!,
        });

        if (!newFile.data.id) {
          throw new GraphQLError('Error creating new CV, fileID was not returned from google drive :(');
        }

        await prisma.generatedCv.create({
          data: {
            name: `Generated CV for ${job.name}`,
            googleDocId: newFile.data.id,
            content: JSON.stringify(updated.data),
            user: {
              connect: {
                id: userId,
              },
            },
            CV: {
              connect: {
                id: cv.id,
              },
            },
            job: {
              connect: {
                id: jobId,
              },
            },
            ExperiencesUsed: {
              connect: experiences.map((e: any) => ({
                id: e.id,
              })),
            },
          },
        });

        return true;
      } catch (e) {
        throw new GraphQLError(`Error creating new CV in Google Drive ${e}`);
      }
    },
  }));
};
