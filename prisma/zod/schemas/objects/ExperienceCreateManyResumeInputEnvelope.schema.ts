import { z } from 'zod';
import { ExperienceCreateManyResumeInputObjectSchema } from './ExperienceCreateManyResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceCreateManyResumeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ExperienceCreateManyResumeInputObjectSchema),
      z.lazy(() => ExperienceCreateManyResumeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExperienceCreateManyResumeInputEnvelopeObjectSchema = Schema;
