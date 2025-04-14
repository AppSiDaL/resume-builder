import { z } from 'zod';
import { ResumeCreateInputObjectSchema } from './objects/ResumeCreateInput.schema';
import { ResumeUncheckedCreateInputObjectSchema } from './objects/ResumeUncheckedCreateInput.schema';

export const ResumeCreateOneSchema = z.object({
  data: z.union([
    ResumeCreateInputObjectSchema,
    ResumeUncheckedCreateInputObjectSchema,
  ]),
});
