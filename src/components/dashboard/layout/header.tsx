import { auth } from "@/auth";

export async function Header() {
  const session = await auth();

  const fullName = session?.user?.name ?? "Usuário";
  const firstName = fullName.split(" ")[0];

  const greeting = (() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";

    return "Boa noite";
  })();

  return (
    <header className="flex items-center justify-between border-b bg-background px-6 py-3">
      <div>
        <h1 className="text-xl font-bold tracking-tight">
          {greeting}, {firstName}!
        </h1>

        <p className="text-sm text-muted-foreground">
          Continue sua jornada de estudos.
        </p>
      </div>

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
        {firstName.charAt(0).toUpperCase()}
      </div>
    </header>
  );
}