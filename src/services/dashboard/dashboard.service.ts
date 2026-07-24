import { prisma } from "@/lib/prisma";

function getStartOfWeek() {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const day = today.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  today.setDate(today.getDate() + diff);

  return today;
}

export async function getDashboardStats(
  userId: string
) {
  const [
    totalSubjects,
    totalStudySessions,
    studyTime,
    weeklyStudyTime,
  ] = await Promise.all([
    prisma.subject.count({
      where: { userId },
    }),

    prisma.studySession.count({
      where: { userId },
    }),

    prisma.studySession.aggregate({
      where: { userId },
      _sum: {
        duration: true,
      },
    }),

    prisma.studySession.aggregate({
      where: {
        userId,
        studyDate: {
          gte: getStartOfWeek(),
        },
      },
      _sum: {
        duration: true,
      },
    }),
  ]);

  return {
    totalSubjects,
    totalStudySessions,
    totalStudyMinutes:
      studyTime._sum.duration ?? 0,
    weeklyStudyMinutes:
      weeklyStudyTime._sum.duration ?? 0,
  };
}

export async function getRecentStudySessions(
  userId: string
) {
  return prisma.studySession.findMany({
    where: {
      userId,
    },
    include: {
      subject: true,
    },
    orderBy: {
      studyDate: "desc",
    },
    take: 5,
  });
}