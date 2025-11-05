import {
  APIGatewayEvent,
  APIGatewayEventLambdaAuthorizerContext,
  APIGatewayEventWebsocketRequestContextV2,
  Context,
} from 'aws-lambda';
import { createYoga } from 'graphql-yoga';
import { getSchema, handleRequest } from 'yoga-server';
import { PrismaClient } from 'database';
import { getBuilder } from 'yoga-server/src/builder';
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
} from 'yoga-server/src/models';
import { validRequest } from 'misc-glob';
import AWS from 'aws-sdk';
import { checkToken } from 'serverless-helpers';
import { addAnsweredQuestion } from 'yoga-server/src/models/AnsweredQuestion';
import { BUILD } from 'backend-env';
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection';

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

const invalidBody = {
  statusCode: 400,
  body: JSON.stringify({
    error: 'Invalid body',
  }),
};

type contextType = APIGatewayEventWebsocketRequestContextV2 & {
		authorizer: {
			principalId: string
		}
	}

type eventType = AWSLambda.APIGatewayProxyWebsocketEventV2WithRequestContext<contextType>;

// TODO: this needs to have some validation on it.
export const main = async (event: eventType) => {
  if (event.requestContext.eventType === 'CONNECT') {
    console.log(`New connection from ${event.requestContext.connectionId}`);
    return {
      statusCode: 200,
      body: 'Connected',
    };
  }

  if (!event.body) return invalidBody;
  const body: validRequest = JSON.parse(event.body);

  if (!('accessToken' in body)) return invalidBody;
  if (!('operationName' in body)) return invalidBody;
  if (!('query' in body)) return invalidBody;
  if (!('variables' in body)) return invalidBody;

  const claim = await checkToken(body.accessToken);
  if (!claim) throw new Error('Invalid token');

  console.log(`New message from ${event.requestContext.connectionId}, ${JSON.stringify(event)}`);

  const { operationName, query, variables } = body as validRequest;

  // TODO: pass the sub in the context
  try {
    const yoga = createYoga<{
      event: APIGatewayEvent
    }>({
      // You need to specify the path to your lambda function
      graphqlEndpoint: '/main',
      schema: yogaSchema,
      context: async (request) => ({
        currentUser: {
          userId: claim.sub,
        },
      }),
      plugins: BUILD === 'DEV' ? [] : [useDisableIntrospection()],
    });
    const { connectionId } = event.requestContext;

    const apiGatewayManagementApi = new AWS.ApiGatewayManagementApi({
      apiVersion: '2018-11-29',
      endpoint: `${event.requestContext.domainName}/${event.requestContext.stage}`,
    });

    await apiGatewayManagementApi.postToConnection({
      ConnectionId: connectionId,
      Data: JSON.stringify({
        recieved: true,
      }),
    }).promise();

    const res = await yoga.fetch(
      '/main',
      {
        method: 'POST',
        headers: {
          // ...event.headers,
          Authorization: `Bearer ${body.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operationName,
          query,
          variables,
        }),
      },
    );

    console.log(`Sending response to ${event.requestContext.connectionId}, ${JSON.stringify(res)}`);

    // Send the response as a message back to the websocket connection

    await apiGatewayManagementApi.postToConnection({
      ConnectionId: connectionId,
      Data: JSON.stringify(res),
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    };
  }
};
