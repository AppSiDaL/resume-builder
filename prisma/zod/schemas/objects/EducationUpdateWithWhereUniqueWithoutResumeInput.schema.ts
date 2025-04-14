import { z } from 'zod';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';
import { EducationUpdateWithoutResumeInputObjectSchema } from './EducationUpdateWithoutResumeInput.schema';
import { EducationUncheckedUpdateWithoutResumeInputObjectSchema } from './EducationUncheckedUpdateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationUpdateWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => EducationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EducationUpdateWithoutResumeInputObjectSchema),
        z.lazy(() => EducationUncheckedUpdateWithoutResumeInputObjectSchema),
      ]),
    })
    .strict();

export const EducationUpdateWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
