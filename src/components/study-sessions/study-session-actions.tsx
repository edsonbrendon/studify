"use client";

import Link from "next/link";

import { StudySession } from "@prisma/client";
import { Edit } from "lucide-react";

import { DeleteStudySessionDialog } from "@/components/study-sessions/delete-study-session-dialog";
import { Button } from "@/components/ui/button";

type StudySessionActionsProps = Readonly<{
  studySession: StudySession;
}>;

export function StudySessionActions({
  studySession,
}: StudySessionActionsProps) {
  return (
    <div className="flex justify-end gap-2">
      <Button
        variant="outline"
        size="icon"
        asChild
      >
        <Link href={`/study-sessions/${studySession.id}/edit`}>
          <Edit className="size-4" />
        </Link>
      </Button>

      <DeleteStudySessionDialog
        studySession={studySession}
      />
    </div>
  );
}