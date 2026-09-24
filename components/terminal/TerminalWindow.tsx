"use client";

import React, { useState, useRef, useEffect } from "react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { certificationsData } from "@/data/certifications";
import { achievementsData } from "@/data/achievements";
import { Win11TerminalIcon } from "@/components/icons/Win11FluentIcons";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export function TerminalWindow({ onOpenApp }: { onOpenApp?: (appId: string) => void }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-[#CCCCCC]">
            Windows PowerShell
          </p>
          <p className="text-[#CCCCCC]">
            Copyright (C) Microsoft Corporation. All rights reserved.
          </p>
          <p className="text-[#A8AFBA] pt-1">
            Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
          </p>
          <p className="text-[#4CC2FF] pt-1">
            Type <span className="text-[#10B981] font-semibold">'help'</span> to view available portfolio commands or <span className="text-[#10B981] font-semibold">'whoami'</span>.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-[#A8AFBA]">
            <p className="text-[#FFFFFF] font-semibold">Available Terminal Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-1 font-mono text-[11px]">
              <div><span className="text-[#4CC2FF]">whoami</span> - Identity</div>
              <div><span className="text-[#4CC2FF]">about</span> - Biography</div>
              <div><span className="text-[#4CC2FF]">projects</span> - List projects</div>
              <div><span className="text-[#4CC2FF]">skills</span> - Tech stack</div>
              <div><span className="text-[#4CC2FF]">experience</span> - Work history</div>
              <div><span className="text-[#4CC2FF]">education</span> - Degree info</div>
              <div><span className="text-[#4CC2FF]">certifications</span> - Credentials</div>
              <div><span className="text-[#4CC2FF]">achievements</span> - Hackathons</div>
              <div><span className="text-[#4CC2FF]">contact</span> - Reach out</div>
              <div><span className="text-[#4CC2FF]">github</span> - Repositories</div>
              <div><span className="text-[#4CC2FF]">resume</span> - CV summary</div>
              <div><span className="text-[#4CC2FF]">neofetch</span> - System specs</div>
              <div><span className="text-[#4CC2FF]">clear</span> - Clean screen</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-xs space-y-0.5 font-mono">
            <p className="text-[#FFFFFF] font-bold">{profileData.name}</p>
            <p className="text-[#4CC2FF]">{profileData.role}</p>
            <p className="text-[#A8AFBA]">{profileData.college}</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="text-xs space-y-1 text-[#D4D4D8] max-w-xl">
            <p className="font-semibold text-[#4CC2FF]">"{profileData.heroStatement}"</p>
            <p className="text-[#A8AFBA] leading-relaxed">{profileData.biography}</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#4CC2FF] font-semibold">Verified Systems & Models ({projectsData.length}):</p>
            {projectsData.map((p, i) => (
              <div key={p.id} className="pl-2 border-l border-[#4CC2FF]/40 space-y-0.5">
                <p className="text-[#FFFFFF] font-medium">
                  {i + 1}. {p.title} {p.badge && <span className="text-[#10B981] text-[10px]">[{p.badge}]</span>}
                </p>
                <p className="text-[11px] text-[#A8AFBA]">{p.subtitle}</p>
                <p className="text-[10px] text-[#71717A] font-mono">Tech: {p.technologies.slice(0, 4).join(", ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#4CC2FF] font-semibold">Engineered Tooling & Capabilities:</p>
            {skillsData.map((cat) => (
              <div key={cat.category} className="space-y-0.5">
                <p className="text-[#A8AFBA] font-mono text-[10px] uppercase font-bold">{cat.category}:</p>
                <p className="text-[#D4D4D8] text-[11px]">{cat.skills.map((s) => s.name).join(", ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-2 text-xs">
            {experienceData.map((exp, i) => (
              <div key={i} className="space-y-0.5">
                <p className="text-[#FFFFFF] font-bold">{exp.role} @ {exp.company}</p>
                <p className="text-[11px] text-[#4CC2FF] font-mono">{exp.type} • {exp.location}</p>
                <p className="text-[#A8AFBA] leading-relaxed text-[11px]">{exp.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-1 text-xs">
            {educationData.map((edu, i) => (
              <div key={i}>
                <p className="text-[#FFFFFF] font-bold">{edu.degree}</p>
                <p className="text-[#4CC2FF] text-[11px]">{edu.institution}, {edu.location}</p>
                <p className="text-[10px] font-mono text-[#A8AFBA]">{edu.period || "Undergraduate Engineering"}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "certifications":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#4CC2FF] font-semibold">Verified Credentials:</p>
            {certificationsData.map((c, i) => (
              <p key={i} className="text-[#D4D4D8] text-[11px]">
                • <span className="text-[#FFFFFF] font-medium">{c.title}</span> — {c.issuer}
              </p>
            ))}
          </div>
        );
        break;

      case "achievements":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#4CC2FF] font-semibold">Hackathon Honors & Milestones:</p>
            {achievementsData.map((a, i) => (
              <p key={i} className="text-[#D4D4D8] text-[11px]">
                • <span className="text-[#FACC15] font-medium">[{a.badge || "Award"}]</span> {a.title} ({a.event})
              </p>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-[#4CC2FF] font-semibold">Direct Communication Channels:</p>
            <p className="text-[#D4D4D8]">Email: <span className="text-[#FFFFFF]">{profileData.links.email}</span></p>
            <p className="text-[#D4D4D8]">LinkedIn: <span className="text-[#FFFFFF]">{profileData.links.linkedin}</span></p>
            <p className="text-[#D4D4D8]">GitHub: <span className="text-[#FFFFFF]">{profileData.links.github}</span></p>
          </div>
        );
        break;

      case "github":
        output = (
          <div className="text-xs space-y-1 font-mono">
            <p className="text-[#4CC2FF]">GitHub Profile: {profileData.links.github}</p>
            <p className="text-[#A8AFBA]">8 Production repositories verified with automated tests.</p>
          </div>
        );
        break;

      case "resume":
        output = (
          <div className="text-xs space-y-1 font-mono">
            <p className="text-[#FFFFFF] font-semibold">Prasannaraj — Curriculum Vitae</p>
            <p className="text-[#4CC2FF]">{profileData.role} | {profileData.college}</p>
            <p className="text-[#A8AFBA]">Type 'projects' or 'skills' for details, or open the Resume app on desktop.</p>
          </div>
        );
        break;

      case "neofetch":
        output = (
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs pt-1">
            <pre className="text-[#4CC2FF] leading-tight select-none">
{`    _   ___ ___ _   _ 
   /_\\ |_ _/ __| | | |
  / _ \\ | | (_ | |_| |
 /_/ \\_\\___\\___|\\___/ `}
            </pre>
            <div className="space-y-0.5 text-xs text-[#A8AFBA]">
              <p><span className="text-[#4CC2FF] font-bold">prasannaraj</span>@<span className="text-[#4CC2FF]">workstation</span></p>
              <p>-----------------------------------</p>
              <p><span className="text-[#FFFFFF]">OS:</span> Windows 11 Pro for Workstations</p>
              <p><span className="text-[#FFFFFF]">Host:</span> Sri Sairam College of Engineering, BLR</p>
              <p><span className="text-[#FFFFFF]">Kernel:</span> Windows Terminal 1.19</p>
              <p><span className="text-[#FFFFFF]">Uptime:</span> 210 / 210 Tests Verified</p>
              <p><span className="text-[#FFFFFF]">Shell:</span> PowerShell 7.4.1</p>
              <p><span className="text-[#FFFFFF]">Primary Stack:</span> Python, PyTorch, FastAPI, TypeScript</p>
              <p><span className="text-[#FFFFFF]">Verification:</span> 100% Verified Truth</p>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        output = (
          <p className="text-[#F87171] text-xs">
            Command not recognized: '{trimmed}'. Type <span className="text-[#4CC2FF] font-semibold">'help'</span> for list of commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdText, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
      setInputVal("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0C0C0C] select-text">
      {/* Windows Terminal Tab Header Bar */}
      <div className="h-8 px-2 bg-[#1f1f1f] border-b border-[#2d2d2d] flex items-center justify-between select-none shrink-0">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2 px-3 h-7 rounded-t-[4px] bg-[#0C0C0C] text-[#E1E1E1] text-[11px] font-mono border-t-2 border-t-[#0078D4]">
            <Win11TerminalIcon className="w-3.5 h-3.5" />
            <span>PowerShell</span>
          </div>
          <button className="w-6 h-6 flex items-center justify-center rounded-[3px] text-[#A8AFBA] hover:text-white hover:bg-white/[0.08] text-xs">
            +
          </button>
        </div>
      </div>

      {/* Terminal Canvas */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="flex-1 p-4 font-mono text-xs text-[#CCCCCC] overflow-y-auto space-y-2 cursor-text"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "welcome" && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#4CC2FF] font-bold">PS C:\Users\Prasannaraj&gt;</span>
                <span className="text-[#FFFFFF]">{item.command}</span>
              </div>
            )}
            <div className="pl-1">{item.output}</div>
          </div>
        ))}

        {/* Active Prompt Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-[#4CC2FF] font-bold shrink-0">PS C:\Users\Prasannaraj&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent text-[#FFFFFF] focus:outline-none caret-white"
          />
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
