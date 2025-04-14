import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    institution: z.string(),
    degree: z.string().optional().nullable(),
    fieldOfStudy: z.string().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    gpa: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    resumeId: z.string(),
    order: z.number().optional(),
  })
  .strict();

export const EducationUncheckedCreateInputObjectSchema = Schema;
