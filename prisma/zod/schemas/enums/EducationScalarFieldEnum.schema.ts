import { z } from 'zod';

export const EducationScalarFieldEnumSchema = z.enum([
  'id',
  'institution',
  'degree',
  'fieldOfStudy',
  'startDate',
  'endDate',
  'location',
  'gpa',
  'description',
  'resumeId',
  'order',
]);
