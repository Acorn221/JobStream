/* eslint-disable consistent-return */
import { sendToBackgroundViaRelay } from '@plasmohq/messaging';
import { namedOperations } from 'graphql-generated-code';
import {
  messagesToExtension, messagesFromExtension, NotificationManager, Notification, ToastStyle,
} from 'misc-glob';

import { toast } from 'react-toastify';
import { client } from '@/App';

export const ExtensionCommunication = async (auth: string | null) => {
  if (!auth) return;
  const res = await sendToBackgroundViaRelay<
      messagesToExtension,
      messagesFromExtension
    >({
      name: 'sendRefreshKey' as never,
      body: {
        type: 'sendRefreshKey',
        payload: {
          refreshKey: auth,
        },
      },
    });
  return res;
};

export const CheckForNotifications = async (awaiting: boolean): Promise<Notification[]> => {
  const res = await sendToBackgroundViaRelay<
      messagesToExtension,
      messagesFromExtension
    >({
      name: 'checkForNotifications' as never,
      body: {
        type: 'checkForNotifications',
        awaiting,
      },
    });

  if ('notifications' in res) {
    return res.notifications as Notification[];
  }
  return [];
};

export class FrontendNotificationManager extends NotificationManager {
  awaitingNotifications: Notification[] = [];

  constructor() {
    super();
    this.target.addEventListener('notification', async (e) => {
      const evt = e as CustomEvent<Notification>;
      // check if the notification is in the awaiting notifications
      // if it is, return
      const awaitingNotification = this.awaitingNotifications
        .find((notification) => notification.id === evt.detail.id);

      if (awaitingNotification) {
        return;
      }

      const notification = evt.detail;
      if (notification.type === 'pending') {
        await toast.promise(this.handlePendingNotification(notification), {
          pending: notification.pendingText,
          success: notification.successText,
          error: notification.errorText,
        }, {
          ...ToastStyle,
        });
        // do toast.promise and create a new lisner for when the notification is over
      }
    });
  }

  handlePendingNotification(notification: Notification): Promise<void> {
    this.awaitingNotifications.push(notification);
    return new Promise((resolve, reject) => {
      const callback = (e: any) => {
        const evt = e as CustomEvent<Notification>;
        const newNotification = evt.detail;
        if (newNotification.id === notification.id) {
          if (newNotification.type === 'success') {
            this.target.removeEventListener('notification', callback);
            if (notification.successText === 'Cover letter generated!') {
              // refresh the cover letters for the user
              client.refetchQueries({
                include: [
                  namedOperations.Query.GetJob,
                ],
              });
            }
            resolve();
          } else if (newNotification.type === 'error') {
            this.target.removeEventListener('notification', callback);
            reject();
          }
        }
      };

      this.target.addEventListener('notification', callback);
    });
  }
}
