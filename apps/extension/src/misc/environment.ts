if (!process.env.PLASMO_PUBLIC_FRONTEND_URL) { throw new Error('PLASMO_PUBLIC_FRONTEND_URL is undefined, define it in .env file'); }

export const FRONTEND_URL = process.env.PLASMO_PUBLIC_FRONTEND_URL;

export const ENV = process.env.NODE_ENV;

if (!process.env.PLASMO_PUBLIC_GRAPHQL_URL) throw new Error('PLASMO_PUBLIC_GRAPHQL_URL is undefined, define it in .env file');

export const GRAPHQL_URL = process.env.PLASMO_PUBLIC_GRAPHQL_URL;

if (!process.env.PLASMO_PUBLIC_AUTH_DOMAIN) throw new Error('PLASMO_PUBLIC_AUTH_DOMAIN is undefined, define it in .env file');

export const AUTH_DOMAIN = process.env.PLASMO_PUBLIC_AUTH_DOMAIN;

if (!process.env.PLASMO_PUBLIC_AUTH_CLIENT_ID) throw new Error('PLASMO_PUBLIC_AUTH_CLIENT_ID is undefined, define it in .env file');

export const AUTH_CLIENT_ID = process.env.PLASMO_PUBLIC_AUTH_CLIENT_ID;

if (!process.env.PLASMO_PUBLIC_WS_URL) throw new Error('PLASMO_PUBLIC_WS_URL is undefined, define it in .env file');

export const WS_URL = process.env.PLASMO_PUBLIC_WS_URL;
