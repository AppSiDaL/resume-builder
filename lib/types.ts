import { z } from "zod";
import { PersonalInfoCreateInputObjectSchema } from "@/prisma/zod/schemas/objects/PersonalInfoCreateInput.schema";
import { EducationCreateInputObjectSchema } from "@/prisma/zod/schemas/objects/EducationCreateInput.schema";
import { ExperienceCreateInputObjectSchema } from "@/prisma/zod/schemas/objects/ExperienceCreateInput.schema";
import { SkillCreateInputObjectSchema } from "@/prisma/zod/schemas/objects/SkillCreateInput.schema";
import { CertificationCreateInputObjectSchema } from "@/prisma/zod/schemas/objects/CertificationCreateInput.schema";
import { LanguageCreateInputObjectSchema } from "@/prisma/zod/schemas/objects/LanguageCreateInput.schema";
import { ProjectCreateInputObjectSchema } from "@/prisma/zod/schemas/objects/ProjectCreateInput.schema";
import { ReferenceCreateInputObjectSchema } from "@/prisma/zod/schemas/objects/ReferenceCreateInput.schema";
import { UserCreateInputObjectSchema } from "@/prisma/zod/schemas";

export type PersonalInfo = Omit<z.infer<typeof PersonalInfoCreateInputObjectSchema>, "resume">;
export type Education = Omit<z.infer<typeof EducationCreateInputObjectSchema>, "resume">;
export type Experience = Omit<z.infer<typeof ExperienceCreateInputObjectSchema>, "resume">;
export type Skill = Omit<z.infer<typeof SkillCreateInputObjectSchema>, "resume">;
export type Certification = Omit<z.infer<typeof CertificationCreateInputObjectSchema>, "resume">;
export type Language = Omit<z.infer<typeof LanguageCreateInputObjectSchema>, "resume">;
export type Project = Omit<z.infer<typeof ProjectCreateInputObjectSchema>, "resume">;
export type Reference = Omit<z.infer<typeof ReferenceCreateInputObjectSchema>, "resume">;
export type User = Omit<z.infer<typeof UserCreateInputObjectSchema>, "resume">;

export interface ResumeData {
  templateId: string;
  personalInfo: PersonalInfo;
  educations: Education[];
  experiences: Experience[];
  skills: Skill[];
  certifications: Certification[];
  languages?: Language[];
  projects?: Project[];
  references?: Reference[];
  profileImage?: string;
}