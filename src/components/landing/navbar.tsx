import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Studify
        </Link>

        <nav className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
          >
            <Link href="/login">
              Entrar
            </Link>
          </Button>

          <Button asChild>
            <Link href="/register">
              Criar conta
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}