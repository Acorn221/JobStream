import { Routes } from 'misc-glob';
import { VITE_FRONTEND_URL } from '../config/environment';
import { stripe } from '../utils/misc';
import { builderAdditionParams } from '../types';

export const addStripeCustomer = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('StripeCustomer', {
    fields: (t) => ({
      id: t.exposeID('id'),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
    }),
  });

  // create a stripe buy link to send to the customer
  // get the stripe customer if they exist, otherwise create them in stripe and add them to the db
  builder.queryField('GetStripeBuyLink', (t) => t.field({
    type: 'String',
    args: {
      priceId: t.arg.string({
        required: true,
        description: 'The stripe price id',
      }),
    },
    resolve: async (_, args, ctx) => {
      const { priceId } = args;

      const user = await prisma.user.findFirst({
        where: {
          id: ctx.currentUser.userId,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      // get the customer
      const customer = await prisma.stripeCustomer.findFirst({
        where: {
          user: {
            id: user.id,
          },
        },
      });

      let stripeCustomer;

      // if they don't exist, create them
      if (!customer) {
        stripeCustomer = await stripe.customers.create({
          email: user.email,
          name: `${user.name}`,
          metadata: {
            userId: user.id,
          },
        });

        await prisma.stripeCustomer.create({
          data: {
            user: {
              connect: {
                id: user.id,
              },
            },
            customerId: stripeCustomer.id,
          },
        });
      } else {
        // if they do exist, get them from stripe
        stripeCustomer = await stripe.customers.retrieve(customer.customerId);
      }

      // create a checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        customer: stripeCustomer.id,
        metadata: {
          userId: user.id,
        },
        success_url: `${VITE_FRONTEND_URL}${Routes.PurchaseSuccess}`,
        cancel_url: `${VITE_FRONTEND_URL}${Routes.PurchaseCancel}`,
      });

      if (!session.url) throw new Error('No session url');

      return session.url;
    },
  }));
};
