import { getServerSession } from "next-auth" 
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { ProfileForm } from "@/components/profile-form"
import { Navbar } from "@/components/navbar"
import { DotBackground } from "@/components/ui/dot-background"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col relative">
      <DotBackground />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>
          <ProfileForm user={session.user} />
        </div>
      </main>
    </div>
  )
}
