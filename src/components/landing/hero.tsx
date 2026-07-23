import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full border px-4 py-2 text-sm">
          📚 Plataforma de organização dos estudos
        </span>

        <h1 className="mt-8 text-5xl font-bold tracking-tight">
          Organize seus estudos.
          <br />
          Alcance seus objetivos.
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Cadastre matérias, registre sessões de estudo e acompanhe
          sua evolução em um único lugar.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button
            size="lg"
            asChild
          >
            <Link href="/register">
              Começar gratuitamente
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/login">
              Entrar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}