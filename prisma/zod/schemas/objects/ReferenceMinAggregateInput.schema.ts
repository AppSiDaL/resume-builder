import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    company: z.literal(true).optional(),
    position: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    resumeId: z.literal(true).optional(),
  })
  .strict();

export const ReferenceMinAggregateInputObjectSchema = Schema;
