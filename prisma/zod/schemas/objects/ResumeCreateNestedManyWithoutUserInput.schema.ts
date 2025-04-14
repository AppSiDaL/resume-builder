import { z } from 'zod';
import { ResumeCreateWithoutUserInputObjectSchema } from './ResumeCreateWithoutUserInput.schema';
import { ResumeUncheckedCreateWithoutUserInputObjectSchema } from './ResumeUncheckedCreateWithoutUserInput.schema';
import { ResumeCreateOrConnectWithoutUserInputObjectSchema } from './ResumeCreateOrConnectWithoutUserInput.schema';
import { ResumeCreateManyUserInputEnvelopeObjectSchema } from './ResumeCreateManyUserInputEnvelope.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ResumeCreateWithoutUserInputObjectSchema),
        z.lazy(() => ResumeCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ResumeCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => ResumeCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ResumeCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ResumeWhereUniqueInputObjectSchema),
        z.lazy(() => ResumeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ResumeCreateNestedManyWithoutUserInputObjectSchema = Schema;
