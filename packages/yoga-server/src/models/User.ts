import { GraphQLError } from 'graphql';
import { builderAdditionParams } from '../types';

export const addUser = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('User', {
    fields: (t) => ({
      id: t.exposeID('id'),
      name: t.exposeString('name'),
      email: t.exposeString('email'),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      job: t.relation('Job', {
        args: {
          newestFirst: t.arg.boolean({
            required: false,
            defaultValue: true,
          }),
          take: t.arg.int({
            required: false,
          }),
        },
        query: (args, context) => ({
          orderBy: {
            createdAt: args.newestFirst ? 'desc' : 'asc',
          },
          take: args.take || undefined,
        }),
      }),
      Experience: t.relation('Experience'),
      CV: t.relation('CV'),
      GoogleAuthToken: t.relation('GoogleAuthToken', { nullable: true }),
      creditsSum: t.exposeInt('creditsSum', { nullable: true }),
      credits: t.relation('Credit'),
      coverLetterTemplate: t.relation('CoverLetterTemplate'),
      generatedCoverLetter: t.relation('GeneratedCoverLetter'),
      answeredQuestion: t.relation('AnsweredQuestion'),
    }),
  });

  builder.queryField('user', (t) => t.prismaField({
    type: 'User',
    errors: {
      types: [Error],
    },
    resolve: async (query, root, args, ctx, info) => {
      try {
        const user = await prisma.user.findFirst({
          ...query,
          where: {
            id: ctx.currentUser.userId,
          },
        });

        if (!user) {
          throw new GraphQLError('User not found');
        }
        return user;
      } catch (error) {
        console.error(error);
        throw new GraphQLError(`Error fetching user: ${error}, ${JSON.stringify(ctx.currentUser)}`);
      }
    },
  }));
};
