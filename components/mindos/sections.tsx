import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type {
  DashboardDecision,
  DashboardKnowledgeHighlight,
  GrowthSkill,
  KnowledgeFeedItem,
  PatternItem,
  Project,
  ReviewItem,
} from "@/types/domain";

export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

export function SummaryCallout({
  eyebrow,
  title,
  description,
  actionLabel,
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  tone?: "default" | "hero";
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
        tone === "hero"
          ? "shadow-panel"
          : "",
      )}
    >
      <div className="rounded-[28px] bg-slate-50 p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-slate-900">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{description}</p>
      </div>
      <div className="mt-5 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
        {actionLabel}
      </div>
    </div>
  );
}

export function KeyMetricCard({
  label,
  value,
  caption,
}: {
  label: string;
  value: string;
  caption: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-2">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
        <CardTitle className="text-2xl leading-tight text-slate-900">{value}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6 text-slate-600">{caption}</CardContent>
    </Card>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
          <Badge variant="secondary">{project.status}</Badge>
        </div>
        <p className="text-sm leading-6 text-slate-600">{project.description}</p>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Домен</span>
          <span className="text-slate-900">{project.domain}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Приоритет</span>
          <span className="text-slate-900">{project.priority}</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.linkedGoals.map((goal) => (
            <Badge key={goal}>{goal}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function InsightList({
  items,
  variant,
}: {
  items: DashboardDecision[] | DashboardKnowledgeHighlight[];
  variant: "decision" | "knowledge";
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id}>
          <CardContent className="flex items-start justify-between gap-5 p-5">
            <div>
              <p className="font-medium text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
            <Badge variant={variant === "decision" ? "default" : "secondary"}>
              {variant === "decision" ? "Решение" : "Insight"}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function PatternCard({
  pattern,
  tone = "default",
}: {
  pattern: PatternItem;
  tone?: "default" | "accent";
}) {
  return (
    <Card className={cn("h-full", tone === "accent" ? "bg-slate-50" : "")}>
      <CardHeader className="space-y-3">
        <CardTitle className="text-base text-slate-900">{pattern.title}</CardTitle>
        <p className="text-sm leading-6 text-slate-600">{pattern.description}</p>
      </CardHeader>
      <CardContent className="text-sm font-medium text-slate-800">{pattern.action}</CardContent>
    </Card>
  );
}

export function KnowledgeCard({ item }: { item: KnowledgeFeedItem }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{item.sourceType}</Badge>
          <span className="text-xs text-slate-500">{item.author}</span>
        </div>
        <CardTitle className="text-xl leading-tight text-slate-900">{item.title}</CardTitle>
        <p className="text-sm leading-6 text-slate-600">{item.summary}</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {item.linkedProjects.concat(item.linkedSkills).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <ul className="space-y-2 text-sm leading-6 text-slate-600">
          {item.keyPoints.slice(0, 2).map((point) => (
            <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
              {point}
            </li>
          ))}
        </ul>
        <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          <span className="font-medium text-slate-900">Применимость:</span> {item.actionability}
        </div>
        <div className="grid gap-2">
          {item.actions.map((action) => (
            <div key={action} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
              {action}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillCard({ skill }: { skill: GrowthSkill }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-900">{skill.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{skill.description}</p>
        </div>
        <span className="text-sm font-semibold text-slate-900">{skill.systemScore}/10</span>
      </div>
      <Progress className="mt-4" value={skill.systemScore * 10} />
      <p className="mt-3 text-sm leading-6 text-slate-500">{skill.exercise}</p>
    </div>
  );
}

export function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-xl text-slate-900">{review.title}</CardTitle>
          <Badge>{review.period}</Badge>
        </div>
        <p className="text-sm leading-6 text-slate-600">{review.summary}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-slate-900">Ключевые выводы</p>
          <div className="mt-3 space-y-2">
            {review.insights.map((insight) => (
              <div key={insight} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                {insight}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <span className="font-medium text-slate-900">Следующий фокус:</span> {review.nextFocus}
        </div>
      </CardContent>
    </Card>
  );
}
