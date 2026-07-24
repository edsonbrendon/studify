import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export function EmptyStudySessions() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <BookOpen className="size-8 text-primary" />
          </div>

          <h3 className="text-lg font-semibold">
            Nenhuma sessão encontrada
          </h3>

          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Cadastre sua primeira sessão de estudo para começar a acompanhar sua evolução.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}