import { StudySession, Subject } from "@prisma/client";

import { StudySessionActions } from "@/components/study-sessions/study-session-actions";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <CardHeader>
        <CardTitle>{studySession.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>
          <strong>Matéria:</strong>{" "}
          {studySession.subject.name}
        </p>

        <p>
          <strong>Duração:</strong>{" "}
          {studySession.duration} min
        </p>

        <p>
          <strong>Data:</strong>{" "}
          {studySession.studyDate.toLocaleDateString(
            "pt-BR"
          )}
        </p>

        {studySession.description && (
          <p>{studySession.description}</p>
        )}

        <StudySessionActions
          studySession={studySession}
        />
      </CardContent>
    </Card>
  );
}