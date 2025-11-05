import type { ValidatedAPIGatewayProxyEvent } from 'serverless-helpers';
import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { createYoga } from 'graphql-yoga';
import { getSchema, handleRequest } from 'yoga-server';
import { PrismaClient } from 'database';
import { getBuilder } from 'yoga-server/src/builder';
import { BUILD } from 'backend-env';
import {
  addCV,
  addCoverLetterTemplate,
  addCredits, addExperience,
  addGeneratedCoverLetter,
  addGeneratedCv,
  addGoogleAuthToken,
  addJob,
  addStripeCustomer,
  addUser,
  addAnsweredQuestion,
} from 'yoga-server/src/models';
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection';

import schema from './schema';

// TODO check if we need the middleware middyfy

const prisma = new PrismaClient();

const builder = getBuilder(prisma);

addCoverLetterTemplate({ builder, prisma });
addCredits({ builder, prisma });
addCV({ builder, prisma });
addExperience({ builder, prisma });
addGeneratedCoverLetter({ builder, prisma });
addGeneratedCv({ builder, prisma });
addGoogleAuthToken({ builder, prisma });
addJob({ builder, prisma });
addUser({ builder, prisma });
addStripeCustomer({ builder, prisma });
addAnsweredQuestion({ builder, prisma });

const yogaSchema = getSchema(builder);

const yoga = createYoga<{
  event: APIGatewayEvent
  lambdaContext: Context
}>({
  // You need to specify the path to your lambda function
  graphqlEndpoint: '/main',
  schema: yogaSchema,
  context: async ({ request }) => ({
    // Adding this will prevent any issues if you server implementation
    // copies or extends the context object before passing it to your resolvers
    ...handleRequest(request),
  }),
  plugins: BUILD === 'DEV' ? [] : [useDisableIntrospection()],
});

const handler = async (
  event: ValidatedAPIGatewayProxyEvent<typeof schema>,
  lambdaContext: Context,
): Promise<APIGatewayProxyResult> => {
  const response = await yoga.fetch(
    `${event.path
    }?${// @ts-ignore this is fine
      new URLSearchParams((event.queryStringParameters as Record<string, string>) || {}).toString()}`,
    {
      method: event.httpMethod,
      headers: event.headers as HeadersInit,
      body: event.body
        ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8')
        : undefined,
    },
    {
      event,
      lambdaContext,
    },
  );

  const responseHeaders = Object.fromEntries(response.headers.entries());

  return {
    statusCode: response.status,
    headers: responseHeaders,
    body: await response.text(),
    isBase64Encoded: false,
  };
};

export const main = handler;
