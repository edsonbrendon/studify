"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import {
  BookOpen,
  BookText,
  Home,
  LogOut,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Matérias",
    href: "/subjects",
    icon: BookOpen,
  },
  {
    title: "Sessões",
    href: "/study-sessions",
    icon: BookText,
  },
];

const secondaryNavigation = [
  {
    title: "Perfil",
    href: "/profile",
    icon: User,
  },
];

type SidebarContentProps = {
  onNavigate?: () => void;
};

export function SidebarContent({
  onNavigate,
}: SidebarContentProps) {
  const pathname = usePathname();

  function handleNavigate() {
    onNavigate?.();
  }

  function handleSignOut() {
    onNavigate?.();
    signOut({ callbackUrl: "/" });
  }

  return (
    <>
      <div className="border-b px-5 py-4">
        <Link
          href="/dashboard"
          onClick={handleNavigate}
          className="text-xl font-bold tracking-tight text-primary"
        >
          Studify
        </Link>
      </div>

      <nav className="flex flex-1 flex-col justify-between p-3">
        <div className="space-y-1">
          {navigation.map(({ title, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={handleNavigate}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {title}
            </Link>
          ))}
        </div>

        <div className="space-y-1 border-t pt-4">
          {secondaryNavigation.map(({ title, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={handleNavigate}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {title}
            </Link>
          ))}

          <button
            type="button"
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <LogOut className="h-5 w-5" />
            Sair
          </button>
        </div>
      </nav>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-56 flex-col border-r border-zinc-200 bg-zinc-50 md:flex">
      <SidebarContent />
    </aside>
  );
}