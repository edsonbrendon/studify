"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginUser } from "@/actions/auth/login";
import { LoginSchema, loginSchema } from "@/schemas/auth";

import { FormField } from "@/components/shared/form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await loginUser(data);

      if (!response.success) {
        (
          Object.entries(response.errors) as [
            keyof LoginSchema,
            string[],
          ][]
        ).forEach(([field, messages]) => {
          setError(field, {
            message: messages[0],
          });
        });

        toast.error("E-mail ou senha inválidos.");
        return;
      }

      toast.success("Login realizado com sucesso!");

      router.push("/dashboard");
      router.refresh();
    } catch {
      toast.error("Erro ao realizar login.");
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

      <Card className="border-0 shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <div>
            <CardTitle className="text-2xl">
              Entrar
            </CardTitle>

            <p className="mt-2 text-sm text-muted-foreground">
              Acesse sua conta para continuar sua jornada de estudos.
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
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
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Não possui uma conta?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              Criar conta
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}