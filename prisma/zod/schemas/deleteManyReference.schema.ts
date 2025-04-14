import { z } from 'zod';
import { ReferenceWhereInputObjectSchema } from './objects/ReferenceWhereInput.schema';

export const ReferenceDeleteManySchema = z.object({
  where: ReferenceWhereInputObjectSchema.optional(),
});
