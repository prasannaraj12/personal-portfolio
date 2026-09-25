"use client";

import React, { useState } from "react";
import {
  SearchRegular,
  FolderFilled,
  BrainCircuitFilled,
  DocumentTextFilled,
  WindowConsoleFilled,
  PowerRegular,
  AppsRegular,
  ChevronRightRegular,
  ArrowSyncRegular,
} from "@/components/icons/FluentIcons";
import {
  Win11ThisPCIcon,
  Win11RecycleBinIcon,
  Win11FolderIcon,
  Win11SettingsIcon,
  Win11TerminalIcon,
  Win11ResumeIcon,
  Win11ContactIcon,
  Win11AskAIIcon,
} from "@/components/icons/Win11FluentIcons";
import { profileData } from "@/data/profile";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appId: string) => void;
  onOpenSearch: () => void;
  onRestartExperience: () => void;
  onLockPortfolio: () => void;
  onOpenRecruiterMode: () => void;
}

export function StartMenu({
  isOpen,
  onClose,
  onOpenApp,
  onOpenSearch,
  onRestartExperience,
  onLockPortfolio,
  onOpenRecruiterMode,
}: StartMenuProps) {
  const [showPowerMenu, setShowPowerMenu] = useState(false);

  if (!isOpen) return null;

  const pinnedItems = [
    {
      id: "about",
      label: "This PC",
      icon: <Win11ThisPCIcon className="w-8 h-8" />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Win11FolderIcon className="w-8 h-8" />,
    },
    {
      id: "ask-ai",
      label: "Ask AI",
      icon: <Win11AskAIIcon className="w-8 h-8" />,
    },
    {
      id: "resume",
      label: "Resume",
      icon: <Win11ResumeIcon className="w-8 h-8" />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Win11ContactIcon className="w-8 h-8" />,
    },
    {
      id: "skills",
      label: "Settings",
      icon: <Win11SettingsIcon className="w-8 h-8" />,
    },
    {
      id: "terminal",
      label: "Terminal",
      icon: <Win11TerminalIcon className="w-8 h-8" />,
    },
  ];

  const recommendedItems = [
    {
      id: "project-trust-cv",
      title: "TRUST-CV (Block Sentinal)",
      desc: "210/210 Tests Verified • 2h ago",
      icon: <Win11FolderIcon className="w-6 h-6" />,
      action: () => onOpenApp("project-trust-cv"),
    },
    {
      id: "project-satquery-ai",
      title: "SATQUERY AI",
      desc: "Satellite VQA & ResNet-18 • Yesterday",
      icon: <Win11FolderIcon className="w-6 h-6" />,
      action: () => onOpenApp("project-satquery-ai"),
    },
    {
      id: "project-crawlnews",
      title: "CRAWLNEWS",
      desc: "Multi-Agent Swarm Ingestion • 3d ago",
      icon: <Win11TerminalIcon className="w-6 h-6" />,
      action: () => onOpenApp("project-crawlnews"),
    },
    {
      id: "project-fakeo",
      title: "FAKEO",
      desc: "Misinformation Classifier • 1w ago",
      icon: <Win11ResumeIcon className="w-6 h-6" />,
      action: () => onOpenApp("project-fakeo"),
    },
  ];

  return (
    <>
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Start Menu Floating Panel */}
      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-[540px] max-w-[94vw] h-[560px] max-h-[82vh] z-50 rounded-[8px] bg-[#242424]/95 border border-[#383838] shadow-[0_16px_48px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col justify-between overflow-hidden animate-in fade-in zoom-in-95 duration-100 select-none text-xs text-[#E1E1E1]">
        {/* Top: Search Bar */}
        <div className="p-6 pb-2">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full h-8 px-3 rounded-[4px] bg-[#1c1c1c] hover:bg-[#202020] border border-[#333333] flex items-center justify-between text-xs text-[#A8AFBA] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <SearchRegular className="w-3.5 h-3.5 text-[#A8AFBA]" />
              <span className="text-[11px]">Type here to search</span>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[3px] bg-white/[0.06] text-[#A8AFBA]">
              Ctrl + K
            </span>
          </button>
        </div>

        {/* Main Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-6">
          {/* Pinned Section */}
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-semibold text-[#FFFFFF] tracking-wide">
                Pinned
              </span>
              <button
                onClick={() => onOpenApp("projects")}
                className="text-[11px] text-[#A8AFBA] hover:text-[#FFFFFF] flex items-center gap-1 cursor-pointer"
              >
                <span>All apps</span>
                <ChevronRightRegular className="w-3 h-3 opacity-60" />
              </button>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {pinnedItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onOpenApp(item.id);
                    onClose();
                  }}
                  className="flex flex-col items-center justify-center p-2 rounded-[4px] hover:bg-white/[0.08] transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 flex items-center justify-center drop-shadow-sm mb-1">
                    {item.icon}
                  </div>
                  <span className="text-[11px] text-[#E1E1E1] text-center font-normal truncate max-w-[68px]">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Recommended Section */}
          <div>
            <div className="flex items-center justify-between mb-2.5 px-1">
              <span className="text-xs font-semibold text-[#FFFFFF] tracking-wide">
                Recommended
              </span>
              <span className="text-[10px] text-[#71717A] font-mono">
                Recent Projects
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {recommendedItems.map((rec) => (
                <button
                  key={rec.id}
                  onClick={() => {
                    rec.action();
                    onClose();
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-[4px] hover:bg-white/[0.06] transition-colors text-left cursor-pointer group"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    {rec.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[11px] font-medium text-[#E1E1E1] truncate group-hover:text-[#4CC2FF]">
                      {rec.title}
                    </h4>
                    <p className="text-[10px] text-[#71717A] truncate mt-0.5">
                      {rec.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: User Profile & Power Actions */}
        <div className="h-14 px-6 bg-[#1f1f1f] border-t border-[#2d2d2d] flex items-center justify-between relative">
          <div
            onClick={() => {
              onOpenApp("about");
              onClose();
            }}
            className="flex items-center gap-2.5 p-1.5 -ml-1.5 rounded-[4px] hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#0078D4] flex items-center justify-center font-bold text-xs text-white">
              PR
            </div>
            <div>
              <p className="text-xs font-medium text-[#FFFFFF] leading-tight">
                {profileData.name}
              </p>
              <p className="text-[10px] text-[#A8AFBA] font-light mt-0.5">
                {profileData.role}
              </p>
            </div>
          </div>

          {/* Power Button & Flyout */}
          <div className="relative">
            <button
              onClick={() => setShowPowerMenu(!showPowerMenu)}
              aria-label="Power and session options"
              title="Power"
              className="p-2 rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              <PowerRegular className="w-4 h-4" />
            </button>

            {/* Power Flyout Menu */}
            {showPowerMenu && (
              <div className="absolute right-0 bottom-12 w-48 rounded-[6px] bg-[#242424] border border-[#383838] shadow-[0_8px_24px_rgba(0,0,0,0.6)] p-1 space-y-0.5 z-50 text-xs">
                <button
                  onClick={() => {
                    setShowPowerMenu(false);
                    onOpenRecruiterMode();
                    onClose();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 h-7 rounded-[4px] text-xs text-[#E1E1E1] hover:bg-white/[0.08] transition-colors text-left cursor-pointer"
                >
                  <AppsRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
                  <span>Recruiter Fast View</span>
                </button>
                <button
                  onClick={() => {
                    setShowPowerMenu(false);
                    onLockPortfolio();
                    onClose();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 h-7 rounded-[4px] text-xs text-[#E1E1E1] hover:bg-white/[0.08] transition-colors text-left cursor-pointer"
                >
                  <PowerRegular className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>Lock Portfolio</span>
                </button>
                <button
                  onClick={() => {
                    setShowPowerMenu(false);
                    onRestartExperience();
                    onClose();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 h-7 rounded-[4px] text-xs text-[#F87171] hover:bg-red-500/10 transition-colors text-left cursor-pointer"
                >
                  <ArrowSyncRegular className="w-3.5 h-3.5 text-[#F87171]" />
                  <span>Restart Experience</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
