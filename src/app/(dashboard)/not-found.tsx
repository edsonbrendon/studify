import Link from "next/link";
import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-full flex-1 items-center justify-center px-6 py-12">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-muted">
          <SearchX className="size-10 text-muted-foreground" />
        </div>

        <span className="text-sm font-medium text-primary">
          Erro 404
        </span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Página não encontrada
        </h1>

        <p className="mt-3 text-muted-foreground">
          A página que você está procurando não existe ou pode ter sido removida.
        </p>

        <Button
          asChild
          className="mt-8"
        >
          <Link href="/dashboard">
            Voltar ao Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}