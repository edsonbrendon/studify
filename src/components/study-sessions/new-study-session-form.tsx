"use client";

import { useRouter } from "next/navigation";

import { Subject } from "@prisma/client";
import { toast } from "sonner";

import { createStudySession } from "@/actions/study-session/study-session.actions";
import { StudySessionForm } from "@/components/study-sessions/study-session-form";
import { CreateStudySessionInput } from "@/schemas/study-session/study-session.schema";

type NewStudySessionFormProps = Readonly<{
  subjects: Subject[];
}>;

export function NewStudySessionForm({
  subjects,
}: NewStudySessionFormProps) {
  const router = useRouter();

  async function handleSubmit(
    data: CreateStudySessionInput
  ) {
    const result = await createStudySession(data);

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
      onSubmit={handleSubmit}
    />
  );
}