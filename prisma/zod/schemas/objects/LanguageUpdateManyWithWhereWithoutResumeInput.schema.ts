import { z } from 'zod';
import { LanguageScalarWhereInputObjectSchema } from './LanguageScalarWhereInput.schema';
import { LanguageUpdateManyMutationInputObjectSchema } from './LanguageUpdateManyMutationInput.schema';
import { LanguageUncheckedUpdateManyWithoutLanguagesInputObjectSchema } from './LanguageUncheckedUpdateManyWithoutLanguagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LanguageUpdateManyWithWhereWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => LanguageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => LanguageUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => LanguageUncheckedUpdateManyWithoutLanguagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LanguageUpdateManyWithWhereWithoutResumeInputObjectSchema = Schema;
