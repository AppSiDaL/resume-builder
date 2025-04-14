import { z } from 'zod';
import { EducationCreateManyResumeInputObjectSchema } from './EducationCreateManyResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationCreateManyResumeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => EducationCreateManyResumeInputObjectSchema),
      z.lazy(() => EducationCreateManyResumeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EducationCreateManyResumeInputEnvelopeObjectSchema = Schema;
