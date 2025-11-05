import {
  PostConfirmationConfirmSignUpTriggerEvent,
} from 'aws-lambda';
import { PrismaClient } from 'database';

interface UserAttributes {
  sub: string; // we can use this as the UUID
	name: string;
  email: string;
	email_verified: boolean;
	'cognito:user_status': string;
	'identities': string;
}

export const main = async (
  event: PostConfirmationConfirmSignUpTriggerEvent,
) => {
  const { sub, name, email } = event.request.userAttributes as unknown as UserAttributes;
  const prisma = new PrismaClient();

  if (!sub) throw new Error('No sub found in user attributes, is this being called at post confirmation?');

  const existingUser = await prisma.user.findUnique({
    where: {
      id: sub,
    },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        id: sub,
        email,
        name,
        creditsSum: 1000,
        Credit: {
          create: {
            amount: 1000,
            note: 'Welcome to Jobstream',
          },
        },
      },
    });
  }

  return event;
};
