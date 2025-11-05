/* eslint-disable no-case-declarations */
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Stripe } from 'stripe';
import { stripe } from 'yoga-server';
import { prisma } from 'database';
import { STRIPE_WEBHOOK_SECRET } from 'backend-env';

if (!STRIPE_WEBHOOK_SECRET) {
  throw new Error('No stripe webhook secret');
}

export const main = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  let stripeEvent: Stripe.Event;

  if (STRIPE_WEBHOOK_SECRET) {
    // Get the signature sent by Stripe
    const signature = event.headers['Stripe-Signature'] || '';

    try {
      stripeEvent = stripe.webhooks.constructEvent(
        event.body || '',
        signature,
        STRIPE_WEBHOOK_SECRET,
      );
    } catch (err: any) {
      console.warn('⚠️  Webhook signature verification failed.', err.message);
      return {
        statusCode: 400,
        body: '',
      };
    }
  } else {
    throw new Error('No endpoint secret');
  }

  // Handle the event
  switch (stripeEvent.type) {
    case 'checkout.session.completed':
      const session = stripeEvent.data.object as Stripe.Checkout.Session;

      console.log(`Session for ${(session.amount_total || 0) / 100} was successful!`);

      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

      if (!lineItems) {
        throw new Error('No line items found, cannot get product ID');
      }

      const product = lineItems.data[0].price?.product as string;

      // TODO: this is a hack, we should properly map the product
      // ID to the price ID to get the credit amount
      const amount = parseInt(product.split('-')[0], 10);

      const intents = await stripe.paymentIntents.retrieve(session.payment_intent as string);

      const charge = await stripe.charges.retrieve(intents.latest_charge as string);

      await prisma.stripePaymentRecord.create({
        data: {
          amount: session.amount_total || 0,
          currency: session.currency || 'unknown',
          chargeId: charge.id,
          StripeCustomer: {
            connect: {
              customerId: session.customer?.toString(),
            },
          },
          Credit: {
            create: {
              amount,
              user: {
                connect: {
                  id: session.metadata?.userId,
                },
              },
            },
          },
        },
      });

      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;

    case 'payment_method.attached':
      // paymentIntent ...
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;

    default:
      // Unexpected event type
      console.log(`Unhandled event type ${stripeEvent.type}.`);
      break;
  }

  // Return a 200 response to acknowledge receipt of the event
  return {
    statusCode: 200,
    body: '',
  };
};
