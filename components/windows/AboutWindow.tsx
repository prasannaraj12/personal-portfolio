"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import {
  FolderFilled,
  FolderRegular,
  DocumentTextRegular,
  DesktopRegular,
  SearchRegular,
  ChevronLeftRegular,
  ChevronRightRegular,
  ChevronUpRegular,
  CheckmarkCircleRegular,
  OpenRegular,
  DismissRegular,
  InfoRegular,
} from "@/components/icons/FluentIcons";
import {
  Win11ThisPCIcon,
  Win11ResumeIcon,
  Win11FolderIcon,
  Win11ContactIcon,
  Win11AskAIIcon,
} from "@/components/icons/Win11FluentIcons";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiReact,
  SiFlutter,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiVercel,
  SiN8N,
} from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";

interface AboutWindowProps {
  onOpenApp: (appId: string) => void;
}

type DrivePath = "root" | "C:" | "D:" | "E:" | "F:";

interface DriveInfo {
  id: DrivePath;
  letter: string;
  name: string;
  label: string;
  subtitle: string;
  used: string;
  total: string;
  percent: number;
  iconType: "os" | "ai" | "dev" | "projects";
}

const DRIVES: DriveInfo[] = [
  {
    id: "C:",
    letter: "C:",
    name: "PRASANNARAJ_OS",
    label: "C: PRASANNARAJ_OS",
    subtitle: "Portfolio Operating System",
    used: "78 GB",
    total: "128 GB",
    percent: 61,
    iconType: "os",
  },
  {
    id: "D:",
    letter: "D:",
    name: "AI_LAB",
    label: "D: AI_LAB",
    subtitle: "AI & Machine Learning Projects",
    used: "142 GB",
    total: "256 GB",
    percent: 55,
    iconType: "ai",
  },
  {
    id: "E:",
    letter: "E:",
    name: "DEVELOPMENT",
    label: "E: DEVELOPMENT",
    subtitle: "Code & Engineering Stack",
    used: "210 GB",
    total: "512 GB",
    percent: 41,
    iconType: "dev",
  },
  {
    id: "F:",
    letter: "F:",
    name: "PROJECTS",
    label: "F: PROJECTS",
    subtitle: "8 Engineering Projects",
    used: "480 GB",
    total: "1.2 TB",
    percent: 40,
    iconType: "projects",
  },
];

