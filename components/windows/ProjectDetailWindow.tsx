"use client";

import React from "react";
import { ProjectItem } from "@/types";
import {
  ShieldCheckmarkRegular,
  DeveloperBoardRegular,
  LayerRegular,
  CheckmarkCircleRegular,
  AlertRegular,
  ChevronLeftRegular,
  CodeRegular,
  WindowConsoleRegular,
  PulseRegular,
  GitHubFluentMark,
} from "@/components/icons/FluentIcons";

interface ProjectDetailWindowProps {
  project: ProjectItem;
  onBackToExplorer?: () => void;
}

export function ProjectDetailWindow({
  project,
  onBackToExplorer,
}: ProjectDetailWindowProps) {
  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1]">
      {/* Top Address & Action Bar */}
      <div className="h-10 px-4 bg-[#1f1f1f] border-b border-[#2d2d2d] flex items-center justify-between gap-3 shrink-0 select-none">
        <div className="flex items-center gap-2">
          {onBackToExplorer && (
            <button
              onClick={onBackToExplorer}
              className="flex items-center gap-1 px-2.5 h-7 rounded-[4px] bg-white/[0.06] hover:bg-white/[0.10] text-[#E1E1E1] transition-colors cursor-pointer text-xs"
            >
              <ChevronLeftRegular className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>
          )}
          <span className="text-[#71717A]">|</span>
          <span className="text-[11px] font-mono text-[#A8AFBA]">
            Projects &gt; {project.id}
          </span>
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 h-7 rounded-[4px] bg-[#0078D4] hover:bg-[#106EBE] text-white text-xs font-normal transition-colors cursor-pointer"
          >
            <GitHubFluentMark className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
          </a>
        )}
      </div>

      {/* Main Document Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 max-w-4xl mx-auto w-full">
        {/* Title Header */}
        <div className="border-b border-[#2d2d2d] pb-4">
          <div className="flex items-center gap-2 mb-1.5 select-none">
            <span className="text-[11px] font-mono text-[#4CC2FF] px-2 py-0.5 rounded-[3px] bg-[#4CC2FF]/10 border border-[#4CC2FF]/20">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-[11px] font-mono text-[#10B981] px-2 py-0.5 rounded-[3px] bg-[#10B981]/10 border border-[#10B981]/20">
                {project.badge}
              </span>
            )}
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-[#F5F7FA] tracking-tight">
            {project.title}
          </h1>
          <p className="text-xs text-[#A8AFBA] mt-1">{project.subtitle}</p>
        </div>

        {/* 1. Overview */}
        <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E1E1E1] uppercase tracking-wider select-none">
            <PulseRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
            <span>Overview</span>
          </div>
          <p className="text-xs leading-relaxed text-[#D4D4D8]">
            {project.overview}
          </p>
        </div>

        {/* 2. Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F87171] uppercase tracking-wider select-none">
              <AlertRegular className="w-3.5 h-3.5 text-[#F87171]" />
              <span>Problem Statement</span>
            </div>
            <p className="text-xs leading-relaxed text-[#D4D4D8]">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#34D399] uppercase tracking-wider select-none">
              <CheckmarkCircleRegular className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs leading-relaxed text-[#D4D4D8]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 3. System Architecture */}
        <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-3">
          <div className="flex items-center justify-between select-none">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E1E1E1] uppercase tracking-wider">
              <LayerRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
              <span>Architecture: {project.architecture.title}</span>
            </div>
          </div>

          <p className="text-xs text-[#A8AFBA] leading-relaxed">
            {project.architecture.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-2">
            {project.architecture.flow.map((stage, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-[4px] bg-[#1a1a1a] border border-[#2d2d2d] flex items-center gap-2.5 text-xs text-[#E1E1E1]"
              >
                <span className="w-5 h-5 rounded-[3px] bg-white/[0.08] text-[#4CC2FF] font-mono font-bold text-[11px] flex items-center justify-center shrink-0 select-none">
                  {idx + 1}
                </span>
                <span className="font-normal leading-tight text-[11px]">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Technologies & Verified Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E1E1E1] uppercase tracking-wider select-none">
              <CodeRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
              <span>Technologies</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-[3px] bg-[#1a1a1a] border border-[#2d2d2d] text-[11px] text-[#D4D4D8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E1E1E1] uppercase tracking-wider select-none">
              <CheckmarkCircleRegular className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Results & Verification</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#D4D4D8] pt-1">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold select-none">•</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5. Implementation Details */}
        <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E1E1E1] uppercase tracking-wider select-none">
            <WindowConsoleRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
            <span>Implementation Details</span>
          </div>
          <div className="space-y-2 text-xs text-[#D4D4D8]">
            {project.implementation.map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-[4px] bg-[#1a1a1a] border border-[#282828] flex items-start gap-2.5"
              >
                <span className="font-mono text-[#4CC2FF] font-medium text-[11px] select-none">
                  [{idx + 1}]
                </span>
                <p className="leading-relaxed text-[11px]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Case Study */}
        {project.caseStudy && (
          <div className="p-4 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-1.5">
            <div className="text-xs font-semibold text-[#4CC2FF] uppercase tracking-wider select-none">
              Case Study Summary
            </div>
            <p className="text-xs text-[#D4D4D8] leading-relaxed italic">
              "{project.caseStudy}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
