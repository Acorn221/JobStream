import type { PlasmoMessaging } from '@plasmohq/messaging';
import { Storage } from '@plasmohq/storage';
import {
  namedOperations, type GetXJobsQuery, GetXJobsDocument,
} from 'graphql-generated-code';
import { getApolloClient } from '@/background/utils';

type ExtractTypeIfPropertyExists<T, P extends string> =
  T extends { [K in P]?: infer R } ? R : never

type ExtractedDataType = ExtractTypeIfPropertyExists<GetXJobsQuery['user'], 'data'>

export type Job = ExtractTypeIfPropertyExists<ExtractedDataType, 'job'> extends Array<infer R> ? R : never;

export type GetJobsRequest = {
  take?: number;
  newestFirst?: boolean;
};

export type GetJobsResponse = {
  payload: {
    jobs: Job[];
  };
  status: 'SUCCESS';
} | {
  status: 'FAILURE';
  payload: {
    error: string;
  };
};

const handler: PlasmoMessaging.MessageHandler<
  GetJobsRequest,
  GetJobsResponse
> = async (req, res) => {
  const storage = new Storage({
    area: 'sync',
  });

  const { take, newestFirst } = req.body;

  const queryArgs = { // Specify the response type
    query: GetXJobsDocument,
    variables: {
      take: take || 10,
      newestFirst: newestFirst !== false,
    },

  };

  try {
    // Set up Apollo Client
    const client = await getApolloClient(storage);

    // refreshing cache as getJob is likely to be called after a job is created
    await client.refetchQueries({
      include: [
        namedOperations.Query.GetXJobs,
      ],
    });

    // Execute the mutation
    const { data } = await client.query<
    GetXJobsQuery
    >(queryArgs);

    console.log('Query response:', data);

    if (data.user.__typename === 'Error') {
      throw new Error(`Error, data.user.__typename: ${data.user.__typename}`);
    }

    const jobs = data.user.data.job;

    res.send({
      status: 'SUCCESS',
      payload: {
        jobs,
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
