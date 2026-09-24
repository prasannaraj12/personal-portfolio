"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/skills";
import { profileData } from "@/data/profile";
import {
  SettingsFilled,
  SearchRegular,
  BrainCircuitRegular,
  SparkleRegular,
  AppsRegular,
  DesktopRegular,
  CheckmarkCircleRegular,
  CodeRegular,
  WindowConsoleRegular,
  PersonRegular,
  ChevronRightRegular,
} from "@/components/icons/FluentIcons";

export function SkillsWindow() {
  const [selectedSection, setSelectedSection] = useState<string>("ai-ml");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const settingsNav = [
    {
      id: "system",
      title: "System",
      icon: DesktopRegular,
      subtitle: "Workstation profile & specifications",
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      icon: BrainCircuitRegular,
      subtitle: "Models, Computer Vision, & Deep Learning",
      categoryKey: "AI / ML",
    },
    {
      id: "gen-ai",
      title: "Generative AI & Agents",
      icon: SparkleRegular,
      subtitle: "LLMs, RAG systems, & Multi-Agent swarms",
      categoryKey: "GENERATIVE AI & AGENTS",
    },
    {
      id: "dev-lang",
      title: "Languages & Core",
      icon: CodeRegular,
      subtitle: "Python, TypeScript, SQL, & Logic",
      categoryKey: "PROGRAMMING",
    },
    {
      id: "frameworks",
      title: "Frameworks & Backend",
      icon: AppsRegular,
      subtitle: "PyTorch, FastAPI, React, & OpenCV",
      categoryKey: "FRAMEWORKS & LIBRARIES",
    },
    {
      id: "databases",
      title: "Databases & Storage",
      icon: DesktopRegular,
      subtitle: "PostgreSQL, SQLite, & Firebase",
      categoryKey: "DATABASES & CLOUD",
    },
    {
      id: "tools",
      title: "Developer Tools & Automation",
      icon: WindowConsoleRegular,
      subtitle: "Git, GitHub, Docker, & n8n",
      categoryKey: "DEVELOPER TOOLS & AUTOMATION",
    },
  ];

  const currentNav = settingsNav.find((n) => n.id === selectedSection) || settingsNav[1];

  const getSkillsForSection = () => {
    if (selectedSection === "system") return [];
    const catData = skillsData.find((c) => c.category === currentNav.categoryKey);
    if (!catData) return [];
    return catData.skills.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const activeSkills = getSkillsForSection();

  return (
    <div className="flex flex-col md:flex-row h-full select-none bg-[#181818] text-xs text-[#E1E1E1]">
      {/* 1. Left Windows 11 Settings Navigation Pane */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#282828] bg-[#1a1a1a] p-3 flex flex-col gap-1 shrink-0 overflow-y-auto">
        {/* User Profile Tile at top of Settings */}
        <div className="flex items-center gap-3 p-2 mb-2 rounded-[4px] bg-[#222222] border border-[#2d2d2d]">
          <div className="w-10 h-10 rounded-full bg-[#0078D4] flex items-center justify-center font-bold text-white text-xs shrink-0">
            PR
          </div>
          <div className="min-w-0">
            <h3 className="text-xs font-semibold text-[#FFFFFF] truncate">
              {profileData.name}
            </h3>
            <p className="text-[10px] text-[#A8AFBA] truncate">
              {profileData.role}
            </p>
            <span className="text-[9px] font-mono text-[#4CC2FF]">
              Local Administrator
            </span>
          </div>
        </div>

        {/* Search in Settings */}
        <div className="relative mb-2">
          <SearchRegular className="w-3.5 h-3.5 text-[#A8AFBA] absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Find a setting"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-7 pl-8 pr-2 rounded-[4px] bg-[#222222] border border-[#2d2d2d] text-xs text-[#E1E1E1] placeholder-[#A8AFBA]/60 focus:outline-none focus:border-[#0078D4]"
          />
        </div>

        {/* Category List */}
        <div className="space-y-0.5">
          {settingsNav.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedSection(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 h-9 rounded-[4px] text-xs transition-colors text-left cursor-pointer relative ${
                  isSelected
                    ? "bg-[#282828] text-white font-medium border-l-[3px] border-l-[#0078D4]"
                    : "text-[#A8AFBA] hover:text-[#E1E1E1] hover:bg-white/[0.04]"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#4CC2FF]" : "text-[#A8AFBA]"}`} />
                <span className="truncate text-[11px]">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Right Settings Content Pane */}
      <div className="flex-1 p-6 overflow-y-auto space-y-5">
        {/* Breadcrumb Header */}
        <div className="pb-3 border-b border-[#282828]">
          <div className="flex items-center gap-1.5 text-[11px] text-[#A8AFBA] mb-1">
            <span>Settings</span>
            <ChevronRightRegular className="w-3 h-3 text-white/30" />
            <span className="text-[#4CC2FF] font-medium">{currentNav.title}</span>
          </div>
          <h2 className="text-lg font-bold text-[#FFFFFF]">
            {currentNav.title}
          </h2>
          <p className="text-xs text-[#A8AFBA] mt-0.5">
            {currentNav.subtitle}
          </p>
        </div>

        {/* Special View: System Overview */}
        {selectedSection === "system" ? (
          <div className="space-y-3">
            <div className="p-4 rounded-[4px] bg-[#202020] border border-[#2d2d2d] space-y-3">
              <div className="text-xs font-semibold text-[#FFFFFF] uppercase tracking-wider">
                Workstation Specifications
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#A8AFBA]">Device name: </span>
                  <span className="font-mono text-[#FFFFFF]">PRASANNARAJ-WORKSTATION</span>
                </div>
                <div>
                  <span className="text-[#A8AFBA]">Installed Candidate: </span>
                  <span className="text-[#FFFFFF]">{profileData.name}</span>
                </div>
                <div>
                  <span className="text-[#A8AFBA]">Degree: </span>
                  <span className="text-[#FFFFFF]">{profileData.degree}</span>
                </div>
                <div>
                  <span className="text-[#A8AFBA]">Institution: </span>
                  <span className="text-[#FFFFFF]">{profileData.college}</span>
                </div>
                <div>
                  <span className="text-[#A8AFBA]">Current Focus: </span>
                  <span className="text-[#10B981] font-medium">{profileData.role}</span>
                </div>
                <div>
                  <span className="text-[#A8AFBA]">System Experience: </span>
                  <span className="text-[#FFFFFF]">Crawl Corp India (CCI)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Skills as Authentic Windows 11 List Rows */
          <div className="space-y-1.5">
            {activeSkills.length === 0 ? (
              <div className="p-8 text-center text-[#A8AFBA]">
                <p>No capabilities match your query.</p>
              </div>
            ) : (
              activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between px-4 h-12 rounded-[4px] bg-[#202020] hover:bg-[#252525] border border-[#282828] transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-[4px] bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                      <CodeRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-normal text-[#FFFFFF] truncate">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <p className="text-[10px] text-[#A8AFBA]">
                          Production implementation verified in portfolio projects
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-white/[0.06] border border-white/[0.08] text-[#D4D4D8]">
                      {skill.level}
                    </span>
                    {skill.highlight && (
                      <CheckmarkCircleRegular className="w-4 h-4 text-[#10B981]" />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
