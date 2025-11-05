import { getBuilder } from './builder';
import './models';

export const getSchema = (builder: ReturnType<typeof getBuilder>) => builder.toSchema({});
