import { z } from 'zod';
import { LanguageCreateWithoutResumeInputObjectSchema } from './LanguageCreateWithoutResumeInput.schema';
import { LanguageUncheckedCreateWithoutResumeInputObjectSchema } from './LanguageUncheckedCreateWithoutResumeInput.schema';
import { LanguageCreateOrConnectWithoutResumeInputObjectSchema } from './LanguageCreateOrConnectWithoutResumeInput.schema';
import { LanguageCreateManyResumeInputEnvelopeObjectSchema } from './LanguageCreateManyResumeInputEnvelope.schema';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageUncheckedCreateNestedManyWithoutResumeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LanguageCreateWithoutResumeInputObjectSchema),
          z.lazy(() => LanguageCreateWithoutResumeInputObjectSchema).array(),
          z.lazy(() => LanguageUncheckedCreateWithoutResumeInputObjectSchema),
          z
            .lazy(() => LanguageUncheckedCreateWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LanguageCreateOrConnectWithoutResumeInputObjectSchema),
          z
            .lazy(() => LanguageCreateOrConnectWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LanguageCreateManyResumeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LanguageWhereUniqueInputObjectSchema),
          z.lazy(() => LanguageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LanguageUncheckedCreateNestedManyWithoutResumeInputObjectSchema =
  Schema;
