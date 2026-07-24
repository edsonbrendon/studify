import { ReactNode } from "react";

import { Header } from "@/components/dashboard/layout/header";
import { Sidebar } from "@/components/dashboard/layout/sidebar";

type DashboardLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <Sidebar />

      <div className="ml-64 flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}