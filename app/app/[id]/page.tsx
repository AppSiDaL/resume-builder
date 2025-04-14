import { getServerSession } from "next-auth"
import { redirect, notFound } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { ResumeEditor } from "@/components/resume-editor"
import { Navbar } from "@/components/navbar"
import { DotBackground } from "@/components/ui/dot-background"

interface ResumeEditorPageProps {
  params: {
    id: string
  }
}

export default async function ResumeEditorPage({ params }: ResumeEditorPageProps) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

  // Fetch resume data
  const resume = await prisma.resume.findUnique({
    where: {
      id: params.id,
    },
    include: {
      personalInfo: true,
      educations: {
        orderBy: {
          order: "asc",
        },
      },
      experiences: {
        orderBy: {
          order: "asc",
        },
      },
      skills: true,
      certifications: {
        orderBy: {
          order: "asc",
        },
      },
      languages: true,
      projects: {
        orderBy: {
          order: "asc",
        },
      },
      references: true,
    },
  })

  // Check if resume exists and belongs to the user
  if (!resume || resume.userId !== session.user.id) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col relative">
      <DotBackground />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <ResumeEditor resume={resume} user={session.user} />
      </main>
    </div>
  )
}
