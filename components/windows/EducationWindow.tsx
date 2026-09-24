"use client";

import React from "react";
import { educationData } from "@/data/education";
import {
  HatGraduationRegular,
  BookOpenRegular,
  LocationRegular,
  CheckmarkCircleRegular,
  BuildingRegular,
} from "@/components/icons/FluentIcons";

export function EducationWindow() {
  const edu = educationData[0];

  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1] overflow-y-auto p-6 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-[#2d2d2d]">
          <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFF]">
            Academic Education
          </h1>
          <p className="text-xs text-[#A8AFBA] mt-1">
            Formal engineering degree credentials and specialized research coursework.
          </p>
        </div>

        {/* Main Degree Card */}
        <div className="p-5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-[4px] bg-[#1a1a1a] border border-[#282828] text-[#4CC2FF]">
                <HatGraduationRegular className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#FFFFFF]">
                  {edu.degree}
                </h2>
                <div className="flex items-center gap-2 text-xs text-[#4CC2FF] font-medium mt-0.5">
                  <BuildingRegular className="w-3.5 h-3.5" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#A8AFBA] mt-1 font-mono">
                  <LocationRegular className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            <span className="text-[11px] font-mono text-[#4CC2FF] bg-[#0078D4]/20 px-2.5 py-1 rounded-[3px] border border-[#0078D4]/30 self-start">
              {edu.period || "Undergraduate Engineering"}
            </span>
          </div>

          <p className="text-xs text-[#D4D4D8] leading-relaxed border-t border-[#282828] pt-3">
            {edu.details}
          </p>

          {/* Specialized Academic Focus */}
          <div className="space-y-2.5">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFBA] flex items-center gap-1.5">
              <BookOpenRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
              <span>Specialized Coursework & Engineering Focus</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {edu.academicFocus.map((focus: string) => (
                <div
                  key={focus}
                  className="p-2.5 rounded-[4px] bg-[#1a1a1a] border border-[#282828] flex items-center gap-2 text-xs text-[#E1E1E1]"
                >
                  <CheckmarkCircleRegular className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="text-[11px]">{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
