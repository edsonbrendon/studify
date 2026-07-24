import Link from "next/link";

import { Plus } from "lucide-react";

import { getSubjects } from "@/actions/subject/subject.actions";
import { PageContainer } from "@/components/dashboard/layout/page-container";
import { SubjectList } from "@/components/subjects/subject-list";
import { Button } from "@/components/ui/button";

export default async function SubjectsPage() {
  const subjects = await getSubjects();

  return (
    <PageContainer
      title="Matérias"
      description="Gerencie suas matérias de estudo."
    >
      {subjects.length > 0 && (
        <div className="flex justify-end">
          <Button asChild>
            <Link href="/subjects/new">
              <Plus className="mr-2 size-4" />
              Nova matéria
            </Link>
          </Button>
        </div>
      )}

      <SubjectList subjects={subjects} />
    </PageContainer>
  );
}