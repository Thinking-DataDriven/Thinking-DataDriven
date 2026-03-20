import { SectionHeading, SkillCard } from "@/components/mindos/sections";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { growthMap } from "@/lib/mock-data";

export default function GrowthPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="shadow-panel">
          <CardHeader>
            <SectionHeading
              title="Профиль мета-навыков"
              description="Спокойная карта навыков с progress bar и кратким пояснением, без ощущения gaming dashboard."
            />
          </CardHeader>
          <CardContent className="space-y-4">
            {growthMap.skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </CardContent>
        </Card>

        <div className="space-y-5">
          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sidebar">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Текущий фокус</p>
            <h1 className="mt-3 text-2xl font-semibold leading-tight">{growthMap.focus.title}</h1>
            <p className="mt-4 text-sm leading-6 text-slate-300">{growthMap.focus.description}</p>
            <div className="mt-5 rounded-3xl bg-slate-900 p-5">
              <p className="text-sm font-medium text-white">Рекомендованное упражнение</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {growthMap.skills[1]?.exercise}
              </p>
            </div>
          </div>

          {growthMap.summary.map((item) => (
            <Card key={item.label}>
              <CardHeader>
                <CardTitle className="text-base text-slate-900">{item.label}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
