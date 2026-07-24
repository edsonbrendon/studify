"use client";

import { useRouter } from "next/navigation";

import { Subject } from "@prisma/client";
import { toast } from "sonner";

import { updateSubject } from "@/actions/subject/subject.actions";
import { SubjectForm } from "@/components/subjects/subject-form";

type EditSubjectFormProps = Readonly<{
  subject: Subject;
}>;

export function EditSubjectForm({
  subject,
}: EditSubjectFormProps) {
  const router = useRouter();

  async function handleSubmit(data: {
    name: string;
    color: string;
  }) {
    const result = await updateSubject({
      id: subject.id,
      ...data,
    });

    if (!result.success) {
      toast.error(result.message);

      return;
    }

    toast.success(result.message);

    router.push("/subjects");
  }

  return (
    <SubjectForm
      defaultValues={{
        name: subject.name,
        color: subject.color,
      }}
      submitLabel="Atualizar"
      onSubmit={handleSubmit}
    />
  );
}