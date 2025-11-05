import type { PlasmoMessaging } from '@plasmohq/messaging';
import { Storage } from '@plasmohq/storage';
import type { messagesFromExtension, messagesToExtension } from 'misc-glob';
import { Evt, eventTypes } from '@/background';

const handler: PlasmoMessaging.MessageHandler<
	messagesToExtension,
  messagesFromExtension
> = async (_, res) => {
  const storage = new Storage({
    area: 'sync',
  });

  await storage.removeItem('access');
  await storage.removeItem('refresh');

  console.log('Logged out');
  return res.send({
    type: 'loggedOut',
  });
};

export default handler;
