import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutSkillsInputObjectSchema } from './ResumeCreateWithoutSkillsInput.schema';
import { ResumeUncheckedCreateWithoutSkillsInputObjectSchema } from './ResumeUncheckedCreateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutSkillsInput> = z
  .object({
    where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ResumeCreateWithoutSkillsInputObjectSchema),
      z.lazy(() => ResumeUncheckedCreateWithoutSkillsInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeCreateOrConnectWithoutSkillsInputObjectSchema = Schema;
