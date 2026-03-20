"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const screens = [
  { href: "/", label: "Главная" },
  { href: "/think", label: "Думать с ИИ" },
  { href: "/knowledge", label: "Лента знаний" },
  { href: "/growth", label: "Карта роста" },
  { href: "/reviews", label: "Обзоры и паттерны" },
];

export function TopScreenSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2">
      {screens.map((screen) => {
        const active = pathname === screen.href;

        return (
          <Link
            key={screen.href}
            href={screen.href}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              active
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            )}
          >
            {screen.label}
          </Link>
        );
      })}
    </div>
  );
}
