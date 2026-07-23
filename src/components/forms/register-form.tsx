"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerUser } from "@/actions/auth/register";
import { registerSchema, RegisterSchema } from "@/schemas/auth";

import { FormField } from "@/components/shared/form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      const response = await registerUser(data);

      if (!response.success) {
        (
          Object.entries(response.errors) as [
            keyof RegisterSchema,
            string[],
          ][]
        ).forEach(([field, messages]) => {
          setError(field, {
            message: messages[0],
          });
        });

        return;
      }

      toast.success("Conta criada com sucesso!");

      router.push("/login");
    } catch {
      toast.error("Erro ao criar a conta.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar ao início
      </Link>

      <Card className="shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <div>
            <CardTitle className="text-2xl">
              Criar conta
            </CardTitle>

            <p className="mt-2 text-sm text-muted-foreground">
              Crie sua conta e comece sua jornada de estudos.
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              id="name"
              label="Nome"
              error={errors.name?.message}
            >
              <Input
                id="name"
                placeholder="Seu nome"
                {...register("name")}
              />
            </FormField>

            <FormField
              id="email"
              label="E-mail"
              error={errors.email?.message}
            >
              <Input
                id="email"
                type="email"
                placeholder="voce@email.com"
                {...register("email")}
              />
            </FormField>

            <FormField
              id="password"
              label="Senha"
              error={errors.password?.message}
            >
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
              />
            </FormField>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Criando conta..." : "Criar conta"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Já possui uma conta?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Entrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}