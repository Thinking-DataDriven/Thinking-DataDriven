export type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
  domain: string;
  priority: string;
  linkedGoals: string[];
};

export type DashboardDecision = {
  id: string;
  title: string;
  description: string;
};

export type DashboardKnowledgeHighlight = {
  id: string;
  title: string;
  description: string;
};

export type PatternItem = {
  title: string;
  description: string;
  action: string;
};

export type KnowledgeFeedItem = {
  id: string;
  sourceType: string;
  title: string;
  author: string;
  summary: string;
  keyPoints: string[];
  actionability: string;
  linkedProjects: string[];
  linkedSkills: string[];
  actions: string[];
  relevance: string;
};

export type GrowthSkill = {
  id: string;
  name: string;
  description: string;
  selfScore: number;
  systemScore: number;
  signals: string[];
  priority: string;
  exercise: string;
};

export type ReviewItem = {
  id: string;
  title: string;
  period: string;
  summary: string;
  insights: string[];
  nextFocus: string;
};
