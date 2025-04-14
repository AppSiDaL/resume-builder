import { z } from 'zod';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillCreateWithoutResumeInputObjectSchema } from './SkillCreateWithoutResumeInput.schema';
import { SkillUncheckedCreateWithoutResumeInputObjectSchema } from './SkillUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillCreateOrConnectWithoutResumeInput> = z
  .object({
    where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SkillCreateWithoutResumeInputObjectSchema),
      z.lazy(() => SkillUncheckedCreateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const SkillCreateOrConnectWithoutResumeInputObjectSchema = Schema;
