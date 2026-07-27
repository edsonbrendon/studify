import {
  BookOpen,
  CalendarDays,
  Clock3,
  Flame,
} from "lucide-react";

import { getDashboardStatsAction } from "@/actions/dashboard/dashboard.actions";

import { SummaryCard } from "./summary-card";

function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes} min`;
  }

  if (remainingMinutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${remainingMinutes}min`;
}

export async function DashboardStats() {
  const stats = await getDashboardStatsAction();

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <SummaryCard
        title="Matérias"
        value={stats.totalSubjects}
        description="Matérias cadastradas"
        icon={BookOpen}
      />

      <SummaryCard
        title="Sessões"
        value={stats.totalStudySessions}
        description="Sessões realizadas"
        icon={CalendarDays}
      />

      <SummaryCard
        title="Tempo estudado"
        value={formatMinutes(stats.totalStudyMinutes)}
        description="Tempo total"
        icon={Clock3}
      />

      <SummaryCard
        title="Esta semana"
        value={formatMinutes(stats.weeklyStudyMinutes)}
        description="Últimos 7 dias"
        icon={Flame}
      />
    </section>
  );
}