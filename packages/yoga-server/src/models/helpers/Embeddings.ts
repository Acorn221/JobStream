import type { Experience, Job } from 'database';
import { PrismaClient, Prisma } from 'database';
import { embeddingsModel, openai } from '../../utils/misc';
import { MIN_EXPERIENCES_FOR_SUITABILITY, SUITABILITY_EXPERIENCES_COUNT } from '../../config/environment';

export const getExperienceEmbeddingRequest = async (experience: Experience) => {
  const input = `${experience.name} ${experience.content}`.replace(/\n/g, ' ');

  const response = await openai.getEmbeddings(embeddingsModel, [input], {
    user: experience.userId,
  });

  const { embedding } = response.data[0];

  return embedding;
};

export const setExperienceEmbedding = async (experience: Experience, prisma: PrismaClient) => {
  const embedding = await getExperienceEmbeddingRequest(experience);

  await prisma.$executeRaw`
        UPDATE "Experience"
        SET embedding = ${embedding}::vector
        WHERE id = ${experience.id}`;
};

const getJobEmbeddingRequest = async (job: Job) => {
  const input = job.description.join(' ').replace(/\n/g, ' ');

  const response = await openai.getEmbeddings(embeddingsModel, [input], {
    user: job.userId,
  });

  const { embedding } = response.data[0];

  return embedding;
};

export const setJobEmbedding = async (job: Job, prisma: PrismaClient) => {
  const embedding = await getJobEmbeddingRequest(job);

  await prisma.$executeRaw`
        UPDATE "Job"
        SET embedding = ${embedding}::vector
        WHERE id = ${job.id}`;
};

export type ExperienceMatch = {
  id: string;
  name: string;
  content: string;
  similarity: number;
};

export const getExperiencesRelevantToJob = async (
  job: Job,
  matchThreshold: number,
  matchCount: number,
  prisma: PrismaClient,
) => {
  const experiences = await prisma.$queryRaw<ExperienceMatch[]>`
    SELECT * FROM match_experiences(
      ${job.id}::UUID,
      ${job.userId}::UUID,
      ${matchThreshold}::float,
      ${matchCount}::int
  );`;

  console.log(experiences);

  return experiences;
};

export const getJobSuitabilityScore = async (job: Job, prisma: PrismaClient) => {
  const experiences = await getExperiencesRelevantToJob(
    job,
    0,
    SUITABILITY_EXPERIENCES_COUNT,
    prisma,
  );

  if (experiences.length < MIN_EXPERIENCES_FOR_SUITABILITY) {
    return null;
  }

  return experiences
    .reduce((acc: number, curr: any) => acc + curr.similarity, 0) / experiences.length;
};

export const getExperiencesRelevantToEmbedding = async (
  embedding: number[],
  userId: string,
  matchThreshold: number,
  matchCount: number,
  prisma: PrismaClient,
) => {
  const experiences = await prisma.$queryRaw<ExperienceMatch[]>`
    SELECT * FROM match_embedding(
      ARRAY[${Prisma.join(embedding)}]::float[],
      ${userId}::UUID,
      ${matchThreshold}::float,
      ${matchCount}::int
  );`;

  console.log(experiences);

  return experiences;
};
