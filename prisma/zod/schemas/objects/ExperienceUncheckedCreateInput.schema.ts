import { z } from 'zod';
import { ExperienceCreatedescriptionInputObjectSchema } from './ExperienceCreatedescriptionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    company: z.string(),
    position: z.string(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    description: z
      .union([
        z.lazy(() => ExperienceCreatedescriptionInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    resumeId: z.string(),
    order: z.number().optional(),
  })
  .strict();

export const ExperienceUncheckedCreateInputObjectSchema = Schema;
