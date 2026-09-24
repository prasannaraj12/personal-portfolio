"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import {
  BriefcaseRegular,
  LocationRegular,
  CalendarRegular,
  CheckmarkCircleRegular,
  BuildingRegular,
} from "@/components/icons/FluentIcons";

export function ExperienceWindow() {
  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1] overflow-y-auto p-6 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-[#2d2d2d]">
          <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFF]">
            Professional Engineering Experience
          </h1>
          <p className="text-xs text-[#A8AFBA] mt-1">
            Production software engineering and applied AI systems roles.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-4"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#282828] pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm md:text-base font-bold text-[#FFFFFF]">
                      {exp.role}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#0078D4]/20 text-[#4CC2FF] border border-[#0078D4]/30">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4CC2FF] font-medium mt-0.5">
                    <BuildingRegular className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#A8AFBA] font-mono">
                  <span className="flex items-center gap-1">
                    <LocationRegular className="w-3.5 h-3.5 text-[#10B981]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#D4D4D8] leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFBA]">
                  Key Engineering Responsibilities:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#E1E1E1]">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckmarkCircleRegular className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-3 border-t border-[#282828] flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-[3px] text-[11px] bg-[#1a1a1a] text-[#A8AFBA] border border-[#2d2d2d]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
