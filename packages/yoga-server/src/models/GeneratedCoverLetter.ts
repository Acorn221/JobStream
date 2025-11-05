import { AvailableModels } from 'misc-glob';
import { builderAdditionParams } from '../types';
import { createGeneratedCoverLetter } from './helpers/GeneratedCoverLetterHelper';

export const addGeneratedCoverLetter = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('GeneratedCoverLetter', {
    fields: (t) => ({
      id: t.exposeID('id'),
      name: t.exposeString('name', {
        nullable: true,
        description: 'The user assigned name of the cover letter',
      }),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
      user: t.relation('user'),
      job: t.relation('job'),
      content: t.exposeStringList('content'),
      googleDocId: t.exposeString('googleDocId'),
      coverLetterTemplate: t.relation('template', { nullable: true }), // this should be nullable, so the user can delete the template
    }),
  });

  builder.queryField('GetGeneratedCoverLetters', (t) => t.prismaField({
    type: ['GeneratedCoverLetter'],
    resolve: async (query, root, args, ctx, info) => {
      const GeneratedCoverLetters = await prisma.generatedCoverLetter.findMany({
        ...query,
        where: {
          userId: ctx.currentUser.userId,
        },
      });

      return GeneratedCoverLetters;
    },
  }));

  builder.mutationField('CreateGeneratedCoverLetter', (t) => t.prismaField({
    type: ['GeneratedCoverLetter'],
    errors: {
      types: [Error],
    },
    args: {
      jobId: t.arg.string({
        required: true,
        description: 'The id of the job to generate the cover letter for',
      }),
      templateIds: t.arg.stringList({
        required: false,
        description: 'The id of the cover letter template to use',
      }),
      model: t.arg.string({
        required: false,
        description: 'The model to use for generating the cover letter',
      }),
    },

    resolve: async (query, _, args, ctx) => {
      const { userId } = ctx.currentUser;
      const { jobId, templateIds, model } = args;

      if (model && !Object.values(AvailableModels).includes(model as AvailableModels)) {
        throw new Error('Invalid model');
      }

      const modelToUse = model as AvailableModels | undefined;

      return createGeneratedCoverLetter({
        jobId, templateIds: templateIds || undefined, userId, model: modelToUse, prisma,
      });
    },
  }));
};
