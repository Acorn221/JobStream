/* eslint-disable camelcase */
import { Prisma, CV } from 'database';
import { GraphQLError } from 'graphql';
import { google } from 'googleapis';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, MAX_CV_CONTENT_LENGTH } from '../config/environment';
import { GetHighlightedElements } from './helpers/GetHighlightedElements';
import { getOauthClient } from './helpers/GetGoogleAuthTokens';
import { builderAdditionParams } from '../types';

export const addCV = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('CV', {
    fields: (t) => ({
      id: t.exposeID('id'),
      name: t.exposeString('name', {
        nullable: true,
        description: 'The user assigned name of the CV',
      }),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      CvContent: t.expose('CV_Content', { // Use 'CvContent' instead of 'CV_Content'
        type: 'JSON',
        description: 'The JSON content of the CV from google docs',
      }),
      googleDocId: t.exposeString('googleDocId'),
      googleDocLink: t.exposeString('googleDocLink'),
      isDefault: t.exposeBoolean('isDefault'),
    }),
  });

  builder.mutationField('CreateCV', (t) => t.int({
    args: {
      googleDocIds: t.arg.stringList({
        required: true,
        description: 'The google doc id of the CV',
      }),
    },
    resolve: async (query, args, ctx) => {
      const { googleDocIds } = args;

      if (googleDocIds.length < 1) throw new GraphQLError('No google doc ids provided');

      const existingCVs = await prisma.cV.findMany({
        where: {
          userId: ctx.currentUser.userId,
        },
        select: {
          isDefault: true,
        },
      });

      const hasDefaultAlready = existingCVs.some((cv) => cv.isDefault);

      const oauth2Client = await getOauthClient(ctx.currentUser.userId, prisma);

      const docs = google.docs({
        version: 'v1',
        auth: oauth2Client,
      });
      const responses = await Promise.all(googleDocIds.map((id) => docs.documents.get({
        documentId: id,
      })));

      const CVs: Prisma.CVCreateManyArgs['data'] = responses.filter((res) => (res.data.title && res.data.documentId))
        .map((res) => {
          const stringified = JSON.stringify(res.data);
          if (stringified.length > parseInt(MAX_CV_CONTENT_LENGTH, 10)) throw new GraphQLError('CV content too large');

          const CV_Content = JSON.parse(stringified);
          return {
            name: res.data.title || 'Untitled CV',
            googleDocId: res.data.documentId || '',
            CV_Content,
            googleDocLink: `https://docs.google.com/document/d/${res.data.documentId}/edit`,
            userId: ctx.currentUser.userId,
            isDefault: !hasDefaultAlready && googleDocIds.length === 1,
          };
        });

      const createdCVs = await prisma.cV.createMany({
        data: CVs,
      });

      return createdCVs.count;
    },
  }));

  builder.mutationField('UpdateCV', (t) => t.field({
    type: 'Boolean',
    args: {
      id: t.arg.string({
        required: true,
        description: 'The id of the CV to update',
      }),
      refreshGoogleDoc: t.arg.boolean({
        required: false,
        description: 'Whether to refresh the CV content from google docs',
      }),
      setDefault: t.arg.boolean({
        required: false,
        description: 'Whether to set the CV as the default CV',
      }),
    },
    resolve: async (_, args, ctx) => {
      const { id, setDefault, refreshGoogleDoc } = args;
      let updatedCV = null;
      if (refreshGoogleDoc) {
        const oauth2Client = await getOauthClient(ctx.currentUser.userId, prisma);

        const docs = google.docs({
          version: 'v1',
          auth: oauth2Client,
        });

        const docID = await prisma.cV.findUnique({
          where: {
            id,
            AND: {
              userId: ctx.currentUser.userId,
            },
          },
          select: {
            googleDocId: true,
          },
        });

        if (!docID) throw new GraphQLError('CV not found');

        const response = await docs.documents.get({
          documentId: docID.googleDocId,
        });

        const stringified = JSON.stringify(response.data);
        if (stringified.length > parseInt(MAX_CV_CONTENT_LENGTH, 10)) throw new GraphQLError('CV content too large');

        const CV_Content = JSON.parse(stringified);

        updatedCV = await prisma.cV.update({
          where: {
            id,
            AND: {
              userId: ctx.currentUser.userId,
            },
          },
          data: {
            name: response.data.title || 'Untitled CV',
            CV_Content,
          },
        });
      }

      if (setDefault) {
        await prisma.cV.updateMany({
          where: {
            userId: ctx.currentUser.userId,
          },
          data: {
            isDefault: false,
          },
        });
        updatedCV = await prisma.cV.update({
          where: {
            id,
            AND: {
              userId: ctx.currentUser.userId,
            },
          },
          data: {
            isDefault: true,
          },
        });
      }
      if (updatedCV === null) {
        throw new GraphQLError('No update parameters provided');
      }
      return true;
    },
  }));

  builder.mutationField('DeleteCV', (t) => t.field({
    type: 'Boolean',
    args: {
      id: t.arg.string({
        required: true,
        description: 'The id of the CV to delete',
      }),
    },
    resolve: async (_, args, ctx) => {
      const { id } = args;

      // You can perform any necessary validation or manipulation of the input here.

      await prisma.cV.delete({
        where: {
          id,
          AND: {
            userId: ctx.currentUser.userId,
          },
        },
      });

      return true;
    },
  }));

  // this query allows the user to see the extracted (highlighted) text from the CV
  // so they can see what can be changed and what can't
  class CVExtractedText {
    text: string[];

    constructor(text: string[]) {
      this.text = text;
    }
  }

  builder.objectType(CVExtractedText, {
    name: 'CVExtractedText',
    description: 'The extracted text from the CV',
    fields: (t) => ({
      extracted: t.field({
        description: 'The extracted text from the CV',
        type: ['String'],
        resolve: () => [],
      }),
      id: t.field({
        description: 'The id of the CV',
        type: 'String',
        resolve: () => '',
      }),
      googleDocId: t.field({
        description: 'The google doc id of the CV',
        type: 'String',
        resolve: () => '',
      }),
    }),
  });

  builder.queryField('GetCVExtractedText', (t) => t.field({
    type: 'CVExtractedTextType',
    args: {
      id: t.arg.string({
        required: true,
        description: 'The id of the CV to get the extracted text from',
      }),
    },
    resolve: async (query, args, ctx) => {
      const { id } = args;

      const cvRes = await prisma.cV.findUnique({
        ...query,
        where: {
          id,
          AND: {
            userId: ctx.currentUser.userId,
          },
        },
      });

      if (!cvRes) throw new GraphQLError('CV not found');

      const extracted = await GetHighlightedElements(cvRes.CV_Content);

      return {
        extracted,
        id: cvRes.id,
        googleDocId: cvRes.googleDocId,
      };
    },
  }));
};
