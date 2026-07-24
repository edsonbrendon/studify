"use client";

import Link from "next/link";
import { Subject, StudySession } from "@prisma/client";
import {
  Edit,
  MoreVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DeleteStudySessionDialog } from "./delete-study-session-dialog";

type StudySessionActionsProps = Readonly<{
  studySession: StudySession & {
    subject: Subject;
  };
}>;

export function StudySessionActions({
  studySession,
}: StudySessionActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          aria-label="Ações da sessão"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44"
      >
        <DropdownMenuItem asChild>
          <Link
            href={`/study-sessions/${studySession.id}/edit`}
          >
            <Edit />
            <span>Editar</span>
          </Link>
        </DropdownMenuItem>

        <DeleteStudySessionDialog
          studySession={studySession}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}