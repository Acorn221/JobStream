// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import type { Storage } from '@plasmohq/storage';
import {
  ApolloClient, InMemoryCache, gql,
} from '@apollo/client';
import { AUTH_CLIENT_ID, AUTH_DOMAIN, GRAPHQL_URL } from '@/misc/environment';
import { apolloCache, eventTypes } from '.';

export const openTab = (link: string) => {
  const tab = window.open(link, '_blank');
  if (tab) tab.focus();
};

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
export const checkAndRefreshAccessToken = async (storage: Storage): Promise<{
  id_token: string,
  access_token: string
}> => {
  const refresh = await storage.get('refresh');

  if (!refresh) {
    throw new Error('No refresh token found');
  }

  if (refresh === '') {
    throw new Error('No refresh token found');
  }

  try {
    const response = await fetch(`${AUTH_DOMAIN}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: AUTH_CLIENT_ID,
        refresh_token: refresh,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }

    const data: CognitoTokensRes = await response.json();

    if ('error' in data) {
      await storage.remove('refresh');
      await storage.remove('access');
      await storage.remove('idToken');

      throw new Error('Token refresh failed, refresh invalid');
    }

    await storage.setItem('access', data.access_token);
    await storage.setItem('idToken', data.id_token);

    return { id_token: data.id_token, access_token: data.access_token };
  } catch (error) {
    console.error('Error refreshing tokens:', error);
    throw error;
  }
};

export const getApolloClient = async (storage: Storage) => new ApolloClient({
  uri: GRAPHQL_URL,
  cache: apolloCache,
  headers: {
    Authorization: `Bearer ${(await checkAndRefreshAccessToken(storage)).id_token}`,
  },
});
