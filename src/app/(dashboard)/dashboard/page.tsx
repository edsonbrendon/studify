import {
  BookOpen,
  CalendarDays,
  Flame,
} from "lucide-react";

import { SummaryCard } from "@/components/dashboard/cards/summary-card";
import { PageContainer } from "@/components/dashboard/layout/page-container";
import { RecentSessions } from "@/components/dashboard/recent-sessions";

export default function DashboardPage() {
  return (
    <PageContainer
      title="Dashboard"
      description="Acompanhe seu progresso nos estudos."
    >
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <SummaryCard
          title="Matérias"
          value={0}
          description="Matérias cadastradas"
          icon={BookOpen}
        />

        <SummaryCard
          title="Sessões"
          value={0}
          description="Sessões realizadas"
          icon={CalendarDays}
        />

        <SummaryCard
          title="Sequência"
          value="0 dias"
          description="Dias consecutivos estudando"
          icon={Flame}
        />
      </section>

      <section className="mt-6">
        <RecentSessions />
      </section>
    </PageContainer>
  );
}