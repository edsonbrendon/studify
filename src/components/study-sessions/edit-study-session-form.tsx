"use client";

import { useRouter } from "next/navigation";

import { Subject } from "@prisma/client";
import { toast } from "sonner";

import { updateStudySession } from "@/actions/study-session/study-session.actions";
import { StudySessionForm } from "@/components/study-sessions/study-session-form";
import {
  CreateStudySessionForm,
  CreateStudySessionInput,
} from "@/schemas/study-session/study-session.schema";

type EditStudySessionFormProps = Readonly<{
  id: string;
  subjects: Subject[];
  defaultValues: CreateStudySessionForm;
}>;

export function EditStudySessionForm({
  id,
  subjects,
  defaultValues,
}: EditStudySessionFormProps) {
  const router = useRouter();

  async function handleSubmit(
    data: CreateStudySessionInput
  ) {
    const result = await updateStudySession({
      id,
      ...data,
    });

    if (!result.success) {
      toast.error(result.message);

      return;
    }

    toast.success(result.message);

    router.push("/study-sessions");
  }

  return (
    <StudySessionForm
      subjects={subjects}
      defaultValues={defaultValues}
      submitLabel="Atualizar"
      onSubmit={handleSubmit}
    />
  );
}