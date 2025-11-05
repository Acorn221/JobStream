import { google } from 'googleapis';
import { GraphQLError } from 'graphql';
import { PrismaClient } from 'database';
import { VITE_FRONTEND_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../../config/environment';

/**
 * https://developers.google.com/identity/protocols/oauth2/web-server#httprest_1
 * TODO: make this take in a redirect path
 */
export const getGoogleAuthCode = async (authCode: string, redirectUri: string) => {
  const oauth2Client = new google.auth.OAuth2({
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
  });

  try {
    const { tokens } = await oauth2Client.getToken({
      code: authCode,
      redirect_uri: `${redirectUri}`,
    });
    return tokens;
  } catch (e) {
    throw new GraphQLError(`Error getting google auth code: ${e}`);
  }
};

export const getOauthClient = async (userId: string, prisma: PrismaClient) => {
  const oauth2Client = new google.auth.OAuth2({
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
  });

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      GoogleAuthToken: true,
    },
  });

  if (!user) {
    throw new GraphQLError('User not found');
  }

  if (!user.GoogleAuthToken) {
    throw new GraphQLError('User does not have a google token');
  }

  const { refreshToken, accessExpiry } = user.GoogleAuthToken;

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  if (accessExpiry && accessExpiry > new Date()) {
    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken) {
      throw new GraphQLError('Error getting access token');
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        GoogleAuthToken: {
          update: {
            accessToken: accessToken.token,
            // the access token is valid until 1 hour from now
            accessExpiry: new Date(new Date().getTime() + 1000 * 60 * 59),
          },
        },
      },
    });
  }

  return oauth2Client;
};
