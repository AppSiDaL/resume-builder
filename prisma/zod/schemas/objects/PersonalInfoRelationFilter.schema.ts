import { z } from 'zod';
import { PersonalInfoWhereInputObjectSchema } from './PersonalInfoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoRelationFilter> = z
  .object({
    is: z
      .lazy(() => PersonalInfoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PersonalInfoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PersonalInfoRelationFilterObjectSchema = Schema;
