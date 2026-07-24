import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getSubjectById } from "@/actions/subject/subject.actions";
import { PageContainer } from "@/components/dashboard/layout/page-container";
import { EditSubjectForm } from "@/components/subjects/edit-subject-form";
import { Button } from "@/components/ui/button";

type EditSubjectPageProps = Readonly<{
  params: Promise<{
    id: string;
  }>;
}>;

export default async function EditSubjectPage({
  params,
}: EditSubjectPageProps) {
  const { id } = await params;

  const subject = await getSubjectById(id).catch(() => null);

  if (!subject) {
    notFound();
  }

  return (
    <PageContainer
      title="Editar matéria"
      description="Atualize as informações da matéria."
    >
      <EditSubjectForm subject={subject} />
    </PageContainer>
  );
}