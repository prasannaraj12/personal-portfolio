import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "PROGRAMMING",
    skills: [
      { name: "Python", level: "Hands-on", highlight: true },
      { name: "JavaScript", level: "Hands-on" },
      { name: "TypeScript", level: "Hands-on", highlight: true },
      { name: "SQL", level: "Hands-on" },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "Machine Learning", level: "Hands-on", highlight: true },
      { name: "Deep Learning", level: "Hands-on", highlight: true },
      { name: "Computer Vision", level: "Hands-on", highlight: true },
      { name: "NLP", level: "Hands-on" },
    ],
  },
  {
    category: "GENERATIVE AI & AGENTS",
    skills: [
      { name: "Large Language Models (LLMs)", level: "Hands-on", highlight: true },
      { name: "Retrieval-Augmented Gen (RAG)", level: "Hands-on", highlight: true },
      { name: "Prompt Engineering", level: "Hands-on" },
      { name: "Autonomous AI Agents", level: "Project Experience", highlight: true },
      { name: "Multi-Agent Systems", level: "Project Experience", highlight: true },
    ],
  },
  {
    category: "FRAMEWORKS & LIBRARIES",
    skills: [
      { name: "PyTorch", level: "Hands-on", highlight: true },
      { name: "TensorFlow", level: "Working Knowledge" },
      { name: "Scikit-learn", level: "Hands-on" },
      { name: "OpenCV", level: "Hands-on", highlight: true },
      { name: "XGBoost", level: "Project Experience" },
      { name: "FastAPI", level: "Hands-on" },
      { name: "Flask", level: "Hands-on" },
      { name: "React", level: "Hands-on" },
      { name: "Flutter", level: "Project Experience" },
      { name: "Node.js", level: "Hands-on" },
    ],
  },
  {
    category: "DEVELOPER TOOLS & AUTOMATION",
    skills: [
      { name: "Git", level: "Hands-on" },
      { name: "GitHub", level: "Hands-on" },
      { name: "Docker", level: "Working Knowledge" },
      { name: "Power BI", level: "Working Knowledge" },
      { name: "Tableau", level: "Working Knowledge" },
      { name: "n8n (Workflow Automation)", level: "Project Experience" },
    ],
  },
  {
    category: "DATABASES & CLOUD",
    skills: [
      { name: "PostgreSQL", level: "Hands-on" },
      { name: "SQLite", level: "Hands-on" },
      { name: "Firebase", level: "Hands-on" },
    ],
  },
];
