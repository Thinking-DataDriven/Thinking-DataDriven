"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrainCircuit, Compass, House, LibraryBig, ScanSearch } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Главная", icon: House },
  { href: "/think", label: "Думать с ИИ", icon: BrainCircuit },
  { href: "/knowledge", label: "Лента знаний", icon: LibraryBig },
  { href: "/growth", label: "Карта роста", icon: Compass },
  { href: "/reviews", label: "Обзоры и паттерны", icon: ScanSearch },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-6 flex h-[calc(100vh-3rem)] flex-col rounded-[28px] bg-slate-950 p-6 text-white shadow-sidebar">
      <div className="flex h-full flex-col">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">MindOS</p>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white">Thinking OS</h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Личная AI-система, которая помогает думать глубже, замечать bottleneck и усиливать
            качество решений.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Текущий bottleneck</p>
          <p className="mt-3 text-sm font-medium leading-6 text-slate-100">
            Решения фиксируются быстрее, чем проверяется качество логики и реальный outcome.
          </p>
          <Badge className="mt-4 border-slate-700 bg-slate-800 text-slate-300">Фокус недели</Badge>
        </div>

        <nav className="mt-8 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                  active
                    ? "bg-white text-slate-950"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">AI coach note</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Сократи weekly review до минимально устойчивой формы. Регулярность сейчас важнее
            идеального шаблона.
          </p>
        </div>
      </div>
    </aside>
  );
}
