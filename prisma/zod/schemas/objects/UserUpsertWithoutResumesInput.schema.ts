import { z } from 'zod';
import { UserUpdateWithoutResumesInputObjectSchema } from './UserUpdateWithoutResumesInput.schema';
import { UserUncheckedUpdateWithoutResumesInputObjectSchema } from './UserUncheckedUpdateWithoutResumesInput.schema';
import { UserCreateWithoutResumesInputObjectSchema } from './UserCreateWithoutResumesInput.schema';
import { UserUncheckedCreateWithoutResumesInputObjectSchema } from './UserUncheckedCreateWithoutResumesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutResumesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutResumesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutResumesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutResumesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutResumesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutResumesInputObjectSchema = Schema;
