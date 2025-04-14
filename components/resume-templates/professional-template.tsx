"use client"

import type { PersonalInfo, Education, Experience, Skill, Certification } from "@/components/resume-builder"

interface ProfessionalTemplateProps {
  personalInfo: PersonalInfo
  educations: Education[]
  experiences: Experience[]
  skills: Skill[]
  certifications: Certification[]
}

export function ProfessionalTemplate({
  personalInfo,
  educations,
  experiences,
  skills,
  certifications,
}: ProfessionalTemplateProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-[800px] mx-auto a4-page">
      <div className="bg-green-800 text-white p-8">
        <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName}</h1>
        <p className="text-xl mb-4">{personalInfo.title}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{personalInfo.address}</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        {experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-2 mb-4">
              EXPERIENCIA PROFESIONAL
            </h2>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <div key={experience.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-lg">{experience.position}</h3>
                      <p className="text-green-700">
                        {experience.company} - {experience.location}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                      {experience.startDate} - {experience.endDate}
                    </p>
                  </div>
                  {experience.description.length > 0 && (
                    <ul className="list-disc list-outside ml-5 text-gray-700 mt-2">
                      {experience.description.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {educations.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-2 mb-4">EDUCACIÓN</h2>
            <div className="space-y-4">
              {educations.map((education) => (
                <div key={education.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">
                        {education.degree} en {education.fieldOfStudy}
                      </h3>
                      <p className="text-green-700">
                        {education.institution} - {education.location}
                      </p>
                      {education.gpa && <p className="text-sm text-gray-600">GPA: {education.gpa}</p>}
                    </div>
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                      {education.startDate} - {education.endDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-2 mb-4">HABILIDADES</h2>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-2 mb-4">
                CERTIFICACIONES
              </h2>
              <div className="space-y-3">
                {certifications.map((certification) => (
                  <div key={certification.id}>
                    <p className="font-medium">{certification.name}</p>
                    <p className="text-sm text-gray-600">
                      {certification.issuer}
                      {certification.date && ` | ${certification.date}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
