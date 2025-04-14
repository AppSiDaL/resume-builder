import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutResumesInputObjectSchema } from './UserCreateWithoutResumesInput.schema';
import { UserUncheckedCreateWithoutResumesInputObjectSchema } from './UserUncheckedCreateWithoutResumesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutResumesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutResumesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutResumesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutResumesInputObjectSchema = Schema;
