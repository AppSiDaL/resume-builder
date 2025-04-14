import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    fullName: z.string(),
    title: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    website: z.string().optional().nullable(),
    summary: z.string().optional().nullable(),
    resumeId: z.string(),
  })
  .strict();

export const PersonalInfoUncheckedCreateInputObjectSchema = Schema;
