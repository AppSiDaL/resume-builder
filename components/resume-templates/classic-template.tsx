"use client";

import type {
  PersonalInfo,
  Education,
  Experience,
  Skill,
  Certification,
} from "@/components/resume-builder";

interface ClassicTemplateProps {
  personalInfo: PersonalInfo;
  educations: Education[];
  experiences: Experience[];
  skills: Skill[];
  certifications: Certification[];
}

export function ClassicTemplate({
  personalInfo,
  educations,
  experiences,
  skills,
  certifications,
}: ClassicTemplateProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-[800px] mx-auto a4-page">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-serif font-bold text-blue-800 mb-2">
          {personalInfo.fullName}
        </h1>
        <p className="text-lg text-blue-600 mb-2">{personalInfo.title}</p>
        <div className="text-sm text-gray-600">
          {personalInfo.address} • {personalInfo.phone} • {personalInfo.email}
        </div>
      </div>

      <hr className="border-blue-200 my-6" />

      {educations.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-serif font-bold text-blue-800 mb-3 uppercase">
            Educación
          </h2>
          <div className="space-y-4">
            {educations.map((education) => (
              <div
                key={education.id}
                className="grid grid-cols-1 md:grid-cols-4 gap-2"
              >
                <div className="md:col-span-3">
                  <div className="font-bold text-blue-700">
                    {education.institution}
                  </div>
                  <div className="italic">
                    {education.degree} en {education.fieldOfStudy}
                  </div>
                  {education.gpa && (
                    <div className="text-sm text-gray-600">
                      Promedio Académico: {education.gpa}
                    </div>
                  )}
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div>{education.location}</div>
                  <div>
                    {education.startDate} - {education.endDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {experiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-serif font-bold text-blue-800 mb-3 uppercase">
            Experiencia Profesional
          </h2>
          <div className="space-y-4">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="grid grid-cols-1 md:grid-cols-4 gap-2"
              >
                <div className="md:col-span-3">
                  <div className="font-bold text-blue-700">
                    {experience.company}
                  </div>
                  <div className="italic">{experience.position}</div>
                  {experience.description.length > 0 && (
                    <ul className="list-disc list-inside mt-1">
                      {experience.description.map((bullet, index) => (
                        <li key={index} className="text-sm">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div>{experience.location}</div>
                  <div>
                    {experience.startDate} - {experience.endDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.length > 0 && (
          <div>
            <h2 className="text-xl font-serif font-bold text-blue-800 mb-3 uppercase">
              Habilidades
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {certifications.length > 0 && (
          <div>
            <h2 className="text-xl font-serif font-bold text-blue-800 mb-3 uppercase">
              Certificaciones
            </h2>
            <div className="space-y-2">
              {certifications.map((certification) => (
                <div key={certification.id}>
                  <div className="font-medium">
                    {certification.name}
                    {certification.issuer && ` - ${certification.issuer}`}
                  </div>
                  {certification.date && (
                    <div className="text-sm text-gray-600">
                      {certification.date}
                    </div>
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
