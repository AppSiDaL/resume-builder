import { z } from 'zod';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';

export const ResumeFindUniqueSchema = z.object({
  where: ResumeWhereUniqueInputObjectSchema,
});
