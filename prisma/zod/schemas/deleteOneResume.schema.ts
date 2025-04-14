import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';

export const ResumeDeleteOneSchema = z.object({
  where: ResumeWhereUniqueInputObjectSchema,
});
