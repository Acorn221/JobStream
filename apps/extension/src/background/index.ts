import { InMemoryCache, type DocumentNode, ApolloClient } from '@apollo/client';
import { Storage } from '@plasmohq/storage';
import type { CreateJobMutation } from 'graphql-generated-code';
import browser from 'webextension-polyfill';
import { NotificationManager, type Notification, Routes } from 'misc-glob';
import { FRONTEND_URL, GRAPHQL_URL } from '@/misc/environment';
import { checkAndRefreshAccessToken } from '@/background/utils';
import { AnalyticsEvent } from './GA';

/**
 * When the user first installs the extension, open the main page
 */
browser.runtime.onInstalled.addListener(async (object) => {
  if (chrome) {
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      const platform = await browser.runtime.getPlatformInfo();
      AnalyticsEvent([
        {
          name: 'install',
          params: {
            platform: platform.os,
          },
        },
      ]);
      // set default settings
      const storage = new Storage({
        area: 'sync',
      });
      await storage.set('autoGenerateCoverLetter', true);
      await storage.set('autoGenerateCV', true);
      await storage.set('autoOpenCoverLetter', true);
      await storage.set('autoOpenJob', true);

      chrome.tabs.create({
        url: `${FRONTEND_URL}${Routes.OnInstall}`,
      });
    } else if (object.reason === chrome.runtime.OnInstalledReason.UPDATE) {
      const platform = await browser.runtime.getPlatformInfo();
      AnalyticsEvent([
        {
          name: 'update',
          params: {
            platform: platform.os,
          },
        },
      ]);
    }
  }
  chrome.runtime.setUninstallURL('https://jobstream.uk/uninstall');
  // TODO: keep this in for 1 update, then remove it for the rest
});

export type JobCreateMutationArgs = {
  mutation: DocumentNode;
  variables: {
      description: string[];
      url: string;
  };
};

export const notifier = new NotificationManager();

export const failedRequests: JobCreateMutationArgs[] = [];

export const Evt = new EventTarget();

// setting the cache here to maintain the same cache across the app
export const apolloCache = new InMemoryCache();

export enum eventTypes {
  jobCreated = 'jobCreated',
  requestFailed = 'requestFailed',
}
/**
 * This handles failed requests and retries them every 5 minutes
 */
const init = async () => {
  const storage = new Storage({
    area: 'sync',
  });
  const startSendingFailedRequests = async () => {
    const requestInterval = setInterval(async () => {
      const mutationArgs = failedRequests.pop();
      if (mutationArgs) {
        const client = new ApolloClient({
          uri: GRAPHQL_URL,
          cache: new InMemoryCache(),
          headers: {
            Authorization: `Bearer ${(await checkAndRefreshAccessToken(storage)).id_token}`,
          },
        });

        try {
          const { data } = await client.mutate<
            CreateJobMutation
          >(mutationArgs);
          const event = new Event(eventTypes.jobCreated);
          Evt.dispatchEvent(event);
          console.log('Mutation response:', data);
        } catch (error) {
          failedRequests.push(mutationArgs);
          console.error('Mutation error:', error);
        }

        if (failedRequests.length === 0) {
          clearInterval(requestInterval);
        }
      }
    }, Math.random() * 1000 * 60 * 5);
  };

  Evt.addEventListener(eventTypes.requestFailed, () => {
    // startSendingFailedRequests();
  });

  notifier.target.addEventListener('notification', (event: CustomEvent<Notification>) => {
    const { id } = event.detail;

    if (event.detail.type === 'pending') {
      // set timeout for 4 mins, and if the notification is still pending, change it to error
      setTimeout(() => {
        const index = notifier.notifications.findIndex((n) => n.id === id);
        if (index !== -1) {
          notifier.updateNotification({
            ...notifier.notifications[index],
            type: 'error',
          });
        }
      }, 1000 * 60 * 4);
    }
  });
};

try {
  init();
} catch (error) {
  console.error('Error initializing background script:', error);
}
