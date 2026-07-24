import { Subject } from "@prisma/client";

import { EmptySubjects } from "./empty-subjects";
import { SubjectCard } from "./subject-card";

type SubjectListProps = Readonly<{
  subjects: Subject[];
}>;

export function SubjectList({
  subjects,
}: SubjectListProps) {
  if (subjects.length === 0) {
    return <EmptySubjects />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          subject={subject}
        />
      ))}
    </div>
  );
}