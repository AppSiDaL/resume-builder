import { z } from 'zod';
import { ResumeCreateWithoutCertificationsInputObjectSchema } from './ResumeCreateWithoutCertificationsInput.schema';
import { ResumeUncheckedCreateWithoutCertificationsInputObjectSchema } from './ResumeUncheckedCreateWithoutCertificationsInput.schema';
import { ResumeCreateOrConnectWithoutCertificationsInputObjectSchema } from './ResumeCreateOrConnectWithoutCertificationsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutCertificationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ResumeCreateWithoutCertificationsInputObjectSchema),
          z.lazy(
            () => ResumeUncheckedCreateWithoutCertificationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ResumeCreateOrConnectWithoutCertificationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ResumeCreateNestedOneWithoutCertificationsInputObjectSchema =
  Schema;
