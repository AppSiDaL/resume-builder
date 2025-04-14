import { z } from 'zod';
import { CertificationWhereInputObjectSchema } from './CertificationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationListRelationFilter> = z
  .object({
    every: z.lazy(() => CertificationWhereInputObjectSchema).optional(),
    some: z.lazy(() => CertificationWhereInputObjectSchema).optional(),
    none: z.lazy(() => CertificationWhereInputObjectSchema).optional(),
  })
  .strict();

export const CertificationListRelationFilterObjectSchema = Schema;
