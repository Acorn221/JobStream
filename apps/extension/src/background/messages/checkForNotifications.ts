import type { PlasmoMessaging } from '@plasmohq/messaging';
import type { Notification } from 'misc-glob';
import { notifier, eventTypes } from '..';

export type checkForNotificationsRequest = {
  awaiting: boolean;
};

export type checkForNotificationsResponse = {
  notifications: Notification[];
};

const handler: PlasmoMessaging.MessageHandler<
checkForNotificationsRequest,
checkForNotificationsResponse
> = async (req, res) => {
  // check to see if anything is loading
  // if so, return that
  if (req.body.awaiting) {
    notifier.target.addEventListener('notification', (e: CustomEvent) => {
      const notification = e.detail satisfies Notification;
      console.log('sending new notification', notification);
      res.send({
        notifications: [notification],
      });
    });
  } else {
    console.log('sending existing notification', notifier.notifications);

    res.send({
      notifications: notifier.notifications,
    });
  }
};

export default handler;
