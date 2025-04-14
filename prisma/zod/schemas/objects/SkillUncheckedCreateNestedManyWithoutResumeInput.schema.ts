import { z } from 'zod';
import { SkillCreateWithoutResumeInputObjectSchema } from './SkillCreateWithoutResumeInput.schema';
import { SkillUncheckedCreateWithoutResumeInputObjectSchema } from './SkillUncheckedCreateWithoutResumeInput.schema';
import { SkillCreateOrConnectWithoutResumeInputObjectSchema } from './SkillCreateOrConnectWithoutResumeInput.schema';
import { SkillCreateManyResumeInputEnvelopeObjectSchema } from './SkillCreateManyResumeInputEnvelope.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SkillUncheckedCreateNestedManyWithoutResumeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SkillCreateWithoutResumeInputObjectSchema),
          z.lazy(() => SkillCreateWithoutResumeInputObjectSchema).array(),
          z.lazy(() => SkillUncheckedCreateWithoutResumeInputObjectSchema),
          z
            .lazy(() => SkillUncheckedCreateWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SkillCreateOrConnectWithoutResumeInputObjectSchema),
          z
            .lazy(() => SkillCreateOrConnectWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SkillCreateManyResumeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SkillWhereUniqueInputObjectSchema),
          z.lazy(() => SkillWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SkillUncheckedCreateNestedManyWithoutResumeInputObjectSchema =
  Schema;
