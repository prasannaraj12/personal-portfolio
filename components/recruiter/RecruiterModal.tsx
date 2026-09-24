"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import {
  DismissRegular,
  DocumentTextRegular,
  MailRegular,
  LayerRegular,
  ArrowRightRegular,
  BriefcaseRegular,
  HatGraduationRegular,
  GitHubFluentMark,
  LinkedInFluentMark,
} from "@/components/icons/FluentIcons";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appId: string) => void;
}

export function RecruiterModal({ isOpen, onClose, onOpenApp }: RecruiterModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md select-text">
      <div className="w-full max-w-4xl max-h-[90vh] rounded-[8px] bg-[#242424] border border-[#383838] shadow-[0_16px_48px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-xs text-[#E1E1E1]">
        {/* Header */}
        <div className="p-4 px-6 border-b border-[#2d2d2d] bg-[#1f1f1f] flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-[4px] bg-[#0078D4]/20 text-[#4CC2FF]">
              <LayerRegular className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-[#FFFFFF]">
                  Recruiter Fast-Track Overview
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                  Verified Candidate
                </span>
              </div>
              <p className="text-[11px] text-[#A8AFBA]">
                Streamlined executive briefing designed for technical recruiters and hiring managers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenApp("resume");
              }}
              className="flex items-center gap-1.5 px-3 h-7 rounded-[4px] text-xs font-normal bg-[#0078D4] text-white hover:bg-[#106EBE] transition-colors cursor-pointer"
            >
              <DocumentTextRegular className="w-3.5 h-3.5" />
              <span>Full Resume</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              <DismissRegular className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Summary Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#181818]">
          {/* Candidate Card */}
          <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#FFFFFF]">
                {profileData.name}
              </h1>
              <p className="text-xs font-semibold text-[#4CC2FF] mt-0.5">
                {profileData.role}
              </p>
              <p className="text-[11px] text-[#A8AFBA] mt-1">
                {profileData.college} • {profileData.location}
              </p>
              <p className="text-xs text-[#D4D4D8] mt-2 italic max-w-xl">
                "{profileData.heroStatement}"
              </p>
            </div>

            <div className="flex flex-col gap-1.5 shrink-0">
              <a
                href={`mailto:${profileData.links.email}`}
                className="flex items-center gap-2 px-3 h-7 rounded-[4px] text-[11px] bg-[#1a1a1a] hover:bg-[#252525] text-[#FFFFFF] border border-[#2d2d2d] transition-colors"
              >
                <MailRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
                <span>{profileData.links.email}</span>
              </a>
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 h-7 rounded-[4px] text-[11px] bg-[#1a1a1a] hover:bg-[#252525] text-[#FFFFFF] border border-[#2d2d2d] transition-colors"
              >
                <LinkedInFluentMark className="w-3.5 h-3.5 text-[#4CC2FF]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 h-7 rounded-[4px] text-[11px] bg-[#1a1a1a] hover:bg-[#252525] text-[#FFFFFF] border border-[#2d2d2d] transition-colors"
              >
                <GitHubFluentMark className="w-3.5 h-3.5 text-[#FFFFFF]" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-[4px] bg-[#202020] border border-[#2d2d2d]">
              <p className="text-lg font-bold font-mono text-[#4CC2FF]">8</p>
              <p className="text-[11px] text-[#A8AFBA] mt-0.5">Production Systems</p>
            </div>
            <div className="p-3 rounded-[4px] bg-[#202020] border border-[#2d2d2d]">
              <p className="text-lg font-bold font-mono text-[#10B981]">210 / 210</p>
              <p className="text-[11px] text-[#A8AFBA] mt-0.5">Tests Passed (TRUST-CV)</p>
            </div>
            <div className="p-3 rounded-[4px] bg-[#202020] border border-[#2d2d2d]">
              <p className="text-lg font-bold font-mono text-[#A78BFA]">5</p>
              <p className="text-[11px] text-[#A8AFBA] mt-0.5">Industry Certifications</p>
            </div>
            <div className="p-3 rounded-[4px] bg-[#202020] border border-[#2d2d2d]">
              <p className="text-lg font-bold font-mono text-[#FACC15]">3</p>
              <p className="text-[11px] text-[#A8AFBA] mt-0.5">Hackathons Won</p>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#A8AFBA]">
                Featured Production Systems
              </h3>
              <button
                onClick={() => {
                  onClose();
                  onOpenApp("projects");
                }}
                className="text-[11px] text-[#4CC2FF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Inspect in File Explorer</span>
                <ArrowRightRegular className="w-3 h-3" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projectsData.slice(0, 4).map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => {
                    onClose();
                    onOpenApp(`project-${proj.id}`);
                  }}
                  className="p-3.5 rounded-[4px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] transition-colors cursor-pointer space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#FFFFFF]">
                      {proj.title}
                    </h4>
                    {proj.badge && (
                      <span className="text-[9px] font-mono text-[#10B981] bg-[#10B981]/15 px-1.5 py-0.5 rounded-[2px]">
                        {proj.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#A8AFBA] line-clamp-2">
                    {proj.overview}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] bg-[#1a1a1a] text-[#A8AFBA] border border-[#2d2d2d]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-[4px] bg-[#202020] border border-[#2d2d2d] space-y-1.5">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#A8AFBA]">
                <BriefcaseRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
                <span>Experience</span>
              </div>
              <h4 className="text-xs font-bold text-[#FFFFFF]">
                {experienceData[0].role}
              </h4>
              <p className="text-xs text-[#4CC2FF] font-medium">
                {experienceData[0].company}
              </p>
              <p className="text-[11px] text-[#A8AFBA] leading-relaxed">
                {experienceData[0].description}
              </p>
            </div>

            <div className="p-3.5 rounded-[4px] bg-[#202020] border border-[#2d2d2d] space-y-1.5">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#A8AFBA]">
                <HatGraduationRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
                <span>Education</span>
              </div>
              <h4 className="text-xs font-bold text-[#FFFFFF]">
                {educationData[0].degree}
              </h4>
              <p className="text-xs text-[#4CC2FF] font-medium">
                {educationData[0].institution}
              </p>
              <p className="text-[11px] text-[#A8AFBA] leading-relaxed">
                Specialization in AI, Machine Learning, Computer Vision & NLP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
