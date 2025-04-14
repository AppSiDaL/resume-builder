import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutResumeInputObjectSchema } from './SkillUpdateWithoutResumeInput.schema';
import { SkillUncheckedUpdateWithoutResumeInputObjectSchema } from './SkillUncheckedUpdateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpdateWithWhereUniqueWithoutResumeInput> = z
  .object({
    where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SkillUpdateWithoutResumeInputObjectSchema),
      z.lazy(() => SkillUncheckedUpdateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const SkillUpdateWithWhereUniqueWithoutResumeInputObjectSchema = Schema;
