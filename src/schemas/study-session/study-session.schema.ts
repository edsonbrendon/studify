import { z } from "zod";

export const createStudySessionSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "O título deve ter pelo menos 3 caracteres.")
    .max(100, "O título deve ter no máximo 100 caracteres."),

  description: z
    .string()
    .trim()
    .max(500, "A descrição deve ter no máximo 500 caracteres.")
    .optional()
    .or(z.literal("")),

  duration: z
    .string()
    .min(1, "Informe a duração."),

  studyDate: z
    .string()
    .min(1, "Informe uma data."),

  subjectId: z
    .string()
    .min(1, "Selecione uma matéria."),
});

export const updateStudySessionSchema =
  createStudySessionSchema.extend({
    id: z.cuid(),
  });

export type CreateStudySessionForm = z.infer<
  typeof createStudySessionSchema
>;

export type CreateStudySessionInput = Omit<
  CreateStudySessionForm,
  "duration" | "studyDate"
> & {
  duration: number;
  studyDate: Date;
};

export type UpdateStudySessionInput =
  CreateStudySessionInput & {
    id: string;
  };