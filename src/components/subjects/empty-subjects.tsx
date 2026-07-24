import Link from "next/link";

import { BookOpen, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmptySubjects() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card px-6 py-16 text-center">
      <div className="mb-6 rounded-full bg-primary/10 p-4">
        <BookOpen className="size-8 text-primary" />
      </div>

      <h2 className="text-xl font-semibold">
        Nenhuma matéria cadastrada
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Cadastre sua primeira matéria para começar a organizar seus estudos.
      </p>

      <Button asChild className="mt-6">
        <Link href="/subjects/new">
          <Plus className="mr-2 size-4" />
          Nova matéria
        </Link>
      </Button>
    </div>
  );
}