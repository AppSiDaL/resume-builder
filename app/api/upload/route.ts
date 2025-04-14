import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { writeFile } from "fs/promises"
import { mkdir } from "fs/promises"
import { join } from "path"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File | null
    const userId = formData.get("userId") as string | null

    if (!file) {
      return NextResponse.json({ message: "No file provided" }, { status: 400 })
    }

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 })
    }

    if (userId !== (session.user as { id: string }).id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ message: "File must be an image" }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ message: "File size exceeds 5MB limit" }, { status: 400 })
    }

    const uploadsDir = join(process.cwd(), "public", "uploads")
    try {
      await writeFile(join(uploadsDir, "test.txt"), "")
    } catch {
      await mkdir(uploadsDir, { recursive: true })
    }

    const fileExtension = file.name.split(".").pop()
    const fileName = `${uuidv4()}.${fileExtension}`
    const filePath = join(uploadsDir, fileName)

    const buffer = Buffer.from(await file.arrayBuffer())
    await writeFile(filePath, buffer)

    const publicPath = `/uploads/${fileName}`
    await prisma.user.update({
      where: { id: userId },
      data: { profileImage: publicPath },
    })

    return NextResponse.json({ message: "Profile image updated successfully", path: publicPath })
  } catch (error: unknown) {
    console.error("Upload error:", error)
    const errorMessage = error instanceof Error ? error.message : "An error occurred";
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}