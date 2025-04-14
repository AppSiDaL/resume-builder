import { z } from 'zod';
import { ResumeCreateManyUserInputObjectSchema } from './ResumeCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ResumeCreateManyUserInputObjectSchema),
      z.lazy(() => ResumeCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ResumeCreateManyUserInputEnvelopeObjectSchema = Schema;
