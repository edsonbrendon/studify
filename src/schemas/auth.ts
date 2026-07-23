import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(100, "O nome é muito grande"),

  email: z
    .email("E-mail inválido")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const loginSchema = z.object({
  email: z
    .email("E-mail inválido")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(1, "Informe sua senha"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;