"use client";

import React, { useState } from "react";
import {
  BrainCircuitRegular,
  BotRegular,
  EyeRegular,
  SparkleRegular,
  LayerRegular,
  CodeRegular,
  CheckmarkCircleRegular,
  WindowConsoleRegular,
  DeveloperBoardRegular,
} from "@/components/icons/FluentIcons";

export function AILabWindow() {
  const [activeTab, setActiveTab] = useState<"architecture" | "models" | "benchmarks" | "code">("architecture");
  const [activeDomain, setActiveDomain] = useState<string>("agentic");

  const researchDomains = [
    {
      id: "agentic",
      title: "Agentic AI & Swarm Orchestration",
      icon: BotRegular,
      focus: "Orchestrator-worker pipelines with self-healing ingestion loops",
      system: "CrawlNews & Multi-Source Synthesis",
    },
    {
      id: "vision",
      title: "Computer Vision & Biometrics",
      icon: EyeRegular,
      focus: "Multi-modal face liveness and anti-spoofing verification",
      system: "TRUST-CV / Block Sentinal",
    },
    {
      id: "rag",
      title: "Retrieval-Augmented Generation",
      icon: SparkleRegular,
      focus: "Hybrid dense & sparse retrieval with strict provenance assertions",
      system: "Prasanna AI Knowledge Engine",
    },
    {
      id: "remote-sensing",
      title: "Satellite VQA & Remote Sensing",
      icon: BrainCircuitRegular,
      focus: "Multispectral visual question answering via dual-branch ResNet",
      system: "SATQUERY AI",
    },
  ];

  const pipelineStages = [
    {
      step: "01",
      name: "Input Ingestion & Validation",
      tech: "FastAPI / Schema Contracts",
      desc: "Sanitizes raw text, image frames, and telemetry signals; enforces strict Pydantic type invariants before downstream dispatch.",
    },
    {
      step: "02",
      name: "Embedding & Feature Extraction",
      tech: "Sentence-Transformers / OpenCV",
      desc: "Transforms multi-modal inputs into dense 768-dim vector embeddings or spatial CNN feature maps.",
    },
    {
      step: "03",
      name: "Vector Retrieval & Context Filtering",
      tech: "Cosine Similarity / BM25 Index",
      desc: "Retrieves nearest verified document chunks with cosine thresholding and deduplication.",
    },
    {
      step: "04",
      name: "Neural Reasoning & Synthesis",
      tech: "PyTorch / Transformers / LLMs",
      desc: "Executes foundation model inference strictly conditioned upon retrieved facts to prevent hallucinations.",
    },
    {
      step: "05",
      name: "Deterministic Verification",
      tech: "PyTest / Guardrail Assertions",
      desc: "Executes post-generation integrity checks (e.g. 210/210 passing tests in TRUST-CV) before final delivery.",
    },
  ];

  const modelsCatalog = [
    {
      name: "TRUST-CV Face Anti-Spoofing Net",
      architecture: "MobileNetV2 + Texture Analysis",
      task: "Biometric Liveness Detection",
      accuracy: "99.4% LFW Verified",
      status: "210/210 Passing Tests",
    },
    {
      name: "SATQUERY Satellite VQA Core",
      architecture: "ResNet-18 + Multi-Modal Attention",
      task: "Multispectral Visual Question Answering",
      accuracy: "87.6% Top-1 Accuracy",
      status: "Production Verified",
    },
    {
      name: "FAKEO Misinformation Classifier",
      architecture: "XGBoost + TF-IDF + OCR Pipeline",
      task: "Automated News Authenticity Classification",
      accuracy: "94.2% F1-Score",
      status: "Production Verified",
    },
    {
      name: "CrawlNews Fact-Verification Swarm",
      architecture: "Multi-Agent Orchestrator-Worker",
      task: "Automated Scraping & Claim Cross-Checking",
      accuracy: "Deterministic Rules Engine",
      status: "Production Verified",
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#181818] select-none text-xs text-[#E1E1E1]">
      {/* 1. Top Application Menu Bar */}
      <div className="h-7 px-3 bg-[#1f1f1f] border-b border-[#2d2d2d] flex items-center justify-between text-[11px] text-[#A8AFBA] shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-white font-medium">AI Research Lab</span>
          <span className="hover:text-white cursor-pointer">File</span>
          <span className="hover:text-white cursor-pointer">Edit</span>
          <span className="hover:text-white cursor-pointer">View</span>
          <span className="hover:text-white cursor-pointer">Models</span>
          <span className="hover:text-white cursor-pointer">Benchmarks</span>
          <span className="hover:text-white cursor-pointer">Help</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#8A8A8A]">
          <span>Python 3.11</span>
          <span>•</span>
          <span>PyTorch 2.2</span>
        </div>
      </div>

      {/* 2. Top Tabs Strip */}
      <div className="h-9 px-3 bg-[#1c1c1c] border-b border-[#282828] flex items-center gap-1 shrink-0">
        <button
          onClick={() => setActiveTab("architecture")}
          className={`px-3 h-7 rounded-[4px] flex items-center gap-1.5 transition-colors cursor-pointer text-xs ${
            activeTab === "architecture"
              ? "bg-[#282828] text-[#4CC2FF] font-medium border border-[#333333]"
              : "text-[#A8AFBA] hover:text-white hover:bg-white/[0.04]"
          }`}
        >
          <LayerRegular className="w-3.5 h-3.5" />
          <span>Pipeline Architecture</span>
        </button>

        <button
          onClick={() => setActiveTab("models")}
          className={`px-3 h-7 rounded-[4px] flex items-center gap-1.5 transition-colors cursor-pointer text-xs ${
            activeTab === "models"
              ? "bg-[#282828] text-[#4CC2FF] font-medium border border-[#333333]"
              : "text-[#A8AFBA] hover:text-white hover:bg-white/[0.04]"
          }`}
        >
          <DeveloperBoardRegular className="w-3.5 h-3.5" />
          <span>Model Catalog</span>
        </button>

        <button
          onClick={() => setActiveTab("benchmarks")}
          className={`px-3 h-7 rounded-[4px] flex items-center gap-1.5 transition-colors cursor-pointer text-xs ${
            activeTab === "benchmarks"
              ? "bg-[#282828] text-[#4CC2FF] font-medium border border-[#333333]"
              : "text-[#A8AFBA] hover:text-white hover:bg-white/[0.04]"
          }`}
        >
          <CheckmarkCircleRegular className="w-3.5 h-3.5" />
          <span>Verification & Benchmarks</span>
        </button>

        <button
          onClick={() => setActiveTab("code")}
          className={`px-3 h-7 rounded-[4px] flex items-center gap-1.5 transition-colors cursor-pointer text-xs ${
            activeTab === "code"
              ? "bg-[#282828] text-[#4CC2FF] font-medium border border-[#333333]"
              : "text-[#A8AFBA] hover:text-white hover:bg-white/[0.04]"
          }`}
        >
          <CodeRegular className="w-3.5 h-3.5" />
          <span>Code Specifications</span>
        </button>
      </div>

      {/* 3. Main Workbench Layout (Sidebar + Viewer) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Research Domains Tree */}
        <div className="w-60 border-r border-[#282828] bg-[#1a1a1a] p-3 hidden sm:flex flex-col gap-1 overflow-y-auto shrink-0">
          <div className="px-2 py-1 text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider">
            Research Domains
          </div>
          {researchDomains.map((domain) => {
            const Icon = domain.icon;
            const isSelected = activeDomain === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`w-full p-2 rounded-[4px] text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#282828] border-l-[3px] border-l-[#0078D4] text-white"
                    : "text-[#A8AFBA] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-[#4CC2FF]" : "text-[#A8AFBA]"}`} />
                  <span className="font-medium text-[11px] truncate">
                    {domain.title}
                  </span>
                </div>
                <p className="text-[10px] text-[#71717A] mt-1 line-clamp-1">
                  {domain.system}
                </p>
              </button>
            );
          })}

          <div className="my-3 border-t border-[#282828]" />

          <div className="p-3 rounded-[4px] bg-[#202020] border border-[#2d2d2d] space-y-1.5 text-[11px]">
            <div className="text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider">
              Verification Engine
            </div>
            <p className="text-[#D4D4D8]">
              Automated testing rig strictly enforces unit & integration test coverage across all deployed model endpoints.
            </p>
            <div className="font-mono text-[10px] text-[#10B981] pt-1">
              ✓ 210/210 Tests Verified
            </div>
          </div>
        </div>

        {/* Right Tab Content Viewer */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {activeTab === "architecture" && (
            <div className="space-y-4 max-w-4xl">
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Production AI Execution Pipeline
                </h2>
                <p className="text-xs text-[#A8AFBA] mt-0.5">
                  End-to-end dataflow architecture powering Prasannaraj's deployed models and automated agents.
                </p>
              </div>

              <div className="space-y-2">
                {pipelineStages.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-3 rounded-[4px] bg-[#202020] border border-[#2d2d2d] flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-[4px] bg-[#1a1a1a] border border-[#2d2d2d] flex items-center justify-center font-mono font-bold text-[#4CC2FF] text-xs shrink-0">
                      {stage.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xs font-semibold text-white">
                          {stage.name}
                        </h3>
                        <span className="text-[10px] font-mono text-[#A8AFBA] px-1.5 py-0.5 rounded bg-white/[0.04]">
                          {stage.tech}
                        </span>
                      </div>
                      <p className="text-xs text-[#D4D4D8] mt-1 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "models" && (
            <div className="space-y-4 max-w-4xl">
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Deployed Model Catalog
                </h2>
                <p className="text-xs text-[#A8AFBA] mt-0.5">
                  Production-trained neural networks and verified machine learning classifiers.
                </p>
              </div>

              <div className="divide-y divide-[#282828] border border-[#2d2d2d] rounded-[4px] bg-[#202020]">
                {modelsCatalog.map((m) => (
                  <div key={m.name} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xs font-bold text-white">{m.name}</h3>
                      <p className="text-[11px] text-[#4CC2FF] mt-0.5 font-mono">{m.architecture}</p>
                      <p className="text-[11px] text-[#A8AFBA] mt-0.5">{m.task}</p>
                    </div>
                    <div className="text-right sm:text-right shrink-0">
                      <span className="text-xs font-mono text-[#10B981] font-semibold">{m.accuracy}</span>
                      <p className="text-[10px] text-[#A8AFBA] mt-0.5">{m.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "benchmarks" && (
            <div className="space-y-4 max-w-4xl">
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Verification Benchmarks & Test Telemetry
                </h2>
                <p className="text-xs text-[#A8AFBA] mt-0.5">
                  Deterministic test suites and production benchmark evaluations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-[4px] bg-[#202020] border border-[#2d2d2d] space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    TRUST-CV Test Rig
                  </div>
                  <p className="text-2xl font-bold font-mono text-[#10B981]">
                    210 / 210 Passed
                  </p>
                  <p className="text-xs text-[#A8AFBA]">
                    Automated unit tests evaluating multi-modal spoof detection, boundary asserts, and liveness scoring.
                  </p>
                </div>

                <div className="p-4 rounded-[4px] bg-[#202020] border border-[#2d2d2d] space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    CrawlNews Ingestion SLA
                  </div>
                  <p className="text-2xl font-bold font-mono text-[#4CC2FF]">
                    &lt; 350ms Latency
                  </p>
                  <p className="text-xs text-[#A8AFBA]">
                    End-to-end tokenization, cosine deduplication, and cross-reference fact verification per incoming item.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="space-y-4 max-w-4xl">
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Architecture Implementation Signature
                </h2>
                <p className="text-xs text-[#A8AFBA] mt-0.5">
                  Core inference and verification contract for anti-spoofing and pipeline verification.
                </p>
              </div>

              <pre className="p-4 rounded-[4px] bg-[#141414] border border-[#2d2d2d] text-[11px] font-mono text-[#D4D4D8] overflow-x-auto leading-relaxed">
{`# TRUST-CV Multi-Modal Verification Rig Contract
from typing import Dict, Any
import numpy as np

class VerificationPipeline:
    def __init__(self, liveness_threshold: float = 0.85):
        self.threshold = liveness_threshold
        self.verified_tests = 210

    def evaluate_liveness(self, frame: np.ndarray, spectral_mask: np.ndarray) -> Dict[str, Any]:
        """
        Executes anti-spoofing assertion against physical presentation attack.
        Strictly returns deterministic integrity payload.
        """
        texture_score = self._compute_lbp_texture(frame)
        motion_score = self._compute_optical_flow(spectral_mask)
        confidence = (0.6 * texture_score) + (0.4 * motion_score)

        return {
            "is_authentic": bool(confidence >= self.threshold),
            "confidence": round(float(confidence), 4),
            "guardrail_status": "PASS" if confidence >= self.threshold else "REJECT",
            "test_assertions_passing": self.verified_tests
        }`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
