import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} Studify. Todos os direitos reservados.
        </p>

        <nav className="flex items-center gap-6">
          <Link
            href="/login"
            className="transition-colors hover:text-foreground"
          >
            Entrar
          </Link>

          <Link
            href="/register"
            className="transition-colors hover:text-foreground"
          >
            Criar conta
          </Link>
        </nav>
      </div>
    </footer>
  );
}