"use client";

import React from "react";
import { profileData } from "@/data/profile";
import {
  DesktopRegular,
  PersonRegular,
  HatGraduationRegular,
  BriefcaseRegular,
  FolderFilled,
  DocumentTextRegular,
  SettingsRegular,
  CheckmarkCircleRegular,
  MailRegular,
} from "@/components/icons/FluentIcons";
import { Win11ThisPCIcon } from "@/components/icons/Win11FluentIcons";

interface AboutWindowProps {
  onOpenApp: (appId: string) => void;
}

export function AboutWindow({ onOpenApp }: AboutWindowProps) {
  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1] overflow-y-auto p-6 md:p-8">
      <div className="max-w-3xl mx-auto w-full space-y-6">
        {/* 1. Device / Workstation Banner */}
        <div className="flex items-center gap-4 p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d]">
          <div className="w-14 h-14 flex items-center justify-center shrink-0">
            <Win11ThisPCIcon className="w-12 h-12 drop-shadow-md" />
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold text-[#FFFFFF] truncate">
              PRASANNARAJ-WORKSTATION
            </h1>
            <p className="text-xs text-[#4CC2FF] font-medium">
              {profileData.role}
            </p>
            <p className="text-[11px] text-[#A8AFBA] mt-0.5">
              Windows 11 Pro for Workstations • Prasanna Portfolio
            </p>
          </div>

          <div className="hidden sm:flex flex-col gap-1.5 shrink-0 select-none">
            <button
              onClick={() => onOpenApp("projects")}
              className="px-3 h-7 rounded-[4px] bg-[#0078D4] hover:bg-[#106EBE] text-white font-normal transition-colors cursor-pointer text-xs"
            >
              Explore Projects
            </button>
            <button
              onClick={() => onOpenApp("resume")}
              className="px-3 h-7 rounded-[4px] bg-white/[0.06] hover:bg-white/[0.10] text-[#E1E1E1] border border-white/[0.08] transition-colors cursor-pointer text-xs"
            >
              View Resume
            </button>
          </div>
        </div>

        {/* 2. Device & Candidate Specifications */}
        <div className="p-5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-3">
          <div className="text-xs font-semibold text-[#FFFFFF] uppercase tracking-wider select-none">
            Candidate Specifications
          </div>

          <div className="divide-y divide-[#282828] text-xs">
            <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[#A8AFBA] w-48 shrink-0">Full Name</span>
              <span className="text-[#FFFFFF] font-medium">{profileData.name}</span>
            </div>
            <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[#A8AFBA] w-48 shrink-0">Specialization</span>
              <span className="text-[#4CC2FF] font-medium">{profileData.role}</span>
            </div>
            <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[#A8AFBA] w-48 shrink-0">Institution</span>
              <span className="text-[#D4D4D8]">{profileData.college}</span>
            </div>
            <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[#A8AFBA] w-48 shrink-0">Academic Degree</span>
              <span className="text-[#D4D4D8]">{profileData.degree}</span>
            </div>
            <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[#A8AFBA] w-48 shrink-0">Specialization Focus</span>
              <span className="text-[#10B981] font-medium">{profileData.role}</span>
            </div>
            <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[#A8AFBA] w-48 shrink-0">Geographic Base</span>
              <span className="text-[#D4D4D8]">{profileData.location}</span>
            </div>
            <div className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[#A8AFBA] w-48 shrink-0">Direct Contact</span>
              <span className="text-[#4CC2FF] font-mono">{profileData.links.email}</span>
            </div>
          </div>
        </div>

        {/* 3. System & Verification Metrics */}
        <div className="p-5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-3">
          <div className="text-xs font-semibold text-[#FFFFFF] uppercase tracking-wider select-none">
            Production Metrics & Verification
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 select-none">
            <div className="p-3 rounded-[4px] bg-[#1a1a1a] border border-[#282828] text-center">
              <p className="text-lg font-bold font-mono text-[#4CC2FF]">8</p>
              <p className="text-[11px] text-[#A8AFBA] mt-0.5">Production Projects</p>
            </div>
            <div className="p-3 rounded-[4px] bg-[#1a1a1a] border border-[#282828] text-center">
              <p className="text-lg font-bold font-mono text-[#10B981]">210 / 210</p>
              <p className="text-[11px] text-[#A8AFBA] mt-0.5">Passing Unit Tests</p>
            </div>
            <div className="p-3 rounded-[4px] bg-[#1a1a1a] border border-[#282828] text-center">
              <p className="text-lg font-bold font-mono text-[#FACC15]">3</p>
              <p className="text-[11px] text-[#A8AFBA] mt-0.5">Hackathons Won</p>
            </div>
            <div className="p-3 rounded-[4px] bg-[#1a1a1a] border border-[#282828] text-center">
              <p className="text-lg font-bold font-mono text-[#A78BFA]">5</p>
              <p className="text-[11px] text-[#A8AFBA] mt-0.5">Certifications</p>
            </div>
          </div>
        </div>

        {/* 4. Related Actions */}
        <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] flex flex-wrap items-center justify-between gap-3 select-none">
          <span className="text-xs text-[#A8AFBA]">
            Navigate related system applications:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenApp("skills")}
              className="px-3 h-7 rounded-[4px] bg-white/[0.06] hover:bg-white/[0.10] text-[#E1E1E1] border border-white/[0.08] transition-colors cursor-pointer text-xs"
            >
              Technical Settings
            </button>
            <button
              onClick={() => onOpenApp("terminal")}
              className="px-3 h-7 rounded-[4px] bg-white/[0.06] hover:bg-white/[0.10] text-[#E1E1E1] border border-white/[0.08] transition-colors cursor-pointer text-xs"
            >
              Open Terminal
            </button>
            <button
              onClick={() => onOpenApp("contact")}
              className="px-3 h-7 rounded-[4px] bg-[#0078D4] hover:bg-[#106EBE] text-white font-normal transition-colors cursor-pointer text-xs"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
