import { prisma } from "@/lib/prisma";

import {
  CreateStudySessionInput,
  UpdateStudySessionInput,
} from "@/schemas/study-session/study-session.schema";

class StudySessionService {
  async create(
    userId: string,
    data: CreateStudySessionInput
  ) {
    await this.validateSubject(
      userId,
      data.subjectId
    );

    return prisma.studySession.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async findManyByUserId(userId: string) {
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
    });
  }

  async findById(id: string, userId: string) {
    const studySession =
      await prisma.studySession.findFirst({
        where: {
          id,
          userId,
        },
        include: {
          subject: true,
        },
      });

    if (!studySession) {
      throw new Error(
        "Sessão de estudo não encontrada."
      );
    }

    return studySession;
  }

  async update(
    userId: string,
    data: UpdateStudySessionInput
  ) {
    const { id, ...studySessionData } = data;

    await this.findById(id, userId);

    await this.validateSubject(
      userId,
      studySessionData.subjectId
    );

    return prisma.studySession.update({
      where: {
        id,
      },
      data: studySessionData,
    });
  }

  async delete(id: string, userId: string) {
    await this.findById(id, userId);

    return prisma.studySession.delete({
      where: {
        id,
      },
    });
  }

  private async validateSubject(
    userId: string,
    subjectId: string
  ) {
    const subject = await prisma.subject.findFirst({
      where: {
        id: subjectId,
        userId,
      },
    });

    if (!subject) {
      throw new Error("Matéria não encontrada.");
    }
  }
}

export const studySessionService =
  new StudySessionService();