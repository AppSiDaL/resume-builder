import { z } from 'zod';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeListRelationFilter> = z
  .object({
    every: z.lazy(() => ResumeWhereInputObjectSchema).optional(),
    some: z.lazy(() => ResumeWhereInputObjectSchema).optional(),
    none: z.lazy(() => ResumeWhereInputObjectSchema).optional(),
  })
  .strict();

export const ResumeListRelationFilterObjectSchema = Schema;
