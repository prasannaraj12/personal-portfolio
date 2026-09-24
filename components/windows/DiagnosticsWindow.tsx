"use client";

import React, { useState } from "react";
import {
  PulseRegular,
  ShieldCheckmarkRegular,
  DeveloperBoardRegular,
  HardDriveRegular,
  ArrowSyncRegular,
} from "@/components/icons/FluentIcons";

export function DiagnosticsWindow() {
  const [isRunning, setIsRunning] = useState(false);
  const [statusLog, setStatusLog] = useState([
    { service: "Portfolio Core Kernel", status: "ONLINE", latency: "14ms", integrity: "100%" },
    { service: "Projects Database (8 Rigs)", status: "ONLINE", latency: "22ms", integrity: "100%" },
    { service: "Prasanna AI Knowledge Base", status: "ONLINE", latency: "18ms", integrity: "Strict Guardrails" },
    { service: "TRUST-CV Test Harness", status: "ONLINE", latency: "8ms", integrity: "210/210 Passed" },
    { service: "Multispectral Stem Engine", status: "ONLINE", latency: "34ms", integrity: "100%" },
    { service: "Multi-Agent Queue Runner", status: "ONLINE", latency: "19ms", integrity: "Idle / Ready" },
    { service: "Resume Attestation Engine", status: "ONLINE", latency: "12ms", integrity: "100%" },
    { service: "GitHub Workspace Sync", status: "ONLINE", latency: "42ms", integrity: "Synced" },
  ]);

  const handleRunDiagnostics = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 1200);
  };

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto select-none font-mono">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <PulseRegular className="w-4 h-4 text-[#4CC2FF]" />
            <h1 className="text-base font-bold text-[#F5F7FA]">
              System Diagnostics & Runtime Telemetry
            </h1>
          </div>
          <p className="text-xs text-[#A8AFBA] font-sans mt-0.5">
            Real-time status of portfolio subsystems, model nodes, and deterministic test rigs.
          </p>
        </div>

        <button
          onClick={handleRunDiagnostics}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-medium bg-[#4CC2FF]/10 text-[#4CC2FF] hover:bg-[#4CC2FF]/20 border border-[#4CC2FF]/30 transition-all cursor-pointer disabled:opacity-50"
        >
          <ArrowSyncRegular className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : ""}`} />
          <span>{isRunning ? "Verifying..." : "Run Self-Test"}</span>
        </button>
      </div>

      {/* Services Table */}
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.015] overflow-hidden">
        <div className="grid grid-cols-12 px-4 py-2.5 bg-white/[0.03] text-[10px] uppercase tracking-wider text-[#A8AFBA] border-b border-white/[0.06]">
          <span className="col-span-6">Subsystem</span>
          <span className="col-span-2 text-center">Status</span>
          <span className="col-span-2 text-center">Latency</span>
          <span className="col-span-2 text-right">Integrity</span>
        </div>

        <div className="divide-y divide-white/[0.04] text-xs">
          {statusLog.map((s, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 px-4 py-2.5 items-center hover:bg-white/[0.02] transition-colors"
            >
              <span className="col-span-6 text-[#F5F7FA] truncate font-medium">
                {s.service}
              </span>
              <span className="col-span-2 text-center">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#6CCB8A]/10 text-[#6CCB8A] border border-[#6CCB8A]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6CCB8A]" />
                  {s.status}
                </span>
              </span>
              <span className="col-span-2 text-center text-[#A8AFBA] text-[11px]">
                {s.latency}
              </span>
              <span className="col-span-2 text-right text-[#4CC2FF] text-[11px]">
                {s.integrity}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-[#A8AFBA] font-sans">
        <div className="flex items-center gap-2">
          <ShieldCheckmarkRegular className="w-4 h-4 text-[#6CCB8A]" />
          <span>All 8 subsystems healthy. Zero security compromises detected.</span>
        </div>
        <span className="font-mono text-[11px] text-[#4CC2FF]">OK 200</span>
      </div>
    </div>
  );
}
