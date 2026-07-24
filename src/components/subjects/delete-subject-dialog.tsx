"use client";

import { useTransition } from "react";
import { Subject } from "@prisma/client";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { deleteSubject } from "@/actions/subject/subject.actions";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

type DeleteSubjectDialogProps = Readonly<{
  subject: Subject;
}>;

export function DeleteSubjectDialog({
  subject,
}: DeleteSubjectDialogProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      const result = await deleteSubject(subject.id);

      if (!result.success) {
        toast.error(result.message);

        return;
      }

      toast.success(result.message);
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem
          variant="destructive"
          onSelect={(event) => event.preventDefault()}
        >
          <Trash2 />
          Excluir
        </DropdownMenuItem>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Excluir matéria
          </AlertDialogTitle>

          <AlertDialogDescription>
            Tem certeza que deseja excluir{" "}
            <strong>{subject.name}</strong>?
            <br />
            Essa ação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>
            Cancelar
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={isPending}
            onClick={(event) => {
              event.preventDefault();
              handleDelete();
            }}
          >
            {isPending ? "Excluindo..." : "Excluir"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}