import { Prisma } from 'database';
import { GraphQLError } from 'graphql/error/GraphQLError';
import { google } from 'googleapis';
import { getOauthClient } from './helpers/GetGoogleAuthTokens';
import { builderAdditionParams } from '../types';

export const addCoverLetterTemplate = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('CoverLetterTemplate', {
    fields: (t) => ({
      id: t.exposeID('id'),
      user: t.relation('user'),
      name: t.exposeString('name', {
        nullable: true,
        description: 'The user assigned name of the cover letter template',
      }),
      googleDocId: t.exposeString('googleDocId'),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
      active: t.exposeBoolean('active'),
    }),
  });

  builder.queryField('CoverLetterTemplates', (t) => t.prismaField({
    type: ['CoverLetterTemplate'],
    args: {
      limit: t.arg.int({
        description: 'The maximum number of cover letter templates to return',
        required: false,
      }),
      offset: t.arg.int({
        description: 'The number of cover letter templates to skip',
        required: false,
      }),
    },
    resolve: async (query, _, args, ctx) => {
      const { limit, offset } = args;

      const { userId } = ctx.currentUser;

      const templates = await prisma.coverLetterTemplate.findMany({
        where: {
          userId,
        },
        take: limit || undefined,
        skip: offset || undefined,
      });

      return templates;
    },
  }));

  builder.mutationField('CreateCoverLetterTemplate', (t) => t.int({
    args: {
      googleDocIds: t.arg.stringList({
        required: true,
        description: 'The google doc id of the cover letter template',
      }),
    },
    resolve: async (query, args, ctx) => {
      const { googleDocIds } = args;

      const { userId } = ctx.currentUser;

      if (googleDocIds.length < 1) throw new GraphQLError('No google doc ids provided');

      const oauth2Client = await getOauthClient(userId, prisma);

      // TODO add some kind of check to see if {{title}} and {{content}} are present in template

      const docs = google.docs({
        version: 'v1',
        auth: oauth2Client,
      });

      // get the names from google drive
      const names = await Promise.all(googleDocIds.map(async (googleDocId) => {
        const res = await docs.documents.get({
          documentId: googleDocId,
        });

        return { googleDocId, name: res.data.title };
      }));

      const data: Prisma.CoverLetterTemplateCreateManyArgs = {
        data: names.map((x) => ({
          googleDocId: x.googleDocId,
          name: x.name,
          userId,
        })),
        skipDuplicates: true,
      };

      const createMany = await prisma.coverLetterTemplate.createMany(data);

      return createMany.count;
    },
  }));

  builder.mutationField('RemoveCoverLetterTemplate', (t) => t.int({
    args: {
      templateIds: t.arg.stringList({
        required: true,
        description: 'The ids of the cover letter templates to remove',
      }),
    },
    resolve: async (query, args, ctx) => {
      const { templateIds } = args;

      const { userId } = ctx.currentUser;

      if (templateIds.length < 1) throw new GraphQLError('No template ids provided');

      const deleteMany = await prisma.coverLetterTemplate.deleteMany({
        where: {
          id: {
            in: templateIds,
          },
          AND: {
            userId,
          },
        },
      });

      return deleteMany.count;
    },
  }));

  builder.mutationField('UpdateCoverLetterTemplate', (t) => t.int({
    args: {
      Ids: t.arg.stringList({
        required: true,
        description: 'The id of the cover letter templates to update',
      }),
      active: t.arg.boolean({
        required: true,
        description: 'Whether the cover letter template is active',
      }),
    },
    resolve: async (query, args, ctx) => {
      const { Ids, active } = args;

      const { userId } = ctx.currentUser;

      if (Ids.length < 1) throw new GraphQLError('No template id provided');

      const update = await prisma.coverLetterTemplate.updateMany({
        where: {
          id: {
            in: Ids,
          },
          AND: {
            userId,
          },
        },
        data: {
          active,
        },
      });

      return update.count;
    },
  }));
};
