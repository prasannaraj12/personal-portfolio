"use client";

import React, { useState, useEffect } from "react";
import { Windows11Logo, DismissRegular } from "@/components/icons/FluentIcons";

interface WindowsNotificationProps {
  title?: string;
  message?: string;
  duration?: number;
}

export function WindowsNotification({
  title = "Welcome to Prasannaraj's Portfolio",
  message = "Explore projects, resume, Ask AI, and contact information.",
  duration = 5500,
}: WindowsNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className="fixed bottom-14 right-4 z-40 w-80 md:w-88 rounded-[8px] bg-[#1e2329]/95 border border-white/15 p-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-2xl text-white select-none animate-in slide-in-from-bottom-5 fade-in duration-300 transition-all"
    >
      {/* Toast Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] text-[#A8AFBA]">
        <div className="flex items-center gap-1.5">
          <Windows11Logo className="w-3.5 h-3.5 text-[#4CC2FF]" />
          <span className="font-medium text-white/80">Windows System</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss notification"
          className="w-5 h-5 rounded flex items-center justify-center hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <DismissRegular className="w-3 h-3" />
        </button>
      </div>

      {/* Toast Body */}
      <div className="pt-2">
        <h4 className="text-xs font-semibold text-white tracking-wide">
          {title}
        </h4>
        <p className="text-[11px] text-[#D1D5DB] mt-1 leading-snug">
          {message}
        </p>
      </div>
    </div>
  );
}
