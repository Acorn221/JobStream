import { GraphQLError } from 'graphql';
import { stripe } from '../utils/misc';
import { builderAdditionParams } from '../types';

export const addCredits = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('Credits', {
    fields: (t) => ({
      id: t.exposeID('id'),
      userId: t.exposeString('userId'),
      amount: t.exposeInt('amount'),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      note: t.exposeString('note'),
      generatedCv: t.relation('GeneratedCv', {
        nullable: true,
      }),
      generatedCoverLetter: t.relation('GeneratedCoverLetter', {
        nullable: true,
      }),
    }),
  });

  builder.mutationField('GetRefreshedCredits', (t) => t.prismaField({
    type: ['Credits'],
    resolve: async (query, _, args, ctx) => {
      const stripeUser = await prisma.stripeCustomer.findUnique({
        where: {
          userId: ctx.currentUser.userId,
        },
        include: {
          StripePaymentRecord: true,
        },
      });

      if (!stripeUser) throw new GraphQLError('Stripe user not found');

      const charges = await stripe.charges.list({
        customer: stripeUser.customerId,
      });

      // TODO: create a function to update the stripe transaction table + credits when called.
      // TODO: this has to be done in a way that avoids duplicate credits being added

      return prisma.credits.findMany({
        where: {
          userId: ctx.currentUser.userId,
        },
      });
    },
  }));
};
