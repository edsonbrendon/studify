"use server";

import { auth } from "@/auth";
import { getDashboardStats, getRecentStudySessions } from "@/services/dashboard/dashboard.service";

export async function getDashboardStatsAction() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  return getDashboardStats(session.user.id);
}

export async function getRecentStudySessionsAction() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado.");
  }

  return getRecentStudySessions(session.user.id);
}