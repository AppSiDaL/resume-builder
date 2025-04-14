import { z } from 'zod';
import { ExperienceCreatedescriptionInputObjectSchema } from './ExperienceCreatedescriptionInput.schema';
import { ResumeCreateNestedOneWithoutExperiencesInputObjectSchema } from './ResumeCreateNestedOneWithoutExperiencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceCreateInput> = z
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
    order: z.number().optional(),
    resume: z.lazy(
      () => ResumeCreateNestedOneWithoutExperiencesInputObjectSchema,
    ),
  })
  .strict();

export const ExperienceCreateInputObjectSchema = Schema;
