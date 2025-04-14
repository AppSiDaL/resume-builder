import { z } from 'zod';

export const ResumeScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'templateId',
  'createdAt',
  'updatedAt',
  'userId',
]);
