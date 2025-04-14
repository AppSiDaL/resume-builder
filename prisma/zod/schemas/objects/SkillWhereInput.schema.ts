import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ResumeRelationFilterObjectSchema } from './ResumeRelationFilter.schema';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SkillWhereInputObjectSchema),
        z.lazy(() => SkillWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SkillWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SkillWhereInputObjectSchema),
        z.lazy(() => SkillWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    level: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    resumeId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resume: z
      .union([
        z.lazy(() => ResumeRelationFilterObjectSchema),
        z.lazy(() => ResumeWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SkillWhereInputObjectSchema = Schema;
