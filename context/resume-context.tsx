"use client";

import type React from "react";
import { createContext, useContext, useReducer, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

// Importar los tipos desde nuestro archivo centralizado
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

// Tipos adicionales que necesitamos en el contexto
export type TemplateType =
  | "modern"
  | "classic"
  | "minimal"
  | "professional"
  | "carla-rodriguez"
  | "claudia-alvarez";

// State type - usando los tipos importados
export type ResumeState = {
  personalInfo: PersonalInfo;
  educations: Education[];
  experiences: Experience[];
  skills: Skill[];
  certifications: Certification[];
  languages?: Language[];
  projects?: Project[];
  references?: Reference[];
  template: TemplateType;
  showPreview: boolean;
  profileImage?: string;
};

// Initial state
const initialState: ResumeState = {
  personalInfo: {
    fullName: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "Springfield, IL 62701",
  },
  educations: [
    {
      id: "1",
      institution: "Tech University",
      degree: "Master of Science",
      fieldOfStudy: "Software Engineering",
      startDate: "Aug 2018",
      endDate: "May 2020",
      location: "Springfield, IL",
      gpa: "4.0",
      order: 0,
    },
    {
      id: "2",
      institution: "University of Technology",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "Aug 2014",
      endDate: "May 2018",
      location: "Springfield, IL",
      gpa: "3.8",
      order: 1,
    },
  ],
  experiences: [
    {
      id: "1",
      company: "Tech Company",
      position: "Senior Software Engineer",
      startDate: "Dec 2021",
      endDate: "Present",
      location: "Remote",
      description: ["Lead a team of developers on a new project."],
      order: 0,
    },
    {
      id: "2",
      company: "Tech Company",
      position: "Software Engineer",
      startDate: "Dec 2019",
      endDate: "Dec 2021",
      location: "Remote",
      description: ["Developed and maintained web applications."],
      order: 1,
    },
    {
      id: "3",
      company: "Tech Company",
      position: "Junior Software Engineer",
      startDate: "Dec 2017",
      endDate: "Dec 2019",
      location: "Remote",
      description: ["Developed and maintained web applications."],
      order: 2,
    },
  ],
  skills: [
    { id: "1", name: "JavaScript" },
    { id: "2", name: "Python" },
    { id: "3", name: "React" },
    { id: "4", name: "Node.js" },
    { id: "5", name: "SQL" },
    { id: "6", name: "MongoDB" },
    { id: "7", name: "Express.js" },
    { id: "8", name: "Java" },
  ],
  certifications: [
    {
      id: "1",
      name: "AWS Certified SysOps Administrator",
      issuer: "Amazon Web Services",
      date: "2023",
      order: 0,
    },
    {
      id: "2",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      order: 1,
    },
  ],
  languages: [],
  projects: [],
  references: [],
  template: "modern",
  showPreview: true,
};

// Action types
type Action =
  | { type: "SET_PERSONAL_INFO"; payload: Partial<PersonalInfo> }
  | { type: "ADD_EDUCATION"; payload: Omit<Education, "id"> }
  | { type: "UPDATE_EDUCATION"; payload: Education }
  | { type: "REMOVE_EDUCATION"; payload: string }
  | {
      type: "REORDER_EDUCATION";
      payload: { fromIndex: number; toIndex: number };
    }
  | { type: "ADD_EXPERIENCE"; payload: Omit<Experience, "id"> }
  | { type: "UPDATE_EXPERIENCE"; payload: Experience }
  | { type: "REMOVE_EXPERIENCE"; payload: string }
  | {
      type: "REORDER_EXPERIENCE";
      payload: { fromIndex: number; toIndex: number };
    }
  | { type: "ADD_SKILL"; payload: string }
  | { type: "REMOVE_SKILL"; payload: string }
  | { type: "ADD_CERTIFICATION"; payload: Omit<Certification, "id"> }
  | { type: "UPDATE_CERTIFICATION"; payload: Certification }
  | { type: "REMOVE_CERTIFICATION"; payload: string }
  | {
      type: "REORDER_CERTIFICATION";
      payload: { fromIndex: number; toIndex: number };
    }
  | { type: "ADD_LANGUAGE"; payload: Omit<Language, "id"> }
  | { type: "UPDATE_LANGUAGE"; payload: Language }
  | { type: "REMOVE_LANGUAGE"; payload: string }
  | { type: "ADD_PROJECT"; payload: Omit<Project, "id"> }
  | { type: "UPDATE_PROJECT"; payload: Project }
  | { type: "REMOVE_PROJECT"; payload: string }
  | { type: "ADD_REFERENCE"; payload: Omit<Reference, "id"> }
  | { type: "UPDATE_REFERENCE"; payload: Reference }
  | { type: "REMOVE_REFERENCE"; payload: string }
  | { type: "SET_TEMPLATE"; payload: TemplateType }
  | { type: "SET_PROFILE_IMAGE"; payload: string }
  | { type: "TOGGLE_PREVIEW" };

function resumeReducer(state: ResumeState, action: Action): ResumeState {
  switch (action.type) {
    case "SET_PERSONAL_INFO":
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    case "ADD_EDUCATION":
      return {
        ...state,
        educations: [...state.educations, { ...action.payload, id: uuidv4() }],
      };
    case "UPDATE_EDUCATION":
      return {
        ...state,
        educations: state.educations.map((edu) =>
          edu.id === action.payload.id ? action.payload : edu
        ),
      };
    case "REMOVE_EDUCATION":
      return {
        ...state,
        educations: state.educations.filter((edu) => edu.id !== action.payload),
      };
    case "REORDER_EDUCATION": {
      const { fromIndex, toIndex } = action.payload;
      const newEducations = [...state.educations];
      const [removed] = newEducations.splice(fromIndex, 1);
      newEducations.splice(toIndex, 0, removed);
      return {
        ...state,
        educations: newEducations,
      };
    }
    case "ADD_EXPERIENCE":
      return {
        ...state,
        experiences: [
          ...state.experiences,
          { ...action.payload, id: uuidv4() },
        ],
      };
    case "UPDATE_EXPERIENCE":
      return {
        ...state,
        experiences: state.experiences.map((exp) =>
          exp.id === action.payload.id ? action.payload : exp
        ),
      };
    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        experiences: state.experiences.filter(
          (exp) => exp.id !== action.payload
        ),
      };
    case "REORDER_EXPERIENCE": {
      const { fromIndex, toIndex } = action.payload;
      const newExperiences = [...state.experiences];
      const [removed] = newExperiences.splice(fromIndex, 1);
      newExperiences.splice(toIndex, 0, removed);
      return {
        ...state,
        experiences: newExperiences,
      };
    }
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, { id: uuidv4(), name: action.payload }],
      };
    case "REMOVE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((skill) => skill.id !== action.payload),
      };
    case "ADD_CERTIFICATION":
      return {
        ...state,
        certifications: [
          ...state.certifications,
          { ...action.payload, id: uuidv4() },
        ],
      };
    case "UPDATE_CERTIFICATION":
      return {
        ...state,
        certifications: state.certifications.map((cert) =>
          cert.id === action.payload.id ? action.payload : cert
        ),
      };
    case "REMOVE_CERTIFICATION":
      return {
        ...state,
        certifications: state.certifications.filter(
          (cert) => cert.id !== action.payload
        ),
      };
    case "REORDER_CERTIFICATION": {
      const { fromIndex, toIndex } = action.payload;
      const newCertifications = [...state.certifications];
      const [removed] = newCertifications.splice(fromIndex, 1);
      newCertifications.splice(toIndex, 0, removed);
      return {
        ...state,
        certifications: newCertifications,
      };
    }
    case "ADD_LANGUAGE":
      return {
        ...state,
        languages: [
          ...(state.languages || []),
          { ...action.payload, id: uuidv4() },
        ],
      };
    case "UPDATE_LANGUAGE":
      return {
        ...state,
        languages:
          state.languages?.map((lang) =>
            lang.id === action.payload.id ? action.payload : lang
          ) || [],
      };
    case "REMOVE_LANGUAGE":
      return {
        ...state,
        languages:
          state.languages?.filter((lang) => lang.id !== action.payload) || [],
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [
          ...(state.projects || []),
          { ...action.payload, id: uuidv4() },
        ],
      };
    case "UPDATE_PROJECT":
      return {
        ...state,
        projects:
          state.projects?.map((proj) =>
            proj.id === action.payload.id ? action.payload : proj
          ) || [],
      };
    case "REMOVE_PROJECT":
      return {
        ...state,
        projects:
          state.projects?.filter((proj) => proj.id !== action.payload) || [],
      };
    case "ADD_REFERENCE":
      return {
        ...state,
        references: [
          ...(state.references || []),
          { ...action.payload, id: uuidv4() },
        ],
      };
    case "UPDATE_REFERENCE":
      return {
        ...state,
        references:
          state.references?.map((ref) =>
            ref.id === action.payload.id ? action.payload : ref
          ) || [],
      };
    case "REMOVE_REFERENCE":
      return {
        ...state,
        references:
          state.references?.filter((ref) => ref.id !== action.payload) || [],
      };
    case "SET_TEMPLATE":
      return {
        ...state,
        template: action.payload,
      };
    case "SET_PROFILE_IMAGE":
      return {
        ...state,
        profileImage: action.payload,
      };
    case "TOGGLE_PREVIEW":
      return {
        ...state,
        showPreview: !state.showPreview,
      };
    default:
      return state;
  }
}

// Create context
type ResumeContextType = {
  state: ResumeState;
  dispatch: React.Dispatch<Action>;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export function ResumeProvider({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData?: any;
}) {
  // If initialData is provided, use it to initialize the state
  const initialStateWithData = initialData
    ? {
        personalInfo: initialData.personalInfo || initialState.personalInfo,
        educations: initialData.educations || initialState.educations,
        experiences: initialData.experiences || initialState.experiences,
        skills: initialData.skills || initialState.skills,
        certifications:
          initialData.certifications || initialState.certifications,
        languages: initialData.languages || initialState.languages,
        projects: initialData.projects || initialState.projects,
        references: initialData.references || initialState.references,
        template: initialData.templateId || initialState.template,
        showPreview: true,
        profileImage: initialData.profileImage || initialState.profileImage,
      }
    : initialState;

  const [state, dispatch] = useReducer(resumeReducer, initialStateWithData);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

// Custom hook to use the context
export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
