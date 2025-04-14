import { z } from 'zod';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';
import { EducationUpdateWithoutResumeInputObjectSchema } from './EducationUpdateWithoutResumeInput.schema';
import { EducationUncheckedUpdateWithoutResumeInputObjectSchema } from './EducationUncheckedUpdateWithoutResumeInput.schema';
import { EducationCreateWithoutResumeInputObjectSchema } from './EducationCreateWithoutResumeInput.schema';
import { EducationUncheckedCreateWithoutResumeInputObjectSchema } from './EducationUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationUpsertWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => EducationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EducationUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => EducationUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EducationCreateWithoutResumeInputObjectSchema),
        z.lazy(() => EducationUncheckedCreateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const EducationUpsertWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
