/* eslint-disable no-await-in-loop */
import crypto from 'crypto';
import { prisma } from 'database';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { sha512 } from 'js-sha512';
import type { Prisma } from 'database';
import CV from 'test_data/cv.json';

const testUserPassword = 'hi';

const deleteExisting = async () => {
  await prisma.cV.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.job.deleteMany();

  await prisma.user.deleteMany();
};

const main = async () => {
  await deleteExisting();

  const usersToInsert: Prisma.UserCreateManyInput[] = [];
  for (let i = 0; i < 100; i++) {
    const salt = crypto.randomBytes(24).toString('base64');
    const password = sha512(`${testUserPassword}${salt}`);
    const email = faker.internet.email();
    usersToInsert.push({
      id: faker.string.uuid(),
      email,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      password,
      salt,
    });

    if (i % 50) console.log(`${email} ${password} - ${salt}`);
  }
  await prisma.user.createMany({
    data: usersToInsert,
  });

  // create the CVs to insert

  const cvsToInsert: Prisma.CVCreateManyInput[] = [];
  for (let i = 0; i < 100; i++) {
    cvsToInsert.push({
      userId: usersToInsert[i].id || faker.string.uuid(),
      name: faker.hacker.phrase(),
      CV_Content: {},
      googleDocId: '1rwIjXYvis-0j9WZMbOsOaDEzRClh3Q4ZNAB0IFcSRYQ',
    });
  }

  const experiencesToInsert: Prisma.ExperienceCreateManyInput[] = [];

  for (let i = 0; i < 100; i++) {
    experiencesToInsert.push({
      userId: usersToInsert[i].id || faker.string.uuid(),
      name: faker.hacker.phrase(),
      content: faker.lorem.paragraph(),
    });
  }

  await prisma.experience.createMany({
    data: experiencesToInsert,
  });

  const JobssToInsert: Prisma.JobCreateManyInput[] = [];

  for (let i = 0; i < 200; i++) {
    JobssToInsert.push({
      userId: usersToInsert[i % 100].id || faker.string.uuid(),
      name: faker.hacker.phrase(),
      description: [faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph()],
      url: faker.internet.url(),
    });
  }

  await prisma.job.createMany({
    data: JobssToInsert,
  });

  console.log('Created Test Data');
};

main();
