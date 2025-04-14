import { z } from 'zod';
import { EducationScalarWhereInputObjectSchema } from './EducationScalarWhereInput.schema';
import { EducationUpdateManyMutationInputObjectSchema } from './EducationUpdateManyMutationInput.schema';
import { EducationUncheckedUpdateManyWithoutEducationsInputObjectSchema } from './EducationUncheckedUpdateManyWithoutEducationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EducationUpdateManyWithWhereWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => EducationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => EducationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => EducationUncheckedUpdateManyWithoutEducationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EducationUpdateManyWithWhereWithoutResumeInputObjectSchema =
  Schema;
