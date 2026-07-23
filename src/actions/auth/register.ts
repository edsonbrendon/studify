"use server";

import { authService } from "@/services/auth.service";
import { RegisterSchema } from "@/schemas/auth";

export async function registerUser(data: RegisterSchema) {
  return authService.register(data);
}