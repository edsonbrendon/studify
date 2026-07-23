"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginUser } from "@/actions/auth/login";
import { LoginSchema, loginSchema } from "@/schemas/auth";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
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
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Entrar</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
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
      </CardContent>
    </Card>
  );
}