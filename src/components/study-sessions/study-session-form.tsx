"use client";

import { useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Subject } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  createStudySessionSchema,
  CreateStudySessionForm,
  CreateStudySessionInput,
} from "@/schemas/study-session/study-session.schema";

type StudySessionFormProps = Readonly<{
  subjects: Subject[];
  defaultValues?: CreateStudySessionForm;
  submitLabel?: string;
  onSubmit: (
    data: CreateStudySessionInput
  ) => Promise<void>;
}>;

export function StudySessionForm({
  subjects,
  defaultValues,
  submitLabel = "Salvar",
  onSubmit,
}: StudySessionFormProps) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateStudySessionForm>({
    resolver: zodResolver(createStudySessionSchema),
    defaultValues:
      defaultValues ?? {
        title: "",
        description: "",
        subjectId: "",
        studyDate: "",
        duration: "",
      },
  });

  function handleFormSubmit(
    data: CreateStudySessionForm
  ) {
    startTransition(async () => {
      await onSubmit({
        ...data,
        duration: Number(data.duration),
        studyDate: new Date(data.studyDate),
      });
    });
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Dados da sessão
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="title">
              Título
            </Label>

            <Input
              id="title"
              placeholder="Ex.: Hooks personalizados"
              {...register("title")}
            />

            {errors.title && (
              <p className="text-sm text-destructive">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              Matéria
            </Label>

            <Controller
              name="subjectId"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma matéria" />
                  </SelectTrigger>

                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem
                        key={subject.id}
                        value={subject.id}
                      >
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.subjectId && (
              <p className="text-sm text-destructive">
                {errors.subjectId.message}
              </p>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="studyDate">
                Data
              </Label>

              <Input
                id="studyDate"
                type="date"
                {...register("studyDate")}
              />

              {errors.studyDate && (
                <p className="text-sm text-destructive">
                  {errors.studyDate.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">
                Duração (min)
              </Label>

              <Input
                id="duration"
                type="number"
                min={1}
                {...register("duration")}
              />

              {errors.duration && (
                <p className="text-sm text-destructive">
                  {errors.duration.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Descrição
            </Label>

            <Textarea
              id="description"
              rows={4}
              placeholder="Adicione observações sobre a sessão..."
              {...register("description")}
            />

            {errors.description && (
              <p className="text-sm text-destructive">
                {errors.description.message}
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
                : submitLabel}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}