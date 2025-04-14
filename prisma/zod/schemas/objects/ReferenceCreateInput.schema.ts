import { z } from 'zod';
import { ResumeCreateNestedOneWithoutReferencesInputObjectSchema } from './ResumeCreateNestedOneWithoutReferencesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReferenceCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    company: z.string().optional().nullable(),
    position: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    resume: z.lazy(
      () => ResumeCreateNestedOneWithoutReferencesInputObjectSchema,
    ),
  })
  .strict();

export const ReferenceCreateInputObjectSchema = Schema;
