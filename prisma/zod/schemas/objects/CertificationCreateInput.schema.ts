import { z } from 'zod';
import { ResumeCreateNestedOneWithoutCertificationsInputObjectSchema } from './ResumeCreateNestedOneWithoutCertificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    issuer: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    order: z.number().optional(),
    resume: z.lazy(
      () => ResumeCreateNestedOneWithoutCertificationsInputObjectSchema,
    ),
  })
  .strict();

export const CertificationCreateInputObjectSchema = Schema;
