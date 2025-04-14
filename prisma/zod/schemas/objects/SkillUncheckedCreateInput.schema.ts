import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    level: z.number().optional().nullable(),
    resumeId: z.string(),
  })
  .strict();

export const SkillUncheckedCreateInputObjectSchema = Schema;
