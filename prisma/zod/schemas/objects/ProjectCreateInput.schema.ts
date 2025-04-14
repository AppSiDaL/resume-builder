import { z } from 'zod';
import { ResumeCreateNestedOneWithoutProjectsInputObjectSchema } from './ResumeCreateNestedOneWithoutProjectsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    order: z.number().optional(),
    resume: z.lazy(() => ResumeCreateNestedOneWithoutProjectsInputObjectSchema),
  })
  .strict();

export const ProjectCreateInputObjectSchema = Schema;
