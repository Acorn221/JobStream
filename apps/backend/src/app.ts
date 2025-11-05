import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getYoga } from 'yoga-server';
import { stripeWebhookHandler } from 'utils/stripeWebHookHandler';
import { prisma } from 'database';

// TODO: add https://the-guild.dev/graphql/yoga-server/docs/features/introspection before deployment anywhere
export const createServer = () => {
  const app = express();
  app.use(cors());

  const yoga = getYoga(prisma);

  app.use(yoga.graphqlEndpoint, yoga);

  app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    stripeWebhookHandler(req, res);
  });

  app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
  });

  app.get('/health', bodyParser.json(), (req, res) => {
    res.status(200).json({ data: 'Hello' });
  });

  return { app, yoga };
};
