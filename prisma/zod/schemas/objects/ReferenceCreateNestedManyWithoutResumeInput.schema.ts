import { z } from 'zod';
import { ReferenceCreateWithoutResumeInputObjectSchema } from './ReferenceCreateWithoutResumeInput.schema';
import { ReferenceUncheckedCreateWithoutResumeInputObjectSchema } from './ReferenceUncheckedCreateWithoutResumeInput.schema';
import { ReferenceCreateOrConnectWithoutResumeInputObjectSchema } from './ReferenceCreateOrConnectWithoutResumeInput.schema';
import { ReferenceCreateManyResumeInputEnvelopeObjectSchema } from './ReferenceCreateManyResumeInputEnvelope.schema';
import { ReferenceWhereUniqueInputObjectSchema } from './ReferenceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceCreateNestedManyWithoutResumeInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReferenceCreateWithoutResumeInputObjectSchema),
        z.lazy(() => ReferenceCreateWithoutResumeInputObjectSchema).array(),
        z.lazy(() => ReferenceUncheckedCreateWithoutResumeInputObjectSchema),
        z
          .lazy(() => ReferenceUncheckedCreateWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ReferenceCreateOrConnectWithoutResumeInputObjectSchema),
        z
          .lazy(() => ReferenceCreateOrConnectWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ReferenceCreateManyResumeInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema),
        z.lazy(() => ReferenceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReferenceCreateNestedManyWithoutResumeInputObjectSchema = Schema;
