import { StudySession, Subject } from "@prisma/client";
import {
  BookOpen,
  Calendar,
  Clock,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { StudySessionActions } from "./study-session-actions";

type StudySessionCardProps = Readonly<{
  studySession: StudySession & {
    subject: Subject;
  };
}>;

export function StudySessionCard({
  studySession,
}: StudySessionCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="flex items-center gap-3">
          <div
            className="flex size-10 items-center justify-center rounded-lg"
            style={{
              backgroundColor:
                studySession.subject.color,
            }}
          >
            <BookOpen className="size-5 text-white" />
          </div>

          <div>
            <CardTitle>
              {studySession.title}
            </CardTitle>

            <p className="text-sm text-muted-foreground">
              {studySession.subject.name}
            </p>
          </div>
        </div>

        <StudySessionActions
          studySession={studySession}
        />
      </CardHeader>

      <CardContent className="space-y-4">
        {studySession.description && (
          <p className="text-sm text-muted-foreground">
            {studySession.description}
          </p>
        )}

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="size-4" />
            {studySession.duration} min
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-4" />
            {studySession.studyDate.toLocaleDateString(
              "pt-BR"
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}