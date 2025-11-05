/* eslint-disable no-restricted-syntax */
import { Job, CV } from 'database';
import { docs_v1 as docsV1 } from 'googleapis';
import {
  ParseStructuralElements,
  HtmlToRuns,
  ApplyChanges,
  TextRunsToHtml,
} from 'cv-parser';
import { ChatCompletion } from 'openai/resources/chat';
import { openai } from '../../utils/misc';
import { ExperienceMatch } from './Embeddings';

const AI_DEMENTIA_WINDOW = 5;

export const ModifyCV = async (
  cv: CV,
  job: Job,
  experiences: ExperienceMatch[],
): Promise<docsV1.Schema$Request[]> => {
  if (!cv.CV_Content) throw new Error('CV_content in database is null');
  // TODO: check if this is the right way to handle JSON from the prisma client
  const CvContent: docsV1.Schema$Document =
    cv.CV_Content as unknown as docsV1.Schema$Document;

  const experiencePrompts = experiences
    .map((experience) => {
      const { name, content } = experience;
      return `Experience: ${name} \n ${content}`;
    })
    .join(' ');

  const jobDescription = job.description.join('\n');

  if (!CvContent.body?.content) {
    throw new Error('No content in CV');
  }

  const parsed = ParseStructuralElements(CvContent.body?.content);

  const promises: Array<Promise<ChatCompletion>> = [];

  for (let i = 0; i < parsed.length; i += AI_DEMENTIA_WINDOW) {
    const html = TextRunsToHtml(parsed.slice(i, AI_DEMENTIA_WINDOW));
    const prompt = `Job Description: ${jobDescription} -----------Experience----------- ${experiencePrompts} ------------CV To Edit:----------\n${html}`;

    promises.push(
      openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content:
              "You are a CV optimiser, your job is to edit extracted chunks of text from CVs and make them more specialised to job description and experiences provided. Edit and return the content in the same format, retaining the IDs, and edit title if needed, but don't add or take away any elements and keep it a the sections a length to their original. Ignore context that may not be relevant.",
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        model: 'gpt-3.5-turbo', // TODO: model selection needs to be done by the user
        max_tokens: 1500, // TODO: experiment with this
      }),
    );
  }

  const responses = await Promise.all(promises);
  const requests: Array<docsV1.Schema$Request> = [];

  for (const res of responses) {
    if (!res.choices[0].finish_reason)
      throw new Error('AI response did not finish');
    if (res.choices[0].finish_reason === 'length')
      throw new Error('AI response was too long and was cut off');

    const improvedHtml = res.choices[0].message.content;

    if (!improvedHtml || improvedHtml === '')
      throw new Error('AI response was empty or null');

    const newRuns = HtmlToRuns(parsed, improvedHtml);
    const [, req] = ApplyChanges(CvContent.body, newRuns);
    requests.push(...req);
  }

  return requests;
};
