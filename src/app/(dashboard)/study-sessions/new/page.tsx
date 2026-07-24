import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { getSubjects } from "@/actions/subject/subject.actions";
import { PageContainer } from "@/components/dashboard/layout/page-container";
import { NewStudySessionForm } from "@/components/study-sessions/new-study-session-form";
import { Button } from "@/components/ui/button";

export default async function NewStudySessionPage() {
  const subjects = await getSubjects();

  return (
    <PageContainer
      header={
        <Button
          variant="outline"
          asChild
          className="w-fit"
        >
          <Link href="/study-sessions">
            <ArrowLeft className="mr-2 size-4" />
            Voltar
          </Link>
        </Button>
      }
      title="Nova sessão de estudo"
      description="Registre uma nova sessão para acompanhar sua evolução."
    >
      <NewStudySessionForm
        subjects={subjects}
      />
    </PageContainer>
  );
}