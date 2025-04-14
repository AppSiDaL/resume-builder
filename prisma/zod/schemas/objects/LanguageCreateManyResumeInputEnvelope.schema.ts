import { z } from 'zod';
import { LanguageCreateManyResumeInputObjectSchema } from './LanguageCreateManyResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageCreateManyResumeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => LanguageCreateManyResumeInputObjectSchema),
      z.lazy(() => LanguageCreateManyResumeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LanguageCreateManyResumeInputEnvelopeObjectSchema = Schema;
