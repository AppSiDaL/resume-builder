"use client";

import type {
  PersonalInfo,
  Education,
  Experience,
  Skill,
  Certification,
} from "@/context/resume-context";
import Image from "next/image";

interface CarlaRodriguezTemplateProps {
  personalInfo: PersonalInfo;
  educations: Education[];
  experiences: Experience[];
  skills: Skill[];
  certifications: Certification[];
  profileImage?: string;
}

export function CarlaRodriguezTemplate({
  personalInfo,
  educations,
  experiences,
  skills,
  certifications,
  profileImage,
}: CarlaRodriguezTemplateProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-[800px] mx-auto a4-page font-['Roboto']">
      {/* Header */}
      <div className="bg-[#1e40af] text-white p-8 flex items-center gap-6 rounded-t-lg">
        {profileImage && (
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
            <Image
              src={profileImage || "/placeholder.svg"}
              alt={personalInfo.fullName}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold mb-1">{personalInfo.fullName}</h1>
          <p className="text-xl mb-2">{personalInfo.title}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 p-8">
        {/* Left Column */}
        <div className="col-span-1">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#1e40af] border-b border-gray-200 pb-1 mb-3">
              CONTACTO
            </h2>
            <div className="space-y-2 text-sm">
              {personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#1e40af]"
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
                    className="h-4 w-4 text-[#1e40af]"
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
                    className="h-4 w-4 text-[#1e40af]"
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
                    className="h-4 w-4 text-[#1e40af]"
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
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1e40af] border-b border-gray-200 pb-1 mb-3">
                HABILIDADES
              </h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      {skill.level && <span>{skill.level}%</span>}
                    </div>
                    {skill.level && (
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-[#1e40af] h-1.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1e40af] border-b border-gray-200 pb-1 mb-3">
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

        {/* Right Column */}
        <div className="col-span-2">
          {personalInfo.summary && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1e40af] border-b border-gray-200 pb-1 mb-3">
                ACERCA DE MÍ
              </h2>
              <p className="text-gray-700">{personalInfo.summary}</p>
            </div>
          )}

          {experiences.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1e40af] border-b border-gray-200 pb-1 mb-3">
                EXPERIENCIA LABORAL
              </h2>
              <div className="space-y-4">
                {experiences.map((experience) => (
                  <div key={experience.id}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold">{experience.position}</h3>
                        <p className="text-[#1e40af]">
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
              <h2 className="text-lg font-bold text-[#1e40af] border-b border-gray-200 pb-1 mb-3">
                EDUCACIÓN
              </h2>
              <div className="space-y-4">
                {educations.map((education) => (
                  <div key={education.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">
                          {education.degree} en {education.fieldOfStudy}
                        </h3>
                        <p className="text-[#1e40af]">
                          {education.institution} - {education.location}
                        </p>
                        {education.gpa && (
                          <p className="text-sm text-gray-600">
                            GPA: {education.gpa}
                          </p>
                        )}
                        {education.description && (
                          <p className="text-sm text-gray-700 mt-1">
                            {education.description}
                          </p>
                        )}
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
        </div>
      </div>
    </div>
  );
}
