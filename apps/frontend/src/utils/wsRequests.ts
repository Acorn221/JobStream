/* eslint-disable no-async-promise-executor */
/* eslint-disable camelcase */
import { CreateGeneratedCoverLetterDocument, CreateGeneratedCvDocument, namedOperations } from 'graphql-generated-code';
import { AccessToken, validRequest, validResponse } from 'misc-glob';
import jwt_decode from 'jwt-decode';
import { refreshTokens } from '@/Auth/isTokenValid';

if (!import.meta.env.VITE_WS_URL) {
  throw new Error('VITE_WS_URL is not defined');
}

// creating a valid request type without the accessToken
type validRequestNoToken = Omit<validRequest, 'accessToken'>;

export const websocketRequest = (
  data: validRequestNoToken,
  accessToken: string,
) => new Promise(async (resolve, reject) => {
  let validAccess = accessToken;
  const decodedAccess = jwt_decode<AccessToken>(accessToken);

  const expDate = decodedAccess.exp;
  const timeNow = new Date().getTime() / 1000;

  if (timeNow > expDate) {
    // refresh the tokens
    const tokens = await refreshTokens();

    validAccess = tokens.accessToken;
  }

  const websocket = new WebSocket(import.meta.env.VITE_WS_URL);

  websocket.onopen = () => {
    websocket.send(JSON.stringify({
      ...data,
      accessToken: validAccess,
    }));
  };

  websocket.onmessage = (event) => {
    const rawRes = JSON.parse(event.data);

    if ('message' in rawRes) {
      if (rawRes.message === 'Internal Sever Error') {
        reject(rawRes.message);
        websocket.close();
        return;
      } if (rawRes.message === 'Endpoint request timed out') {
        return;
      }
    }

    const res = rawRes as validResponse;

    if ('recieved' in res) {
      return;
    }

    if (res.errors) {
      reject(res.errors);
      websocket.close();
      return;
    }
    resolve(res.data);
    websocket.close();
  };
});

export const generateCoverLetter = (jobId: string, authToken: string) => {
  const data = {
    operationName: 'CreateGeneratedCoverLetter',
    query: CreateGeneratedCoverLetterDocument.loc?.source.body as string,
    variables: {
      jobId,
    },
  };

  return websocketRequest(data, authToken);
};

export const generateCV = (jobId: string, authToken: string) => {
  const data = {
    operationName: 'CreateGeneratedCV',
    query: CreateGeneratedCvDocument.loc?.source.body as string,
    variables: {
      jobId,
    },
  };

  return websocketRequest(data, authToken);
};
