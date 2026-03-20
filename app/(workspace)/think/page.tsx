import { SectionHeading } from "@/components/mindos/sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { thinkWorkspace } from "@/lib/mock-data";

export default function ThinkPage() {
  return (
    <div className="space-y-10">
      <section>
        <SectionHeading
          title="Structured thinking workspace"
          description="Экран собран как thinking session board: режимы мышления, reasoning-зона и компактные блоки сохранения результата."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          {thinkWorkspace.modes.map((mode) => (
            <button
              key={mode.title}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                mode.active
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
              type="button"
            >
              {mode.title}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_360px]">
        <Card className="shadow-panel">
          <CardHeader className="space-y-4">
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Ты</p>
              <CardTitle className="mt-3 text-xl text-white">{thinkWorkspace.sessionTitle}</CardTitle>
              <p className="mt-3 text-sm leading-6 text-slate-300">{thinkWorkspace.prompt}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Thinking Partner
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Разбор в режиме: {thinkWorkspace.currentMode}
                  </p>
                </div>
                <Badge>{thinkWorkspace.currentMode}</Badge>
              </div>
              <div className="mt-5 grid gap-4">
                {thinkWorkspace.blocks.map((block) => (
                  <div key={block.title} className="rounded-3xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-sm font-semibold text-slate-900">{block.title}</h3>
                      <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        {block.hint}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      {block.items.map((item) => (
                        <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">Вопрос для тебя</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Что именно должно измениться в твоём поведении после следующего weekly review,
                  чтобы его ценность стала очевидной уже на этой неделе?
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-slate-900">Рабочая заметка</p>
              <div className="mt-4 min-h-28 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-500">
                Сформулируй ответ, затем сохрани его как решение, гипотезу или принцип.
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Button>Продолжить разбор</Button>
                <Button variant="secondary">Сохранить как решение</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-slate-900">Какой контекст использован</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {thinkWorkspace.blocks.map((block) => (
                <div key={block.title} className="rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="text-sm font-medium text-slate-900">{block.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{block.items[0]}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-slate-900">Что можно сохранить</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {thinkWorkspace.memoryOutputs.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 px-4 py-4">
                  <p className="text-sm font-medium text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
              <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                <span className="font-medium text-slate-900">Следующий лучший шаг:</span>{" "}
                {thinkWorkspace.nextBestStep}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <SectionHeading
          title="Принципы рабочего пространства"
          description="Интерфейс не маскируется под мессенджер: он ведёт через мыслительные шаги и помогает сохранить результат."
        />
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {thinkWorkspace.principles.map((principle) => (
            <Card key={principle.title}>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-slate-600">
                {principle.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
