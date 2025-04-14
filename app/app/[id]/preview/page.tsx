import { getServerSession } from "next-auth" 
import { redirect, notFound } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { ResumePreview } from "@/components/resume-preview"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

interface ResumePreviewPageProps {
  params: {
    id: string
  }
}

export default async function ResumePreviewPage({ params }: ResumePreviewPageProps) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

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

  if (!resume || resume.userId !== session?.user?.id) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href={`/app/${params.id}`}>
                <ArrowLeft className="h-4 w-4 mr-2" /> Volver al editor
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">{resume.title}</h1>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Download className="h-4 w-4 mr-2" /> Descargar PDF
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <ResumePreview
            templateId={resume.templateId}
            personalInfo={resume.personalInfo || {}}
            educations={resume.educations || []}
            experiences={resume.experiences || []}
            skills={resume.skills || []}
            certifications={resume.certifications || []}
            languages={resume.languages || []}
            projects={resume.projects || []}
            references={resume.references || []}
            profileImage={session.user.image}
          />
        </div>
      </main>
    </div>
  )
}
