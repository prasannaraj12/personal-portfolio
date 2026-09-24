export interface WindowState {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  customData?: any;
}

export type WindowId =
  | "about"
  | "projects"
  | "project-detail"
  | "experience"
  | "ai-lab"
  | "skills"
  | "achievements"
  | "certifications"
  | "resume"
  | "contact"
  | "terminal"
  | "diagnostics"
  | "copilot";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Computer Vision" | "Generative AI / Agents" | "Machine Learning / NLP" | "IoT & Hardware" | "Full-Stack AI";
  badge?: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    title: string;
    flow: string[];
    description: string;
  };
  technologies: string[];
  implementation: string[];
  results: string[];
  githubUrl?: string;
  caseStudy?: string;
  iconName: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: "Hands-on" | "Project Experience" | "Working Knowledge" | "Familiar";
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period?: string;
  academicFocus: string[];
  details: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
  skillsGained: string[];
  summary: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  description: string;
  tag: string;
  badge?: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  sources?: string[];
  suggestions?: string[];
}
