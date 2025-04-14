"use client";

import { memo } from "react";
import { ModernTemplate } from "./resume-templates/modern-template";
import { ClassicTemplate } from "./resume-templates/classic-template";
import { MinimalTemplate } from "./resume-templates/minimal-template";
import { ProfessionalTemplate } from "./resume-templates/professional-template";
import { CarlaRodriguezTemplate } from "./resume-templates/carla-rodriguez-template";
import { ClaudiaAlvarezTemplate } from "./resume-templates/claudia-alvarez-template";
import {
  PersonalInfo,
  Education,
  Experience,
  Skill,
  Certification,
  Language,
  Project,
  Reference,
} from "@/lib/types";

interface ResumePreviewProps {
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

export const ResumePreview = memo(function ResumePreview({
  templateId,
  personalInfo,
  educations,
  experiences,
  skills,
  certifications,
  profileImage,
}: Omit<ResumePreviewProps, "languages" | "projects" | "references">) {
  console.log(templateId);
  switch (templateId) {
    case "classic":
      return (
        <ClassicTemplate
          personalInfo={personalInfo}
          educations={educations}
          experiences={experiences}
          skills={skills}
          certifications={certifications}
        />
      );
    case "minimal":
      return (
        <MinimalTemplate
          personalInfo={personalInfo}
          educations={educations}
          experiences={experiences}
          skills={skills}
          certifications={certifications}
        />
      );
    case "professional":
      return (
        <ProfessionalTemplate
          personalInfo={personalInfo}
          educations={educations}
          experiences={experiences}
          skills={skills}
          certifications={certifications}
        />
      );
    case "andrea-flores":
      return (
        <CarlaRodriguezTemplate
          personalInfo={personalInfo}
          educations={educations}
          experiences={experiences}
          skills={skills}
          certifications={certifications}
          profileImage={profileImage}
        />
      );
    case "ana-sanchez":
      return (
        <ClaudiaAlvarezTemplate
          personalInfo={personalInfo}
          educations={educations}
          experiences={experiences}
          skills={skills}
          certifications={certifications}
          profileImage={profileImage}
        />
      );
    // Add cases for other templates
    case "modern":
    default:
      return (
        <ModernTemplate
          personalInfo={personalInfo}
          educations={educations}
          experiences={experiences}
          skills={skills}
          certifications={certifications}
        />
      );
  }
});
