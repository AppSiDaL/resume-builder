import { z } from 'zod';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';
import { EducationCreateWithoutResumeInputObjectSchema } from './EducationCreateWithoutResumeInput.schema';
import { EducationUncheckedCreateWithoutResumeInputObjectSchema } from './EducationUncheckedCreateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationCreateOrConnectWithoutResumeInput> = z
  .object({
    where: z.lazy(() => EducationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EducationCreateWithoutResumeInputObjectSchema),
      z.lazy(() => EducationUncheckedCreateWithoutResumeInputObjectSchema),
    ]),
  })
  .strict();

export const EducationCreateOrConnectWithoutResumeInputObjectSchema = Schema;
