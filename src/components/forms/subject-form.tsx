"use client";

import { useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { ColorPicker } from "@/components/subjects/color-picker";
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
  createSubjectSchema,
  CreateSubjectInput,
} from "@/schemas/subject/subject.schema";

type SubjectFormProps = Readonly<{
  defaultValues?: CreateSubjectInput;
  submitLabel?: string;
  onSubmit: (data: CreateSubjectInput) => Promise<void>;
}>;

export function SubjectForm({
  defaultValues,
  submitLabel = "Salvar",
  onSubmit,
}: SubjectFormProps) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSubjectInput>({
    resolver: zodResolver(createSubjectSchema),
    defaultValues: defaultValues ?? {
      name: "",
      color: "",
    },
  });

  function handleFormSubmit(data: CreateSubjectInput) {
    startTransition(async () => {
      await onSubmit(data);
    });
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dados da matéria</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">
              Nome
            </Label>

            <Input
              id="name"
              placeholder="Ex.: React"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              Cor
            </Label>

            <Controller
              name="color"
              control={control}
              render={({ field }) => (
                <ColorPicker
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />

            {errors.color && (
              <p className="text-sm text-destructive">
                {errors.color.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Salvando..." : submitLabel}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}