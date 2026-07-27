"use client";

import { useTransition } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { updateProfileAction } from "@/actions/profile/profile.actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  updateProfileSchema,
  UpdateProfileInput,
} from "@/schemas/profile/profile.schema";

type ProfileFormProps = Readonly<{defaultValues: UpdateProfileInput;}>;

export function ProfileForm({defaultValues}: ProfileFormProps) {
  const router = useRouter();
  const { update } = useSession();

  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState: { errors } } = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues,
  });

  function handleFormSubmit(data: UpdateProfileInput) {
    startTransition(async () => {
      const result = await updateProfileAction(data);

      if (result.success) {
        await update({
          ...data,
        });

        router.refresh();
      }
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Informações pessoais
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(
            handleFormSubmit
          )}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">
              Nome
            </Label>

            <Input
              id="name"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isPending}
            >
              {isPending
                ? "Salvando..."
                : "Salvar alterações"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}