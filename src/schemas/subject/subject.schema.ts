import { z } from "zod";

export const createSubjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "O nome deve possuir pelo menos 3 caracteres.")
    .max(50, "O nome deve possuir no máximo 50 caracteres."),

  color: z
    .string()
    .min(1, "Selecione uma cor."),
});

export const updateSubjectSchema = createSubjectSchema.extend({
  id: z.cuid(),
});

export type CreateSubjectInput = z.infer<typeof createSubjectSchema>;
export type UpdateSubjectInput = z.infer<typeof updateSubjectSchema>;