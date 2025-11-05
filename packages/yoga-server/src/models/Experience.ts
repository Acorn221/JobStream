import { GraphQLError } from 'graphql';
import { setExperienceEmbedding } from './helpers/Embeddings';
import { builderAdditionParams } from '../types';

export const addExperience = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('Experience', {
    fields: (t) => ({
      id: t.exposeID('id'),
      name: t.exposeString('name', {
        nullable: true,
        description: 'The user assigned name of the experience',
      }),
      content: t.exposeString('content', {
        nullable: false,
        description: 'The experience description, eg. "I worked on this project for 2 years and did this and that"',
      }),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
    }),
  });

  builder.prismaObject('ExperiencesUsed', {
    fields: (t) => ({
      id: t.exposeID('id'),
      user: t.relation('user'),
      experience: t.relation('Experience'),
      generatedCv: t.relation('GeneratedCv'),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
    }),
  });

  type CreateExperienceArgs = {
    id?: string;
    name?: string;
    content: string;
  };

  builder.mutationField('CreateExperience', (t) => t.field({
    type: 'Boolean',
    args: {
      name: t.arg.string({
        required: false,
        description: 'The user assigned name of the experience',
      }),
      content: t.arg.string({
        required: true,
        description: 'The experience description, eg. "I worked on this project for 2 years and did this and that"',
      }),
    },
    resolve: async (_, args, ctx) => {
      const { name, content } = args;

      const createdExperience = await prisma.experience.create({
        data: {
          name,
          content,
          user: {
            connect: {
              id: ctx.currentUser.userId,
            },
          },
        },
      });

      await setExperienceEmbedding(createdExperience, prisma);

      return true;
    },
  }));

  builder.mutationField('UpdateExperience', (t) => t.field({
    type: 'Boolean',
    args: {
      id: t.arg.string({
        required: true,
        description: 'The id of the experience to update',
      }),
      name: t.arg.string({
        required: false,
        description: 'The user assigned name of the experience',
      }),
      content: t.arg.string({
        required: false,
        description: 'The experience description, eg. "I worked on this project for 2 years and did this and that"',
      }),
    },
    resolve: async (_, args, ctx) => {
      const { id, name, content } = args;

      const updatedExperience = await prisma.experience.update({
        where: {
          id,
          AND: {
            userId: ctx.currentUser.userId,
          },
        },
        data: {
          name,
          content: content || undefined,
        },
      });

      await setExperienceEmbedding(updatedExperience, prisma);

      return true;
    },
  }));

  builder.mutationField('DeleteExperience', (t) => t.field({
    type: 'Boolean',
    args: {
      id: t.arg.string({
        required: false,
        description: 'The id of the experience to delete',
      }),
      ids: t.arg.stringList({
        required: false,
        description: 'A list of ids of experiences to delete',
      }),
    },
    resolve: async (_, args, ctx) => {
      if (args.ids) {
        const deletedExperiences = await prisma.experience.deleteMany({
          where: {
            id: {
              in: args.ids,
            },
          },
        });
        return true;
      } if (args.id) {
        const deletedExperience = await prisma.experience.delete({
          where: {
            id: args.id,
            AND: {
              userId: ctx.currentUser.userId,
            },
          },
        });
        return true;
      }
      if (!args.id && !args.ids) throw new GraphQLError('No id or ids provided');
      return false;
    },
  }));
};
