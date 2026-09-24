"use client";

import React, { useState, useEffect, useRef } from "react";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { certificationsData } from "@/data/certifications";
import { achievementsData } from "@/data/achievements";
import {
  SearchRegular,
  FolderRegular,
  SettingsRegular,
  CertificateRegular,
  TrophyRegular,
  PersonRegular,
  DocumentTextRegular,
  MailRegular,
  ChevronRightRegular,
  WindowConsoleRegular,
  SparkleRegular,
} from "@/components/icons/FluentIcons";

interface SearchResult {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  actionApp: string;
  icon: any;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appId: string) => void;
}

export function CommandPalette({ isOpen, onClose, onOpenApp }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Aggregate searchable items
  const allItems: SearchResult[] = [
    {
      id: "about",
      title: "About Prasannaraj",
      category: "Profile",
      subtitle: "AI/ML Engineer biography, background, and verified focus areas",
      actionApp: "about",
      icon: PersonRegular,
    },
    {
      id: "resume",
      title: "Resume & Curriculum Vitae",
      category: "Document",
      subtitle: "Complete education, experience, skills, and printable CV",
      actionApp: "resume",
      icon: DocumentTextRegular,
    },
    {
      id: "ai-lab",
      title: "AI Research Lab & Pipeline Explorer",
      category: "Research",
      subtitle: "Interactive Multi-Stage AI execution workbench",
      actionApp: "ai-lab",
      icon: SparkleRegular,
    },
    {
      id: "terminal",
      title: "Developer Terminal",
      category: "Tools",
      subtitle: "Execute whoami, neofetch, skills, projects, and sudo commands",
      actionApp: "terminal",
      icon: WindowConsoleRegular,
    },
    {
      id: "contact",
      title: "Contact & Direct Dispatch",
      category: "Connect",
      subtitle: "Email, LinkedIn, GitHub, and message transmission",
      actionApp: "contact",
      icon: MailRegular,
    },
    // Projects
    ...projectsData.map((p) => ({
      id: `proj-${p.id}`,
      title: p.title,
      category: "Project",
      subtitle: `${p.subtitle} • ${p.technologies.slice(0, 3).join(", ")}`,
      actionApp: `project-${p.id}`,
      icon: FolderRegular,
    })),
    // Skills
    ...skillsData.flatMap((cat) =>
      cat.skills.map((s) => ({
        id: `skill-${s.name}`,
        title: s.name,
        category: "Skill",
        subtitle: `${cat.category} • Proficiency: ${s.level}`,
        actionApp: "skills",
        icon: SettingsRegular,
      }))
    ),
    // Certifications
    ...certificationsData.map((c) => ({
      id: `cert-${c.id}`,
      title: c.title,
      category: "Certification",
      subtitle: `${c.issuer} • ${c.skillsGained.slice(0, 2).join(", ")}`,
      actionApp: "certifications",
      icon: CertificateRegular,
    })),
    // Achievements
    ...achievementsData.map((a) => ({
      id: `ach-${a.id}`,
      title: a.title,
      category: "Achievement",
      subtitle: `${a.event} • ${a.tag}`,
      actionApp: "achievements",
      icon: TrophyRegular,
    })),
  ];

  const filteredResults = allItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q)
    );
  }).slice(0, 10);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredResults.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % (filteredResults.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredResults[selectedIndex];
      if (selected) {
        onOpenApp(selected.actionApp);
        onClose();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed top-[15%] left-1/2 -translate-x-1/2 w-[620px] max-w-[94vw] z-50 rounded-2xl mica-surface-elevated border border-white/[0.14] shadow-2xl overflow-hidden select-none animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Box */}
        <div className="flex items-center px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <SearchRegular className="w-4 h-4 text-[#4CC2FF] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, skills, certifications, terminal commands..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-sm text-[#F5F7FA] placeholder-[#A8AFBA]/60 focus:outline-none"
          />
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#A8AFBA]">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredResults.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#A8AFBA]">
              No results found for "{query}".
            </div>
          ) : (
            filteredResults.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onOpenApp(item.actionApp);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#4CC2FF]/15 border border-[#4CC2FF]/30 text-[#F5F7FA]"
                      : "hover:bg-white/[0.05] border border-transparent text-[#A8AFBA]"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected
                          ? "bg-[#4CC2FF] text-[#0B0D10]"
                          : "bg-white/[0.05] text-[#4CC2FF]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#F5F7FA] truncate">
                          {item.title}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/[0.06] text-[#A8AFBA]">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#A8AFBA] truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRightRegular
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-[#4CC2FF] translate-x-0.5" : "text-white/20"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard Navigation Footer */}
        <div className="px-4 py-2 bg-black/30 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#A8AFBA] font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Prasannaraj Portfolio Search</span>
        </div>
      </div>
    </>
  );
}
