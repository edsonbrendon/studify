"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/schemas/auth";
import { registerUser } from "@/actions/auth/register";
import { FormField } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        (Object.entries(response.errors) as [
          keyof RegisterSchema,
          string[]
        ][]).forEach(([field, messages]) => {
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
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
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
            {isSubmitting ? "Cadastrando..." : "Criar conta"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}