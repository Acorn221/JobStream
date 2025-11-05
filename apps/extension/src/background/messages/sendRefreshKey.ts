import type { PlasmoMessaging } from '@plasmohq/messaging';
import { Storage } from '@plasmohq/storage';
import type { messagesToExtension, messagesFromExtension } from 'misc-glob';

const handler: PlasmoMessaging.MessageHandler<
	messagesToExtension,
	messagesFromExtension
> = async (req, res) => {
  console.log('sendRefreshKey message handler triggered: ', req);

  if (req.body.type === 'sendRefreshKey') {
    try {
      const storage = new Storage(
        {
          area: 'sync',
        },
      );
      const { refreshKey } = req.body.payload;
      await storage.set('refresh', refreshKey);
      return res.send({
        type: 'RefreshKeyReceived',
      });
    } catch (e) {
      console.error(e);

      return res.send({
        type: 'Error',
        payload: {
          error: 'Error setting insecure refresh key',
        },
      });
    }
  }

  return res.send({
    type: 'Error',
    payload: {
      error: 'Unknown message type',
    },
  });
};

export default handler;
