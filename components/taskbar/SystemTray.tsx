"use client";

import React, { useState, useEffect } from "react";
import {
  WifiSettingsRegular,
  Speaker2Regular,
  BatteryChargeRegular,
  AlertRegular,
  ChevronUpRegular,
} from "@/components/icons/FluentIcons";

export function SystemTray({ onOpenQuickSettings }: { onOpenQuickSettings?: () => void }) {
  const [timeStr, setTimeStr] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setDateStr(
        now.toLocaleDateString([], {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1 text-[#F5F7FA] text-xs select-none">
      {/* Hidden Icons Flyout */}
      <button
        aria-label="Overflow tray"
        className="p-1 rounded-md hover:bg-white/[0.08] text-[#A8AFBA] transition-colors"
      >
        <ChevronUpRegular className="w-3.5 h-3.5" />
      </button>

      {/* Network / Volume / Battery cluster (Opens Quick Settings) */}
      <div
        onClick={onOpenQuickSettings}
        className="flex items-center gap-2 px-2.5 py-1 rounded-md hover:bg-white/[0.08] cursor-pointer transition-colors border border-transparent hover:border-white/[0.06]"
      >
        <WifiSettingsRegular className="w-4 h-4 text-[#F5F7FA]" />
        <Speaker2Regular className="w-4 h-4 text-[#F5F7FA]" />
        <BatteryChargeRegular className="w-4 h-4 text-[#6CCB8A]" />
      </div>

      {/* Clock & Date cluster */}
      <div className="flex flex-col items-end px-2 py-0.5 rounded-md hover:bg-white/[0.08] cursor-pointer transition-colors leading-none border border-transparent hover:border-white/[0.06]">
        <span className="text-[11px] font-normal tracking-tight text-[#F5F7FA]">
          {timeStr || "12:00 PM"}
        </span>
        <span className="text-[10px] text-[#A8AFBA] font-light mt-0.5">
          {dateStr || "9/24/2026"}
        </span>
      </div>

      {/* Notification Bell */}
      <button
        aria-label="Notifications"
        className="relative p-1.5 rounded-md hover:bg-white/[0.08] text-[#A8AFBA] transition-colors"
      >
        <AlertRegular className="w-4 h-4" />
        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
      </button>

      {/* Show Desktop Peek Bar */}
      <div className="w-[3px] h-6 ml-0.5 rounded-full bg-white/[0.12] hover:bg-[#0078D4] transition-colors cursor-pointer" />
    </div>
  );
}
