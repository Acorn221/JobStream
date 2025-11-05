import { createYoga } from 'graphql-yoga';
import express from 'express';
import cors from 'cors';
import { initContextCache } from '@pothos/core';
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection';
import { PrismaClient } from 'database';
import { handleRequest } from './utils/jtw';
import { TEST_HEADERS } from './config/environment';
import { getBuilder } from './builder';
import { getSchema } from './schema';
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
} from './models';
import { addAnsweredQuestion } from './models/AnsweredQuestion';

// TODO: add https://the-guild.dev/graphql/yoga-server/docs/features/introspection before deployment anywhere
export const getYoga = (prisma: PrismaClient) => {
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

  const schema = getSchema(builder);
  const yoga = createYoga({
    schema,
    context: async ({ request }) => ({
      // Adding this will prevent any issues if you server implementation
      // copies or extends the context object before passing it to your resolvers
      ...initContextCache(),
      ...handleRequest(request),
    }),
    graphiql: {
      headers: TEST_HEADERS,
    },
    plugins: [useDisableIntrospection({
      isDisabled: () => process.env.NODE_ENV === 'production',
    })],

  });

  return yoga;
};
