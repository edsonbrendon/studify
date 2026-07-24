import { notFound } from "next/navigation";

import { getSubjectById } from "@/actions/subject/subject.actions";
import { EditSubjectForm } from "@/components/forms/edit-subject-form";

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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Editar matéria
        </h1>

        <p className="text-muted-foreground">
          Atualize as informações da matéria.
        </p>
      </div>

      <EditSubjectForm subject={subject} />
    </div>
  );
}