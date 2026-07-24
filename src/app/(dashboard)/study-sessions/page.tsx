import Link from "next/link";

import { Plus } from "lucide-react";

import { getStudySessions } from "@/actions/study-session/study-session.actions";
import { PageContainer } from "@/components/dashboard/layout/page-container";
import { StudySessionList } from "@/components/study-sessions/study-session-list";
import { Button } from "@/components/ui/button";

export default async function StudySessionsPage() {
  const studySessions =
    await getStudySessions();

  return (
    <PageContainer
      title="Sessões de estudo"
      description="Gerencie suas sessões de estudo."
    >
      {studySessions.length > 0 && (
        <div className="flex justify-end">
          <Button asChild>
            <Link href="/study-sessions/new">
              <Plus className="mr-2 size-4" />
              Nova sessão
            </Link>
          </Button>
        </div>
      )}

      <StudySessionList
        studySessions={studySessions}
      />
    </PageContainer>
  );
}