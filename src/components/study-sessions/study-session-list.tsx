import { StudySession, Subject } from "@prisma/client";

import { EmptyStudySessions } from "@/components/study-sessions/empty-study-sessions";
import { StudySessionCard } from "@/components/study-sessions/study-session-card";

type StudySessionWithSubject = StudySession & {
  subject: Subject;
};

type StudySessionListProps = Readonly<{
  studySessions: StudySessionWithSubject[];
}>;

export function StudySessionList({
  studySessions,
}: StudySessionListProps) {
  if (studySessions.length === 0) {
    return <EmptyStudySessions />;
  }

  return (
    <div className="grid gap-4">
      {studySessions.map((studySession) => (
        <StudySessionCard
          key={studySession.id}
          studySession={studySession}
        />
      ))}
    </div>
  );
}