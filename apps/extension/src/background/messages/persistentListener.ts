import type { PlasmoMessaging } from '@plasmohq/messaging';
import type { messagesFromExtension, messagesToExtension } from 'misc-glob';
import { Evt, eventTypes } from '@/background';

const handler: PlasmoMessaging.MessageHandler<
	messagesToExtension,
  messagesFromExtension
> = (_, res) => new Promise((resolve) => {
  Evt.addEventListener(eventTypes.jobCreated, () => {
    res.send({
      type: 'JobSelected',
    });
    resolve();
  });
});

export default handler;
