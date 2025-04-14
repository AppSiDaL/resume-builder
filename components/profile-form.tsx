"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Camera } from "lucide-react";
import { updateProfile } from "@/actions/user-actions";
import { User as UserType } from "@/lib/types";

interface ProfileFormProps {
  user: UserType;
}

export function ProfileForm({ user }: ProfileFormProps) {
  const router = useRouter();
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(
    user.profileImage || null
  );

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    // Create a preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload the image
    setIsUploading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("userId", user.id);
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to upload image");
      }

      setSuccess("Profile image updated successfully");
      router.refresh();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          err.message || "An error occurred while updating your profile"
        );
      } else {
        setError("An unknown error occurred while updating your profile");
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("userId", user.id);
    formData.append("name", name);
    formData.append("email", email);

    try {
      const result = await updateProfile(formData);

      if (!result.success) {
        setError(result.message);
      } else {
        setSuccess(result.message);
        router.refresh();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          err.message || "An error occurred while updating your profile"
        );
      } else {
        setError("An unknown error occurred while updating your profile");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Personal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>
        )}
        {success && (
          <div className="bg-green-50 text-green-600 p-4 rounded-md">
            {success}
          </div>
        )}

        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            {previewImage ? (
              <Image
                src={previewImage || "/placeholder.svg"}
                alt={name || "Profile"}
                fill
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <User className="h-16 w-16 text-gray-400 dark:text-gray-500" />
              </div>
            )}
            <label
              htmlFor="profile-image"
              className="absolute bottom-0 right-0 bg-red-600 text-white p-2 rounded-full cursor-pointer shadow-md hover:bg-red-700 transition-colors"
            >
              <Camera className="h-5 w-5" />
              <span className="sr-only">Upload profile image</span>
            </label>
            <input
              id="profile-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              disabled={isUploading}
            />
          </div>
          {isUploading && (
            <p className="text-sm text-gray-500">Uploading image...</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              id="username"
              value={user.username || ""}
              disabled
              className="bg-gray-100 dark:bg-gray-800"
            />
            <p className="text-xs text-gray-500">
              El nombre de usuario no se puede cambiar
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Guardando..." : "Guardar cambios"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
