import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutResumeInputObjectSchema } from './SkillUpdateWithoutResumeInput.schema';
import { SkillUncheckedUpdateWithoutResumeInputObjectSchema } from './SkillUncheckedUpdateWithoutResumeInput.schema';
import { SkillCreateWithoutResumeInputObjectSchema } from './SkillCreateWithoutResumeInput.schema';
import { SkillUncheckedCreateWithoutResumeInputObjectSchema } from './SkillUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUpsertWithWhereUniqueWithoutResumeInput> = z
  .object({
    where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SkillUpdateWithoutResumeInputObjectSchema),
      z.lazy(() => SkillUncheckedUpdateWithoutResumeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SkillCreateWithoutResumeInputObjectSchema),
      z.lazy(() => SkillUncheckedCreateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const SkillUpsertWithWhereUniqueWithoutResumeInputObjectSchema = Schema;
