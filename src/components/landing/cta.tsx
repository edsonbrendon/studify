import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Comece a organizar seus estudos hoje mesmo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Crie sua conta gratuitamente, registre suas sessões de estudo e
            acompanhe sua evolução de forma simples e organizada.
          </p>

          <div className="mt-10">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/register">
                Criar conta gratuitamente
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}