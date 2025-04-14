"use client"

import type { PersonalInfo, Education, Experience, Skill, Certification } from "@/context/resume-context"
import Image from "next/image"

interface ClaudiaAlvarezTemplateProps {
  personalInfo: PersonalInfo
  educations: Education[]
  experiences: Experience[]
  skills: Skill[]
  certifications: Certification[]
  profileImage?: string
}

export function ClaudiaAlvarezTemplate({
  personalInfo,
  educations,
  experiences,
  skills,
  certifications,
  profileImage,
}: ClaudiaAlvarezTemplateProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-[800px] mx-auto a4-page font-['Montserrat']">
      {/* Left sidebar */}
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-1 bg-pink-100 p-6 rounded-l-lg">
          {profileImage && (
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200">
                <Image
                  src={profileImage || "/placeholder.svg"}
                  alt={personalInfo.fullName}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-pink-600 mb-1">
              {personalInfo.fullName.split(" ")[0]}
              <br />
              {personalInfo.fullName.split(" ").slice(1).join(" ")}
            </h1>
            <p className="text-sm text-pink-600 uppercase tracking-wider">{personalInfo.title}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-3 flex items-center">
                <span className="inline-block w-4 h-4 bg-pink-200 rounded-full mr-2"></span>
                Contacto
              </h2>
              <div className="space-y-2 text-sm">
                {personalInfo.phone && (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-pink-400"
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
                )}
                {personalInfo.email && (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-pink-400"
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
                )}
                {personalInfo.address && (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-pink-400"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{personalInfo.address}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-pink-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <span>{personalInfo.website}</span>
                  </div>
                )}
              </div>
            </div>

            {skills.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-3 flex items-center">
                  <span className="inline-block w-4 h-4 bg-pink-200 rounded-full mr-2"></span>
                  Habilidades
                </h2>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-pink-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {certifications.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-3 flex items-center">
                  <span className="inline-block w-4 h-4 bg-pink-200 rounded-full mr-2"></span>
                  Idiomas
                </h2>
                <div className="space-y-2">
                  {certifications.map((certification) => (
                    <div key={certification.id} className="text-sm">
                      <p className="font-medium">{certification.name}</p>
                      {certification.issuer && <p className="text-xs text-gray-600">{certification.issuer}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="col-span-2 p-8">
          {personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-3 flex items-center">
                <span className="inline-block w-4 h-4 bg-pink-200 rounded-full mr-2"></span>
                Acerca de mí
              </h2>
              <p className="text-gray-700">{personalInfo.summary}</p>
            </div>
          )}

          {experiences.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-3 flex items-center">
                <span className="inline-block w-4 h-4 bg-pink-200 rounded-full mr-2"></span>
                Experiencia
              </h2>
              <div className="space-y-4">
                {experiences.map((experience) => (
                  <div key={experience.id} className="relative pl-6 border-l border-pink-200">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-pink-400 rounded-full"></div>
                    <div className="mb-1">
                      <h3 className="font-bold">{experience.position}</h3>
                      <p className="text-pink-600 text-sm">{experience.company}</p>
                      <p className="text-xs text-gray-500">
                        {experience.startDate} - {experience.endDate} | {experience.location}
                      </p>
                    </div>
                    {experience.description.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
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
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-3 flex items-center">
                <span className="inline-block w-4 h-4 bg-pink-200 rounded-full mr-2"></span>
                Formación
              </h2>
              <div className="space-y-4">
                {educations.map((education) => (
                  <div key={education.id} className="relative pl-6 border-l border-pink-200">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-pink-400 rounded-full"></div>
                    <div>
                      <h3 className="font-bold">
                        {education.degree} {education.fieldOfStudy && `en ${education.fieldOfStudy}`}
                      </h3>
                      <p className="text-pink-600 text-sm">{education.institution}</p>
                      <p className="text-xs text-gray-500">
                        {education.startDate} - {education.endDate} | {education.location}
                      </p>
                      {education.gpa && <p className="text-xs text-gray-600 mt-1">GPA: {education.gpa}</p>}
                      {education.description && <p className="text-sm text-gray-700 mt-1">{education.description}</p>}
                    </div>
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
