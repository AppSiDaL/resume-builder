import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    issuer: z.literal(true).optional(),
    date: z.literal(true).optional(),
    url: z.literal(true).optional(),
    resumeId: z.literal(true).optional(),
    order: z.literal(true).optional(),
  })
  .strict();

export const CertificationMaxAggregateInputObjectSchema = Schema;
