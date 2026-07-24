import Link from "next/link";

import {
  BookOpen,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmptyStudySessions() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card px-6 py-16 text-center">
      <div className="mb-6 rounded-full bg-primary/10 p-4">
        <BookOpen className="size-8 text-primary" />
      </div>

      <h2 className="text-xl font-semibold">
        Nenhuma sessão cadastrada
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Cadastre sua primeira sessão de estudo para começar a acompanhar sua evolução.
      </p>

      <Button asChild className="mt-6">
        <Link href="/study-sessions/new">
          <Plus className="mr-2 size-4" />
          Nova sessão
        </Link>
      </Button>
    </div>
  );
}