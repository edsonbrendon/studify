import { prisma } from "@/lib/prisma";

import {
  CreateSubjectInput,
  UpdateSubjectInput,
} from "@/schemas/subject/subject.schema";

class SubjectService {
  async create(userId: string, data: CreateSubjectInput) {
    const subject = await prisma.subject.findFirst({
      where: {
        userId,
        name: data.name,
      },
    });

    if (subject) {
      throw new Error("Já existe uma matéria com esse nome.");
    }

    return prisma.subject.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async findManyByUserId(userId: string) {
    return prisma.subject.findMany({
      where: {
        userId,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async findById(id: string, userId: string) {
    const subject = await prisma.subject.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!subject) {
      throw new Error("Matéria não encontrada.");
    }

    return subject;
  }

  async update(userId: string, data: UpdateSubjectInput) {
    const { id, ...subjectData } = data;

    await this.findById(id, userId);

    const existingSubject = await prisma.subject.findFirst({
      where: {
        userId,
        name: subjectData.name,
        NOT: {
          id,
        },
      },
    });

    if (existingSubject) {
      throw new Error("Já existe uma matéria com esse nome.");
    }

    return prisma.subject.update({
      where: {
        id,
      },
      data: subjectData,
    });
  }

  async delete(id: string, userId: string) {
    await this.findById(id, userId);

    return prisma.subject.delete({
      where: {
        id,
      },
    });
  }
}

export const subjectService = new SubjectService();