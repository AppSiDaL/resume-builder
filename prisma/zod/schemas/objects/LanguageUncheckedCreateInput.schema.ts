import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    level: z.string().optional().nullable(),
    resumeId: z.string(),
  })
  .strict();

export const LanguageUncheckedCreateInputObjectSchema = Schema;
