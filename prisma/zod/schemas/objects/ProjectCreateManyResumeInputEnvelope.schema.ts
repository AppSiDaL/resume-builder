import { z } from 'zod';
import { ProjectCreateManyResumeInputObjectSchema } from './ProjectCreateManyResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateManyResumeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProjectCreateManyResumeInputObjectSchema),
      z.lazy(() => ProjectCreateManyResumeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProjectCreateManyResumeInputEnvelopeObjectSchema = Schema;
