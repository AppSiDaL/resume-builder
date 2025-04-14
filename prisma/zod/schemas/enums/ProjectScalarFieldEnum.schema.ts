import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'url',
  'startDate',
  'endDate',
  'resumeId',
  'order',
]);
