"use server";

import { authService } from "@/services/auth.service";
import { LoginSchema } from "@/schemas/auth";

export async function loginUser(data: LoginSchema) {
  return authService.login(data);
}