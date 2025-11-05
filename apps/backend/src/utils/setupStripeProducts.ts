import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from 'yoga-server';
import { products } from 'misc-glob';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
  typescript: true,
});

const init = async () => {
  Promise.all(products.map(async (product) => {
    const productResponse = await stripe.products.create(product);
    console.log('productResponse', productResponse);
  }));
};

init();
