"use client";

import { usePathname } from "next/navigation";

import { TopScreenSwitcher } from "@/components/layout/top-screen-switcher";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Главная",
    description: "Обзор bottleneck, решений, знаний и ключевого фокуса на неделю.",
  },
  "/think": {
    title: "Думать с ИИ",
    description: "Структурированное thinking workspace вместо обычного чата.",
  },
  "/knowledge": {
    title: "Лента знаний",
    description: "Материалы, которые превращаются в инсайты, принципы и действия.",
  },
  "/growth": {
    title: "Карта роста",
    description: "Мета-навыки, сигналы системы и приоритет тренировки.",
  },
  "/reviews": {
    title: "Обзоры и паттерны",
    description: "Weekly review, recurring bottlenecks и извлечённые принципы.",
  },
};

export function PageHeader() {
  const pathname = usePathname();
  const meta = pageMeta[pathname] ?? pageMeta["/"];

  return (
    <header className="flex flex-col gap-6 border-b border-slate-200 pb-8">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Thinking OS / MindOS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{meta.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            {meta.description}
          </p>
        </div>

        <div className="max-w-xl">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Переключение экранов
            </p>
            <a
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              href="/logout"
            >
              Выйти
            </a>
          </div>
          <div className="mt-3">
            <TopScreenSwitcher />
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600">
        Спокойный desktop-first интерфейс для мышления: фокус недели, knowledge integration,
        structured thinking sessions и weekly review в одной системе.
      </div>
    </header>
  );
}
