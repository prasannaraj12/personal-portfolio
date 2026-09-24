"use client";

import React, { useState } from "react";
import {
  Windows11Logo,
  SearchRegular,
  SparkleFilled,
  AppsRegular,
} from "@/components/icons/FluentIcons";
import {
  Win11ThisPCIcon,
  Win11FolderIcon,
  Win11AILabIcon,
  Win11SettingsIcon,
  Win11TerminalIcon,
  Win11ResumeIcon,
} from "@/components/icons/Win11FluentIcons";
import { SystemTray } from "./SystemTray";
import { QuickSettingsPanel } from "./QuickSettingsPanel";
import { WindowState } from "@/types";

interface TaskbarProps {
  isStartMenuOpen: boolean;
  onToggleStartMenu: () => void;
  onOpenSearch: () => void;
  windows: WindowState[];
  activeWindowId: string | null;
  onAppClick: (appId: string) => void;
  isCopilotOpen: boolean;
  onToggleCopilot: () => void;
  onOpenRecruiterMode: () => void;
}

export function Taskbar({
  isStartMenuOpen,
  onToggleStartMenu,
  onOpenSearch,
  windows,
  activeWindowId,
  onAppClick,
  isCopilotOpen,
  onToggleCopilot,
  onOpenRecruiterMode,
}: TaskbarProps) {
  const [isQuickSettingsOpen, setIsQuickSettingsOpen] = useState(false);

  // Authentic Windows 11 taskbar applications
  const taskbarApps = [
    {
      id: "projects",
      label: "File Explorer (Projects)",
      icon: <Win11FolderIcon className="w-6 h-6" />,
    },
    {
      id: "ai-lab",
      label: "AI Research Lab",
      icon: <Win11AILabIcon className="w-6 h-6" />,
    },
    {
      id: "terminal",
      label: "Terminal",
      icon: <Win11TerminalIcon className="w-6 h-6" />,
    },
    {
      id: "resume",
      label: "Resume / Document",
      icon: <Win11ResumeIcon className="w-6 h-6" />,
    },
    {
      id: "about",
      label: "This PC (About)",
      icon: <Win11ThisPCIcon className="w-6 h-6" />,
    },
    {
      id: "skills",
      label: "Settings (Skills)",
      icon: <Win11SettingsIcon className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-12 z-50 select-none flex items-center justify-between px-3 bg-[#1f1f1f]/95 border-t border-[#333333] shadow-[0_-4px_24px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        {/* Left: Quick Recruiter Fast-Track Access */}
        <div className="flex items-center gap-2 min-w-[140px]">
          <button
            onClick={onOpenRecruiterMode}
            className="flex items-center gap-1.5 px-2.5 h-7 rounded-[4px] text-[11px] font-normal bg-white/[0.06] hover:bg-white/[0.10] text-[#E1E1E1] border border-white/[0.08] transition-colors cursor-pointer"
            title="Recruiter Fast-Track View"
          >
            <AppsRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
            <span className="hidden sm:inline">Recruiter Mode</span>
          </button>
        </div>

        {/* Center: Windows 11 Centered App Bar */}
        <div className="flex items-center gap-1">
          {/* Windows 11 Start Button */}
          <button
            onClick={onToggleStartMenu}
            aria-label="Start Menu"
            title="Start"
            className={`w-10 h-10 rounded-[4px] flex items-center justify-center transition-colors cursor-pointer ${
              isStartMenuOpen
                ? "bg-white/[0.14]"
                : "hover:bg-white/[0.08]"
            }`}
          >
            <Windows11Logo className="w-4 h-4" />
          </button>

          {/* Windows 11 Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            title="Search (Ctrl + K)"
            className="w-10 h-10 rounded-[4px] flex items-center justify-center hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            <SearchRegular className="w-4 h-4" />
          </button>

          {/* Separator */}
          <div className="w-[1px] h-4 bg-white/[0.10] mx-0.5" />

          {/* Pinned / Open Apps with Microsoft Fluent UI Icons */}
          {taskbarApps.map((app) => {
            const win = windows.find((w) => w.id === app.id);
            const isOpen = win && win.isOpen;
            const isActive = isOpen && activeWindowId === app.id && !win.isMinimized;

            return (
              <button
                key={app.id}
                onClick={() => onAppClick(app.id)}
                aria-label={app.label}
                title={app.label}
                className={`group relative w-10 h-10 rounded-[4px] transition-colors flex items-center justify-center cursor-pointer ${
                  isActive
                    ? "bg-white/[0.14]"
                    : isOpen
                    ? "bg-white/[0.08] hover:bg-white/[0.12]"
                    : "hover:bg-white/[0.08]"
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center drop-shadow-sm">
                  {app.icon}
                </div>

                {/* Windows 11 Active App Pill Indicator */}
                {isOpen && (
                  <span
                    className={`absolute bottom-0.5 h-[3px] rounded-full transition-all duration-150 ${
                      isActive
                        ? "w-4 bg-[#0078D4]"
                        : "w-1.5 bg-white/40 group-hover:w-3"
                    }`}
                  />
                )}
              </button>
            );
          })}

          {/* Separator */}
          <div className="w-[1px] h-4 bg-white/[0.10] mx-0.5" />

          {/* Prasanna AI Copilot Button */}
          <button
            onClick={onToggleCopilot}
            aria-label="Prasanna AI Assistant"
            title="Prasanna AI (Copilot)"
            className={`group relative w-10 h-10 rounded-[4px] transition-colors flex items-center justify-center cursor-pointer ${
              isCopilotOpen
                ? "bg-[#0078D4]/25"
                : "hover:bg-white/[0.08]"
            }`}
          >
            <div className="relative">
              <SparkleFilled className="w-5 h-5 text-[#38BDF8]" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
            </div>
            {isCopilotOpen && (
              <span className="absolute bottom-0.5 h-[3px] w-4 rounded-full bg-[#0078D4]" />
            )}
          </button>
        </div>

        {/* Right: System Tray & Show Desktop bar */}
        <div className="min-w-[140px] flex items-center justify-end">
          <SystemTray onOpenQuickSettings={() => setIsQuickSettingsOpen((prev) => !prev)} />
          {/* Windows 11 Show Desktop Far-Right Slice */}
          <div
            className="w-[4px] h-8 ml-1 rounded-[1px] hover:bg-white/[0.15] cursor-pointer"
            title="Show desktop"
            onClick={() => {
              // Minimize all open windows
              windows.forEach((w) => {
                if (w.isOpen && !w.isMinimized) {
                  onAppClick(w.id);
                }
              });
            }}
          />
        </div>
      </div>

      {/* Quick Settings Panel Flyout */}
      <QuickSettingsPanel
        isOpen={isQuickSettingsOpen}
        onClose={() => setIsQuickSettingsOpen(false)}
        onOpenSettings={() => onAppClick("skills")}
      />
    </>
  );
}
