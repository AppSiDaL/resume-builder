import { z } from 'zod';
import { ResumeCreateNestedOneWithoutLanguagesInputObjectSchema } from './ResumeCreateNestedOneWithoutLanguagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    level: z.string().optional().nullable(),
    resume: z.lazy(
      () => ResumeCreateNestedOneWithoutLanguagesInputObjectSchema,
    ),
  })
  .strict();

export const LanguageCreateInputObjectSchema = Schema;
