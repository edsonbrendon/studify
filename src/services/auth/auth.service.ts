import bcrypt from "bcryptjs";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LoginSchema, RegisterSchema } from "@/schemas/auth/auth.schema";

export class AuthService {
  async register(data: RegisterSchema) {
    const { name, email, password } = data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Já existe um usuário com esse e-mail.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    await this.login({ email, password });
  }

  async login(data: LoginSchema) {
    const { email, password } = data;

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    } catch {
      throw new Error("E-mail ou senha inválidos.");
    }
  }
}

export const authService = new AuthService();