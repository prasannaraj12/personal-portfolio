import { profileData } from "./profile";
import { projectsData } from "./projects";
import { skillsData } from "./skills";
import { experienceData } from "./experience";
import { educationData } from "./education";
import { certificationsData } from "./certifications";
import { achievementsData } from "./achievements";

export interface KnowledgeItem {
  id: string;
  category: "profile" | "projects" | "skills" | "experience" | "education" | "certifications" | "achievements" | "contact";
  title: string;
  keywords: string[];
  content: string;
  sourceLabel: string;
}

export const portfolioKnowledgeBase: KnowledgeItem[] = [
  {
    id: "profile-bio",
    category: "profile",
    title: "Who is Prasannaraj / Overview",
    keywords: ["who is", "prasannaraj", "about", "bio", "profile", "engineer", "role", "overview", "what does he do"],
    content: `${profileData.name} is an ${profileData.role}. ${profileData.biography} His focus areas include: ${profileData.currentFocus.join(", ")}. Primary motto: "${profileData.heroStatement}"`,
    sourceLabel: "ABOUT",
  },
  {
    id: "profile-contact",
    category: "contact",
    title: "Contact Information & Social Links",
    keywords: ["contact", "email", "reach", "hire", "message", "linkedin", "github", "connect", "where is he based", "location"],
    content: `Prasannaraj is based in ${profileData.location}. You can connect with him via GitHub (${profileData.links.github}), LinkedIn (${profileData.links.linkedin}), or email at ${profileData.links.email}. You can also use the interactive Contact app on this desktop.`,
    sourceLabel: "CONTACT",
  },
  {
    id: "education-degree",
    category: "education",
    title: "Education Credentials",
    keywords: ["education", "college", "degree", "university", "sairam", "study", "engineering", "undergraduate", "major"],
    content: `Prasannaraj is pursuing his ${educationData[0].degree} at ${educationData[0].institution}, ${educationData[0].location}. Academic focus: ${educationData[0].academicFocus.join(", ")}.`,
    sourceLabel: "EDUCATION",
  },
  {
    id: "experience-cci",
    category: "experience",
    title: "Professional Work Experience",
    keywords: ["experience", "job", "work", "crawl corp", "cci", "junior ai engineer", "intern", "company", "career"],
    content: `Prasannaraj works as a ${experienceData[0].role} at ${experienceData[0].company}. ${experienceData[0].description} Key technical achievements include: ${experienceData[0].highlights.join("; ")}. Stack used: ${experienceData[0].technologies.join(", ")}.`,
    sourceLabel: "EXPERIENCE",
  },
  {
    id: "skills-overview",
    category: "skills",
    title: "Technical Skills & Stack",
    keywords: ["skills", "technologies", "tech stack", "languages", "python", "typescript", "frameworks", "tools", "databases", "pytorch"],
    content: `Prasannaraj's technical toolkit includes: Programming (Python, JavaScript, TypeScript, SQL); AI/ML (Machine Learning, Deep Learning, Computer Vision, NLP); Generative AI & Agents (LLMs, RAG, Prompt Engineering, Autonomous AI Agents, Multi-Agent Systems); Frameworks (PyTorch, TensorFlow, Scikit-learn, OpenCV, XGBoost, FastAPI, Flask, React, Flutter, Node.js); Tools (Docker, Git, Power BI, Tableau, n8n); Databases (PostgreSQL, SQLite, Firebase).`,
    sourceLabel: "SKILLS",
  },
  // All projects
  ...projectsData.map((proj) => ({
    id: `project-${proj.id}`,
    category: "projects" as const,
    title: proj.title,
    keywords: [
      proj.title.toLowerCase(),
      proj.id.toLowerCase(),
      ...proj.title.toLowerCase().split(/[\s\-/]+/),
      ...proj.technologies.map((t) => t.toLowerCase()),
      "project",
      "built",
      proj.subtitle.toLowerCase(),
    ],
    content: `**${proj.title}** (${proj.subtitle})\n${proj.overview}\n\n**Problem:** ${proj.problem}\n**Solution:** ${proj.solution}\n**Technologies:** ${proj.technologies.join(", ")}\n**Architecture:** ${proj.architecture.flow.join(" -> ")}.\n**Key Highlights:** ${proj.results.join("; ")}`,
    sourceLabel: "PROJECTS",
  })),
  {
    id: "projects-list-overview",
    category: "projects",
    title: "Projects Overview",
    keywords: ["projects", "what projects", "show projects", "portfolio projects", "what has he built", "work portfolio"],
    content: `Prasannaraj has engineered 8 key verified projects:
1. **TRUST-CV / BLOCK SENTINAL**: Offline Computer Vision Integrity Assurance Platform (210/210 tests passing).
2. **SATQUERY AI**: AI Satellite Image Analysis via Natural Language Queries (BigEarthNet, MultiSpectralStem, ResNet-18).
3. **CRAWLNEWS**: Full-Stack Multi-Agent AI News Intelligence Platform (Node.js, Express, Playwright, RSS).
4. **FAKEO**: AI-Powered Fake News Detection Platform (XGBoost, TF-IDF, spaCy, OCR).
5. **URBANBLOOM AI**: Smart Greenery & Intelligent Irrigation Ecosystem (ESP32, Arduino, Gemini AI).
6. **PLAYER RE-IDENTIFICATION**: Sports Computer Vision Tracking System (YOLOv5, DeepSort, PyTorch).
7. **RENTYOURMATE**: Trusted Companion Marketplace (Flutter, Node.js, PostgreSQL - strictly a safe booking platform, not dating).
8. **CHEST X-RAY AI (Sachin Lung)**: Radiographic Disease Detection & Localization (U-Net, DenseNet121, Grad-CAM).`,
    sourceLabel: "PROJECTS",
  },
  {
    id: "certifications-list",
    category: "certifications",
    title: "Professional Certifications",
    keywords: ["certifications", "certificates", "credentials", "ibm", "infosys", "nptel", "great learning", "course"],
    content: `Prasannaraj has completed 7 verified professional certifications:
1. **Principle of Generative AI** (Infosys Springboard)
2. **Data Analysis with Python** (IBM CognitiveClass.ai)
3. **Machine Learning with Python** (IBM CognitiveClass.ai)
4. **Prompt Engineering for Everyone** (IBM CognitiveClass.ai)
5. **Data Science Foundations** (Great Learning)
6. **Data to Dashboard: Mastering Visual Storytelling with Tableau** (NPTEL)
7. **Generative AI using WatsonX** (IBM SkillsBuild)`,
    sourceLabel: "CERTIFICATIONS",
  },
  {
    id: "achievements-list",
    category: "achievements",
    title: "Achievements & Hackathons",
    keywords: ["achievements", "hackathons", "awards", "smart india hackathon", "sih", "srit", "advaya", "sastra", "vihansa", "finalist"],
    content: `Prasannaraj's verified achievements & hackathon milestones:
1. **Smart India Hackathon (SIH)**: Selected for national competition.
2. **SRIT Hackathon**: Led Team Revolutionary to build FAKEO fake news detection (Standout Winner).
3. **ADVAYA 2K25**: Showcased UrbanBloom AI smart irrigation IoT system.
4. **SASTRA AI Hackathon**: Finalist in intensive engineering sprint.
5. **Vihansa 24-Hour Hackathon**: Successfully engineered and pitched full-stack AI prototype in 24 hours.
6. **2X Hackathon Finalist**: Achieved finalist standing across multiple prestigious technology hackathons.`,
    sourceLabel: "ACHIEVEMENTS",
  },
  {
    id: "ai-lab-research",
    category: "skills",
    title: "AI Lab & Research Focus",
    keywords: ["ai lab", "research", "pipeline", "experiments", "agentic", "computer vision", "rag", "vlm"],
    content: `The AI Lab showcases Prasannaraj's active research across: Generative AI, Agentic Multi-Agent Workflows, Computer Vision, RAG architectures, and Vision-Language models. He implements structured pipelines: User Query → Contextual Framing → Semantic Retrieval → Reasoning & Routing → Tool Execution → Generation → Strict Verification.`,
    sourceLabel: "AI LAB",
  },
];

