import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillSumAggregateInputType> = z
  .object({
    level: z.literal(true).optional(),
  })
  .strict();

export const SkillSumAggregateInputObjectSchema = Schema;
