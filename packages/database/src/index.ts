import { PrismaClient } from '.prisma/client';

export const prisma = new PrismaClient();

export default prisma;

export * from '.prisma/client';
