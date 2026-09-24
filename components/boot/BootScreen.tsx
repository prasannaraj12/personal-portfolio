"use client";

import React, { useState, useEffect } from "react";

interface BootScreenProps {
  onBootComplete: () => void;
}

export function BootScreen({ onBootComplete }: BootScreenProps) {
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    "Initializing workspace...",
    "Loading models & neural rigs...",
    "Mounting file explorer...",
    "Loading AI Lab & Copilot...",
    "System ready.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(onBootComplete, 400);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(timer);
  }, [onBootComplete, steps.length]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#07090C] text-[#F5F7FA] flex flex-col items-center justify-center select-none font-mono">
      {/* Centered Boot Logo */}
      <div className="flex flex-col items-center space-y-6 max-w-sm text-center px-4">
        {/* Windows 11 Fluent 4-tile Loader */}
        <div className="w-12 h-12 grid grid-cols-2 gap-1.5 p-1 animate-pulse">
          <span className="bg-[#4CC2FF] rounded-[2px]" />
          <span className="bg-[#7AA2FF] rounded-[2px]" />
          <span className="bg-[#38BDF8] rounded-[2px]" />
          <span className="bg-[#1D4ED8] rounded-[2px]" />
        </div>

        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-widest text-[#F5F7FA]">
            PRASANNARAJ OS
          </h1>
          <p className="text-[11px] text-[#A8AFBA] font-mono tracking-wider">
            AI WORKSTATION KERNEL v2.4
          </p>
        </div>

        {/* Progress Bar & Status Text */}
        <div className="w-64 space-y-2 pt-2">
          <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4CC2FF] to-[#7AA2FF] transition-all duration-300"
              style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-[#4CC2FF] font-mono animate-fade-in">
            {steps[stepIndex]}
          </p>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onBootComplete}
        className="absolute bottom-10 px-4 py-1.5 rounded-lg text-xs font-sans text-[#A8AFBA] hover:text-[#F5F7FA] hover:bg-white/[0.06] border border-white/[0.08] transition-colors cursor-pointer"
      >
        Skip ➔
      </button>
    </div>
  );
}
