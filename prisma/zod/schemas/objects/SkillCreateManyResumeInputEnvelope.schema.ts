import { z } from 'zod';
import { SkillCreateManyResumeInputObjectSchema } from './SkillCreateManyResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateManyResumeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SkillCreateManyResumeInputObjectSchema),
      z.lazy(() => SkillCreateManyResumeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SkillCreateManyResumeInputEnvelopeObjectSchema = Schema;
