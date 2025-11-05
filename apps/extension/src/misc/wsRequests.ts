/* eslint-disable no-async-promise-executor */
import {
  AnswerQuestionDocument,
  CreateGeneratedCoverLetterDocument,
  namedOperations,
  type AnswerQuestionMutationResult,
  type CreateGeneratedCoverLetterMutationResult,
} from 'graphql-generated-code';
import type { validRequest, validResponse } from 'misc-glob';
import { Storage } from '@plasmohq/storage';
import { WS_URL } from './environment';
import { checkAndRefreshAccessToken } from '@/background/utils';

// creating a valid request type without the accessToken
type validRequestNoToken = Omit<validRequest, 'accessToken'>;

export const websocketRequest = (
  data: validRequestNoToken,
): Promise<any> => new Promise(async (resolve, reject) => {
  const storage = new Storage({
    area: 'sync',
  });

  const accessToken = (await checkAndRefreshAccessToken(storage)).access_token;

  const websocket = new WebSocket(WS_URL);

  websocket.onopen = () => {
    websocket.send(JSON.stringify({
      ...data,
      accessToken,
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

    if ('recieved' in rawRes) {
      return;
    }

    console.log('rawRes', rawRes);

    if ('bodyInit' in rawRes) {
      const body = JSON.parse(rawRes.bodyInit);

      if (body.errors) {
        reject(body.errors);
        websocket.close();
        return;
      }
      resolve(body.data);
      websocket.close();
    }
  };
});

export const generateCoverLetter = async (jobId: string) => {
  const data = {
    operationName: 'CreateGeneratedCoverLetter',
    query: CreateGeneratedCoverLetterDocument.loc?.source.body as string,
    variables: {
      jobId,
    },
  };

  return websocketRequest(data) as unknown as Promise<CreateGeneratedCoverLetterMutationResult['data']>;
};

export const answerQuestion = async (jobId: string, question: string) => {
  const data = {
    operationName: namedOperations.Mutation.AnswerQuestion,
    query: AnswerQuestionDocument.loc?.source.body as string,
    variables: {
      jobId,
      question,
    },
  };

  const res = await websocketRequest(data) as any;

  console.log(res);

  return res.AnswerQuestion;
};
