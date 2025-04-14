import { z } from 'zod';
import { ResumeUpdateInputObjectSchema } from './objects/ResumeUpdateInput.schema';
import { ResumeUncheckedUpdateInputObjectSchema } from './objects/ResumeUncheckedUpdateInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';

export const ResumeUpdateOneSchema = z.object({
  data: z.union([
    ResumeUpdateInputObjectSchema,
    ResumeUncheckedUpdateInputObjectSchema,
  ]),
  where: ResumeWhereUniqueInputObjectSchema,
});