export function AboutWindow({ onOpenApp }: AboutWindowProps) {
  const [currentPath, setCurrentPath] = useState<DrivePath>("root");
  const [history, setHistory] = useState<DrivePath[]>(["root"]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [propertiesModal, setPropertiesModal] = useState<any | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    title: string;
    type: string;
    location: string;
    details?: string;
    onOpen?: () => void;
  } | null>(null);

  // Navigation handlers
  const navigateTo = (path: DrivePath) => {
    const nextHistory = history.slice(0, historyIndex + 1);
    nextHistory.push(path);
    setHistory(nextHistory);
    setHistoryIndex(nextHistory.length - 1);
    setCurrentPath(path);
    setSelectedItem(null);
    setContextMenu(null);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCurrentPath(history[newIndex]);
      setSelectedItem(null);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentPath(history[newIndex]);
      setSelectedItem(null);
    }
  };

  const handleUp = () => {
    if (currentPath !== "root") {
      navigateTo("root");
    }
  };

  // Close context menu on outside click
  const handleWindowClick = () => {
    setContextMenu(null);
  };

  // Right-click context menu trigger
  const handleContextMenu = (
    e: React.MouseEvent,
    info: {
      title: string;
      type: string;
      location: string;
      details?: string;
      onOpen?: () => void;
    }
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      ...info,
    });
  };

  // Breadcrumb text generator
  const getBreadcrumbs = () => {
    if (currentPath === "root") return ["This PC", "Prasannaraj's Workstation"];
    const drive = DRIVES.find((d) => d.id === currentPath);
    return ["This PC", drive ? drive.label : currentPath];
  };

  // C: OS Folders
  const osFolders = [
    { id: "profile", name: "Profile", type: "Candidate Bio & Overview", app: "about" },
    { id: "resume", name: "Resume.pdf", type: "PDF Document", app: "resume" },
    { id: "experience", name: "Experience", type: "Work History (CCI)", app: "experience" },
    { id: "education", name: "Education", type: "BE AIML Degree", app: "education" },
    { id: "certifications", name: "Certifications", type: "7 Verified Credentials", app: "certifications" },
    { id: "achievements", name: "Achievements", type: "Hackathons & Awards", app: "achievements" },
    { id: "contact", name: "Contact & Inquiries", type: "Direct Comms", app: "contact" },
    { id: "settings", name: "Settings", type: "Technical Skills Matrix", app: "skills" },
  ];

  // D: AI Lab Categories
  const aiCategories = [
    {
      domain: "Computer Vision",
      projects: ["trust-cv", "fakeo", "player-reid", "chest-xray-ai"],
      desc: "Integrity validation, object tracking, radiology segmentation & fraud detection",
    },
    {
      domain: "Remote Sensing",
      projects: ["satquery-ai", "trust-cv"],
      desc: "Multispectral satellite VQA, captioning & EO cryptographical chains",
    },
    {
      domain: "Generative AI & Agents",
      projects: ["crawlnews", "urbanbloom-ai"],
      desc: "Multi-agent news orchestration, automated verification & Gemini IoT",
    },
    {
      domain: "Machine Learning & NLP",
      projects: ["fakeo", "crawlnews"],
      desc: "XGBoost, TF-IDF, OCR, Named Entity Recognition & text summarization",
    },
    {
      domain: "Multimodal AI",
      projects: ["satquery-ai", "chest-xray-ai"],
      desc: "Vision-Language models, U-Net + DenseNet121 + Grad-CAM explainability",
    },
    {
      domain: "IoT & Hardware AI",
      projects: ["urbanbloom-ai"],
      desc: "ESP32, soil sensing, telemetry & dynamic plant diagnostics",
    },
  ];

  // E: Development Stacks
  const devStacks = [
    {
      name: "Frontend Engineering",
      tools: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      ],
    },
    {
      name: "Backend Architecture",
      tools: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
        { name: "Express", icon: <SiExpress className="text-[#E1E1E1]" /> },
        { name: "Flask", icon: <SiFlask className="text-[#E1E1E1]" /> },
      ],
    },
    {
      name: "AI & Machine Learning",
      tools: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
        { name: "OpenCV", icon: <SiOpencv className="text-[#5C3EE8]" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
        { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
        { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
      ],
    },
    {
      name: "Databases & Storage",
      tools: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ],
    },
    {
      name: "Cloud & Developer Tools",
      tools: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "n8n", icon: <SiN8N className="text-[#EA4B71]" /> },
      ],
    },
  ];

  // F: 8 Projects
  const projectFolders = [
    { prefix: "01", id: "trust-cv", name: "01_TRUST-CV" },
    { prefix: "02", id: "satquery-ai", name: "02_SATQUERY_AI" },
    { prefix: "03", id: "crawlnews", name: "03_CRAWLNEWS" },
    { prefix: "04", id: "fakeo", name: "04_FAKEO" },
    { prefix: "05", id: "urbanbloom-ai", name: "05_URBANBLOOM_AI" },
    { prefix: "06", id: "player-reid", name: "06_PLAYER_REIDENTIFICATION" },
    { prefix: "07", id: "rentyourmate", name: "07_RENTYOURMATE" },
    { prefix: "08", id: "chest-xray-ai", name: "08_CHEST_XRAY_AI" },
  ];

  const selectedProjectData = projectsData.find((p) => p.id === selectedItem);

  return (
    <div
      onClick={handleWindowClick}
      className="flex flex-col h-full bg-[#181818] select-none text-xs text-[#E1E1E1] overflow-hidden"
    >
      {/* 1. Windows 11 File Explorer Navigation Bar */}
      <div className="h-11 px-3 bg-[#1f1f1f] border-b border-[#2d2d2d] flex items-center gap-2 shrink-0 select-none">
        {/* Navigation Buttons: Back, Forward, Up */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={handleBack}
            disabled={historyIndex === 0}
            title="Back"
            className="w-7 h-7 flex items-center justify-center rounded-[4px] text-[#A8AFBA] hover:text-white hover:bg-white/[0.08] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <ChevronLeftRegular className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleForward}
            disabled={historyIndex >= history.length - 1}
            title="Forward"
            className="w-7 h-7 flex items-center justify-center rounded-[4px] text-[#A8AFBA] hover:text-white hover:bg-white/[0.08] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <ChevronRightRegular className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleUp}
            disabled={currentPath === "root"}
            title="Up to This PC"
            className="w-7 h-7 flex items-center justify-center rounded-[4px] text-[#A8AFBA] hover:text-white hover:bg-white/[0.08] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <ChevronUpRegular className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Breadcrumb Address Bar */}
        <div className="flex-1 h-7 px-2.5 rounded-[4px] bg-[#141414] border border-[#333333] flex items-center gap-1.5 text-xs overflow-hidden">
          <DesktopRegular className="w-3.5 h-3.5 text-[#4CC2FF] shrink-0" />
          <div className="flex items-center gap-1 truncate text-[#E1E1E1]">
            {getBreadcrumbs().map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRightRegular className="w-2.5 h-2.5 text-[#71717A] shrink-0" />}
                <button
                  onClick={() => {
                    if (idx === 0) navigateTo("root");
                  }}
                  className={`hover:text-[#4CC2FF] transition-colors truncate ${
                    idx === getBreadcrumbs().length - 1 ? "font-medium text-white" : "text-[#A8AFBA]"
                  }`}
                >
                  {crumb}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-44 sm:w-56 h-7 px-2.5 rounded-[4px] bg-[#141414] border border-[#333333] flex items-center gap-1.5 shrink-0">
          <SearchRegular className="w-3.5 h-3.5 text-[#A8AFBA] shrink-0" />
          <input
            type="text"
            placeholder="Search Workstation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-white placeholder-[#A8AFBA]/60 focus:outline-none"
          />
        </div>
      </div>

      {/* 2. Main Content Canvas */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {/* ========================================================= */}
        {/* ROOT VIEW: THIS PC / PRASANNARAJ'S WORKSTATION             */}
        {/* ========================================================= */}
        {currentPath === "root" && (
          <>
            {/* System Info Header Banner */}
            <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <Win11ThisPCIcon className="w-11 h-11 drop-shadow-md" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                    Prasannaraj's Workstation
                  </h1>
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" title="System Online" />
                </div>
                <p className="text-xs text-[#4CC2FF] font-medium mt-0.5">
                  AI / ML Engineer · Developer · Builder
                </p>
                <p className="text-[11px] text-[#A8AFBA] font-mono mt-1">
                  Machine: PRASANNARAJ-WORKSTATION • OS: Portfolio OS 24H2 • 8 Verified Projects
                </p>
              </div>
            </div>

            {/* Section 8 & 19: Recruiter Quick Access Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Quick Access
                </h2>
                <span className="text-[10px] text-[#A8AFBA]">Fast-track for recruiters & leads</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                <button
                  onClick={() => onOpenApp("resume")}
                  className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#202020] hover:bg-[#282828] border border-[#2d2d2d] hover:border-[#4CC2FF]/40 text-left transition-colors cursor-pointer group"
                >
                  <Win11ResumeIcon className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-medium text-white group-hover:text-[#4CC2FF] truncate">
                    Resume
                  </span>
                </button>

                <button
                  onClick={() => navigateTo("F:")}
                  className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#202020] hover:bg-[#282828] border border-[#2d2d2d] hover:border-[#4CC2FF]/40 text-left transition-colors cursor-pointer group"
                >
                  <Win11FolderIcon className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-medium text-white group-hover:text-[#4CC2FF] truncate">
                    Projects (F:)
                  </span>
                </button>

                <button
                  onClick={() => navigateTo("D:")}
                  className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#202020] hover:bg-[#282828] border border-[#2d2d2d] hover:border-[#4CC2FF]/40 text-left transition-colors cursor-pointer group"
                >
                  <Win11AskAIIcon className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-medium text-white group-hover:text-[#4CC2FF] truncate">
                    AI Lab (D:)
                  </span>
                </button>

                <button
                  onClick={() => onOpenApp("contact")}
                  className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#202020] hover:bg-[#282828] border border-[#2d2d2d] hover:border-[#4CC2FF]/40 text-left transition-colors cursor-pointer group"
                >
                  <Win11ContactIcon className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-medium text-white group-hover:text-[#4CC2FF] truncate">
                    Contact
                  </span>
                </button>

                <a
                  href={profileData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#202020] hover:bg-[#282828] border border-[#2d2d2d] hover:border-[#4CC2FF]/40 text-left transition-colors cursor-pointer group"
                >
                  <FaGithub className="w-4 h-4 text-white shrink-0 ml-0.5" />
                  <span className="text-xs font-medium text-white group-hover:text-[#4CC2FF] truncate">
                    GitHub
                  </span>
                </a>

                <a
                  href={profileData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#202020] hover:bg-[#282828] border border-[#2d2d2d] hover:border-[#4CC2FF]/40 text-left transition-colors cursor-pointer group"
                >
                  <FaLinkedinIn className="w-4 h-4 text-[#0A66C2] shrink-0 ml-0.5" />
                  <span className="text-xs font-medium text-white group-hover:text-[#4CC2FF] truncate">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            {/* Section 2: Devices and drives */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-semibold text-white uppercase tracking-wider">
                Devices and drives
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {DRIVES.map((drive) => (
                  <div
                    key={drive.id}
                    onClick={() => setSelectedItem(drive.id)}
                    onDoubleClick={() => navigateTo(drive.id)}
                    onContextMenu={(e) =>
                      handleContextMenu(e, {
                        title: drive.label,
                        type: "Virtual Workstation Drive",
                        location: `This PC > ${drive.letter}`,
                        details: `${drive.subtitle} • ${drive.used} used of ${drive.total}`,
                        onOpen: () => navigateTo(drive.id),
                      })
                    }
                    className={`p-3.5 rounded-[6px] border cursor-pointer transition-colors flex flex-col justify-between ${
                      selectedItem === drive.id
                        ? "bg-[#0078D4]/25 border-[#0078D4]"
                        : "bg-[#202020] hover:bg-[#252525] border-[#2d2d2d]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[4px] bg-[#1a1a1a] border border-[#303030] flex items-center justify-center shrink-0">
                        {drive.iconType === "os" && <DesktopRegular className="w-5 h-5 text-[#4CC2FF]" />}
                        {drive.iconType === "ai" && <Win11AskAIIcon className="w-5 h-5" />}
                        {drive.iconType === "dev" && <DocumentTextRegular className="w-5 h-5 text-[#10B981]" />}
                        {drive.iconType === "projects" && <FolderFilled className="w-5 h-5 text-[#FACC15]" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-white truncate">
                          {drive.label}
                        </div>
                        <div className="text-[10px] text-[#A8AFBA] truncate">
                          {drive.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Visual Storage Bar (Section 12) */}
                    <div className="mt-3 space-y-1">
                      <div className="w-full h-1.5 rounded-full bg-[#141414] overflow-hidden">
                        <div
                          style={{ width: `${drive.percent}%` }}
                          className="h-full bg-[#0078D4] rounded-full"
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#71717A] font-mono">
                        <span>{drive.used} used</span>
                        <span>{drive.total}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 10: Network Location (Prasannaraj Online) */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-semibold text-white uppercase tracking-wider">
                Prasannaraj Online (Network)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <a
                  href={profileData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[6px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] flex items-center gap-3 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-[4px] bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <FaGithub className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white group-hover:text-[#4CC2FF] truncate flex items-center gap-1">
                      <span>GitHub</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5 text-[#71717A]" />
                    </div>
                    <div className="text-[10px] text-[#A8AFBA] truncate">
                      github.com/prasannaraj12
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[6px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] flex items-center gap-3 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-[4px] bg-[#0A66C2]/15 flex items-center justify-center shrink-0">
                    <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white group-hover:text-[#4CC2FF] truncate flex items-center gap-1">
                      <span>LinkedIn</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5 text-[#71717A]" />
                    </div>
                    <div className="text-[10px] text-[#A8AFBA] truncate">
                      in/prasanna-raj-r
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${profileData.links.email}`}
                  className="p-3 rounded-[6px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] flex items-center gap-3 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-[4px] bg-[#0078D4]/15 flex items-center justify-center shrink-0">
                    <Win11ContactIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white group-hover:text-[#4CC2FF] truncate">
                      Email Inquiries
                    </div>
                    <div className="text-[10px] text-[#A8AFBA] truncate">
                      {profileData.links.email}
                    </div>
                  </div>
                </a>

                <div className="p-3 rounded-[6px] bg-[#202020] border border-[#2d2d2d] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[4px] bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <SiVercel className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white truncate flex items-center gap-1.5">
                      <span>Live Production</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    </div>
                    <div className="text-[10px] text-[#A8AFBA] truncate">
                      Vercel Edge Network
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9: Recent Files */}
            <div className="space-y-2">
              <h2 className="text-xs font-semibold text-white uppercase tracking-wider">
                Recent Files & Verified Deployments
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                <button
                  onClick={() => onOpenApp("resume")}
                  className="p-2 rounded-[4px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] flex items-center gap-2 text-left transition-colors cursor-pointer"
                >
                  <Win11ResumeIcon className="w-4 h-4 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium text-white truncate">Resume.pdf</p>
                    <p className="text-[10px] text-[#A8AFBA]">PDF Document</p>
                  </div>
                </button>

                <button
                  onClick={() => onOpenApp("project-trust-cv")}
                  className="p-2 rounded-[4px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] flex items-center gap-2 text-left transition-colors cursor-pointer"
                >
                  <FolderFilled className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium text-white truncate">TRUST-CV</p>
                    <p className="text-[10px] text-[#10B981]">210/210 Passing</p>
                  </div>
                </button>

                <button
                  onClick={() => onOpenApp("project-satquery-ai")}
                  className="p-2 rounded-[4px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] flex items-center gap-2 text-left transition-colors cursor-pointer"
                >
                  <FolderFilled className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium text-white truncate">SatQuery AI</p>
                    <p className="text-[10px] text-[#4CC2FF]">Satellite VQA</p>
                  </div>
                </button>

                <button
                  onClick={() => onOpenApp("project-crawlnews")}
                  className="p-2 rounded-[4px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] flex items-center gap-2 text-left transition-colors cursor-pointer"
                >
                  <FolderFilled className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium text-white truncate">CrawlNews</p>
                    <p className="text-[10px] text-[#A8AFBA]">Multi-Agent Intelligence</p>
                  </div>
                </button>

                <button
                  onClick={() => onOpenApp("project-fakeo")}
                  className="p-2 rounded-[4px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] flex items-center gap-2 text-left transition-colors cursor-pointer"
                >
                  <FolderFilled className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium text-white truncate">Fakeo</p>
                    <p className="text-[10px] text-[#FACC15]">SRIT Winner</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Section 11 & 16: System Specifications Panel */}
            <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-3">
              <h2 className="text-xs font-semibold text-white uppercase tracking-wider">
                Workstation Specifications
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-[#A8AFBA] uppercase block">Machine Name</span>
                  <span className="text-white font-mono">PRASANNARAJ-WORKSTATION</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#A8AFBA] uppercase block">Primary User</span>
                  <span className="text-white font-medium">Prasannaraj</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#A8AFBA] uppercase block">Engineering Focus</span>
                  <span className="text-[#4CC2FF] font-medium">AI / ML & Computer Vision</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#A8AFBA] uppercase block">Integrity Status</span>
                  <span className="text-[#10B981] font-mono flex items-center gap-1">
                    <CheckmarkCircleRegular className="w-3.5 h-3.5" />
                    <span>Deterministic 100%</span>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ========================================================= */}
        {/* C: DRIVE VIEW: PRASANNARAJ_OS                              */}
        {/* ========================================================= */}
        {currentPath === "C:" && (
          <div className="space-y-4">
            <div className="border-b border-[#2d2d2d] pb-2">
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                C:\Prasannaraj_OS
              </h2>
              <p className="text-[11px] text-[#A8AFBA]">
                Portfolio System & Profile Configuration Components
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {osFolders.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item.id)}
                  onDoubleClick={() => onOpenApp(item.app)}
                  onContextMenu={(e) =>
                    handleContextMenu(e, {
                      title: item.name,
                      type: item.type,
                      location: `C:\\Prasannaraj_OS\\${item.name}`,
                      onOpen: () => onOpenApp(item.app),
                    })
                  }
                  className={`p-3 rounded-[6px] border cursor-pointer transition-colors flex items-center gap-3 ${
                    selectedItem === item.id
                      ? "bg-[#0078D4]/25 border-[#0078D4]"
                      : "bg-[#202020] hover:bg-[#252525] border-[#2d2d2d]"
                  }`}
                >
                  <FolderFilled className="w-8 h-8 text-[#FACC15] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-white truncate">{item.name}</p>
                    <p className="text-[10px] text-[#A8AFBA] truncate">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* D: DRIVE VIEW: AI_LAB                                      */}
        {/* ========================================================= */}
        {currentPath === "D:" && (
          <div className="space-y-4">
            <div className="border-b border-[#2d2d2d] pb-2">
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                D:\AI_LAB
              </h2>
              <p className="text-[11px] text-[#A8AFBA]">
                AI & Machine Learning Domains · Research Projects
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {aiCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <FolderFilled className="w-5 h-5 text-[#4CC2FF] shrink-0" />
                    <h3 className="text-xs font-bold text-white truncate">
                      {cat.domain}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#A8AFBA] leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="pt-2 border-t border-[#2a2a2a] space-y-1">
                    <span className="text-[10px] text-[#71717A] uppercase font-mono">
                      Associated Projects:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.projects.map((projId) => {
                        const proj = projectsData.find((p) => p.id === projId);
                        return (
                          <button
                            key={projId}
                            onClick={() => onOpenApp(`project-${projId}`)}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#141414] hover:bg-[#0078D4]/20 text-[#4CC2FF] border border-[#333333] hover:border-[#0078D4]/40 transition-colors cursor-pointer truncate"
                          >
                            {proj ? proj.title.split("/")[0].trim() : projId}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* E: DRIVE VIEW: DEVELOPMENT                                */}
        {/* ========================================================= */}
        {currentPath === "E:" && (
          <div className="space-y-4">
            <div className="border-b border-[#2d2d2d] pb-2">
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                E:\Development
              </h2>
              <p className="text-[11px] text-[#A8AFBA]">
                Full-Stack & Intelligent Systems Engineering Toolkit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {devStacks.map((stack, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-3"
                >
                  <div className="flex items-center gap-2 border-b border-[#2a2a2a] pb-2">
                    <DocumentTextRegular className="w-4 h-4 text-[#10B981]" />
                    <h3 className="text-xs font-bold text-white truncate">
                      {stack.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {stack.tools.map((t, tidx) => (
                      <div
                        key={tidx}
                        className="flex items-center gap-2 p-1.5 rounded bg-[#141414] border border-[#282828]"
                      >
                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                          {t.icon}
                        </div>
                        <span className="text-[11px] text-[#E1E1E1] font-medium truncate">
                          {t.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* F: DRIVE VIEW: PROJECTS (8 Engineering Projects)           */}
        {/* ========================================================= */}
        {currentPath === "F:" && (
          <div className="flex flex-col lg:flex-row gap-4 h-full">
            {/* Left: 8 Project Folders */}
            <div className="flex-1 space-y-4">
              <div className="border-b border-[#2d2d2d] pb-2">
                <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                  F:\PROJECTS
                </h2>
                <p className="text-[11px] text-[#A8AFBA]">
                  8 Verified Production & Research Systems (Double-click to open)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectFolders.map((p) => {
                  const proj = projectsData.find((x) => x.id === p.id);
                  const isSelected = selectedItem === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedItem(p.id)}
                      onDoubleClick={() => onOpenApp(`project-${p.id}`)}
                      onContextMenu={(e) =>
                        handleContextMenu(e, {
                          title: proj?.title || p.name,
                          type: "Verified Portfolio Project",
                          location: `F:\\PROJECTS\\${p.name}`,
                          details: proj?.overview,
                          onOpen: () => onOpenApp(`project-${p.id}`),
                        })
                      }
                      className={`p-3 rounded-[6px] border cursor-pointer transition-colors flex items-center gap-3 ${
                        isSelected
                          ? "bg-[#0078D4]/25 border-[#0078D4]"
                          : "bg-[#202020] hover:bg-[#252525] border-[#2d2d2d]"
                      }`}
                    >
                      <FolderFilled className="w-8 h-8 text-[#FACC15] shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-white truncate">
                          {p.name}
                        </div>
                        <div className="text-[10px] text-[#A8AFBA] truncate mt-0.5">
                          {proj ? proj.subtitle : "Engineering Project"}
                        </div>
                        {proj?.badge && (
                          <div className="text-[10px] text-[#10B981] font-mono mt-1 flex items-center gap-1">
                            <CheckmarkCircleRegular className="w-3 h-3" />
                            <span className="truncate">{proj.badge}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Section 7 - Windows-style Project Details Panel */}
            <div className="w-full lg:w-72 p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] flex flex-col justify-between space-y-4 shrink-0">
              {selectedProjectData ? (
                <div className="space-y-3">
                  <div className="border-b border-[#2a2a2a] pb-2">
                    <span className="text-[10px] text-[#71717A] uppercase font-mono block">
                      Project Details
                    </span>
                    <h3 className="text-xs font-bold text-white mt-1">
                      {selectedProjectData.title}
                    </h3>
                    <p className="text-[11px] text-[#4CC2FF] mt-0.5">
                      {selectedProjectData.subtitle}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#A8AFBA] uppercase tracking-wider block">
                      Overview
                    </span>
                    <p className="text-[11px] text-[#D4D4D8] mt-1 leading-relaxed">
                      {selectedProjectData.overview}
                    </p>
                  </div>

                  {selectedProjectData.badge && (
                    <div>
                      <span className="text-[10px] text-[#A8AFBA] uppercase tracking-wider block">
                        Verification Status
                      </span>
                      <p className="text-[11px] text-[#10B981] font-mono mt-0.5">
                        {selectedProjectData.badge}
                      </p>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] text-[#A8AFBA] uppercase tracking-wider block mb-1">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {selectedProjectData.technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#141414] text-[#4CC2FF] border border-[#282828]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-[#71717A] space-y-2">
                  <InfoRegular className="w-8 h-8 mx-auto text-[#71717A]/50" />
                  <p className="text-xs">Select any project folder to preview verified specifications.</p>
                </div>
              )}

              {selectedProjectData && (
                <button
                  onClick={() => onOpenApp(`project-${selectedProjectData.id}`)}
                  className="w-full h-8 rounded-[4px] bg-[#0078D4] hover:bg-[#106EBE] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <OpenRegular className="w-3.5 h-3.5" />
                  <span>Open Project</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3. Windows 11 Right-Click Context Menu (Section 14) */}
      {contextMenu && (
        <div
          style={{ top: Math.min(contextMenu.y, window.innerHeight - 180), left: Math.min(contextMenu.x, window.innerWidth - 200) }}
          className="fixed z-50 w-48 rounded-[6px] bg-[#242424]/95 border border-[#383838] shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl p-1 text-xs select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-2.5 py-1 text-[10px] text-[#A8AFBA] truncate border-b border-[#2d2d2d] mb-1">
            {contextMenu.title}
          </div>

          <button
            onClick={() => {
              if (contextMenu.onOpen) contextMenu.onOpen();
              setContextMenu(null);
            }}
            className="w-full px-2.5 py-1.5 rounded-[4px] hover:bg-white/[0.08] text-white text-left transition-colors cursor-pointer"
          >
            Open
          </button>

          <button
            onClick={() => {
              setPropertiesModal(contextMenu);
              setContextMenu(null);
            }}
            className="w-full px-2.5 py-1.5 rounded-[4px] hover:bg-white/[0.08] text-white text-left transition-colors cursor-pointer"
          >
            Properties
          </button>
        </div>
      )}

      {/* 4. Windows 11 Properties Dialog Modal (Section 15) */}
      {propertiesModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs select-text"
          onClick={() => setPropertiesModal(null)}
        >
          <div
            className="w-96 rounded-[8px] bg-[#202020] border border-[#383838] shadow-[0_16px_48px_rgba(0,0,0,0.8)] p-5 space-y-4 text-xs text-[#E1E1E1]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#2d2d2d] pb-2">
              <div className="flex items-center gap-2">
                <FolderFilled className="w-5 h-5 text-[#FACC15]" />
                <h3 className="text-xs font-bold text-white truncate max-w-[240px]">
                  {propertiesModal.title} Properties
                </h3>
              </div>
              <button
                onClick={() => setPropertiesModal(null)}
                className="p-1 rounded hover:bg-white/[0.08] text-[#A8AFBA] hover:text-white"
              >
                <DismissRegular className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-[10px] text-[#A8AFBA] uppercase block">Name</span>
                <span className="text-white font-medium">{propertiesModal.title}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A8AFBA] uppercase block">Type</span>
                <span className="text-[#4CC2FF]">{propertiesModal.type}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#A8AFBA] uppercase block">Location</span>
                <span className="text-white font-mono text-[11px]">{propertiesModal.location}</span>
              </div>
              {propertiesModal.details && (
                <div>
                  <span className="text-[10px] text-[#A8AFBA] uppercase block">Status & Notes</span>
                  <span className="text-[#D4D4D8]">{propertiesModal.details}</span>
                </div>
              )}
            </div>

            <div className="border-t border-[#2d2d2d] pt-3 flex justify-end">
              <button
                onClick={() => setPropertiesModal(null)}
                className="px-4 py-1.5 rounded-[4px] bg-[#0078D4] hover:bg-[#106EBE] text-white text-xs font-medium cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
