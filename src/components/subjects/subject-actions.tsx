"use client";

import Link from "next/link";
import { Subject } from "@prisma/client";
import { Edit, MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DeleteSubjectDialog } from "./delete-subject-dialog";

type SubjectActionsProps = Readonly<{
  subject: Subject;
}>;

export function SubjectActions({
  subject,
}: SubjectActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          aria-label="Ações da matéria"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44"
      >
        <DropdownMenuItem asChild>
          <Link href={`/subjects/${subject.id}/edit`}>
            <Edit />
            <span>Editar</span>
          </Link>
        </DropdownMenuItem>

        <DeleteSubjectDialog subject={subject} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}