import { z } from 'zod';

export const SkillScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'level',
  'resumeId',
]);
