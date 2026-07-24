import { Subject } from "@prisma/client";
import { BookOpen } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SubjectActions } from "./subject-actions";

type SubjectCardProps = Readonly<{
  subject: Subject;
}>;

export function SubjectCard({
  subject,
}: SubjectCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="flex items-center gap-3">
          <div
            className="size-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: subject.color }}
          >
            <BookOpen className="size-5 text-white" />
          </div>

          <div>
            <CardTitle>{subject.name}</CardTitle>

            <p className="text-sm text-muted-foreground">
              Criada em{" "}
              {subject.createdAt.toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>

        <SubjectActions subject={subject} />
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          Nenhuma sessão de estudo registrada.
        </p>
      </CardContent>
    </Card>
  );
}