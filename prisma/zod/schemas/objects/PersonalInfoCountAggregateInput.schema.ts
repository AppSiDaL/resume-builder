import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    fullName: z.literal(true).optional(),
    title: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    address: z.literal(true).optional(),
    website: z.literal(true).optional(),
    summary: z.literal(true).optional(),
    resumeId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PersonalInfoCountAggregateInputObjectSchema = Schema;
