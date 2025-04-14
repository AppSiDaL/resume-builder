import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    institution: z.literal(true).optional(),
    degree: z.literal(true).optional(),
    fieldOfStudy: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    location: z.literal(true).optional(),
    gpa: z.literal(true).optional(),
    description: z.literal(true).optional(),
    resumeId: z.literal(true).optional(),
    order: z.literal(true).optional(),
  })
  .strict();

export const EducationMaxAggregateInputObjectSchema = Schema;
