import { z } from 'zod';
import { EducationCreateWithoutResumeInputObjectSchema } from './EducationCreateWithoutResumeInput.schema';
import { EducationUncheckedCreateWithoutResumeInputObjectSchema } from './EducationUncheckedCreateWithoutResumeInput.schema';
import { EducationCreateOrConnectWithoutResumeInputObjectSchema } from './EducationCreateOrConnectWithoutResumeInput.schema';
import { EducationCreateManyResumeInputEnvelopeObjectSchema } from './EducationCreateManyResumeInputEnvelope.schema';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationUncheckedCreateNestedManyWithoutResumeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EducationCreateWithoutResumeInputObjectSchema),
          z.lazy(() => EducationCreateWithoutResumeInputObjectSchema).array(),
          z.lazy(() => EducationUncheckedCreateWithoutResumeInputObjectSchema),
          z
            .lazy(() => EducationUncheckedCreateWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => EducationCreateOrConnectWithoutResumeInputObjectSchema),
          z
            .lazy(() => EducationCreateOrConnectWithoutResumeInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EducationCreateManyResumeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EducationWhereUniqueInputObjectSchema),
          z.lazy(() => EducationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EducationUncheckedCreateNestedManyWithoutResumeInputObjectSchema =
  Schema;
