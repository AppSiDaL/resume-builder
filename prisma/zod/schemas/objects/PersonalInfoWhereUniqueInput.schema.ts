import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalInfoWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    resumeId: z.string().optional(),
  })
  .strict();

export const PersonalInfoWhereUniqueInputObjectSchema = Schema;
