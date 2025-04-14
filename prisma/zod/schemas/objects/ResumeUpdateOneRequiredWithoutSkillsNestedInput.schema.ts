import { z } from 'zod';
import { ResumeCreateWithoutSkillsInputObjectSchema } from './ResumeCreateWithoutSkillsInput.schema';
import { ResumeUncheckedCreateWithoutSkillsInputObjectSchema } from './ResumeUncheckedCreateWithoutSkillsInput.schema';
import { ResumeCreateOrConnectWithoutSkillsInputObjectSchema } from './ResumeCreateOrConnectWithoutSkillsInput.schema';
import { ResumeUpsertWithoutSkillsInputObjectSchema } from './ResumeUpsertWithoutSkillsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutSkillsInputObjectSchema } from './ResumeUpdateWithoutSkillsInput.schema';
import { ResumeUncheckedUpdateWithoutSkillsInputObjectSchema } from './ResumeUncheckedUpdateWithoutSkillsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutSkillsNestedInput> =
  z
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
      upsert: z
        .lazy(() => ResumeUpsertWithoutSkillsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithoutSkillsInputObjectSchema),
          z.lazy(() => ResumeUncheckedUpdateWithoutSkillsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ResumeUpdateOneRequiredWithoutSkillsNestedInputObjectSchema =
  Schema;
