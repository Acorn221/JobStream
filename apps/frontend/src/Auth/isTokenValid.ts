// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { AccessToken, IDToken } from 'misc-glob';
import { tokenType } from '@/App';

export type CognitoTokensRes = {
  access_token: string,
  expires_in: number,
  id_token: string,
  refresh_token: string,
  token_type: string,
} | {
  error: string,
};

// TODO: test this function
export const refreshTokens = async (): Promise<{ accessToken: string, id: string }> => {
  const refresh = localStorage.getItem('refresh');

  if (!refresh) {
    throw new Error('No refresh token found');
  }

  if (refresh === '') {
    throw new Error('No refresh token found');
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_AUTH_DOMAIN}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
        refresh_token: refresh,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }

    const data: CognitoTokensRes = await response.json();

    if ('error' in data) {
      localStorage.removeItem('refresh');
      localStorage.removeItem('access');
      localStorage.removeItem('idToken');

      throw new Error('Token refresh failed, refresh invalid');
    }

    localStorage.setItem('access', data.access_token);
    localStorage.setItem('idToken', data.id_token);

    return {
      accessToken: data.access_token,
      id: data.id_token,
    };
  } catch (error) {
    console.error('Error refreshing tokens:', error);
    throw error;
  }
};

export const createAuthContext = async (): Promise<tokenType> => {
  const refresh = localStorage.getItem('refresh');
  const access = localStorage.getItem('access');
  const idToken = localStorage.getItem('idToken');

  try {
    if (!refresh) throw new Error('No refresh token found');
    if (refresh === '') throw new Error('No refresh token found');
    if (!access) throw new Error('No access token found');
    if (access === '') throw new Error('No access token found');
    if (!idToken) throw new Error('No id token found');
    if (idToken === '') throw new Error('No id token found');

    let decodedAccess = jwt_decode<AccessToken>(access);
    let decodedId = jwt_decode<IDToken>(idToken);

    const expDate = decodedAccess.exp;
    const timeNow = new Date().getTime() / 1000;

    if (timeNow > expDate) {
      // refresh the tokens
      const { id, accessToken } = await refreshTokens();

      decodedAccess = jwt_decode<AccessToken>(accessToken);
      decodedId = jwt_decode<IDToken>(id);
    }

    return {
      access: decodedAccess,
      accessRaw: access,
      id: decodedId,
      refresh,
    };
  } catch (e) {
    console.error(`Error creating auth context: ${e}`);
    return null;
  }
};
