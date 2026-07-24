import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/dashboard/layout/page-container";
import { NewSubjectForm } from "@/components/subjects/new-subject-form";
import { Button } from "@/components/ui/button";

export default function NewSubjectPage() {
  return (
    <PageContainer
      title="Nova matéria"
      description="Cadastre uma nova matéria para organizar seus estudos."
    >
      <NewSubjectForm />
    </PageContainer>
  );
}