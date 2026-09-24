"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { certificationsData } from "@/data/certifications";
import { achievementsData } from "@/data/achievements";
import {
  ArrowDownloadRegular,
  PrintRegular,
  DocumentTextRegular,
  GitHubFluentMark,
  LinkedInFluentMark,
} from "@/components/icons/FluentIcons";

export function ResumeWindow() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1]">
      {/* 1. PDF / Document Viewer Toolbar */}
      <div className="h-10 px-4 bg-[#1f1f1f] border-b border-[#2d2d2d] flex items-center justify-between select-none shrink-0">
        <div className="flex items-center gap-2">
          <DocumentTextRegular className="w-4 h-4 text-[#4CC2FF]" />
          <span className="text-[12px] font-medium text-[#E1E1E1]">
            Prasannaraj_Resume.pdf
          </span>
          <span className="text-[10px] text-[#71717A] ml-2">Page 1 / 1</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-2.5 h-7 rounded-[4px] text-xs font-normal bg-white/[0.06] hover:bg-white/[0.12] text-[#E1E1E1] border border-white/[0.08] transition-colors cursor-pointer"
          >
            <PrintRegular className="w-3.5 h-3.5 text-[#A8AFBA]" />
            <span>Print / PDF</span>
          </button>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 h-7 rounded-[4px] text-xs font-normal bg-[#0078D4]/20 text-[#4CC2FF] hover:bg-[#0078D4]/30 border border-[#0078D4]/40 transition-colors cursor-pointer"
          >
            <LinkedInFluentMark className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={profileData.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 h-7 rounded-[4px] text-xs font-normal bg-[#0078D4] text-white hover:bg-[#106EBE] transition-colors cursor-pointer"
          >
            <GitHubFluentMark className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* 2. Document Page Canvas (Neutral matte canvas with crisp paper sheet) */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#141414] flex justify-center">
        <div className="w-full max-w-3xl bg-[#1e1e1e] border border-[#333333] rounded-[2px] p-8 sm:p-10 space-y-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          {/* Header */}
          <div className="border-b border-[#333333] pb-4">
            <h1 className="text-2xl font-bold text-[#FFFFFF] tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-xs font-medium text-[#4CC2FF] mt-0.5">
              {profileData.role}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#A8AFBA] mt-2 font-mono">
              <span>{profileData.location}</span>
              <span>•</span>
              <span className="text-[#4CC2FF]">{profileData.links.email}</span>
              <span>•</span>
              <span>{profileData.links.github}</span>
              <span>•</span>
              <span>{profileData.links.linkedin}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#4CC2FF] border-b border-[#2d2d2d] pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-[#D4D4D8] leading-relaxed">
              {profileData.biography}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#4CC2FF] border-b border-[#2d2d2d] pb-1">
              Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-semibold text-[#FFFFFF]">
                    {exp.role} — <span className="text-[#4CC2FF]">{exp.company}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-[#A8AFBA]">
                    {exp.location}
                  </span>
                </div>
                <p className="text-xs text-[#A8AFBA] leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-1 text-xs text-[#D4D4D8] pl-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="list-disc">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Projects */}
          <div className="space-y-3">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#4CC2FF] border-b border-[#2d2d2d] pb-1">
              Engineered Systems & Projects
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 4).map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-semibold text-[#FFFFFF]">
                      {p.title}
                      {p.badge && (
                        <span className="text-[10px] font-mono text-[#10B981] ml-2">
                          [{p.badge}]
                        </span>
                      )}
                    </h3>
                    <span className="text-[10px] font-mono text-[#4CC2FF]">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#D4D4D8] leading-relaxed">
                    {p.overview}
                  </p>
                  <p className="text-[11px] text-[#A8AFBA]">
                    <span className="text-[#71717A]">Technologies: </span>
                    {p.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#4CC2FF] border-b border-[#2d2d2d] pb-1">
              Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-xs">
                <div>
                  <h3 className="font-semibold text-[#FFFFFF]">{edu.degree}</h3>
                  <p className="text-[#A8AFBA]">{edu.institution}, {edu.location}</p>
                </div>
                <div className="text-right font-mono text-[11px]">
                  <p className="text-[#4CC2FF]">{edu.period || "Undergraduate"}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#4CC2FF] border-b border-[#2d2d2d] pb-1">
              Technical Stack
            </h2>
            <div className="space-y-1.5 text-xs">
              {skillsData.map((cat) => (
                <div key={cat.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="text-[10px] font-mono uppercase text-[#A8AFBA] w-48 shrink-0">
                    {cat.category}:
                  </span>
                  <span className="text-[#D4D4D8]">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1.5">
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#4CC2FF] border-b border-[#2d2d2d] pb-1">
                Certifications
              </h2>
              <ul className="space-y-1 text-xs text-[#D4D4D8]">
                {certificationsData.map((c, i) => (
                  <li key={i} className="list-disc ml-3">
                    <span className="text-[#FFFFFF]">{c.title}</span> — {c.issuer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#4CC2FF] border-b border-[#2d2d2d] pb-1">
                Achievements
              </h2>
              <ul className="space-y-1 text-xs text-[#D4D4D8]">
                {achievementsData.map((a, i) => (
                  <li key={i} className="list-disc ml-3">
                    <span className="text-[#FFFFFF]">{a.title}</span> — {a.event}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
