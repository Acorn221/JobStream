import stripe from 'stripe';

type Product = stripe.ProductCreateParams & {
  id: string;
  default_price_data: {
    currency: string;
    unit_amount: number;
  };
};

/**
 * Used by the backend and frontend to create products and list them.
 * TODO: find a way to have dev and prod products
 */
export const products: Product[] = [
  {
    name: '500 credits',
    id: '500-credits',
    description: '500 credits for Jobstream',
    default_price_data: {
      currency: 'usd',
      unit_amount: 500,
    },
  },
  {
    name: '1500 credits',
    id: '1500-credits',
    description: '1000 credits for Jobstream',
    default_price_data: {
      currency: 'usd',
      unit_amount: 1000,
    },
  },
  {
    name: '3500 credits',
    id: '3500-credits',
    description: '2000 credits for Jobstream',
    default_price_data: {
      currency: 'usd',
      unit_amount: 2000,
    },
  },
  {
    name: '8000 credits',
    id: '8000-credits',
    description: '5000 credits for Jobstream',
    default_price_data: {
      currency: 'usd',
      unit_amount: 4000,
    },
  },
];

export type FrontendProductsType = {
  name: string;
  description: string;
  default_price_data: {
    currency: string;
    unit_amount: number;
    priceId: string;
  };
};

export const FrontendProducts: FrontendProductsType[] = [
  {
    name: '500 credits',
    description: '500 credits for Jobstream',
    default_price_data: {
      currency: 'usd',
      unit_amount: 500,
      priceId: 'price_1Nx6zFIUxCL9zUiYtvFGflOk',
    },
  },
  {
    name: '1500 credits',
    description: '1000 credits for Jobstream',
    default_price_data: {
      currency: 'usd',
      unit_amount: 1000,
      priceId: 'price_1Nx6zFIUxCL9zUiYqBchXBrd',
    },
  },
  {
    name: '3500 credits',
    description: '2000 credits for Jobstream',
    default_price_data: {
      currency: 'usd',
      unit_amount: 2000,
      priceId: 'price_1Nx6zFIUxCL9zUiY2npE6bMp',
    },
  },
  {
    name: '8000 credits',
    description: '5000 credits for Jobstream',
    default_price_data: {
      currency: 'usd',
      unit_amount: 4000,
      priceId: 'price_1Nx6zFIUxCL9zUiYXP3eqfm1',
    },
  },
];
