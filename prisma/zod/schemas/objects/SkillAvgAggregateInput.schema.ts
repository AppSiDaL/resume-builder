import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillAvgAggregateInputType> = z
  .object({
    level: z.literal(true).optional(),
  })
  .strict();

export const SkillAvgAggregateInputObjectSchema = Schema;
