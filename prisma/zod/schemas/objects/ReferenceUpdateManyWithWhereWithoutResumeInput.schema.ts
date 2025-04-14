import { z } from 'zod';
import { ReferenceScalarWhereInputObjectSchema } from './ReferenceScalarWhereInput.schema';
import { ReferenceUpdateManyMutationInputObjectSchema } from './ReferenceUpdateManyMutationInput.schema';
import { ReferenceUncheckedUpdateManyWithoutReferencesInputObjectSchema } from './ReferenceUncheckedUpdateManyWithoutReferencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceUpdateManyWithWhereWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => ReferenceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ReferenceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ReferenceUncheckedUpdateManyWithoutReferencesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReferenceUpdateManyWithWhereWithoutResumeInputObjectSchema =
  Schema;
