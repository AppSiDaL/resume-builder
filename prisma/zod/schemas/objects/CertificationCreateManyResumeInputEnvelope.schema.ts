import { z } from 'zod';
import { CertificationCreateManyResumeInputObjectSchema } from './CertificationCreateManyResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationCreateManyResumeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CertificationCreateManyResumeInputObjectSchema),
      z.lazy(() => CertificationCreateManyResumeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const CertificationCreateManyResumeInputEnvelopeObjectSchema = Schema;
