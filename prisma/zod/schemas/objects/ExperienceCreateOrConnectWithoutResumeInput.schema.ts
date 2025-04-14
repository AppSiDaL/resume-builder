import { z } from 'zod';
import { ExperienceWhereUniqueInputObjectSchema } from './ExperienceWhereUniqueInput.schema';
import { ExperienceCreateWithoutResumeInputObjectSchema } from './ExperienceCreateWithoutResumeInput.schema';
import { ExperienceUncheckedCreateWithoutResumeInputObjectSchema } from './ExperienceUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExperienceCreateOrConnectWithoutResumeInput> = z
  .object({
    where: z.lazy(() => ExperienceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExperienceCreateWithoutResumeInputObjectSchema),
      z.lazy(() => ExperienceUncheckedCreateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const ExperienceCreateOrConnectWithoutResumeInputObjectSchema = Schema;
