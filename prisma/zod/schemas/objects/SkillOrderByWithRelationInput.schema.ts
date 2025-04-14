import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ResumeOrderByWithRelationInputObjectSchema } from './ResumeOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    level: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    resumeId: z.lazy(() => SortOrderSchema).optional(),
    resume: z.lazy(() => ResumeOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const SkillOrderByWithRelationInputObjectSchema = Schema;
