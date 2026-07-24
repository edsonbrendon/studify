import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { getSubjects } from "@/actions/subject/subject.actions";
import { getStudySessionById } from "@/actions/study-session/study-session.actions";
import { PageContainer } from "@/components/dashboard/layout/page-container";
import { EditStudySessionForm } from "@/components/study-sessions/edit-study-session-form";
import { Button } from "@/components/ui/button";

type PageProps = Readonly<{
  params: Promise<{
    id: string;
  }>;
}>;

export default async function EditStudySessionPage({
  params,
}: PageProps) {
  const { id } = await params;

  const studySession =
    await getStudySessionById(id);

  if (!studySession) {
    notFound();
  }

  const subjects = await getSubjects();

  return (
    <PageContainer
      title="Editar sessão de estudo"
      description="Atualize as informações da sessão de estudo."
    >
      <EditStudySessionForm
        id={studySession.id}
        subjects={subjects}
        defaultValues={{
          title: studySession.title,
          description:
            studySession.description ?? "",
          duration:
            studySession.duration.toString(),
          studyDate: studySession.studyDate
            .toISOString()
            .split("T")[0],
          subjectId: studySession.subjectId,
        }}
      />
    </PageContainer>
  );
}