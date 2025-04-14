import { z } from 'zod';
import { ExperienceWhereUniqueInputObjectSchema } from './ExperienceWhereUniqueInput.schema';
import { ExperienceUpdateWithoutResumeInputObjectSchema } from './ExperienceUpdateWithoutResumeInput.schema';
import { ExperienceUncheckedUpdateWithoutResumeInputObjectSchema } from './ExperienceUncheckedUpdateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceUpdateWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => ExperienceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExperienceUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => ExperienceUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const ExperienceUpdateWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
