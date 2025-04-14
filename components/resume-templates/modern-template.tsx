"use client"

import type { PersonalInfo, Education, Experience, Skill, Certification } from "@/context/resume-context"

interface ModernTemplateProps {
  personalInfo: PersonalInfo
  educations: Education[]
  experiences: Experience[]
  skills: Skill[]
  certifications: Certification[]
}

export function ModernTemplate({ personalInfo, educations, experiences, skills, certifications }: ModernTemplateProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-[800px] mx-auto a4-page">
      <div className="border-b-2 border-red-600 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">{personalInfo.fullName}</h1>
        <div className="text-center text-sm text-gray-600">
          {personalInfo.address} • {personalInfo.phone} • {personalInfo.email}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-red-600 border-b border-gray-200 pb-1 mb-3">PERFIL PROFESIONAL</h2>
        <p className="text-gray-800">{personalInfo.title}</p>
      </div>

      {educations.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-red-600 border-b border-gray-200 pb-1 mb-3">EDUCACIÓN</h2>
          <div className="space-y-4">
            {educations.map((education) => (
              <div key={education.id} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="md:col-span-3">
                  <div className="font-bold text-gray-900">{education.institution}</div>
                  <div className="italic text-gray-800">
                    {education.degree} en {education.fieldOfStudy}
                  </div>
                  {education.gpa && <div className="text-sm text-gray-600">Promedio Académico: {education.gpa}</div>}
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
          <h2 className="text-xl font-bold text-red-600 border-b border-gray-200 pb-1 mb-3">EXPERIENCIA</h2>
          <div className="space-y-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="md:col-span-3">
                  <div className="font-bold text-gray-900">{experience.company}</div>
                  <div className="italic text-gray-800">{experience.position}</div>
                  {experience.description.length > 0 && (
                    <ul className="list-disc list-inside mt-1 text-gray-800">
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

      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-red-600 border-b border-gray-200 pb-1 mb-3">CONOCIMIENTOS</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {skills.map((skill) => (
              <div key={skill.id} className="text-gray-800">
                • {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-red-600 border-b border-gray-200 pb-1 mb-3">CERTIFICACIONES</h2>
          <div className="space-y-2">
            {certifications.map((certification) => (
              <div key={certification.id} className="flex justify-between">
                <div className="text-gray-800">
                  <span className="font-semibold">{certification.name}</span>
                  {certification.issuer && ` - ${certification.issuer}`}
                </div>
                {certification.date && <div className="text-sm text-gray-600">{certification.date}</div>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
