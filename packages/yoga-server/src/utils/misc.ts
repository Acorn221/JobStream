import { OpenAIClient } from '@azure/openai';
import Stripe from 'stripe';
import {
  AZURE_OPENAI_KEY,
  AZURE_OPENAI_ENDPOINT,
  STRIPE_SECRET_KEY,
} from 'backend-env';

export const openai = new OpenAIClient(AZURE_OPENAI_ENDPOINT, {
  key: AZURE_OPENAI_KEY,
});

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
  typescript: true,
});

export const embeddingsModel = 'text-embedding-ada-002';

export const chatModel = 'GPT-4';

export const gpt3Model = 'GPT-3-5';
