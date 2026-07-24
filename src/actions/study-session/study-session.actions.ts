"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import { failure, success } from "@/lib/action-result";
import {
  CreateStudySessionInput,
  createStudySessionSchema,
  UpdateStudySessionInput,
  updateStudySessionSchema,
} from "@/schemas/study-session/study-session.schema";
import { studySessionService } from "@/services/study-session/study-session.service";
import { ActionResult } from "@/types/action-result";

async function getUserId() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  return session.user.id;
}

export async function createStudySession(
  data: CreateStudySessionInput
): Promise<ActionResult> {
  try {
    const userId = await getUserId();

    const validatedData = createStudySessionSchema.parse({
      ...data,
      duration: data.duration.toString(),
      studyDate: data.studyDate.toISOString().split("T")[0],
    });

    await studySessionService.create(userId, {
      ...validatedData,
      duration: Number(validatedData.duration),
      studyDate: new Date(validatedData.studyDate),
    });

    revalidatePath("/study-sessions");

    return success(
      undefined,
      "Sessão de estudo cadastrada com sucesso."
    );
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Erro ao cadastrar sessão de estudo."
    );
  }
}

export async function updateStudySession(
  data: UpdateStudySessionInput
): Promise<ActionResult> {
  try {
    const userId = await getUserId();

    const validatedData = updateStudySessionSchema.parse({
      ...data,
      duration: data.duration.toString(),
      studyDate: data.studyDate.toISOString().split("T")[0],
    });

    await studySessionService.update(userId, {
      ...validatedData,
      duration: Number(validatedData.duration),
      studyDate: new Date(validatedData.studyDate),
    });

    revalidatePath("/study-sessions");

    return success(
      undefined,
      "Sessão de estudo atualizada com sucesso."
    );
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Erro ao atualizar sessão de estudo."
    );
  }
}

export async function deleteStudySession(
  id: string
): Promise<ActionResult> {
  try {
    const userId = await getUserId();

    await studySessionService.delete(id, userId);

    revalidatePath("/study-sessions");

    return success(
      undefined,
      "Sessão de estudo removida com sucesso."
    );
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Erro ao remover sessão de estudo."
    );
  }
}

export async function getStudySessions() {
  const userId = await getUserId();

  return studySessionService.findManyByUserId(userId);
}

export async function getStudySessionById(id: string) {
  const userId = await getUserId();

  return studySessionService.findById(id, userId);
}