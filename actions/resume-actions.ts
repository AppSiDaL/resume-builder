"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function createResume(formData: FormData) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return { success: false, message: "You must be logged in to create a resume" }
    }

    const title = (formData.get("title") as string) || "Untitled Resume"
    const templateId = formData.get("templateId") as string

    if (!templateId) {
      return { success: false, message: "Template selection is required" }
    }

    const resume = await prisma.resume.create({
      data: {
        title,
        templateId,
        userId: session.user.id,
      },
    })

    revalidatePath("/app")
    return { success: true, message: "Resume created successfully", resumeId: resume.id }
  } catch (error) {
    console.error("Resume creation error:", error)
    return { success: false, message: "An error occurred while creating your resume" }
  }
}

export async function updatePersonalInfo(formData: FormData) {
  try {
    const resumeId = formData.get("resumeId") as string
    const fullName = formData.get("fullName") as string
    const title = formData.get("title") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const website = formData.get("website") as string
    const summary = formData.get("summary") as string

    if (!resumeId || !fullName) {
      return { success: false, message: "Resume ID and full name are required" }
    }

    // Check if personal info exists
    const existingInfo = await prisma.personalInfo.findUnique({
      where: { resumeId },
    })

    if (existingInfo) {
      // Update existing record
      await prisma.personalInfo.update({
        where: { resumeId },
        data: {
          fullName,
          title: title || undefined,
          email: email || undefined,
          phone: phone || undefined,
          address: address || undefined,
          website: website || undefined,
          summary: summary || undefined,
        },
      })
    } else {
      // Create new record
      await prisma.personalInfo.create({
        data: {
          fullName,
          title: title || undefined,
          email: email || undefined,
          phone: phone || undefined,
          address: address || undefined,
          website: website || undefined,
          summary: summary || undefined,
          resumeId,
        },
      })
    }

    revalidatePath(`/app/${resumeId}`)
    return { success: true, message: "Personal information updated successfully" }
  } catch (error) {
    console.error("Personal info update error:", error)
    return { success: false, message: "An error occurred while updating personal information" }
  }
}

export async function addEducation(formData: FormData) {
  try {
    const resumeId = formData.get("resumeId") as string
    const institution = formData.get("institution") as string
    const degree = formData.get("degree") as string
    const fieldOfStudy = formData.get("fieldOfStudy") as string
    const startDate = formData.get("startDate") as string
    const endDate = formData.get("endDate") as string
    const location = formData.get("location") as string
    const gpa = formData.get("gpa") as string
    const description = formData.get("description") as string

    if (!resumeId || !institution) {
      return { success: false, message: "Resume ID and institution are required" }
    }

    // Get the highest order to place the new item at the end
    const highestOrder = await prisma.education.findFirst({
      where: { resumeId },
      orderBy: { order: "desc" },
      select: { order: true },
    })

    const newOrder = (highestOrder?.order || 0) + 1

    await prisma.education.create({
      data: {
        institution,
        degree: degree || undefined,
        fieldOfStudy: fieldOfStudy || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
        location: location || undefined,
        gpa: gpa || undefined,
        description: description || undefined,
        resumeId,
        order: newOrder,
      },
    })

    revalidatePath(`/app/${resumeId}`)
    return { success: true, message: "Education added successfully" }
  } catch (error) {
    console.error("Education add error:", error)
    return { success: false, message: "An error occurred while adding education" }
  }
}

export async function updateEducation(formData: FormData) {
  try {
    const id = formData.get("id") as string
    const institution = formData.get("institution") as string
    const degree = formData.get("degree") as string
    const fieldOfStudy = formData.get("fieldOfStudy") as string
    const startDate = formData.get("startDate") as string
    const endDate = formData.get("endDate") as string
    const location = formData.get("location") as string
    const gpa = formData.get("gpa") as string
    const description = formData.get("description") as string

    if (!id || !institution) {
      return { success: false, message: "Education ID and institution are required" }
    }

    const education = await prisma.education.update({
      where: { id },
      data: {
        institution,
        degree: degree || undefined,
        fieldOfStudy: fieldOfStudy || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
        location: location || undefined,
        gpa: gpa || undefined,
        description: description || undefined,
      },
    })

    revalidatePath(`/app/${education.resumeId}`)
    return { success: true, message: "Education updated successfully" }
  } catch (error) {
    console.error("Education update error:", error)
    return { success: false, message: "An error occurred while updating education" }
  }
}

// Similar functions for experiences, skills, certifications, etc.
// For brevity, I'm not including all of them, but they would follow the same pattern

