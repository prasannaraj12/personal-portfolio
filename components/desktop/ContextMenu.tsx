"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowSyncRegular,
  AppsRegular,
  SettingsRegular,
  PersonRegular,
  InfoRegular,
  FolderRegular,
  WindowConsoleRegular,
  ChevronRightRegular,
} from "@/components/icons/FluentIcons";

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onOpenApp: (appId: string) => void;
  onRefresh: () => void;
}

export function DesktopContextMenu({
  x,
  y,
  onClose,
  onOpenApp,
  onRefresh,
}: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Adjust coordinates if menu would bleed off-screen
  const adjustedX = Math.min(x, window.innerWidth - 240);
  const adjustedY = Math.min(y, window.innerHeight - 280);

  return (
    <div
      ref={menuRef}
      style={{ left: `${adjustedX}px`, top: `${adjustedY}px` }}
      className="fixed z-50 w-52 rounded-[8px] bg-[#242424]/95 backdrop-blur-xl border border-white/[0.12] shadow-[0_8px_24px_rgba(0,0,0,0.6)] p-1 space-y-0.5 text-xs text-[#E1E1E1] select-none animate-in fade-in zoom-in-95 duration-75"
    >
      {/* View Submenu */}
      <button
        onClick={() => {
          onRefresh();
          onClose();
        }}
        className="w-full flex items-center justify-between px-2.5 h-7 rounded-[4px] hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors cursor-pointer text-left group"
      >
        <div className="flex items-center gap-2.5">
          <AppsRegular className="w-3.5 h-3.5 text-[#A8AFBA]" />
          <span>View</span>
        </div>
        <ChevronRightRegular className="w-3 h-3 text-[#A8AFBA] opacity-60" />
      </button>

      {/* Sort By Submenu */}
      <button
        onClick={() => {
          onRefresh();
          onClose();
        }}
        className="w-full flex items-center justify-between px-2.5 h-7 rounded-[4px] hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors cursor-pointer text-left group"
      >
        <div className="flex items-center gap-2.5">
          <SettingsRegular className="w-3.5 h-3.5 text-[#A8AFBA]" />
          <span>Sort by</span>
        </div>
        <ChevronRightRegular className="w-3 h-3 text-[#A8AFBA] opacity-60" />
      </button>

      {/* Refresh */}
      <button
        onClick={() => {
          onRefresh();
          onClose();
        }}
        className="w-full flex items-center justify-between px-2.5 h-7 rounded-[4px] hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-2.5">
          <ArrowSyncRegular className="w-3.5 h-3.5 text-[#A8AFBA]" />
          <span>Refresh</span>
        </div>
      </button>

      <div className="h-[1px] bg-white/[0.08] my-1" />

      {/* Open in Terminal */}
      <button
        onClick={() => {
          onOpenApp("terminal");
          onClose();
        }}
        className="w-full flex items-center justify-between px-2.5 h-7 rounded-[4px] hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-2.5">
          <WindowConsoleRegular className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Open in Terminal</span>
        </div>
      </button>

      {/* Open File Explorer */}
      <button
        onClick={() => {
          onOpenApp("projects");
          onClose();
        }}
        className="w-full flex items-center justify-between px-2.5 h-7 rounded-[4px] hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-2.5">
          <FolderRegular className="w-3.5 h-3.5 text-[#FACC15]" />
          <span>Open File Explorer</span>
        </div>
      </button>

      <div className="h-[1px] bg-white/[0.08] my-1" />

      {/* Personalize (Settings) */}
      <button
        onClick={() => {
          onOpenApp("skills");
          onClose();
        }}
        className="w-full flex items-center justify-between px-2.5 h-7 rounded-[4px] hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-2.5">
          <SettingsRegular className="w-3.5 h-3.5 text-[#A8AFBA]" />
          <span>Personalize</span>
        </div>
      </button>

      {/* About this portfolio */}
      <button
        onClick={() => {
          onOpenApp("about");
          onClose();
        }}
        className="w-full flex items-center justify-between px-2.5 h-7 rounded-[4px] hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-2.5">
          <PersonRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
          <span>About this PC</span>
        </div>
      </button>
    </div>
  );
}
