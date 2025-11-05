import type { PlasmoMessaging } from '@plasmohq/messaging';
import { Storage } from '@plasmohq/storage';
import {
  namedOperations, type GetXJobsQuery, GetXJobsDocument,
} from 'graphql-generated-code';
import { getApolloClient } from '@/background/utils';
import { answerQuestion } from '@/misc/wsRequests';
import { AnalyticsEvent } from '../GA';

type ExtractTypeIfPropertyExists<T, P extends string> =
  T extends { [K in P]?: infer R } ? R : never

type ExtractedDataType = ExtractTypeIfPropertyExists<GetXJobsQuery['user'], 'data'>

export type Job = ExtractTypeIfPropertyExists<ExtractedDataType, 'job'> extends Array<infer R> ? R : never;

export type AnswerQuestionRequest = {
  jobId?: string;
	question: string;
};

export type AnswerQuestionResponse = {
  payload: {
    answer: string;
  };
  status: 'SUCCESS';
} | {
  status: 'FAILURE';
  payload: {
    error: string;
  };
};

/**
 * Takes in the new job description and sends it off to process
 */
const handler: PlasmoMessaging.MessageHandler<
AnswerQuestionRequest,
AnswerQuestionResponse
> = async (req, res) => {
  const { jobId, question } = req.body;

  AnalyticsEvent([
    {
      name: 'Question_Answered',
      params: {
        question_length: question.length,
      },
    },
  ]);

  try {
    const answer = await answerQuestion(jobId, question);

    res.send({
      status: 'SUCCESS',
      payload: {
        answer,
      },
    }); // Send the mutation response
  } catch (error) {
    res.send({
      status: 'FAILURE',
      payload: {
        error: error.message,
      },
    }); // Send an error response
  }
};

export default handler;
