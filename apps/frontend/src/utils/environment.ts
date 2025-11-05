if (import.meta.env.VITE_GRAPHQL_URL === undefined) { throw new Error('VITE_GRAPHQL_URL is undefined, define it in .env file'); }

export const BACKEND_GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) { throw new Error('VITE_GOOGLE_CLIENT_ID is undefined, define it in .env file'); }

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!import.meta.env.VITE_GOOGLE_PICKER_API_KEY) { throw new Error('VITE_GOOGLE_PICKER_API_KEY is undefined, define it in .env file'); }

export const GOOGLE_PICKER_API_KEY = import.meta.env.VITE_GOOGLE_PICKER_API_KEY;

if (!import.meta.env.VITE_NODE_ENV) {
  throw new Error('NODE_ENV is undefined, define it in .env file');
}

export const NODE_ENV = import.meta.env.VITE_NODE_ENV;

if (!import.meta.env.VITE_GOOGLE_APP_ID) {
  throw new Error('VITE_GOOGLE_APP_ID is undefined, define it in .env file');
}

export const GOOGLE_APP_ID = import.meta.env.VITE_GOOGLE_APP_ID;
