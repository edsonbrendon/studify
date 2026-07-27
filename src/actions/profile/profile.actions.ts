"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import {
  failure,
  success,
} from "@/lib/action-result";
import { updateProfile } from "@/services/profile/profile.service";
import {
  updateProfileSchema,
  UpdateProfileInput,
} from "@/schemas/profile/profile.schema";

export async function updateProfileAction(
  data: UpdateProfileInput
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return failure("Não autenticado.");
    }

    const validatedData =
      updateProfileSchema.parse(data);

    await updateProfile(
      session.user.id,
      validatedData
    );

    revalidatePath("/profile");

    return success(
      undefined,
      "Perfil atualizado com sucesso."
    );
  } catch (error) {
    if (error instanceof Error) {
      return failure(error.message);
    }

    return failure(
      "Erro ao atualizar o perfil."
    );
  }
}