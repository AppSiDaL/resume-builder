import { z } from 'zod';
import { ReferenceUpdateManyMutationInputObjectSchema } from './objects/ReferenceUpdateManyMutationInput.schema';
import { ReferenceWhereInputObjectSchema } from './objects/ReferenceWhereInput.schema';

export const ReferenceUpdateManySchema = z.object({
  data: ReferenceUpdateManyMutationInputObjectSchema,
  where: ReferenceWhereInputObjectSchema.optional(),
});
