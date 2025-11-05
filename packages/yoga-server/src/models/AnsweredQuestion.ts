import { Experience } from 'database';
import { builderAdditionParams } from '../types';
import { getExperiencesRelevantToEmbedding, getExperiencesRelevantToJob } from './helpers/Embeddings';
import { openai, embeddingsModel, chatModel } from '../utils/misc';

// TODO: need to have credits deducted for answering a question
export const addAnsweredQuestion = ({ builder, prisma }: builderAdditionParams) => {
  builder.prismaObject('AnsweredQuestion', {
    fields: (t) => ({
      id: t.exposeID('id'),
      user: t.relation('user'),
      question: t.exposeString('question'),
      answer: t.exposeString('answer'),
      createdAt: t.expose('createdAt', { type: 'Date' }),
      updatedAt: t.expose('updatedAt', { type: 'Date' }),
      deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
    }),
  });

  builder.mutationField('AnswerQuestion', (t) => t.string({
    args: {
      question: t.arg.string({
        required: true,
        description: 'The question to answer',
      }),
      jobId: t.arg.string({
        required: false,
        description: 'The job id to answer the question for',
      }),
    },
    resolve: async (_, args, ctx) => {
      const { question, jobId } = args;

      const { userId } = ctx.currentUser;

      let experiences: {id: string, content: string}[] = [];
      let job;

      if (jobId) {
        job = await prisma.job.findUnique({
          where: {
            id: jobId,
            userId,
          },
        });
        if (!job) throw new Error('Job not found');

        const jobExperiences = await getExperiencesRelevantToJob(job, 0.6, 4, prisma);

        experiences.push(...jobExperiences);
      }

      const response = await openai.getEmbeddings(embeddingsModel, [question], {
        user: userId,
      });

      const { embedding } = response.data[0];

      const questionEmbeddings = await getExperiencesRelevantToEmbedding(
        embedding,
        userId,
        0.6,
        4,
        prisma,
      );

      experiences.push(...questionEmbeddings);

      // remove duplicate experiences

      experiences = experiences.filter((v, i, a) => a.findIndex((x) => (x.id === v.id)) === i);

      const prompt = `Question: ${question}\n\n${experiences.map((e) => `User Experience: ${e.content}`).join('\n')}
      ${job ? `\nJob Description: ${job.description.join(' ')}` : ''}
      `;

      const res = await openai.getChatCompletions(
        chatModel,
        [
          {
            role: 'system',
            content: 'You are a assisting someone who is applying for a job, answering questions on the application page about their experience. Reply in the first person to answer the questions for them, only include the answer so it can be copied and pasted into the application.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        {
          maxTokens: 500,
          user: userId,
        },
      );

      if (res.choices[0].finishReason !== 'stop') {
        console.error(`Question failed to answer, finish reason is ${res.choices[0].finishReason}, prompt was ${prompt} and response was ${JSON.stringify(res.choices[0])}`);
      }

      const { message } = res.choices[0];

      if (message == null) {
        throw new Error(`Failed to answer question, prompt was ${prompt} and response was ${JSON.stringify(res.choices[0])}, no message found`);
      }

      if (message.content == null) {
        throw new Error(`Failed to answer question, prompt was ${prompt} and response was ${JSON.stringify(res.choices[0])}`);
      }

      const answer = message.content;

      await prisma.answeredQuestion.create({
        data: {
          question,
          userId,
          answer,
          jobId: jobId || undefined,
          Credits: {
            create: {
              amount: -1,
              userId,
              note: 'Answered a question',
            },
          },
        },
      });

      return answer;
    },
  }));
};
