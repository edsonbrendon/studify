"use client";

import Link from "next/link";
import { useState } from "react";

import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { SidebarContent } from "./sidebar";

export function Header() {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  const fullName = session?.user?.name ?? "Usuário";
  const firstName = fullName.split(" ")[0];

  return (
    <header className="flex items-center justify-between border-b bg-background px-4 py-3 md:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="rounded-md p-2 transition-colors hover:bg-muted md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="w-56 p-0">
          <div className="flex h-full flex-col bg-zinc-50">
            <SidebarContent
              onNavigate={() => setOpen(false)}
            />
          </div>
        </SheetContent>

        <div className="hidden md:block" />

        <Link
          href="/profile"
          title={fullName}
          aria-label="Meu perfil"
          className="flex h-9 w-9 items-center justify-center rounded-full border bg-zinc-100 font-semibold text-zinc-700 transition hover:bg-zinc-200"
        >
          {firstName.charAt(0).toUpperCase()}
        </Link>
      </Sheet>
    </header>
  );
}