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

      <div className="flex min-h-screen flex-col md:ml-56">
        <Header />

        <main className="flex-1 px-4 py-5 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 