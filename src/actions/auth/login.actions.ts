"use server";

import { failure, success } from "@/lib/action-result";
import { LoginSchema } from "@/schemas/auth/auth.schema";
import { authService } from "@/services/auth/auth.service";
import { ActionResult } from "@/types/action-result";

export async function loginUser(
  data: LoginSchema
): Promise<ActionResult> {
  try {
    await authService.login(data);

    return success(undefined, "Login realizado com sucesso.");
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Erro ao realizar login."
    );
  }
}