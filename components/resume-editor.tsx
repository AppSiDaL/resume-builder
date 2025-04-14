"use client";
import { ResumeProvider } from "@/context/resume-context";
import { ResumeEditorContent } from "@/components/resume-editor-content";
import { ResumeData, User } from "@/lib/types";

interface ResumeEditorProps {
  resume: ResumeData;
  user: User;
}

export function ResumeEditor({ resume, user }: ResumeEditorProps) {
  return (
    <ResumeProvider initialData={resume}>
      <ResumeEditorContent resume={resume} user={user} />
    </ResumeProvider>
  );
}
