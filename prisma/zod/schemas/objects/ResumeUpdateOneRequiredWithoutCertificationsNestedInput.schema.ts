import { z } from 'zod';
import { ResumeCreateWithoutCertificationsInputObjectSchema } from './ResumeCreateWithoutCertificationsInput.schema';
import { ResumeUncheckedCreateWithoutCertificationsInputObjectSchema } from './ResumeUncheckedCreateWithoutCertificationsInput.schema';
import { ResumeCreateOrConnectWithoutCertificationsInputObjectSchema } from './ResumeCreateOrConnectWithoutCertificationsInput.schema';
import { ResumeUpsertWithoutCertificationsInputObjectSchema } from './ResumeUpsertWithoutCertificationsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutCertificationsInputObjectSchema } from './ResumeUpdateWithoutCertificationsInput.schema';
import { ResumeUncheckedUpdateWithoutCertificationsInputObjectSchema } from './ResumeUncheckedUpdateWithoutCertificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutCertificationsNestedInput> =
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
      upsert: z
        .lazy(() => ResumeUpsertWithoutCertificationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ResumeUpdateWithoutCertificationsInputObjectSchema),
          z.lazy(
            () => ResumeUncheckedUpdateWithoutCertificationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ResumeUpdateOneRequiredWithoutCertificationsNestedInputObjectSchema =
  Schema;
