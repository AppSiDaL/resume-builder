"use client";

import type {
  PersonalInfo,
  Education,
  Experience,
  Skill,
  Certification,
} from "@/components/resume-builder";

interface MinimalTemplateProps {
  personalInfo: PersonalInfo;
  educations: Education[];
  experiences: Experience[];
  skills: Skill[];
  certifications: Certification[];
}

export function MinimalTemplate({
  personalInfo,
  educations,
  experiences,
  skills,
  certifications,
}: MinimalTemplateProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-[800px] mx-auto a4-page">
      <div className="mb-6">
        <h1 className="text-3xl font-light text-gray-800 mb-1">
          {personalInfo.fullName}
        </h1>
        <p className="text-lg text-gray-600 mb-2">{personalInfo.title}</p>
        <div className="text-sm text-gray-500">
          {personalInfo.address} • {personalInfo.phone} • {personalInfo.email}
        </div>
      </div>

      {experiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-normal text-gray-800 border-b border-gray-200 pb-1 mb-3">
            Experiencia
          </h2>
          <div className="space-y-4">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="grid grid-cols-1 md:grid-cols-5 gap-4"
              >
                <div className="md:col-span-1 text-sm text-gray-500">
                  <div>{experience.startDate}</div>
                  <div>{experience.endDate}</div>
                </div>
                <div className="md:col-span-4">
                  <div className="font-medium text-gray-800">
                    {experience.position}
                  </div>
                  <div className="text-gray-600 mb-1">
                    {experience.company}, {experience.location}
                  </div>
                  {experience.description.length > 0 && (
                    <ul className="list-disc list-outside ml-4 text-gray-700">
                      {experience.description.map((bullet, index) => (
                        <li key={index} className="text-sm">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {educations.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-normal text-gray-800 border-b border-gray-200 pb-1 mb-3">
            Educación
          </h2>
          <div className="space-y-4">
            {educations.map((education) => (
              <div
                key={education.id}
                className="grid grid-cols-1 md:grid-cols-5 gap-4"
              >
                <div className="md:col-span-1 text-sm text-gray-500">
                  <div>{education.startDate}</div>
                  <div>{education.endDate}</div>
                </div>
                <div className="md:col-span-4">
                  <div className="font-medium text-gray-800">
                    {education.degree} en {education.fieldOfStudy}
                  </div>
                  <div className="text-gray-600 mb-1">
                    {education.institution}, {education.location}
                  </div>
                  {education.gpa && (
                    <div className="text-sm text-gray-500">
                      GPA: {education.gpa}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.length > 0 && (
          <div>
            <h2 className="text-lg font-normal text-gray-800 border-b border-gray-200 pb-1 mb-3">
              Habilidades
            </h2>
            <div className="flex flex-wrap gap-y-1">
              {skills.map((skill) => (
                <div key={skill.id} className="w-1/2 text-sm text-gray-700">
                  • {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications.length > 0 && (
          <div>
            <h2 className="text-lg font-normal text-gray-800 border-b border-gray-200 pb-1 mb-3">
              Certificaciones
            </h2>
            <div className="space-y-2">
              {certifications.map((certification) => (
                <div key={certification.id} className="text-sm">
                  <span className="text-gray-800">{certification.name}</span>
                  {certification.issuer && (
                    <span className="text-gray-600">
                      {" "}
                      - {certification.issuer}
                    </span>
                  )}
                  {certification.date && (
                    <span className="text-gray-500">
                      {" "}
                      ({certification.date})
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
