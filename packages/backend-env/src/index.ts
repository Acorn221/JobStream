import 'dotenv/config';

/**
 * Backend Environment Variables
 */
const requiredEnvVars = [
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'MAX_CV_CONTENT_LENGTH',
  'MIN_EXPERIENCES_FOR_SUITABILITY',
  'SUITABILITY_EXPERIENCES_COUNT',
  'DATABASE_URL',
  'DIRECT_URL',
  'AZURE_OPENAI_KEY',
  'AZURE_OPENAI_ENDPOINT',
  'STRIPE_SECRET_KEY',
  'VITE_STRIPE_PUBLIC_KEY',
  'VITE_FRONTEND_URL',
  'STRIPE_WEBHOOK_SECRET',
  'COGNITO_ARN',
  'VITE_AUTH_USER_POOL_ID',
  'VITE_AUTH_REGION',
  'VITE_AUTH_CLIENT_ID',
  'VITE_AUTH_DOMAIN',
  'BUILD',
];

const requiredDevEnvVars = [
  'API_PORT', // to depreciate soon
  'TEST_HEADERS',
];

const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length) {
  throw new Error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
}

const missingDevEnvVars = requiredDevEnvVars.filter((envVar) => !process.env[envVar]);

if (missingDevEnvVars.length) {
  console.warn(`Missing development environment variables: ${missingDevEnvVars.join(', ')}`);
}

export const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  MAX_CV_CONTENT_LENGTH,
  MIN_EXPERIENCES_FOR_SUITABILITY,
  SUITABILITY_EXPERIENCES_COUNT,
  DATABASE_URL,
  DIRECT_URL,
  AZURE_OPENAI_KEY,
  AZURE_OPENAI_ENDPOINT,
  STRIPE_SECRET_KEY,
  VITE_STRIPE_PUBLIC_KEY,
  VITE_FRONTEND_URL,
  STRIPE_WEBHOOK_SECRET,
  COGNITO_ARN,
  VITE_AUTH_USER_POOL_ID,
  VITE_AUTH_REGION,
  VITE_AUTH_CLIENT_ID,
  VITE_AUTH_DOMAIN,
  BUILD,
} = process.env as Record<string, string>;

export const API_PORT = process.env.API_PORT || 4000;
export const TEST_HEADERS = process.env.TEST_HEADERS || '';
