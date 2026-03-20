import { PatternCard, ReviewCard, SectionHeading } from "@/components/mindos/sections";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { reviewsHub } from "@/lib/mock-data";

export default function ReviewsPage() {
  const prompts = [
    "Что реально сдвинуло систему вперед?",
    "Что забрало энергию, но дало мало рычага?",
    "Какое решение было самым сильным и почему?",
    "Какая ошибка снова повторилась?",
    "Какой один bottleneck важнее всего на следующей неделе?",
  ];

  return (
    <div className="space-y-10">
      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        <Card className="shadow-panel">
          <CardHeader>
            <SectionHeading
              title="Недельный обзор"
              description="Экран рефлексии и накопления правил: короткий, ясный и привязанный к следующему фокусу."
            />
          </CardHeader>
          <CardContent className="space-y-4">
            {prompts.map((prompt, index) => (
              <div key={prompt} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Вопрос {index + 1}
                </p>
                <p className="mt-3 text-sm font-medium text-slate-900">{prompt}</p>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Button>Запустить AI-обзор</Button>
              <Button variant="secondary">Сохранить ответы</Button>
            </div>
            <div className="pt-2">
              <ReviewCard review={reviewsHub.reviews[0]} />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <SectionHeading
              title="Повторяющиеся ошибки"
              description="Recurring mistakes, которые система уже видит достаточно отчётливо."
            />
            <div className="mt-4 space-y-4">
              {reviewsHub.bottlenecks.map((pattern) => (
                <PatternCard key={pattern.title} pattern={pattern} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              title="Извлечённые принципы"
              description="Готовые принципы, которые стоит закрепить как часть личной операционной системы."
            />
            <div className="mt-4 space-y-4">
              {reviewsHub.principles.map((pattern) => (
                <PatternCard key={pattern.title} pattern={pattern} tone="accent" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
