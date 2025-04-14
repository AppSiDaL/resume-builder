import { z } from 'zod';
import { ReferenceCreateManyResumeInputObjectSchema } from './ReferenceCreateManyResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceCreateManyResumeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReferenceCreateManyResumeInputObjectSchema),
      z.lazy(() => ReferenceCreateManyResumeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReferenceCreateManyResumeInputEnvelopeObjectSchema = Schema;
