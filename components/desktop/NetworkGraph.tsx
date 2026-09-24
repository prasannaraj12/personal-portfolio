"use client";

import React, { useState } from "react";
import { BranchForkRegular } from "@/components/icons/FluentIcons";

interface NetworkNode {
  id: string;
  label: string;
  type: "project" | "tech" | "domain";
  connections: string[];
}

const NODES: NetworkNode[] = [
  // Projects
  { id: "p1", label: "TRUST-CV", type: "project", connections: ["t-cv", "t-rs", "t-crypto", "d-sec"] },
  { id: "p2", label: "SATQUERY AI", type: "project", connections: ["t-rs", "t-vqa", "t-resnet", "d-vlm"] },
  { id: "p3", label: "CRAWLNEWS", type: "project", connections: ["t-agents", "t-nlp", "t-scrape", "d-agent"] },
  { id: "p4", label: "FAKEO", type: "project", connections: ["t-xgboost", "t-ocr", "t-ner", "d-nlp"] },
  { id: "p5", label: "URBANBLOOM", type: "project", connections: ["t-esp32", "t-gemini", "t-iot", "d-iot"] },
  { id: "p6", label: "PLAYER RE-ID", type: "project", connections: ["t-cv", "t-yolo", "t-deepsort", "d-cv"] },

  // Tech
  { id: "t-cv", label: "Computer Vision", type: "tech", connections: ["p1", "p6", "d-cv"] },
  { id: "t-rs", label: "Remote Sensing", type: "tech", connections: ["p1", "p2", "d-vlm"] },
  { id: "t-crypto", label: "Cryptographic Attestation", type: "tech", connections: ["p1", "d-sec"] },
  { id: "t-vqa", label: "VQA / Captioning", type: "tech", connections: ["p2", "d-vlm"] },
  { id: "t-resnet", label: "ResNet / Stem", type: "tech", connections: ["p2"] },
  { id: "t-agents", label: "Multi-Agent System", type: "tech", connections: ["p3", "d-agent"] },
  { id: "t-nlp", label: "NLP & Embeddings", type: "tech", connections: ["p3", "p4", "d-nlp"] },
  { id: "t-scrape", label: "Playwright / Cron", type: "tech", connections: ["p3"] },
  { id: "t-xgboost", label: "XGBoost + TF-IDF", type: "tech", connections: ["p4", "d-nlp"] },
  { id: "t-ocr", label: "pytesseract OCR", type: "tech", connections: ["p4"] },
  { id: "t-ner", label: "spaCy NER", type: "tech", connections: ["p4"] },
  { id: "t-esp32", label: "ESP32 & Sensors", type: "tech", connections: ["p5", "d-iot"] },
  { id: "t-gemini", label: "Gemini AI API", type: "tech", connections: ["p5", "d-agent"] },
  { id: "t-iot", label: "Embedded Telemetry", type: "tech", connections: ["p5"] },
  { id: "t-yolo", label: "YOLOv5 Detector", type: "tech", connections: ["p6"] },
  { id: "t-deepsort", label: "DeepSORT Tracker", type: "tech", connections: ["p6"] },

  // Domains
  { id: "d-cv", label: "Core Vision & Tracking", type: "domain", connections: ["t-cv"] },
  { id: "d-vlm", label: "Multimodal Geo-AI", type: "domain", connections: ["t-rs", "t-vqa"] },
  { id: "d-agent", label: "Autonomous Agentic AI", type: "domain", connections: ["t-agents", "t-gemini"] },
  { id: "d-nlp", label: "Information Verification", type: "domain", connections: ["t-nlp", "t-xgboost"] },
  { id: "d-sec", label: "Air-Gapped Integrity", type: "domain", connections: ["t-crypto"] },
  { id: "d-iot", label: "Edge Hardware & IoT", type: "domain", connections: ["t-esp32", "t-iot"] },
];

