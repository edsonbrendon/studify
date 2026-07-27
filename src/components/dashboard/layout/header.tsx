import Link from "next/link";

import { auth } from "@/auth";

export async function Header() {
  const session = await auth();

  const fullName = session?.user?.name ?? "Usuário";
  const firstName = fullName.split(" ")[0];

  return (
    <header className="flex items-center justify-between border-b bg-background px-6 py-3">
      <div />

<Link
  href="/profile"
  title={fullName}
  className="flex h-9 w-9 items-center justify-center rounded-full border bg-zinc-100 font-semibold text-zinc-700 transition hover:bg-zinc-200"
>
  {firstName.charAt(0).toUpperCase()}
</Link>
    </header>
  );
}