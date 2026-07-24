import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import { getRecentStudySessionsAction } from "@/actions/dashboard/dashboard.actions";

import { EmptyStudySessions } from "@/components/shared/empty-study-sessions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes} min`;
  }

  if (remainingMinutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${remainingMinutes}min`;
}

export async function RecentSessions() {
  const sessions = await getRecentStudySessionsAction();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Últimas sessões</CardTitle>

        {sessions.length > 0 && (
          <Button asChild>
            <Link href="/study-sessions/new">
              Nova sessão
            </Link>
          </Button>
        )}
      </CardHeader>

      <CardContent>
        {sessions.length === 0 ? (
          <EmptyStudySessions />
        ) : (
          <div className="space-y-4">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="size-10 rounded-lg"
                    style={{
                      backgroundColor: session.subject.color,
                    }}
                  />

                  <div>
                    <p className="font-medium">
                      {session.title}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {session.subject.name}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    {formatDuration(session.duration)}
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    {session.studyDate.toLocaleDateString("pt-BR")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}