import type { PlasmoCSConfig } from 'plasmo';
import { relayMessage, sendToBackground } from '@plasmohq/messaging';
import { relay } from '@plasmohq/messaging/relay';
import type { messagesToExtension, messagesFromExtension } from 'misc-glob';
import type {
  sendAnalyticsEventRequest,
  sendAnalyticsEventResponse,
} from '@/background/messages/sendAnalyticsEvent';

export const config: PlasmoCSConfig = {
  matches: [
    'http://localhost:5173/*',
    'https://jobstream.uk/*',
    'https://jobstream.pages.dev/*',
    'https://j4a.uk/*',
    'https://app.jobstream.uk/*',
  ], // Only relay messages from these domains
  run_at: 'document_start',
};

relay<string, messagesToExtension, messagesFromExtension>(
  {
    name: 'sendRefreshKey',
  },
  async (req) => {
    console.log('req:', req);
    const openResult = await sendToBackground({
      name: 'sendRefreshKey',
      body: req.body,
    });
    console.log('openResult:', openResult);
    return openResult;
  },
);

relay<string, messagesToExtension, messagesFromExtension>(
  {
    name: 'persistentListener',
  },
  async (req) => {
    const openResult = await sendToBackground({
      name: 'persistentListener',
      body: req.body,
    });
    return openResult;
  },
);

relay<string, messagesToExtension, messagesFromExtension>(
  {
    name: 'logout',
  },
  async (req) => {
    const openResult = await sendToBackground({
      name: 'logout',
      body: req.body,
    });
    return openResult;
  },
);

relay<string, messagesToExtension, messagesFromExtension>(
  {
    name: 'checkForNotifications',
  },
  async (req) => {
    const res = await sendToBackground({
      name: 'checkForNotifications',
      body: req.body,
    });

    return res;
  },
);

relay<string, sendAnalyticsEventRequest, sendAnalyticsEventResponse>(
  {
    name: 'sendAnalyticsEvent',
  },
  async (req) => sendToBackground<sendAnalyticsEventRequest>({
    name: 'sendAnalyticsEvent',
    body: req.body,
  }),
);
