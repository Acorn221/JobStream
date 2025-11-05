import { PrismaClient } from 'database';
import { getBuilder } from './builder';

export type builderAdditionParams = {
	prisma: PrismaClient;
	builder: ReturnType<typeof getBuilder>;
}
