import {
  InsightList,
  KeyMetricCard,
  PatternCard,
  ProjectCard,
  SectionHeading,
} from "@/components/mindos/sections";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { dashboardData } from "@/lib/mock-data";

export default function HomePage() {
  const actions = [
    "Сократить weekly review до трёх обязательных вопросов.",
    "После каждого важного решения фиксировать ожидаемый outcome.",
    "Раз в неделю обновлять один рабочий принцип из реального опыта.",
  ];

  const patternLabels = [
    "Повторяющаяся ошибка",
    "Сильная сторона",
    "Слепая зона",
    "Возможность роста",
  ];

  return (
    <div className="space-y-10">
      <section>
        <SectionHeading
          title="Центральный обзор системы"
          description="Главная даёт быстрый и спокойный обзор фокуса недели, bottleneck и следующего полезного шага."
        />
        <div className="mt-5 grid gap-5 xl:grid-cols-4">
          <KeyMetricCard
            label="Навык недели"
            value={dashboardData.skillOfWeek.name}
            caption={dashboardData.skillOfWeek.note}
          />
          {dashboardData.metrics.map((metric) => (
            <KeyMetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              caption={metric.caption}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.85fr]">
        <Card className="shadow-panel">
          <CardContent className="p-6">
            <div className="rounded-[28px] bg-slate-50 p-8">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">AI-синтез</p>
                  <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900">
                    {dashboardData.mainRecommendation.title}
                  </h1>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {dashboardData.mainRecommendation.why}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Фокус недели</Badge>
                  <Badge>Weekly review</Badge>
                  <Badge>Knowledge integration</Badge>
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-4 xl:grid-cols-3">
              {actions.map((action, index) => (
                <div key={action} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Шаг {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{action}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div>
          <SectionHeading
            title="Найденные паттерны"
            description="Компактный стек сигналов, которые уже достаточно устойчивы, чтобы на них опираться."
          />
          <div className="mt-4 space-y-4">
            {dashboardData.patterns.map((pattern, index) => (
              <div key={pattern.title}>
                <p className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-500">
                  {patternLabels[index] ?? "Паттерн"}
                </p>
                <PatternCard pattern={pattern} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Card>
          <CardHeader>
            <SectionHeading
              title="Активные проекты"
              description="Приоритетные направления, которые сейчас формируют ежедневный фокус."
            />
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboardData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <SectionHeading
              title="Последние решения"
              description="Что уже решено и где ещё нужен контроль риска."
            />
          </CardHeader>
          <CardContent>
            <InsightList items={dashboardData.decisions} variant="decision" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <SectionHeading
              title="Выжимка из ленты"
              description="Свежие знания, которые можно быстро перевести в действие."
            />
          </CardHeader>
          <CardContent>
            <InsightList items={dashboardData.knowledgeHighlights} variant="knowledge" />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
