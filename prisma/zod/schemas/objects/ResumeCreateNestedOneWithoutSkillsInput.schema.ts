import { z } from 'zod';
import { ResumeCreateWithoutSkillsInputObjectSchema } from './ResumeCreateWithoutSkillsInput.schema';
import { ResumeUncheckedCreateWithoutSkillsInputObjectSchema } from './ResumeUncheckedCreateWithoutSkillsInput.schema';
import { ResumeCreateOrConnectWithoutSkillsInputObjectSchema } from './ResumeCreateOrConnectWithoutSkillsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutSkillsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ResumeCreateWithoutSkillsInputObjectSchema),
        z.lazy(() => ResumeUncheckedCreateWithoutSkillsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ResumeCreateOrConnectWithoutSkillsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ResumeCreateNestedOneWithoutSkillsInputObjectSchema = Schema;
