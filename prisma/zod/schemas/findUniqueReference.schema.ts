import { z } from 'zod';
import { ReferenceWhereUniqueInputObjectSchema } from './objects/ReferenceWhereUniqueInput.schema';

export const ReferenceFindUniqueSchema = z.object({
  where: ReferenceWhereUniqueInputObjectSchema,
});
