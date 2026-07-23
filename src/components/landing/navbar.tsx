import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="flex items-center gap-2">
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