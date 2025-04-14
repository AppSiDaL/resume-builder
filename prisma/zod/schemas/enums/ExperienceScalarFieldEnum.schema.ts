import { z } from 'zod';

export const ExperienceScalarFieldEnumSchema = z.enum([
  'id',
  'company',
  'position',
  'startDate',
  'endDate',
  'location',
  'description',
  'resumeId',
  'order',
]);
