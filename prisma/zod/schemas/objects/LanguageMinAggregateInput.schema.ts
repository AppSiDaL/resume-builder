import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    level: z.literal(true).optional(),
    resumeId: z.literal(true).optional(),
  })
  .strict();

export const LanguageMinAggregateInputObjectSchema = Schema;
