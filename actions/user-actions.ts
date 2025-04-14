"use server"

import { hash } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function registerUser(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    // Validate inputs
    if (!name || !email || !username || !password) {
      return { success: false, message: "All fields are required" }
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    })

    if (existingUser) {
      return { success: false, message: "User with this email or username already exists" }
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    await prisma.user.create({
      data: {
        name,
        email,
        username,
        password: hashedPassword,
      },
    })

    revalidatePath("/login")
    return { success: true, message: "Registration successful. You can now log in." }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, message: "An error occurred during registration" }
  }
}

export async function updateProfile(formData: FormData) {
  try {
    const userId = formData.get("userId") as string
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const profileImage = formData.get("profileImage") as string

    if (!userId) {
      return { success: false, message: "User ID is required" }
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        name: name || undefined,
        email: email || undefined,
        profileImage: profileImage || undefined,
      },
    })

    revalidatePath("/profile")
    return { success: true, message: "Profile updated successfully" }
  } catch (error) {
    console.error("Profile update error:", error)
    return { success: false, message: "An error occurred while updating your profile" }
  }
}
