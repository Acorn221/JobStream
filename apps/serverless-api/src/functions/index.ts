import type { AWS } from '@serverless/typescript';
import { COGNITO_ARN, VITE_FRONTEND_URL } from 'backend-env';
import schema from './api-gateway/main/schema';

// TODO: work out the best memory size for each function
export const functions: AWS['functions'] = {
  main: {
    handler: 'src/functions/api-gateway/main/handler.main',
    description: 'The main GraphQL endpoint for most of the API',
    memorySize: 256,
    events: [
      {
        http: {
          method: 'post',
          path: 'main',
          cors: { // allowing anything from localhost or j4a.uk
            origins: [VITE_FRONTEND_URL],
            headers: ['*'],
            methods: ['OPTIONS', 'POST'],
          },
          request: {
            schemas: {
              'application/json': schema,
            },
          },
          authorizer: {
            arn: COGNITO_ARN,
          },
        },
      },
    ],
  },
  cognitoSignUp: {
    handler: 'src/functions/cognito/signUpPostConfirmation/handler.main',
    description: 'The script that runs when a user signs up via Cognito',
    memorySize: 256,
    events: [
      {
        cognitoUserPool: {
          pool: 'Jobstream-dev',
          trigger: 'PostConfirmation',
          existing: true,
        },
      },
    ],
  },
  stripeWebook: {
    handler: 'src/functions/stripe/webhookHandler/handler.main',
    description: 'The webhook handler for stripe, when a user pays for credits',
    memorySize: 256,
    events: [
      {
        http: {
          method: 'post',
          path: 'stripe',
          cors: true,
          request: {
            parameters: {
              headers: {
                'Stripe-Signature': true,
              },
            },
          },
        },
      },
    ],
  },
  cognitoAuthorizer: {
    handler: 'src/functions/cognito/authorizer/handler.main',
    description: 'The authorizer for Cognito, made for the websocket graphql lambda',
    memorySize: 128,
  },
  websocketGraphql: {
    handler: 'src/functions/websocket/graphql/handler.main',
    description: 'The websocket handler for the graphql subscription server',
    memorySize: 512,
    timeout: 240,
    events: [
      {
        websocket: {
          route: '$connect', // * Authentication is done in the $default route, as headers are hard to pass in the connect route
        },
      },
      {
        websocket: {
          route: '$default',
        },
      },
    ],
  },
};
