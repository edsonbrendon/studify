import { auth } from "@/auth";
import { LogoutButton } from "@/components/shared/logout-button";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <main className="mx-auto max-w-6xl p-10">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="mt-4">
        <LogoutButton />
      </div>
    </main>
  );
}