// Strict Query Classifier & Knowledge Base Answer Generator
export function queryPortfolioKnowledge(userQuery: string): {
  answer: string;
  sources: string[];
  suggestions: string[];
} {
  const query = userQuery.trim().toLowerCase();

  // 1. Check for completely disallowed topics (weather, quantum physics, write essays, generic code, stock advice, elon musk, etc.)
  const disallowedPatterns = [
    /\b(weather|temperature|forecast|rain)\b/i,
    /\b(quantum physics|quantum mechanics|black hole|astronomy)\b/i,
    /\b(elon musk|trump|biden|celebrity|actor|movie)\b/i,
    /\b(stock|stocks|crypto|bitcoin|invest|trading|forex)\b/i,
    /\b(write (an? )?(essay|poem|song|story|letter|script))\b/i,
    /\b(write (my )?resume)\b/i,
    /\b(write (me )?(python|java|c\+\+|javascript|sql) code)\b/i,
    /\b(tell me (today's|the) news)\b/i,
    /\b(recipe|cook|baking|diet)\b/i,
    /\b(joke|riddle|funny story)\b/i,
    /\b(what is 2\+2|math problem|solve for x)\b/i,
  ];

  for (const pattern of disallowedPatterns) {
    if (pattern.test(query)) {
      return {
        answer:
          "I can only answer questions about Prasannaraj, his projects, experience, skills, education, certifications, achievements, and information available on this portfolio.",
        sources: [],
        suggestions: [
          "Tell me about Prasannaraj",
          "What projects has he built?",
          "What is TRUST-CV?",
          "What technologies does he use?",
        ],
      };
    }
  }

  // 2. Specific Quick Matches for common portfolio queries
  if (
    query.includes("who is prasannaraj") ||
    query.includes("tell me about prasannaraj") ||
    query.includes("who are you") ||
    query.includes("introduce") ||
    query === "about" ||
    query === "who"
  ) {
    return {
      answer: `**Prasannaraj** is an **AI / ML Engineer** and BE Artificial Intelligence & Machine Learning student at Sri Sairam College of Engineering, Bangalore.\n\nHis core focus spans **Generative AI, Agentic AI, Computer Vision, NLP, and Full-Stack AI Applications**. He has engineered 8 key systems including TRUST-CV (offline CV integrity with 210/210 tests passing), CrawlNews (multi-agent intelligence), and SatQuery AI (satellite VQA).`,
      sources: ["ABOUT", "EDUCATION"],
      suggestions: ["Show me his AI projects", "What is TRUST-CV?", "What is his experience?", "What certifications does he have?"],
    };
  }

  if (query.includes("trust-cv") || query.includes("trust cv") || query.includes("block sentinal")) {
    const p = projectsData.find((proj) => proj.id === "trust-cv")!;
    return {
      answer: `**${p.title}**\n\n${p.overview}\n\n• **Core Problem:** ${p.problem}\n• **Key Achievement:** 210 / 210 deterministic unit and integration tests passing.\n• **Tech Stack:** ${p.technologies.join(", ")}.\n• **Architecture:** ${p.architecture.flow.join(" ➔ ")}.`,
      sources: ["PROJECTS", "AI LAB"],
      suggestions: ["Tell me about SatQuery AI", "Tell me about CrawlNews", "View all projects"],
    };
  }

  if (query.includes("satquery") || query.includes("satellite")) {
    const p = projectsData.find((proj) => proj.id === "satquery-ai")!;
    return {
      answer: `**${p.title}**\n\n${p.overview}\n\n• **Model Architecture:** MultiSpectralStem feature extractor + ResNet-18 backbone adapted from BigEarthNet.\n• **Capabilities:** Visual Question Answering (VQA) and automated captioning over multispectral satellite imagery bands.\n• **Tech Stack:** ${p.technologies.join(", ")}.`,
      sources: ["PROJECTS"],
      suggestions: ["Tell me about TRUST-CV", "Tell me about CrawlNews", "What is his experience?"],
    };
  }

  if (query.includes("crawlnews") || query.includes("news intelligence") || query.includes("agent")) {
    const p = projectsData.find((proj) => proj.id === "crawlnews")!;
    return {
      answer: `**${p.title}**\n\n${p.overview}\n\n• **Architecture:** React Web App ➔ Express API Gateway ➔ Orchestrator Agent ➔ News Collection (RSS/Playwright) ➔ Duplicate Detection Agent ➔ AI Relevance Filter ➔ Fact Verification ➔ Summarization ➔ SQLite Admin Dashboard.\n• **Key Tech:** Node.js, Express, TypeScript, SQLite, Playwright, node-cron, AI Agents.`,
      sources: ["PROJECTS", "EXPERIENCE"],
      suggestions: ["Tell me about Fakeo", "What is his experience at CCI?", "Show technical skills"],
    };
  }

  if (query.includes("fakeo") || query.includes("fake news")) {
    const p = projectsData.find((proj) => proj.id === "fakeo")!;
    return {
      answer: `**${p.title}**\n\n${p.overview}\n\n• **Technology:** XGBoost, TF-IDF, NLP, OCR (pytesseract), spaCy Named Entity Recognition, Flask, joblib.\n• **Honors:** Standout winning project at the SRIT Hackathon with Team Revolutionary.`,
      sources: ["PROJECTS", "ACHIEVEMENTS"],
      suggestions: ["Tell me about UrbanBloom AI", "What hackathons has he participated in?", "Show all projects"],
    };
  }

  if (query.includes("urbanbloom") || query.includes("irrigation") || query.includes("iot")) {
    const p = projectsData.find((proj) => proj.id === "urbanbloom-ai")!;
    return {
      answer: `**${p.title}**\n\n${p.overview}\n\n• **Hardware:** Arduino UNO, ESP32-WROOM-32, Soil Moisture Sensor, Relays, DC Water Motor.\n• **Software & AI:** React Native, Web UI, Google Gemini AI for plant diagnostics.\n• **Showcase:** Featured at ADVAYA 2K25.`,
      sources: ["PROJECTS", "ACHIEVEMENTS"],
      suggestions: ["Tell me about Chest X-Ray AI", "Tell me about Player Re-ID", "What is his tech stack?"],
    };
  }

  if (query.includes("rentyourmate") || query.includes("companion")) {
    const p = projectsData.find((proj) => proj.id === "rentyourmate")!;
    return {
      answer: `**${p.title}**\n\n${p.overview}\n\n*Important note:* This is strictly a verified platform for platonic accompaniment, event buddies, and structured bookings—NOT a dating app.\n\n• **Tech Stack:** Flutter (Provider), Firebase Auth, Node.js, Express, PostgreSQL, Razorpay, OpenStreetMap, Photon.\n• **Core Features:** Strict KYC verification, map geocoding, transactional escrow bookings.`,
      sources: ["PROJECTS"],
      suggestions: ["What projects has he built?", "What technologies does he use?", "Tell me about TRUST-CV"],
    };
  }

  if (query.includes("chest x-ray") || query.includes("xray") || query.includes("sachin lung") || query.includes("medical")) {
    const p = projectsData.find((proj) => proj.id === "chest-xray-ai")!;
    return {
      answer: `**${p.title}**\n\n${p.overview}\n\n• **Deep Learning:** DenseNet121 for pathology classification + U-Net for lung field segmentation.\n• **Explainability:** Grad-CAM saliency heatmaps for lesion interpretability and automated diagnostic drafting.\n• **Domain:** Healthcare AI research project.`,
      sources: ["PROJECTS", "AI LAB"],
      suggestions: ["Tell me about TRUST-CV", "What is his background?", "What certifications does he have?"],
    };
  }

  if (query.includes("player re-id") || query.includes("tracking") || query.includes("yolo")) {
    const p = projectsData.find((proj) => proj.id === "player-reid")!;
    return {
      answer: `**${p.title}**\n\n${p.overview}\n\n• **Pipeline:** YOLOv5 object detector + DeepSORT deep metric feature extractor + Kalman filters for persistent tracking across occlusions.\n• **Tech Stack:** OpenCV, PyTorch, Python, YOLOv5, DeepSORT.`,
      sources: ["PROJECTS"],
      suggestions: ["Tell me about SatQuery AI", "What are his skills?", "Show all projects"],
    };
  }

  if (query.includes("experience") || query.includes("crawl corp") || query.includes("job") || query.includes("role") || query.includes("cci")) {
    return {
      answer: `Prasannaraj serves as a **Junior AI Engineer** at **Crawl Corp India (CCI)**.\n\n• **Responsibilities:** Developing automated AI pipelines, multi-agent news intelligence systems, and full-stack backend integrations.\n• **Core Tools:** Python, TypeScript, Node.js, AI Agents, NLP, SQLite.\n• **Focus:** Productionizing end-to-end intelligent systems and scalable data collection workflows.`,
      sources: ["EXPERIENCE"],
      suggestions: ["What projects has he built?", "What is his education?", "How can I contact him?"],
    };
  }

  if (query.includes("skills") || query.includes("technologies") || query.includes("stack") || query.includes("python") || query.includes("tools")) {
    return {
      answer: `Prasannaraj's technical proficiencies:\n\n• **Programming:** Python, TypeScript, JavaScript, SQL\n• **AI & ML:** Machine Learning, Deep Learning, Computer Vision, NLP\n• **Generative AI & Agents:** LLMs, RAG, Prompt Engineering, Autonomous AI Agents, Multi-Agent Systems\n• **Frameworks:** PyTorch, Scikit-learn, OpenCV, XGBoost, FastAPI, Flask, React, Flutter, Node.js\n• **Tools & Platforms:** Git, GitHub, Docker, Power BI, Tableau, n8n\n• **Databases:** PostgreSQL, SQLite, Firebase`,
      sources: ["SKILLS"],
      suggestions: ["Tell me about TRUST-CV", "What certifications does he have?", "What hackathons has he participated in?"],
    };
  }

  if (query.includes("certif") || query.includes("courses") || query.includes("credentials")) {
    return {
      answer: `Prasannaraj holds 7 verified professional certifications:\n\n1. **Principle of Generative AI** — Infosys Springboard\n2. **Data Analysis with Python** — IBM CognitiveClass.ai\n3. **Machine Learning with Python** — IBM CognitiveClass.ai\n4. **Prompt Engineering for Everyone** — IBM CognitiveClass.ai\n5. **Data Science Foundations** — Great Learning\n6. **Data to Dashboard: Mastering Visual Storytelling with Tableau** — NPTEL\n7. **Generative AI using WatsonX** — IBM SkillsBuild`,
      sources: ["CERTIFICATIONS"],
      suggestions: ["What is his education?", "What projects has he built?", "Tell me about his hackathon achievements"],
    };
  }

  if (query.includes("hackathon") || query.includes("achievement") || query.includes("award") || query.includes("sih")) {
    return {
      answer: `Prasannaraj's verified achievements and hackathon milestones:\n\n• **Smart India Hackathon (SIH):** Selected for the prestigious national competition.\n• **SRIT Hackathon:** Standout winner with Team Revolutionary building FAKEO (Fake News Detection).\n• **ADVAYA 2K25:** Showcased UrbanBloom AI smart irrigation IoT prototype.\n• **SASTRA AI Hackathon:** Finalist in an intensive technical competition.\n• **Vihansa 24-Hour Hackathon:** Built and pitched a complete AI prototype in 24 hours.\n• **2X Hackathon Finalist:** Verified finalist across two competitive engineering hackathons.`,
      sources: ["ACHIEVEMENTS"],
      suggestions: ["What projects has he built?", "Tell me about Fakeo", "What is his experience?"],
    };
  }

  if (query.includes("education") || query.includes("college") || query.includes("degree") || query.includes("sairam") || query.includes("study")) {
    return {
      answer: `Prasannaraj is pursuing his **Bachelor of Engineering (BE) in Artificial Intelligence and Machine Learning** at **Sri Sairam College of Engineering, Bangalore**.\n\nHis coursework and research focus on Deep Learning, Computer Vision, Generative AI, Natural Language Processing, and Software Engineering.`,
      sources: ["EDUCATION"],
      suggestions: ["What projects has he built?", "What certifications does he have?", "Download Resume"],
    };
  }

  if (query.includes("contact") || query.includes("email") || query.includes("reach") || query.includes("hire") || query.includes("linkedin") || query.includes("github")) {
    return {
      answer: `You can connect with Prasannaraj through:\n\n• **Email:** contact.prasannaraj@gmail.com\n• **LinkedIn:** linkedin.com (Open via Start Menu or Contact app)\n• **GitHub:** github.com (Open via Desktop Icon or Terminal)\n• **Location:** Bangalore, India\n\nYou can also launch the **Contact** app right on this desktop to send a direct message!`,
      sources: ["CONTACT"],
      suggestions: ["Open Resume", "Show me his AI projects", "Tell me about TRUST-CV"],
    };
  }

  if (query.includes("resume") || query.includes("cv")) {
    return {
      answer: `You can view and inspect Prasannaraj's full resume right on this desktop! Click the **Resume** icon on the desktop or pinned on the taskbar to launch the Resume viewer, where you can read his full summary, experience at Crawl Corp India, education, all 8 projects, skills, and certifications.`,
      sources: ["RESUME"],
      suggestions: ["Who is Prasannaraj?", "Show me his AI projects", "Contact him"],
    };
  }

  if (query.includes("project") || query.includes("built") || query.includes("portfolio")) {
    return {
      answer: `Prasannaraj has engineered 8 key verified projects across AI and engineering:\n\n1. **TRUST-CV / BLOCK SENTINAL** (Air-gapped CV Integrity, 210/210 tests passing)\n2. **SATQUERY AI** (Multispectral Satellite VQA & Captioning)\n3. **CRAWLNEWS** (Multi-Agent News Intelligence Platform)\n4. **FAKEO** (Multimodal Fake News Detection with XGBoost & OCR)\n5. **URBANBLOOM AI** (IoT Smart Irrigation with ESP32 & Gemini)\n6. **PLAYER RE-IDENTIFICATION** (Sports Tracking with YOLOv5 & DeepSORT)\n7. **RENTYOURMATE** (Trusted Companion Platform with KYC)\n8. **CHEST X-RAY AI** (DenseNet121 + U-Net + Grad-CAM Explainability)\n\nDouble-click the **Projects** icon on the desktop to explore them in File Explorer!`,
      sources: ["PROJECTS"],
      suggestions: ["Tell me about TRUST-CV", "Tell me about SatQuery AI", "Tell me about CrawlNews"],
    };
  }

  // 3. Score-based Fallback Search across knowledge base items
  let bestItem: KnowledgeItem | null = null;
  let maxScore = 0;

  for (const item of portfolioKnowledgeBase) {
    let score = 0;
    for (const kw of item.keywords) {
      if (query.includes(kw)) score += kw.length * 2;
    }
    const words = query.split(/\s+/);
    for (const word of words) {
      if (word.length > 3 && item.content.toLowerCase().includes(word)) {
        score += 3;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestItem = item;
    }
  }

  if (bestItem && maxScore >= 6) {
    return {
      answer: bestItem.content,
      sources: [bestItem.sourceLabel],
      suggestions: ["Tell me about Prasannaraj", "Show me his AI projects", "How can I contact him?"],
    };
  }

  // 4. Strict refusal with explicit portfolio boundary guardrails
  const isPortfolioContextQuery =
    /\b(prasannaraj|prasanna|he|his|him|you|your|portfolio|author|creator|candidate|engineer|developer|intern|experience|project|projects|skill|skills|education|certif|achievement|award|hackathon|degree|college|university|resume|contact|email|github|linkedin)\b/i.test(
      query
    );

  if (isPortfolioContextQuery) {
    return {
      answer: "I don't have that information in Prasannaraj's portfolio.",
      sources: [],
      suggestions: [
        "Who is Prasannaraj?",
        "What projects has he built?",
        "What is his experience?",
        "What technologies does he use?",
      ],
    };
  }

  return {
    answer: "I can only answer questions about Prasannaraj and information available in this portfolio.",
    sources: [],
    suggestions: [
      "Tell me about Prasannaraj",
      "Show me his AI projects",
      "What is his tech stack?",
      "View his Resume",
    ],
  };
}
