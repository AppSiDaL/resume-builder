import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string().optional(),
    templateId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
  })
  .strict();

export const ResumeCreateManyInputObjectSchema = Schema;
