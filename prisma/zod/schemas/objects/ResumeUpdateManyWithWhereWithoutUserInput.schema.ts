import { z } from 'zod';
import { ResumeScalarWhereInputObjectSchema } from './ResumeScalarWhereInput.schema';
import { ResumeUpdateManyMutationInputObjectSchema } from './ResumeUpdateManyMutationInput.schema';
import { ResumeUncheckedUpdateManyWithoutResumesInputObjectSchema } from './ResumeUncheckedUpdateManyWithoutResumesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ResumeUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => ResumeScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ResumeUpdateManyMutationInputObjectSchema),
      z.lazy(() => ResumeUncheckedUpdateManyWithoutResumesInputObjectSchema),
    ]),
  })
  .strict();

export const ResumeUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
