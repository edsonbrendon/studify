"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import { failure, success } from "@/lib/action-result";
import {
  CreateSubjectInput,
  createSubjectSchema,
  UpdateSubjectInput,
  updateSubjectSchema,
} from "@/schemas/subject/subject.schema";
import { subjectService } from "@/services/subject/subject.service";
import { ActionResult } from "@/types/action-result";

async function getUserId() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  return session.user.id;
}

export async function createSubject(
  data: CreateSubjectInput
): Promise<ActionResult> {
  try {
    const userId = await getUserId();

    const validatedData = createSubjectSchema.parse(data);

    await subjectService.create(userId, validatedData);

    revalidatePath("/subjects");

    return success(undefined, "Matéria cadastrada com sucesso.");
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Erro ao cadastrar matéria."
    );
  }
}

export async function updateSubject(
  data: UpdateSubjectInput
): Promise<ActionResult> {
  try {
    const userId = await getUserId();

    const validatedData = updateSubjectSchema.parse(data);

    await subjectService.update(userId, validatedData);

    revalidatePath("/subjects");

    return success(undefined, "Matéria atualizada com sucesso.");
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Erro ao atualizar matéria."
    );
  }
}

export async function deleteSubject(
  id: string
): Promise<ActionResult> {
  try {
    const userId = await getUserId();

    await subjectService.delete(id, userId);

    revalidatePath("/subjects");

    return success(undefined, "Matéria removida com sucesso.");
  } catch (error) {
    return failure(
      error instanceof Error
        ? error.message
        : "Erro ao remover matéria."
    );
  }
}

export async function getSubjects() {
  const userId = await getUserId();

  return subjectService.findManyByUserId(userId);
}

export async function getSubjectById(id: string) {
  const userId = await getUserId();

  return subjectService.findById(id, userId);
}