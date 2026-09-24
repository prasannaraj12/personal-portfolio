"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { LockClosedRegular, ArrowUpRegular } from "@/components/icons/FluentIcons";

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

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
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={onUnlock}
      className="fixed inset-0 z-[90] bg-[#0B0D10] text-[#F5F7FA] flex flex-col justify-between p-10 cursor-pointer select-none overflow-hidden animate-in fade-in duration-300"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/20 via-transparent to-[#0B0D10] pointer-events-none" />

      {/* Top Left: Clock & Date */}
      <div className="relative z-10 pt-4 sm:pt-8">
        <h2 className="text-6xl sm:text-7xl font-extralight tracking-tight text-[#F5F7FA]">
          {timeStr || "12:00 PM"}
        </h2>
        <p className="text-lg sm:text-xl text-[#A8AFBA] font-light mt-1">
          {dateStr || "Thursday, September 24"}
        </p>
      </div>

      {/* Center User Badge */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#1E3A8A] via-[#2563EB] to-[#4CC2FF] p-0.5 shadow-2xl">
          <div className="w-full h-full rounded-full bg-[#0E1116] flex items-center justify-center font-bold text-xl text-[#4CC2FF]">
            PR
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold tracking-wide text-[#F5F7FA]">
            {profileData.name}
          </h3>
          <p className="text-xs text-[#4CC2FF] font-medium tracking-wider">
            {profileData.role}
          </p>
        </div>
      </div>

      {/* Bottom: Unlock prompt */}
      <div className="relative z-10 flex flex-col items-center text-center pb-4 text-[#A8AFBA] animate-bounce">
        <ArrowUpRegular className="w-4 h-4 mb-1" />
        <span className="text-xs tracking-wider uppercase font-medium">
          Click or press any key to enter workspace
        </span>
      </div>
    </div>
  );
}
