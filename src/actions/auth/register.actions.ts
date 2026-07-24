"use server";

import { failure, success } from "@/lib/action-result";
import { RegisterSchema } from "@/schemas/auth/auth.schema";
import { authService } from "@/services/auth/auth.service";
import { ActionResult } from "@/types/action-result";

export async function registerUser(
  data: RegisterSchema
): Promise<ActionResult> {
  try {
    await authService.register(data);

    return success(
      undefined,
      "Usuário criado com sucesso."
    );
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Erro ao criar usuário."
    );
  }
}