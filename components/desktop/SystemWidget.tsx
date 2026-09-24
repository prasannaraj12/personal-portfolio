"use client";

import React, { useState, useEffect } from "react";
import {
  DeveloperBoardRegular,
  PulseRegular,
  ShieldCheckmarkRegular,
  SparkleRegular,
} from "@/components/icons/FluentIcons";

interface SystemWidgetProps {
  onOpenApp?: (appId: string) => void;
}

export function SystemWidget({ onOpenApp }: SystemWidgetProps) {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex flex-col gap-2.5 w-[280px] p-3.5 rounded-2xl mica-surface border border-white/[0.08] shadow-2xl backdrop-blur-xl pointer-events-auto select-none transition-all hover:border-white/[0.14]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#6CCB8A] animate-ping" />
          <span className="text-[11px] font-semibold tracking-wider text-[#A8AFBA] uppercase">
            System Telemetry
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#4CC2FF] border border-white/[0.08]">
          v2.4 LTS
        </span>
      </div>

      {/* Metrics Rows */}
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <div className="flex items-center gap-2 text-[#A8AFBA]">
            <SparkleRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
            <span>AI Assistant</span>
          </div>
          <span className="text-[11px] font-mono text-[#6CCB8A] font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6CCB8A]" />
            ONLINE
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <div className="flex items-center gap-2 text-[#A8AFBA]">
            <DeveloperBoardRegular className="w-3.5 h-3.5 text-[#7AA2FF]" />
            <span>Active Systems</span>
          </div>
          <span className="text-[11px] font-mono text-[#F5F7FA] font-medium">
            8 Production Rigs
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <div className="flex items-center gap-2 text-[#A8AFBA]">
            <ShieldCheckmarkRegular className="w-3.5 h-3.5 text-[#6CCB8A]" />
            <span>Integrity Suite</span>
          </div>
          <span className="text-[11px] font-mono text-[#6CCB8A] font-medium">
            210 / 210 Passed
          </span>
        </div>
      </div>

      {/* Quick Diagnostics Action */}
      <button
        onClick={() => onOpenApp?.("diagnostics")}
        className="w-full mt-1 py-1.5 px-3 rounded-lg text-[11px] font-medium bg-white/[0.04] hover:bg-white/[0.08] text-[#F5F7FA] border border-white/[0.08] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
      >
        <PulseRegular className="w-3 h-3 text-[#4CC2FF]" />
        Open System Diagnostics
      </button>
    </div>
  );
}
