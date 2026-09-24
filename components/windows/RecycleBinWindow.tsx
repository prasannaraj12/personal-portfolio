"use client";

import React, { useState } from "react";
import {
  DeleteRegular,
  ArrowResetRegular,
  HardDriveRegular,
  ChevronRightRegular,
  CodeTextRegular,
} from "@/components/icons/FluentIcons";

export function RecycleBinWindow() {
  const [items, setItems] = useState([
    {
      name: "v0_naive_scraper_prototype.py",
      size: "14.2 KB",
      deletedDate: "Architectural Upgrade",
      reason: "Replaced by CrawlNews Multi-Agent Ingestion Pipeline (6 Autonomous Agents)",
    },
    {
      name: "resnet50_rgb_baseline.pt",
      size: "98.4 MB",
      deletedDate: "Spectral Limitation",
      reason: "Replaced by SatQuery AI Custom MultiSpectralStem (13 Sentinel Bands) + ResNet-18",
    },
    {
      name: "cloud_dependent_cv_check.py",
      size: "8.6 KB",
      deletedDate: "Air-Gap Refinement",
      reason: "Replaced by TRUST-CV Offline Verification (210/210 Deterministic Passing Tests)",
    },
    {
      name: "hardcoded_rule_classifier.py",
      size: "24.1 KB",
      deletedDate: "Heuristic Deprecation",
      reason: "Replaced by FAKEO XGBoost + spaCy Named Entity Recognition + OCR Engine",
    },
    {
      name: "manual_soil_timer.ino",
      size: "5.3 KB",
      deletedDate: "Hardware Evolution",
      reason: "Replaced by UrbanBloom AI Connected ESP32 + Google Gemini Predictive Telemetry",
    },
  ]);

  const [message, setMessage] = useState<string | null>(null);

  const handleEmptyBin = () => {
    setItems([]);
    setMessage("Recycle Bin purged. 0 bytes recoverable. Systems operating with zero deadweight code!");
  };

  const handleRestore = () => {
    setMessage("Items safely archived in git history. Current production rigs remain active.");
  };

  return (
    <div className="flex flex-col h-full bg-[#0E1116] select-none text-xs">
      {/* File Explorer Navigation Toolbar */}
      <div className="h-11 px-3 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between gap-3">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-1.5 text-xs text-[#A8AFBA] overflow-hidden">
          <HardDriveRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
          <span>This PC</span>
          <ChevronRightRegular className="w-3 h-3 text-white/30" />
          <span className="text-[#F5F7FA] font-medium flex items-center gap-1.5">
            <DeleteRegular className="w-3.5 h-3.5 text-[#38BDF8]" />
            Recycle Bin
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleEmptyBin}
            disabled={items.length === 0}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] hover:bg-red-500/15 hover:text-red-300 text-[#A8AFBA] border border-white/[0.08] transition-colors cursor-pointer disabled:opacity-40"
          >
            <DeleteRegular className="w-3.5 h-3.5" />
            <span>Empty Recycle Bin</span>
          </button>
          <button
            onClick={handleRestore}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-[#A8AFBA] border border-white/[0.08] transition-colors cursor-pointer"
          >
            <ArrowResetRegular className="w-3.5 h-3.5" />
            <span>Restore All</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4">
        {message && (
          <div className="p-3 rounded-xl bg-[#4CC2FF]/10 border border-[#4CC2FF]/30 text-[#4CC2FF] flex items-center justify-between animate-in fade-in duration-200">
            <span>{message}</span>
            <button
              onClick={() => setMessage(null)}
              className="text-xs hover:underline text-[#F5F7FA]"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[#A8AFBA]">
          <span className="font-semibold text-[#F5F7FA]">
            Deprecated Prototypes & Legacy Heuristics ({items.length} items)
          </span>
          <span className="font-mono text-[10px] text-[#6CCB8A]">
            Archived during iterative refinement
          </span>
        </div>

        {items.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center text-center text-[#A8AFBA] space-y-2">
            <DeleteRegular className="w-10 h-10 text-white/20" />
            <p className="text-sm font-medium text-[#F5F7FA]">The Recycle Bin is empty</p>
            <p className="text-xs text-[#A8AFBA] max-w-sm">
              All obsolete architectures have been pruned. Prasannaraj's codebase is clean and lean.
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-white/[0.01]">
            <div className="grid grid-cols-12 px-4 py-2.5 bg-white/[0.03] text-[10px] uppercase font-mono tracking-wider text-[#A8AFBA] border-b border-white/[0.06]">
              <span className="col-span-4">Original Filename</span>
              <span className="col-span-6">Evolutionary Rationale</span>
              <span className="col-span-2 text-right">Archived Size</span>
            </div>

            <div className="divide-y divide-white/[0.04]">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/[0.03] transition-colors"
                >
                  <div className="col-span-4 flex items-center gap-2 truncate">
                    <CodeTextRegular className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span className="text-[#F5F7FA] font-medium truncate">
                      {item.name}
                    </span>
                  </div>
                  <span className="col-span-6 text-[#A8AFBA] text-[11px] truncate pr-2">
                    {item.reason}
                  </span>
                  <span className="col-span-2 text-right font-mono text-[#A8AFBA] text-[11px]">
                    {item.size}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
