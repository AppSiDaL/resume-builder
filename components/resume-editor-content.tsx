"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PersonalInfoForm } from "@/components/forms/personal-info-form";
import { EducationForm } from "@/components/forms/education-form";
import { ExperienceForm } from "@/components/forms/experience-form";
import { SkillsForm } from "@/components/forms/skills-form";
import { CertificationsForm } from "@/components/forms/certifications-form";
import { LanguagesForm } from "@/components/forms/languages-form";
import { ProjectsForm } from "@/components/forms/projects-form";
import { ReferencesForm } from "@/components/forms/references-form";
import { TemplateSelector } from "@/components/template-selector";
import { ResumePreview } from "@/components/resume-preview";
import { Eye, EyeOff, Download, Save } from "lucide-react";
import { updateResume } from "@/actions/resume-actions";
import { useResume } from "@/context/resume-context";
import {
  PersonalInfo,
  Education,
  Experience,
  Skill,
  Certification,
  ResumeData,
  User,
} from "@/lib/types";
import { TemplateType } from "@/context/resume-context";

interface ResumeEditorContentProps {
  resume: ResumeData;
  user: User;
}

export function ResumeEditorContent({
  resume,
  user,
}: ResumeEditorContentProps) {
  const router = useRouter();
  const { state, dispatch } = useResume();
  const [activeTab, setActiveTab] = useState("personal");
  const [title, setTitle] = useState(resume.title);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSave = async () => {
    setIsSaving(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("resumeId", resume.id);
      formData.append("title", title); // Aquí sí se usa title
      formData.append("templateId", state.template);
      formData.append("personalInfo", JSON.stringify(state.personalInfo));
      formData.append("educations", JSON.stringify(state.educations));
      formData.append("experiences", JSON.stringify(state.experiences));
      formData.append("skills", JSON.stringify(state.skills));
      formData.append("certifications", JSON.stringify(state.certifications));
      formData.append("languages", JSON.stringify(resume.languages || []));
      formData.append("projects", JSON.stringify(resume.projects || []));
      formData.append("references", JSON.stringify(resume.references || []));

      const result = await updateResume(formData);

      if (!result.success) {
        setError(result.message);
      } else {
        setSuccess("Resume saved successfully");
        router.refresh();
      }
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "An error occurred while saving your resume");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = () => {
    alert("PDF download functionality would be implemented here");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-3xl font-bold bg-transparent border-0 focus:outline-none focus:ring-0 w-full"
        />
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => dispatch({ type: "TOGGLE_PREVIEW" })}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            {state.showPreview ? (
              <>
                <EyeOff className="h-4 w-4" /> Ocultar Preview
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" /> Mostrar Preview
              </>
            )}
          </Button>

          <Button
            variant="outline"
            onClick={handleDownload}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <Download className="h-4 w-4" /> Descargar PDF
          </Button>
          <Button
            onClick={handleSave}
            className="bg-red-600 hover:bg-red-700 flex items-center gap-2"
            disabled={isSaving}
          >
            <Save className="h-4 w-4" /> {isSaving ? "Guardando..." : "Guardar"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>
      )}
      {success && (
        <div className="bg-green-50 text-green-600 p-4 rounded-md">
          {success}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={state.showPreview ? "lg:col-span-1" : "lg:col-span-2"}>
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-6">
                <TabsTrigger value="personal" className="text-xs sm:text-sm">
                  Personal
                </TabsTrigger>
                <TabsTrigger value="education" className="text-xs sm:text-sm">
                  Educación
                </TabsTrigger>
                <TabsTrigger value="experience" className="text-xs sm:text-sm">
                  Experiencia
                </TabsTrigger>
                <TabsTrigger value="skills" className="text-xs sm:text-sm">
                  Habilidades
                </TabsTrigger>
                <TabsTrigger
                  value="certifications"
                  className="text-xs sm:text-sm"
                >
                  Certificaciones
                </TabsTrigger>
                <TabsTrigger value="languages" className="text-xs sm:text-sm">
                  Idiomas
                </TabsTrigger>
                <TabsTrigger value="projects" className="text-xs sm:text-sm">
                  Proyectos
                </TabsTrigger>
                <TabsTrigger value="references" className="text-xs sm:text-sm">
                  Referencias
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <PersonalInfoFormWithContext />
              </TabsContent>

              <TabsContent value="education">
                <EducationFormWithContext />
              </TabsContent>

              <TabsContent value="experience">
                <ExperienceFormWithContext />
              </TabsContent>

              <TabsContent value="skills">
                <SkillsFormWithContext />
              </TabsContent>

              <TabsContent value="certifications">
                <CertificationsFormWithContext />
              </TabsContent>

              <TabsContent value="languages">
                <LanguagesForm
                  languages={resume.languages || []}
                  setLanguages={() => {}}
                />
              </TabsContent>

              <TabsContent value="projects">
                <ProjectsForm
                  projects={resume.projects || []}
                  setProjects={() => {}}
                />
              </TabsContent>

              <TabsContent value="references">
                <ReferencesForm
                  references={resume.references || []}
                  setReferences={() => {}}
                />
              </TabsContent>
            </Tabs>
          </Card>

          {!state.showPreview && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Plantilla</h2>
              <TemplateSelectorWithContext />
            </div>
          )}
        </div>

        {state.showPreview && (
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <ResumePreviewWithContext profileImage={user.image} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PersonalInfoFormWithContext() {
  const { state, dispatch } = useResume();

  const setPersonalInfo = (info: Partial<PersonalInfo>) => {
    dispatch({ type: "SET_PERSONAL_INFO", payload: info });
  };

  return (
    <PersonalInfoForm
      personalInfo={state.personalInfo}
      setPersonalInfo={setPersonalInfo}
    />
  );
}

function EducationFormWithContext() {
  const { state, dispatch } = useResume();

  const setEducations = (educations: Education[]) => {
    educations.forEach((education) => {
      const existing = state.educations.find((e) => e.id === education.id);
      if (existing) {
        dispatch({ type: "UPDATE_EDUCATION", payload: education });
      } else {
        dispatch({
          type: "ADD_EDUCATION",
          payload: {
            institution: education.institution,
            degree: education.degree,
            fieldOfStudy: education.fieldOfStudy,
            startDate: education.startDate,
            endDate: education.endDate,
            location: education.location,
            gpa: education.gpa,
          },
        });
      }
    });

    // Remove educations that are no longer in the list
    state.educations.forEach((education) => {
      if (!educations.find((e) => e.id === education.id)) {
        dispatch({ type: "REMOVE_EDUCATION", payload: education.id });
      }
    });
  };
  return (
    <EducationForm
      educations={state.educations}
      setEducations={setEducations}
    />
  );
}

function ExperienceFormWithContext() {
  const { state, dispatch } = useResume();

  const setExperiences = (experiences: Experience[]) => {
    // Similar to education, this is simplified
    experiences.forEach((experience) => {
      const existing = state.experiences.find((e) => e.id === experience.id);
      if (existing) {
        dispatch({ type: "UPDATE_EXPERIENCE", payload: experience });
      } else {
        dispatch({
          type: "ADD_EXPERIENCE",
          payload: {
            company: experience.company,
            position: experience.position,
            startDate: experience.startDate,
            endDate: experience.endDate,
            location: experience.location,
            description: experience.description,
          },
        });
      }
    });

    state.experiences.forEach((experience) => {
      if (!experiences.find((e) => e.id === experience.id)) {
        dispatch({ type: "REMOVE_EXPERIENCE", payload: experience.id });
      }
    });
  };

  return (
    <ExperienceForm
      experiences={state.experiences}
      setExperiences={setExperiences}
    />
  );
}

function SkillsFormWithContext() {
  const { state, dispatch } = useResume();

  const setSkills = (skills: Skill[]) => {
    skills.forEach((skill) => {
      const existing = state.skills.find((s) => s.id === skill.id);
      if (!existing) {
        dispatch({ type: "ADD_SKILL", payload: skill.name });
      }
    });

    state.skills.forEach((skill) => {
      if (!skills.find((s) => s.id === skill.id)) {
        dispatch({ type: "REMOVE_SKILL", payload: skill.id });
      }
    });
  };

  return <SkillsForm skills={state.skills} setSkills={setSkills} />;
}

function CertificationsFormWithContext() {
  const { state, dispatch } = useResume();

  const setCertifications = (certifications: Certification[]) => {
    // Simplified approach
    certifications.forEach((certification) => {
      const existing = state.certifications.find(
        (c) => c.id === certification.id
      );
      if (existing) {
        dispatch({ type: "UPDATE_CERTIFICATION", payload: certification });
      } else {
        dispatch({
          type: "ADD_CERTIFICATION",
          payload: {
            name: certification.name,
            issuer: certification.issuer,
            date: certification.date,
          },
        });
      }
    });

    state.certifications.forEach((certification) => {
      if (!certifications.find((c) => c.id === certification.id)) {
        dispatch({ type: "REMOVE_CERTIFICATION", payload: certification.id });
      }
    });
  };

  return (
    <CertificationsForm
      certifications={state.certifications}
      setCertifications={setCertifications}
    />
  );
}

function TemplateSelectorWithContext() {
  const { state, dispatch } = useResume();
  const [lastSelectedTemplate, setLastSelectedTemplate] = useState<string>(
    state.template
  );

  const onSelectTemplate = (templateId: string) => {
    console.log("Cambiando plantilla a:", templateId);
    setLastSelectedTemplate(templateId);
    dispatch({ type: "SET_TEMPLATE", payload: templateId as TemplateType });
  };

  useEffect(() => {
    if (lastSelectedTemplate !== state.template) {
      setLastSelectedTemplate(state.template);
    }
  }, [state.template, lastSelectedTemplate]);

  return (
    <TemplateSelector
      selectedTemplateId={state.template}
      onSelectTemplate={onSelectTemplate}
    />
  );
}

function ResumePreviewWithContext({ profileImage }: { profileImage?: string }) {
  const { state } = useResume();

  return (
    <div key={`template-${state.template}`}>
      <ResumePreview
        templateId={state.template}
        personalInfo={state.personalInfo}
        educations={state.educations}
        experiences={state.experiences}
        skills={state.skills}
        certifications={state.certifications}
        profileImage={profileImage}
      />
    </div>
  );
}
