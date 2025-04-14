import { z } from 'zod';
import { UserCreateWithoutResumesInputObjectSchema } from './UserCreateWithoutResumesInput.schema';
import { UserUncheckedCreateWithoutResumesInputObjectSchema } from './UserUncheckedCreateWithoutResumesInput.schema';
import { UserCreateOrConnectWithoutResumesInputObjectSchema } from './UserCreateOrConnectWithoutResumesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutResumesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutResumesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutResumesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutResumesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutResumesInputObjectSchema = Schema;
