import type { PlasmoMessaging } from '@plasmohq/messaging';
import { AnalyticsEvent } from '@/background/GA';
import { debug } from '@/background/config';

export type sendAnalyticsEventRequest = {
	name: string;
	params?: any;
};

export type sendAnalyticsEventResponse = {
	success: boolean;
};

const handler: PlasmoMessaging.MessageHandler<
sendAnalyticsEventRequest,
sendAnalyticsEventResponse> = async (req, res) => {
  try {
    await AnalyticsEvent([{
      name: req.body.name,
      params: req.body.params,
    }]);
    if (debug) console.log('analytics event sent');
    res.send({
      success: true,
    });
  } catch (err: any) {
    res.send({
      success: false,
    });
  }
};

export default handler;
