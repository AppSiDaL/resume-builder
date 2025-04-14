import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateWithoutResumeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    level: z.number().optional().nullable(),
  })
  .strict();

export const SkillCreateWithoutResumeInputObjectSchema = Schema;
