/* eslint-disable import/no-import-module-exports */
import type { AWS, AwsLambdaEnvironment } from '@serverless/typescript';
import { functions } from '@functions/index';
import { BuildOptions } from 'esbuild';
import {
  DIRECT_URL,
  DATABASE_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  MAX_CV_CONTENT_LENGTH,
  MIN_EXPERIENCES_FOR_SUITABILITY,
  SUITABILITY_EXPERIENCES_COUNT,
  AZURE_OPENAI_KEY,
  AZURE_OPENAI_ENDPOINT,
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET,
  VITE_STRIPE_PUBLIC_KEY,
  VITE_FRONTEND_URL,
  COGNITO_ARN,
  VITE_AUTH_REGION,
  VITE_AUTH_CLIENT_ID,
  VITE_AUTH_DOMAIN,
  VITE_AUTH_USER_POOL_ID,
  BUILD,
} from 'backend-env';

const serverlessConfiguration: AWS = {
  service: 'Jobstream',
  frameworkVersion: '3.35.2',
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
    'serverless-dotenv-plugin',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    stage: 'dev',
    region: VITE_AUTH_REGION as AWS['provider']['region'],
    httpApi: {
      authorizers: {
        customAuthorizer: {
          type: 'request',
          functionName: 'cognitoAuthorizer',
        },
      },
    },
    environment: {
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      DATABASE_URL,
      DIRECT_URL,
      MAX_CV_CONTENT_LENGTH,
      MIN_EXPERIENCES_FOR_SUITABILITY,
      SUITABILITY_EXPERIENCES_COUNT,
      AZURE_OPENAI_KEY,
      AZURE_OPENAI_ENDPOINT,
      STRIPE_SECRET_KEY,
      VITE_STRIPE_PUBLIC_KEY,
      VITE_FRONTEND_URL,
      STRIPE_WEBHOOK_SECRET,
      COGNITO_ARN,
      VITE_AUTH_REGION,
      VITE_AUTH_CLIENT_ID,
      VITE_AUTH_DOMAIN,
      VITE_AUTH_USER_POOL_ID,
      BUILD,
    },
    deploymentMethod: 'direct',
  },
  functions,
  package: {
    individually: true,
    include: [
      '../../packages/database/node_modules/.prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node',
      '../../packages/database/node_modules/.prisma/client/schema.prisma',
    ],

    // include: [
    //   'handler.js',
    //   'node_modules/**',
    //   'packages/database/prisma/schema.prisma',
    //   'packages/database/node_modules/.prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node',
    // ],
    // exclude: [
    //   './**',
    // ],
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: false,
      exclude: [],
      target: 'node18',
      define: {
        'require.resolve': undefined as unknown as string,
      },
      platform: 'node',
      concurrency: 10,
      plugins: './scripts/esbuild.plugins.js' as any, // this is valid to give it a path to a file
    } satisfies BuildOptions & {exclude: string[], concurrency: number},
    'serverless-offline': {
      httpPort: 4000,
      lambdaPort: 4002,
    },
    dotenv: {
      path: '../../',
    },
  },
};

module.exports = serverlessConfiguration;
