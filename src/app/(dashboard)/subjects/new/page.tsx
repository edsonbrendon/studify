import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/dashboard/layout/page-container";
import { NewSubjectForm } from "@/components/forms/new-subject-form";
import { Button } from "@/components/ui/button";

export default function NewSubjectPage() {
  return (
    <PageContainer
      header={
        <Button
          variant="outline"
          asChild
          className="w-fit"
        >
          <Link href="/subjects">
            <ArrowLeft className="mr-2 size-4" />
            Voltar
          </Link>
        </Button>
      }
      title="Nova matéria"
      description="Cadastre uma nova matéria para organizar seus estudos."
    >
      <NewSubjectForm />
    </PageContainer>
  );
}