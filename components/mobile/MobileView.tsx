"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { certificationsData } from "@/data/certifications";
import { achievementsData } from "@/data/achievements";
import {
  PersonRegular,
  FolderRegular,
  SparkleRegular,
  SettingsRegular,
  BriefcaseRegular,
  DocumentTextRegular,
  MailRegular,
  SearchRegular,
  OpenRegular,
  ChevronRightRegular,
  ShieldCheckmarkRegular,
  DismissRegular,
  SendRegular,
  LayerRegular,
  CertificateRegular,
  TrophyRegular,
} from "@/components/icons/FluentIcons";
import { queryPortfolioKnowledge } from "@/data/knowledge-base";

export function MobileView({ onOpenRecruiter }: { onOpenRecruiter?: () => void }) {
  const [activeTab, setActiveTab] = useState<"home" | "projects" | "lab" | "skills" | "resume" | "chat">("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Chat tab state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>([
    {
      sender: "bot",
      text: "Hello! I am Prasanna AI. Ask me about Prasannaraj's AI projects, stack, or experience.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    const q = chatInput;
    setChatMessages((prev) => [...prev, { sender: "user", text: q }]);
    setChatInput("");

    setTimeout(() => {
      const res = queryPortfolioKnowledge(q);
      setChatMessages((prev) => [...prev, { sender: "bot", text: res.answer }]);
    }, 350);
  };

  const selectedProject = projectsData.find((p) => p.id === selectedProjectId);

  return (
    <div className="flex md:hidden flex-col h-screen w-full bg-[#0B0D10] text-[#F5F7FA] overflow-hidden select-none">
      {/* Mobile Top Header */}
      <div className="h-14 px-4 border-b border-white/[0.08] bg-[#15171B]/90 backdrop-blur-xl flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1E3A8A] to-[#4CC2FF] flex items-center justify-center font-bold text-xs text-white">
            PR
          </div>
          <div>
            <h1 className="text-xs font-bold text-[#F5F7FA] leading-tight">
              {profileData.name}
            </h1>
            <p className="text-[10px] text-[#4CC2FF] leading-tight font-medium">
              {profileData.role}
            </p>
          </div>
        </div>

        <button
          onClick={onOpenRecruiter}
          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#4CC2FF]/10 text-[#4CC2FF] border border-[#4CC2FF]/20"
        >
          Recruiter View
        </button>
      </div>

      {/* Main Tab Content Viewport */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 space-y-5">
        {activeTab === "home" && (
          <div className="space-y-4">
            {/* Mission Hero */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono text-[#4CC2FF] uppercase tracking-wider">
                Engineering Stance
              </span>
              <h2 className="text-sm font-semibold text-[#F5F7FA]">
                "{profileData.heroStatement}"
              </h2>
              <p className="text-xs text-[#A8AFBA] leading-relaxed">
                {profileData.supportingStatement}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-xl font-bold font-mono text-[#4CC2FF]">8</p>
                <p className="text-[11px] text-[#A8AFBA]">AI Projects</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-xl font-bold font-mono text-[#6CCB8A]">210/210</p>
                <p className="text-[11px] text-[#A8AFBA]">Tests Passed</p>
              </div>
            </div>

            {/* Launcher App Grid */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A8AFBA] px-1">
                Portfolio Hub
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => setActiveTab("projects")}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3 text-left"
                >
                  <div className="p-2 rounded-lg bg-[#4CC2FF]/10 text-[#4CC2FF]">
                    <FolderRegular className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#F5F7FA]">Projects</h3>
                    <p className="text-[10px] text-[#A8AFBA]">8 Systems</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab("lab")}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3 text-left"
                >
                  <div className="p-2 rounded-lg bg-[#7AA2FF]/10 text-[#7AA2FF]">
                    <SparkleRegular className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#F5F7FA]">AI Lab</h3>
                    <p className="text-[10px] text-[#A8AFBA]">Pipelines</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab("skills")}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3 text-left"
                >
                  <div className="p-2 rounded-lg bg-[#6CCB8A]/10 text-[#6CCB8A]">
                    <SettingsRegular className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#F5F7FA]">Skills</h3>
                    <p className="text-[10px] text-[#A8AFBA]">Tech Stack</p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab("resume")}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3 text-left"
                >
                  <div className="p-2 rounded-lg bg-[#F2C94C]/10 text-[#F2C94C]">
                    <DocumentTextRegular className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#F5F7FA]">Resume</h3>
                    <p className="text-[10px] text-[#A8AFBA]">Credentials</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Crawl Corp Experience Spotlight */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-[10px] font-mono text-[#7AA2FF] uppercase">
                Current Role
              </span>
              <h3 className="text-xs font-bold text-[#F5F7FA]">
                {experienceData[0].role} — {experienceData[0].company}
              </h3>
              <p className="text-xs text-[#A8AFBA]">
                {experienceData[0].description}
              </p>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#F5F7FA]">Engineered Systems</h2>
            <div className="space-y-2.5">
              {projectsData.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1.5 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-[#F5F7FA]">{p.title}</h3>
                    {p.badge && (
                      <span className="text-[9px] font-mono text-[#6CCB8A] bg-[#6CCB8A]/10 px-1.5 py-0.5 rounded">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#A8AFBA] line-clamp-2">
                    {p.overview}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-[#4CC2FF] pt-1">
                    <span>Inspect Pipeline</span>
                    <ChevronRightRegular className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "lab" && (
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#F5F7FA]">AI Research Lab</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                <h3 className="text-xs font-bold text-[#4CC2FF]">
                  AI Execution Pipeline
                </h3>
                <div className="space-y-1.5 text-xs text-[#A8AFBA] font-mono">
                  <p>1. Ingestion ➔ Query Sanitization</p>
                  <p>2. Contextual Memory & Rerank</p>
                  <p>3. Dense Vector / Sparse Retrieval</p>
                  <p>4. Agentic Reasoning & Tool Dispatch</p>
                  <p>5. Grounded Synthesis & Verification</p>
                </div>
              </div>

              <div className="space-y-2">
                {["Computer Vision (Air-Gapped)", "Agentic Multi-Agent Systems", "Vision-Language Models (VLM)", "RAG Guardrails"].map((d) => (
                  <div key={d} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-[#F5F7FA]">
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#F5F7FA]">Technical Skills</h2>
            <div className="space-y-3">
              {skillsData.map((cat) => (
                <div key={cat.category} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <h3 className="text-xs font-bold text-[#4CC2FF] uppercase font-mono">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-[#F5F7FA] border border-white/[0.06]"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "resume" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#F5F7FA]">Curriculum Vitae</h2>
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#4CC2FF] underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 text-xs">
              <div>
                <h3 className="font-bold text-[#F5F7FA]">{profileData.name}</h3>
                <p className="text-[#4CC2FF]">{profileData.role}</p>
                <p className="text-[#A8AFBA]">{profileData.location}</p>
              </div>

              <div className="border-t border-white/[0.06] pt-2">
                <span className="font-bold text-[#A8AFBA] block mb-1">Education:</span>
                <p className="text-[#F5F7FA]">{educationData[0].degree}</p>
                <p className="text-[#A8AFBA]">{educationData[0].institution}</p>
              </div>

              <div className="border-t border-white/[0.06] pt-2">
                <span className="font-bold text-[#A8AFBA] block mb-1">Experience:</span>
                <p className="text-[#F5F7FA]">{experienceData[0].role} — {experienceData[0].company}</p>
                <p className="text-[#A8AFBA]">{experienceData[0].description}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "chat" && (
          <div className="flex flex-col h-full space-y-3">
            <h2 className="text-sm font-bold text-[#F5F7FA] flex items-center gap-1.5">
              <SparkleRegular className="w-4 h-4 text-[#4CC2FF]" />
              Prasanna AI Assistant
            </h2>

            <div className="flex-1 space-y-2 overflow-y-auto max-h-[55vh] p-2">
              {chatMessages.map((m, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl text-xs ${
                    m.sender === "user"
                      ? "bg-[#4CC2FF] text-[#0B0D10] font-medium ml-6"
                      : "bg-white/[0.04] text-[#F5F7FA] border border-white/[0.08] mr-6"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/[0.08]">
              <input
                type="text"
                placeholder="Ask about projects, stack..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
                className="flex-1 h-9 px-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-xs text-[#F5F7FA] focus:outline-none"
              />
              <button
                onClick={handleSendChat}
                className="w-9 h-9 rounded-xl bg-[#4CC2FF] text-[#0B0D10] flex items-center justify-center cursor-pointer"
              >
                <SendRegular className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal for Mobile */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0B0D10] flex flex-col p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h3 className="text-sm font-bold text-[#F5F7FA]">
              {selectedProject.title}
            </h3>
            <button
              onClick={() => setSelectedProjectId(null)}
              className="p-1 rounded-lg bg-white/[0.06] cursor-pointer"
            >
              <DismissRegular className="w-4 h-4 text-[#A8AFBA]" />
            </button>
          </div>

          <div className="py-4 space-y-4 text-xs">
            <p className="text-[#A8AFBA] leading-relaxed">
              {selectedProject.overview}
            </p>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-[10px] font-mono text-[#4CC2FF] uppercase">
                Problem & Solution
              </span>
              <p className="text-[#F5F7FA]">{selectedProject.solution}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#7AA2FF] uppercase">
                Architecture Flow
              </span>
              <p className="text-[#A8AFBA] font-mono">
                {selectedProject.architecture.flow.join(" ➔ ")}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedProject.technologies.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/[0.05] text-[#F5F7FA]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar (Windows 11 inspired) */}
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-[#15171B]/95 border-t border-white/[0.08] backdrop-blur-2xl flex items-center justify-around px-2 z-40 select-none">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] cursor-pointer ${
            activeTab === "home" ? "text-[#4CC2FF]" : "text-[#A8AFBA]"
          }`}
        >
          <PersonRegular className="w-4 h-4" />
          <span>Home</span>
        </button>

        <button
          onClick={() => setActiveTab("projects")}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] cursor-pointer ${
            activeTab === "projects" ? "text-[#4CC2FF]" : "text-[#A8AFBA]"
          }`}
        >
          <FolderRegular className="w-4 h-4" />
          <span>Projects</span>
        </button>

        <button
          onClick={() => setActiveTab("lab")}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] cursor-pointer ${
            activeTab === "lab" ? "text-[#4CC2FF]" : "text-[#A8AFBA]"
          }`}
        >
          <SparkleRegular className="w-4 h-4" />
          <span>AI Lab</span>
        </button>

        <button
          onClick={() => setActiveTab("skills")}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] cursor-pointer ${
            activeTab === "skills" ? "text-[#4CC2FF]" : "text-[#A8AFBA]"
          }`}
        >
          <SettingsRegular className="w-4 h-4" />
          <span>Skills</span>
        </button>

        <button
          onClick={() => setActiveTab("chat")}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] cursor-pointer ${
            activeTab === "chat" ? "text-[#4CC2FF]" : "text-[#A8AFBA]"
          }`}
        >
          <SparkleRegular className="w-4 h-4" />
          <span>Copilot</span>
        </button>
      </div>
    </div>
  );
}
