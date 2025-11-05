import { google } from 'googleapis';
import { GraphQLError } from 'graphql';
import { googleAuthScopes } from 'misc-glob';
import { VITE_FRONTEND_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../config/environment';
import { getGoogleAuthCode } from './helpers/GetGoogleAuthTokens';
import { builderAdditionParams } from '../types';

export const addGoogleAuthToken = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('GoogleAuthToken', {
    fields: (t) => ({
      id: t.exposeID('id'),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      scope: t.exposeStringList('scope'),
      driveFolderId: t.exposeString('driveFolderId', { nullable: true }),
    }),
  });

  builder.mutationField('CreateGoogleAuthToken', (t) => t.prismaField({
    type: 'GoogleAuthToken',
    args: {
      authCode: t.arg.string({
        required: true,
        description: 'The refresh token from Google',
      }),
      scope: t.arg.stringList({
        required: true,
        description: 'The scopes requested from Google',
      }),
      redirectUri: t.arg.string({
        required: true,
        description: 'The url extension to redirect to after the user has logged in',
      }),
    },
    resolve: async (query, _, args, ctx) => {
      const { authCode, scope, redirectUri } = args;

      const creds = await getGoogleAuthCode(authCode, redirectUri);

      if (!creds.refresh_token) {
        throw new GraphQLError('No refresh token returned from Google');
      }

      const tokenCheck = (await fetch(`https://oauth2.googleapis.com/tokeninfo?access_token=${creds.access_token}`)).json();

      if (!('scope' in tokenCheck) || typeof tokenCheck.scope !== 'string') {
        throw new GraphQLError('No scope returned from Google');
      }

      // check to see if all the scopes in GoogleAuthScopes are included in the scopes

      if (!googleAuthScopes.every((s: string) => scope.includes(s))) {
        throw new GraphQLError('The scopes returned from Google do not match the scopes requested');
      }

      if (!tokenCheck.scope.split(' ').every((s: string) => scope.includes(s))) {
        throw new GraphQLError('The scopes returned from Google do not match the scopes requested');
      }

      const existingToken = await prisma.googleAuthToken.findFirst({
        where: {
          user: {
            id: ctx.currentUser.userId,
          },
        },
      });

      let updatedToken;

      if (existingToken) {
        updatedToken = await prisma.googleAuthToken.update({
          where: {
            userId: ctx.currentUser.userId,
          },
          data: {
            refreshToken: creds.refresh_token,
            accessToken: creds.access_token,
            accessExpiry: new Date(creds.expiry_date || 0),
            scope,
          },
        });
      } else {
        updatedToken = await prisma.googleAuthToken.create({
          ...query,
          data: {
            refreshToken: creds.refresh_token,
            accessToken: creds.access_token,
            accessExpiry: new Date(creds.expiry_date || 0),
            scope,
            user: {
              connect: {
                id: ctx.currentUser.userId,
              },
            },
          },
        });
      }

      return updatedToken;
    },
  }));

  builder.mutationField('UpdateDriveFolderId', (t) => t.prismaField({
    type: 'GoogleAuthToken',
    args: {
      folderId: t.arg.string({
        required: true,
        description: 'The id of the drive folder to be connected to the user',
      }),
    },
    resolve: async (query, _, args, ctx) => {
      const { folderId } = args;

      const updatedToken = await prisma.googleAuthToken.update({
        where: {
          userId: ctx.currentUser.userId,
        },
        data: {
          driveFolderId: folderId,
        },
      });

      return updatedToken;
    },
  }));

  builder.queryField('GetGoogleAuthURL', (t) => t.field({
    type: 'String',
    args: {
      scope: t.arg.stringList({
        required: true,
        description: 'The scopes to be requested from Google',
      }),
      urlRedirect: t.arg.string({
        required: false,
        description: 'The url extension to redirect to after the user has logged in',
      }),
    },
    resolve: async (_, arg) => {
      const { scope, urlRedirect } = arg;
      const oauth2Client = new google.auth.OAuth2({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      });

      const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope,
        redirect_uri: `${VITE_FRONTEND_URL}${urlRedirect || ''}`,
        include_granted_scopes: true,
      });

      return url;
    },
  }));

  builder.queryField('GetGoogleAccessToken', (t) => t.field({
    type: 'String',
    resolve: async (_, __, ctx) => {
      const record = await prisma.googleAuthToken.findFirst({
        where: {
          user: {
            id: ctx.currentUser.userId,
          },
        },
      });
      if (!record) {
        throw new Error('No Google Auth Token found for this user');
      }

      const oauth2Client = new google.auth.OAuth2({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      });

      oauth2Client.setCredentials({
        refresh_token: record.refreshToken,
      });

      const { token } = await oauth2Client.getAccessToken();

      if (!token) {
        throw new Error('Google did not return an access token');
      }

      return token;
    },
  }));
};
