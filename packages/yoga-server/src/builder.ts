import SchemaBuilder from '@pothos/core';
import ErrorsPlugin from '@pothos/plugin-errors';
import PrismaPlugin from '@pothos/plugin-prisma';
import { JSONResolver, DateTimeResolver } from 'graphql-scalars';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { GoogleDocs, GoogleDocsFile, CVExtractedTextType } from 'misc-glob';
import { PrismaClient } from 'database';

export const getBuilder = (prisma: PrismaClient) => {
  const builder = new SchemaBuilder<{
    Scalars: {
      Date: { Input: Date; Output: Date };
      JSON: { Input: any; Output: any };
      GoogleDocs: { Input: GoogleDocs; Output: GoogleDocs }; // todo: maybe we don't need this here?
      GoogleDocsFile: { Input: GoogleDocsFile; Output: GoogleDocsFile };
      CVExtractedTextType: { Input: CVExtractedTextType; Output: CVExtractedTextType };
    };
    PrismaTypes: PrismaTypes;
    Context: {
      currentUser: {
        userId: string;
      }
    };
  }>({
    plugins: [PrismaPlugin, ErrorsPlugin], // PrismaUtils
    errorOptions: {
      defaultTypes: [],
    },
    prisma: {
      client: prisma,
    },
  });

  builder.queryType({
    description: 'Root Query',
  });

  builder.mutationType({
    description: 'Root Mutation',
  });

  builder.objectType(Error, {
    name: 'Error',
    fields: (t) => ({
      message: t.exposeString('message'),
    }),
  });
  builder.addScalarType('Date', DateTimeResolver, {});
  builder.addScalarType('JSON', JSONResolver, {});

  // TODO: these should probably not stay as JSON resolvers
  builder.addScalarType('GoogleDocs', JSONResolver, {});
  builder.addScalarType('GoogleDocsFile', JSONResolver, {});

  builder.addScalarType('CVExtractedTextType', JSONResolver, {});

  return builder;
};