export function NetworkGraph({ onSelectProject }: { onSelectProject?: (projId: string) => void }) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const isConnected = (targetId: string) => {
    if (!activeNode) return false;
    if (activeNode === targetId) return true;
    const node = NODES.find((n) => n.id === activeNode);
    return node ? node.connections.includes(targetId) : false;
  };

  const projectMap: Record<string, string> = {
    p1: "trust-cv",
    p2: "satquery-ai",
    p3: "crawlnews",
    p4: "fakeo",
    p5: "urbanbloom-ai",
    p6: "player-reid",
  };

  return (
    <div className="hidden xl:flex flex-col w-[320px] p-3.5 rounded-2xl mica-surface border border-white/[0.08] shadow-2xl backdrop-blur-xl pointer-events-auto select-none transition-all">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-2.5">
        <div className="flex items-center gap-2">
          <BranchForkRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
          <span className="text-[11px] font-semibold tracking-wider text-[#A8AFBA] uppercase">
            Knowledge Topology
          </span>
        </div>
        <span className="text-[10px] text-[#A8AFBA] font-mono">Interactive Matrix</span>
      </div>

      <p className="text-[11px] text-[#A8AFBA] mb-2 leading-relaxed">
        Hover nodes to trace semantic linkages across architectures:
      </p>

      {/* Node Columns */}
      <div className="grid grid-cols-3 gap-1.5 text-[10px]">
        {/* Column 1: Projects */}
        <div className="space-y-1">
          <span className="text-[9px] font-mono text-[#7AA2FF] uppercase tracking-wider block mb-1">
            Projects
          </span>
          {NODES.filter((n) => n.type === "project").map((n) => {
            const connected = isConnected(n.id);
            const active = activeNode === n.id;
            return (
              <button
                key={n.id}
                onMouseEnter={() => setActiveNode(n.id)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => {
                  const pid = projectMap[n.id];
                  if (pid && onSelectProject) onSelectProject(pid);
                }}
                className={`w-full text-left p-1.5 rounded transition-all truncate border cursor-pointer ${
                  active
                    ? "bg-[#4CC2FF]/20 border-[#4CC2FF] text-[#F5F7FA] font-medium"
                    : connected
                    ? "bg-[#7AA2FF]/15 border-[#7AA2FF]/60 text-[#4CC2FF]"
                    : "bg-white/[0.03] border-white/[0.05] text-[#A8AFBA] hover:text-[#F5F7FA] hover:bg-white/[0.06]"
                }`}
              >
                {n.label}
              </button>
            );
          })}
        </div>

        {/* Column 2: Tech */}
        <div className="space-y-1">
          <span className="text-[9px] font-mono text-[#4CC2FF] uppercase tracking-wider block mb-1">
            Technologies
          </span>
          {NODES.filter((n) => n.type === "tech").slice(0, 6).map((n) => {
            const connected = isConnected(n.id);
            const active = activeNode === n.id;
            return (
              <div
                key={n.id}
                onMouseEnter={() => setActiveNode(n.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`p-1.5 rounded transition-all truncate border text-[9.5px] cursor-default ${
                  active
                    ? "bg-[#4CC2FF]/20 border-[#4CC2FF] text-[#F5F7FA] font-medium"
                    : connected
                    ? "bg-[#7AA2FF]/15 border-[#7AA2FF]/60 text-[#4CC2FF]"
                    : "bg-white/[0.03] border-white/[0.05] text-[#A8AFBA] hover:text-[#F5F7FA]"
                }`}
              >
                {n.label}
              </div>
            );
          })}
        </div>

        {/* Column 3: Domains */}
        <div className="space-y-1">
          <span className="text-[9px] font-mono text-[#6CCB8A] uppercase tracking-wider block mb-1">
            Domains
          </span>
          {NODES.filter((n) => n.type === "domain").map((n) => {
            const connected = isConnected(n.id);
            const active = activeNode === n.id;
            return (
              <div
                key={n.id}
                onMouseEnter={() => setActiveNode(n.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`p-1.5 rounded transition-all truncate border text-[9.5px] cursor-default ${
                  active
                    ? "bg-[#6CCB8A]/20 border-[#6CCB8A] text-[#F5F7FA] font-medium"
                    : connected
                    ? "bg-[#6CCB8A]/15 border-[#6CCB8A]/60 text-[#6CCB8A]"
                    : "bg-white/[0.03] border-white/[0.05] text-[#A8AFBA] hover:text-[#F5F7FA]"
                }`}
              >
                {n.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
