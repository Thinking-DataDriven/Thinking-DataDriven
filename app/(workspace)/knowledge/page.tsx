import { KnowledgeCard, SectionHeading } from "@/components/mindos/sections";
import { Badge } from "@/components/ui/badge";
import { knowledgeFeed } from "@/lib/mock-data";

export default function KnowledgePage() {
  const filters = ["Все", "AI", "Спикеры", "Решения", "Системы", "Обучение", "Сохраненное"];

  return (
    <div className="space-y-10">
      <section>
        <SectionHeading
          title="Curated knowledge surface"
          description="Лента не выглядит как бесконечный feed: только отобранные материалы, которые можно связать с проектами, навыками и действиями."
        />
        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {knowledgeFeed.highlights.map((item) => (
            <Badge key={item.label}>
              {item.label}: {item.value}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <div className="grid gap-5 xl:grid-cols-3">
          {knowledgeFeed.items.map((item) => (
            <KnowledgeCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
