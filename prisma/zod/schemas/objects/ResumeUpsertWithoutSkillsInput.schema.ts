import { z } from 'zod';
import { ResumeUpdateWithoutSkillsInputObjectSchema } from './ResumeUpdateWithoutSkillsInput.schema';
import { ResumeUncheckedUpdateWithoutSkillsInputObjectSchema } from './ResumeUncheckedUpdateWithoutSkillsInput.schema';
import { ResumeCreateWithoutSkillsInputObjectSchema } from './ResumeCreateWithoutSkillsInput.schema';
import { ResumeUncheckedCreateWithoutSkillsInputObjectSchema } from './ResumeUncheckedCreateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpsertWithoutSkillsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ResumeUpdateWithoutSkillsInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateWithoutSkillsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutSkillsInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutSkillsInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpsertWithoutSkillsInputObjectSchema = Schema;
