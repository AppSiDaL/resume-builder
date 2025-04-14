import { z } from 'zod';
import { CertificationWhereUniqueInputObjectSchema } from './CertificationWhereUniqueInput.schema';
import { CertificationUpdateWithoutResumeInputObjectSchema } from './CertificationUpdateWithoutResumeInput.schema';
import { CertificationUncheckedUpdateWithoutResumeInputObjectSchema } from './CertificationUncheckedUpdateWithoutResumeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CertificationUpdateWithWhereUniqueWithoutResumeInput> =
  z
    .object({
      where: z.lazy(() => CertificationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CertificationUpdateWithoutResumeInputObjectSchema),
        z.lazy(
          () => CertificationUncheckedUpdateWithoutResumeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CertificationUpdateWithWhereUniqueWithoutResumeInputObjectSchema =
  Schema;
