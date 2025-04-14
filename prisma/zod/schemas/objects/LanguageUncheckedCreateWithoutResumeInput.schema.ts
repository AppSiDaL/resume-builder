import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageUncheckedCreateWithoutResumeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    level: z.string().optional().nullable(),
  })
  .strict();

export const LanguageUncheckedCreateWithoutResumeInputObjectSchema = Schema;
