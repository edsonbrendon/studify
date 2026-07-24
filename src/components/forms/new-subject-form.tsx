"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { createSubject } from "@/actions/subject/subject.actions";
import { SubjectForm } from "@/components/forms/subject-form";
import { CreateSubjectInput } from "@/schemas/subject/subject.schema";

export function NewSubjectForm() {
  const router = useRouter();

  async function handleSubmit(data: CreateSubjectInput) {
    const result = await createSubject(data);

    if (!result.success) {
      toast.error(result.message);

      return;
    }

    toast.success(result.message);

    router.push("/subjects");
  }

  return <SubjectForm onSubmit={handleSubmit} />;
}