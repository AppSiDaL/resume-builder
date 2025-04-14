import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTemplateById } from "@/lib/template-registry";

export default async function AppDashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const resumes = await prisma.resume.findMany({
    where: {
      userId: session.user.id as string,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mis Currículums</h1>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link
              href="/app/new"
              className="inline-flex items-center justify-center text-white rounded-md transition-colors"
            >
              <Plus className="mr-2 h-4 w-4" /> Crear nuevo CV
            </Link>
          </Button>
        </div>

        {resumes.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 inline-flex mb-4">
              <FileText className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              No tienes currículums
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Crea tu primer currículum para comenzar a destacar en tus
              búsquedas de empleo.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/app/new">
                <Plus className="mr-2 h-4 w-4" /> Crear mi primer CV
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => {
              const template = getTemplateById(resume.templateId);
              return (
                <Card key={resume.id} className="overflow-hidden">
                  <div
                    className="h-40 bg-cover bg-center"
                    style={{
                      backgroundColor: template?.primaryColor || "#dc2626",
                      backgroundImage: `url(${
                        template?.thumbnail ||
                        "/placeholder.svg?height=160&width=320"
                      })`,
                      opacity: 0.8,
                    }}
                  />
                  <CardHeader>
                    <CardTitle>{resume.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Última actualización:{" "}
                      {new Date(resume.updatedAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Plantilla: {template?.name || resume.templateId}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline">
                      <Link href={`/app/${resume.id}`}>Editar</Link>
                    </Button>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href={`/app/${resume.id}/preview`}>Ver</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
