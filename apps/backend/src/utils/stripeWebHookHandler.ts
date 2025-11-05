/* eslint-disable no-case-declarations */
import express from 'express';
import Stripe from 'stripe';
import { stripe } from 'yoga-server';
import { prisma } from 'database';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// based off of https://stripe.com/docs/webhooks/quickstart?lang=node

export const stripeWebhookHandler = async (
  req: express.Request,
  res: express.Response,
) => {
  let event = req.body;
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = req.headers['stripe-signature'] as string;
    console.log(`Signature: ${signature}`);
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        endpointSecret,
      );
    } catch (err: any) {
      console.warn('⚠️  Webhook signature verification failed.', err.message);
      return res.sendStatus(400);
    }
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;

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
      console.log(`Unhandled event type ${event.type}.`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return res.send(200);
};
