import { auth } from "@/auth";

export async function Header() {
  const session = await auth();

  const name = session?.user?.name ?? "Usuário";

  const greeting = (() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";

    return "Boa noite";
  })();

  return (
    <header className="flex items-center justify-between border-b bg-background px-6 py-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {greeting}, {name}!
        </h1>

        <p className="text-sm text-muted-foreground">
          Continue sua jornada de estudos.
        </p>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
        {name.charAt(0).toUpperCase()}
      </div>
    </header>
  );
}