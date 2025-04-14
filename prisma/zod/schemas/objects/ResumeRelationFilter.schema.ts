import { z } from 'zod';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeRelationFilter> = z
  .object({
    is: z
      .lazy(() => ResumeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ResumeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ResumeRelationFilterObjectSchema = Schema;
