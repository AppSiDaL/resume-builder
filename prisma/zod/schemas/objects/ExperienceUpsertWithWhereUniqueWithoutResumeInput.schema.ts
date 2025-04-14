import { z } from 'zod';
import { ExperienceWhereUniqueInputObjectSchema } from './ExperienceWhereUniqueInput.schema';
import { ExperienceUpdateWithoutResumeInputObjectSchema } from './ExperienceUpdateWithoutResumeInput.schema';
import { ExperienceUncheckedUpdateWithoutResumeInputObjectSchema } from './ExperienceUncheckedUpdateWithoutResumeInput.schema';
import { ExperienceCreateWithoutResumeInputObjectSchema } from './ExperienceCreateWithoutResumeInput.schema';
import { ExperienceUncheckedCreateWithoutResumeInputObjectSchema } from './ExperienceUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceUpsertWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => ExperienceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExperienceUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => ExperienceUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExperienceCreateWithoutResumeInputObjectSchema),
        z.lazy(() => ExperienceUncheckedCreateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const ExperienceUpsertWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