export async function addExperience(formData: FormData) {
  try {
    const resumeId = formData.get("resumeId") as string
    const company = formData.get("company") as string
    const position = formData.get("position") as string
    const startDate = formData.get("startDate") as string
    const endDate = formData.get("endDate") as string
    const location = formData.get("location") as string
    const descriptionItems = formData.getAll("description") as string[]

    if (!resumeId || !company || !position) {
      return { success: false, message: "Resume ID, company, and position are required" }
    }

    // Get the highest order to place the new item at the end
    const highestOrder = await prisma.experience.findFirst({
      where: { resumeId },
      orderBy: { order: "desc" },
      select: { order: true },
    })

    const newOrder = (highestOrder?.order || 0) + 1

    await prisma.experience.create({
      data: {
        company,
        position,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
        location: location || undefined,
        description: descriptionItems.filter((item) => item.trim() !== ""),
        resumeId,
        order: newOrder,
      },
    })

    revalidatePath(`/app/${resumeId}`)
    return { success: true, message: "Experience added successfully" }
  } catch (error) {
    console.error("Experience add error:", error)
    return { success: false, message: "An error occurred while adding experience" }
  }
}

export async function addSkill(formData: FormData) {
  try {
    const resumeId = formData.get("resumeId") as string
    const name = formData.get("name") as string
    const level = Number.parseInt((formData.get("level") as string) || "0")

    if (!resumeId || !name) {
      return { success: false, message: "Resume ID and skill name are required" }
    }

    await prisma.skill.create({
      data: {
        name,
        level: isNaN(level) ? 0 : level,
        resumeId,
      },
    })

    revalidatePath(`/app/${resumeId}`)
    return { success: true, message: "Skill added successfully" }
  } catch (error) {
    console.error("Skill add error:", error)
    return { success: false, message: "An error occurred while adding skill" }
  }
}

export async function deleteResume(formData: FormData) {
  try {
    const resumeId = formData.get("resumeId") as string

    if (!resumeId) {
      return { success: false, message: "Resume ID is required" }
    }

    await prisma.resume.delete({
      where: { id: resumeId },
    })

    revalidatePath("/app")
    return { success: true, message: "Resume deleted successfully" }
  } catch (error) {
    console.error("Resume deletion error:", error)
    return { success: false, message: "An error occurred while deleting the resume" }
  }
}

export async function updateResume(formData: FormData) {
  try {
    const resumeId = formData.get("resumeId") as string
    const title = formData.get("title") as string
    const templateId = formData.get("templateId") as string
    const personalInfo = formData.get("personalInfo") as string
    const educations = formData.get("educations") as string
    const experiences = formData.get("experiences") as string
    const skills = formData.get("skills") as string
    const certifications = formData.get("certifications") as string
    const languages = formData.get("languages") as string
    const projects = formData.get("projects") as string
    const references = formData.get("references") as string

    if (!resumeId) {
      return { success: false, message: "Resume ID is required" }
    }

    await prisma.resume.update({
      where: { id: resumeId },
      data: {
        title: title || undefined,
        templateId: templateId || undefined,
        personalInfo: personalInfo
          ? {
              upsert: {
                create: JSON.parse(personalInfo),
                update: JSON.parse(personalInfo),
              },
            }
          : undefined,
        educations: educations
          ? {
              deleteMany: {}, // Delete all existing educations
              create: JSON.parse(educations).map((edu: any, index: number) => ({ ...edu, order: index })), // Re-create with updated order
            }
          : undefined,
        experiences: experiences
          ? {
              deleteMany: {}, // Delete all existing experiences
              create: JSON.parse(experiences).map((exp: any, index: number) => ({ ...exp, order: index })), // Re-create with updated order
            }
          : undefined,
        skills: skills
          ? {
              deleteMany: {},
              create: JSON.parse(skills),
            }
          : undefined,
        certifications: certifications
          ? {
              deleteMany: {}, // Delete all existing certifications
              create: JSON.parse(certifications).map((cert: any, index: number) => ({ ...cert, order: index })), // Re-create with updated order
            }
          : undefined,
        languages: languages
          ? {
              deleteMany: {},
              create: JSON.parse(languages),
            }
          : undefined,
        projects: projects
          ? {
              deleteMany: {}, // Delete all existing projects
              create: JSON.parse(projects).map((proj: any, index: number) => ({ ...proj, order: index })), // Re-create with updated order
            }
          : undefined,
        references: references
          ? {
              deleteMany: {},
              create: JSON.parse(references),
            }
          : undefined,
      },
    })

    revalidatePath(`/app/${resumeId}`)
    return { success: true, message: "Resume updated successfully" }
  } catch (error) {
    console.error("Resume update error:", error)
    return { success: false, message: "An error occurred while updating the resume" }
  }
}
