import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutCertificationsInputObjectSchema } from './ResumeCreateWithoutCertificationsInput.schema';
import { ResumeUncheckedCreateWithoutCertificationsInputObjectSchema } from './ResumeUncheckedCreateWithoutCertificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutCertificationsInput> =
  z
    .object({
      where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ResumeCreateWithoutCertificationsInputObjectSchema),
        z.lazy(
          () => ResumeUncheckedCreateWithoutCertificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ResumeCreateOrConnectWithoutCertificationsInputObjectSchema =
  Schema;
