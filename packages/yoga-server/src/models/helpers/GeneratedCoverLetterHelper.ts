/* eslint-disable no-await-in-loop */
import {
  PrismaClient, CV, CoverLetterTemplate, Experience,
} from 'database';
import { GraphQLError } from 'graphql';
import { AvailableModels } from 'misc-glob';
import { google } from 'googleapis';
import { getOauthClient } from './GetGoogleAuthTokens';
import { getOptimiserFolderId } from './GoogleDriveFolderManagement';
import { findText } from './CvParser/extractText';
import { getExperiencesRelevantToJob } from './Embeddings';
import { chatModel, openai } from '../..';
import { CreateCoverLetter } from './CoverLetterDocs';

type CreateGeneratedCoverLetterArgs = {
	jobId: string;
	templateIds?: string[];
	userId: string;
	model?: AvailableModels;
	prisma: PrismaClient;
};

export const createGeneratedCoverLetter = async ({
  jobId, templateIds, userId, model, prisma,
}: CreateGeneratedCoverLetterArgs) => {
  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
      AND: {
        userId,
      },
    },
  });

  if (!job) {
    throw new GraphQLError(`No job found with id ${jobId}`);
  }
  let cv: null | CV = null;
  cv = await prisma.cV.findFirst({
    where: {
      isDefault: true,
      AND: {
        userId,
      },
    },
  });

  const oauth2Client = await getOauthClient(userId, prisma);

  const docs = google.docs({
    version: 'v1',
    auth: oauth2Client,
  });

  const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
  });

  const folderId = await getOptimiserFolderId(userId);

  const cvContent = cv ? findText(cv.CV_Content as any).join('\n') : '';

  const jobDescription = job.description.join(' ');

  const experiences = await getExperiencesRelevantToJob(job, 0.5, 8, prisma);

  const experienceContent = experiences.map((e) => e.content).join('\n');

  const prompt = `${cv ? '---CV---\n' : ''}${cvContent}\n---Job Description---\n${jobDescription}\n---Experiences---\n${experienceContent}`;

  console.log(prompt);

  const triesLeft = 3;
  let validResponse = false;
  let parsed: undefined | any;

  while (!validResponse && triesLeft > 0) {
    const response = await openai.getChatCompletions(
      chatModel,
      [
        {
          role: 'system',
          content: `You are a cover letter generator, to generate inspirational and unique cover letters for your job applications. 
        You are given the applicant's CV, the job description and their relevant experiences. 
        You must generate a cover letter from this information that is on topic with the job description and uses the experiences, where nessesary, to show why the applicant is a good fit for the job.
        If the company name is not provided, leave it blank.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      {
        functions: [{
          name: 'setInfo',
          description: 'Sets the job name and the content of the cover letter',
          parameters: {
            type: 'object',
            required: ['jobName', 'content'],
            properties: {
              companyName: {
                type: 'string',
                description: 'The name of the company the job is for',
              },
              jobName: {
                type: 'string',
                description: 'The job name',
              },
              content: {
                type: 'string',
                description: 'The content of the cover letter',
              },
            },
          },
        }],
        functionCall: 'auto',
        maxTokens: 700,
        user: userId,
      },
    );

    console.log(JSON.stringify(response, null, 2));

    if (response.choices.length === 0) throw new GraphQLError('No response from openai');

    if (response.choices[0].message?.functionCall?.name !== 'setInfo') {
      throw new GraphQLError('No set info function call');
    }

    const rawArgs = response.choices[0].message.functionCall.arguments;

    // if the json.parse throws an error, try adding `"}"` to the end of the string

    try {
      parsed = JSON.parse(rawArgs.replace(/(\r\n|\n|\r)(?=(?:[^"]*"[^"]*")*[^"]*$)/g, '').replace(/(\r\n|\n|\r)/g, '\\n'));
    } catch (e) {
      console.warn('Error parsing json, trying to fix');
      try {
        parsed = JSON.parse(`${rawArgs.replace(/(\r\n|\n|\r)(?=(?:[^"]*"[^"]*")*[^"]*$)/g, '').replace(/(\r\n|\n|\r)/g, '\\n')}"}`);
      } catch (err) {
        console.error('Error parsing json: ', err);
      }
    }

    if (!parsed) throw new GraphQLError('No parsed json');

    if (!('jobName' in parsed && 'content' in parsed)) {
      console.error(`No job name or content, tries left: ${triesLeft}`);
    } else {
      validResponse = true;
    }
  }

  if (!validResponse) throw new GraphQLError('No valid response from openai');

  const { jobName, content } = parsed;

  const companyName = parsed.companyName || '';

  const validTemplateIds = templateIds || await prisma.coverLetterTemplate.findMany({
    where: {
      userId,
      active: true,
    },
    select: {
      id: true,
    },
  }).then((templates) => templates.map((template) => template.id));

  if (!validTemplateIds) {
    throw new GraphQLError('No valid templates found');
  } else if (validTemplateIds.length === 0) {
    throw new GraphQLError('No valid templates found');
  }

  const templates = await Promise.all(validTemplateIds.map(async (id: string) => CreateCoverLetter({
    drive, docs, folderId, companyName, jobName, content, job, templateId: id, userId, prisma,
  })));

  if (job.name?.toLowerCase() === 'untitled' || job.name == null) {
    await prisma.job.update({
      where: {
        id: jobId,
      },
      data: {
        name: companyName.length > 0 ? `${companyName} - ${jobName}` : jobName,
      },
    });
  }

  return templates;
};
