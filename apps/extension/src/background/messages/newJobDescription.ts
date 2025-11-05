import type { PlasmoMessaging } from '@plasmohq/messaging';
import { Storage } from '@plasmohq/storage';
import Browser from 'webextension-polyfill';
import {
  CreateJobDocument, type CreateGeneratedCoverLetterMutationResult, type CreateJobMutation,
} from 'graphql-generated-code';
import { Routes } from 'misc-glob';
import { uuid } from 'uuidv4';
import type { JobDescription, JobDescriptionResponse } from '@/types';
import {
  Evt, eventTypes, failedRequests, notifier,
} from '@/background';
import { getApolloClient } from '@/background/utils';
import { generateCoverLetter } from '@/misc/wsRequests';
import { AnalyticsEvent } from '../GA';

/**
 * Takes in the new job description and sends it off to process
 */
const handler: PlasmoMessaging.MessageHandler<
  JobDescription,
  JobDescriptionResponse
> = async (req, res) => {
  console.log(`Received: ${JSON.stringify(req.body)}`);

  const storage = new Storage({
    area: 'sync',
  });

  AnalyticsEvent([
    {
      name: 'Job_Description_Added',
      params: {
        url: req.body.url,
        length: req.body.content.length,
      },
    },
  ]);

  // Prepare the mutation variables
  const { content, url } = req.body;

  const autoGenerateCoverLetter = await storage.get<boolean>('autoGenerateCoverLetter');
  const autoGenerateCV = await storage.get<boolean>('autoGenerateCV');
  const autoOpenCoverLetter = await storage.get<boolean>('autoOpenCoverLetter');
  const autoOpenJob = await storage.get<boolean>('autoOpenJob');

  const mutationArgs = { // Specify the response type
    mutation: CreateJobDocument,
    variables: {
      description: content,
      url,
    },
  };

  try {
    // Set up Apollo Client
    const client = await getApolloClient(storage);

    // Execute the mutation
    const { data } = await client.mutate<
    CreateJobMutation
    >(mutationArgs);

    if (autoOpenJob) {
      Browser.tabs.create({
        url: `${process.env.PLASMO_PUBLIC_FRONTEND_URL}${Routes.Job.replace(':id', data.Createjob.id)}`,
      });
    }

    if (autoGenerateCoverLetter) {
      const id = uuid();
      notifier.handleNotification({
        id,
        type: 'pending',
        pendingText: 'Generating cover letter...',
        successText: 'Cover letter generated!',
        errorText: 'Cover letter generation failed',
      });

      try {
        const generatedCoverLetter = await generateCoverLetter(data.Createjob.id);
        if (generatedCoverLetter.CreateGeneratedCoverLetter.__typename === 'MutationCreateGeneratedCoverLetterSuccess') {
          notifier.handleNotification({
            id,
            type: 'success',
            pendingText: 'Generating cover letter...',
            successText: 'Cover letter generated!',
            errorText: 'Cover letter generation failed',
          });
          const coverLetters = generatedCoverLetter.CreateGeneratedCoverLetter.data;

          if (autoOpenCoverLetter) {
            coverLetters.forEach((coverLetter) => {
              Browser.tabs.create({
                url: `https://docs.google.com/document/d/${coverLetter.googleDocId}/edit`,
              });
            });
          }
        }
      } catch (error) {
        notifier.handleNotification({
          id,
          type: 'error',
          pendingText: 'Generating cover letter...',
          successText: 'Cover letter generated!',
          errorText: 'Cover letter generation failed',
        });
      }
    }

    const event = new Event(eventTypes.jobCreated);
    Evt.dispatchEvent(event);

    console.log('Mutation response:', data);
    res.send({
      status: 'SUCCESS',
      payload: {
        id: data.Createjob.id,
      },
    }); // Send the mutation response
  } catch (error) {
    failedRequests.push(mutationArgs);
    const event = new Event(eventTypes.requestFailed);
    Evt.dispatchEvent(event);
    console.error('Mutation error:', error);
    res.send({
      status: 'FAILURE',
      payload: {
        error: error.message,
      },
    }); // Send an error response
  }
};

export default handler;
