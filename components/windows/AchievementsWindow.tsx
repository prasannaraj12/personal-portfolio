"use client";

import React from "react";
import { achievementsData } from "@/data/achievements";
import { TrophyRegular } from "@/components/icons/FluentIcons";

export function AchievementsWindow() {
  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1] overflow-y-auto p-6 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-[#2d2d2d]">
          <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFF]">
            Competitive Achievements & Hackathons
          </h1>
          <p className="text-xs text-[#A8AFBA] mt-1">
            Verified competitive milestones, sprint builds, and national recognitions.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="space-y-3.5">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-[6px] bg-[#202020] border border-[#2d2d2d] space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#282828] pb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[4px] bg-[#1a1a1a] border border-[#282828] flex items-center justify-center text-[#FACC15]">
                    <TrophyRegular className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#FFFFFF]">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#FACC15]/15 text-[#FACC15] border border-[#FACC15]/30">
                      {item.badge}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-[#A8AFBA] bg-[#1a1a1a] px-2 py-0.5 rounded-[3px] border border-[#282828]">
                    {item.tag}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#4CC2FF] font-medium">
                {item.event}
              </p>

              <p className="text-xs text-[#D4D4D8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
