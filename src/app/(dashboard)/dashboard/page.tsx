import { PageContainer } from "@/components/dashboard/layout/page-container";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentSessions } from "@/components/dashboard/recent-sessions";

export default function DashboardPage() {
  return (
    <PageContainer
      title="Dashboard"
      description="Acompanhe seu progresso nos estudos."
    >
      <DashboardStats />

      <section className="mt-6">
        <RecentSessions />
      </section>
    </PageContainer>
  );
}