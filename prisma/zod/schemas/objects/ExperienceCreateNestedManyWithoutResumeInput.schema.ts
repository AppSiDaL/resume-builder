import { z } from 'zod';
import { ExperienceCreateWithoutResumeInputObjectSchema } from './ExperienceCreateWithoutResumeInput.schema';
import { ExperienceUncheckedCreateWithoutResumeInputObjectSchema } from './ExperienceUncheckedCreateWithoutResumeInput.schema';
import { ExperienceCreateOrConnectWithoutResumeInputObjectSchema } from './ExperienceCreateOrConnectWithoutResumeInput.schema';
import { ExperienceCreateManyResumeInputEnvelopeObjectSchema } from './ExperienceCreateManyResumeInputEnvelope.schema';
import { ExperienceWhereUniqueInputObjectSchema } from './ExperienceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceCreateNestedManyWithoutResumeInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExperienceCreateWithoutResumeInputObjectSchema),
        z.lazy(() => ExperienceCreateWithoutResumeInputObjectSchema).array(),
        z.lazy(() => ExperienceUncheckedCreateWithoutResumeInputObjectSchema),
        z
          .lazy(() => ExperienceUncheckedCreateWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExperienceCreateOrConnectWithoutResumeInputObjectSchema),
        z
          .lazy(() => ExperienceCreateOrConnectWithoutResumeInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ExperienceCreateManyResumeInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema),
        z.lazy(() => ExperienceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExperienceCreateNestedManyWithoutResumeInputObjectSchema = Schema;
