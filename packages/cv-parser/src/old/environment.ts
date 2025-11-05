import 'dotenv/config';

if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error('GOOGLE_CLIENT_ID is undefined');
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('GOOGLE_CLIENT_SECRET is undefined');
}

export const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

if (!process.env.GOOGLE_REFRESH_TOKEN) {
  throw new Error('GOOGLE_REFRESH_TOKEN is undefined');
}

if (!process.env.TEST_DOC_ID) {
  throw new Error('TEST_DOC_ID is undefined');
}

export const { GOOGLE_REFRESH_TOKEN, TEST_DOC_ID } = process.env;
