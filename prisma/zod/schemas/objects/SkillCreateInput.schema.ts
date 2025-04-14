import { z } from 'zod';
import { ResumeCreateNestedOneWithoutSkillsInputObjectSchema } from './ResumeCreateNestedOneWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    level: z.number().optional().nullable(),
    resume: z.lazy(() => ResumeCreateNestedOneWithoutSkillsInputObjectSchema),
  })
  .strict();

export const SkillCreateInputObjectSchema = Schema;
