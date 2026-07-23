import bcrypt from "bcryptjs";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LoginSchema, RegisterSchema } from "@/schemas/auth";
import { ActionResult } from "@/types/action";

export class AuthService {
  async register(data: RegisterSchema): Promise<ActionResult> {
    const { name, email, password } = data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        success: false,
        errors: {
          email: ["Já existe um usuário com esse e-mail."],
        },
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      message: "Usuário criado com sucesso.",
    };
  }

  async login(data: LoginSchema): Promise<ActionResult> {
    const { email, password } = data;

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      return {
        success: true,
      };
    } catch {
      return {
        success: false,
        errors: {
          email: ["E-mail ou senha inválidos."],
        },
      };
    }
  }
}

export const authService = new AuthService();