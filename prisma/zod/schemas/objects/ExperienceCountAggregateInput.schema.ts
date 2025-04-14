import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    company: z.literal(true).optional(),
    position: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    location: z.literal(true).optional(),
    description: z.literal(true).optional(),
    resumeId: z.literal(true).optional(),
    order: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ExperienceCountAggregateInputObjectSchema = Schema;
