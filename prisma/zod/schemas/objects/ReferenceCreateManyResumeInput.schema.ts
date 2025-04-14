import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceCreateManyResumeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    company: z.string().optional().nullable(),
    position: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
  })
  .strict();

export const ReferenceCreateManyResumeInputObjectSchema = Schema;
