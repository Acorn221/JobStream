import { products } from 'misc-glob';

import { stripe } from 'yoga-server';

const init = async () => {
  await Promise.all(products.map(async (product) => {
    if (!product.id) throw new Error('Product id is required');
    let productResponse;
    let existingProduct;
    try {
      existingProduct = await stripe.products.retrieve(product.id);
    } catch (e) {
      existingProduct = undefined;
    }

    if (existingProduct) {
      // TODO: make this better, eg updating price
      productResponse = await stripe.products.update(product.id, {
        name: product.name,
        description: product.description,
      });
    } else {
      productResponse = await stripe.products.create(product);
    }

    console.log('productResponse', productResponse);
  }));
  console.log('done');
};

init();
