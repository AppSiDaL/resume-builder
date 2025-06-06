import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationCreateManyResumeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    issuer: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    order: z.number().optional(),
  })
  .strict();

export const CertificationCreateManyResumeInputObjectSchema = Schema;
