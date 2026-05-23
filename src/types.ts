export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon rendering name mapped to Lucide
  glowColor: string; // Tailwind glow class
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  useCase: string;
  impact: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  metric: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface AgentTemplate {
  name: string;
  role: string;
  status: string;
  specialty: string;
  efficiency: string;
}

export interface CustomWorkflow {
  title: string;
  summary: string;
  agents: AgentTemplate[];
  timeline: {
    phase: string;
    detail: string;
    estTime: string;
  }[];
}
