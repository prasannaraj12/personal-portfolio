"use client";

import React, { useState } from "react";
import { certificationsData } from "@/data/certifications";
import { CertificationItem } from "@/types";
import {
  CertificateRegular,
  CheckmarkCircleRegular,
  BuildingRegular,
  DismissRegular,
} from "@/components/icons/FluentIcons";

export function CertificationsWindow() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <div className="flex flex-col h-full bg-[#181818] select-text text-xs text-[#E1E1E1] overflow-y-auto p-6 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-[#2d2d2d]">
          <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFF]">
            Professional Credentials & Certifications
          </h1>
          <p className="text-xs text-[#A8AFBA] mt-1">
            Verified technical certifications from NPTEL, HP, Cisco, and global institutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-4 rounded-[6px] bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="p-2 rounded-[4px] bg-[#1a1a1a] border border-[#282828] text-[#4CC2FF]">
                    <CertificateRegular className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    Verified
                  </span>
                </div>

                <h3 className="text-xs font-bold text-[#FFFFFF] leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-[#4CC2FF] font-medium mt-1 flex items-center gap-1.5">
                  <BuildingRegular className="w-3.5 h-3.5" />
                  <span>{cert.issuer}</span>
                </p>

                <p className="text-xs text-[#A8AFBA] mt-2 line-clamp-2 leading-relaxed">
                  {cert.summary}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#282828] flex items-center justify-between text-[11px] text-[#A8AFBA]">
                <span className="text-[#10B981]">Credential Verified</span>
                <span className="text-[#4CC2FF] hover:underline">View Details</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="w-full max-w-lg p-5 rounded-[6px] bg-[#1f1f1f] border border-[#383838] shadow-[0_12px_36px_rgba(0,0,0,0.8)] space-y-4 animate-in fade-in zoom-in-95 duration-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 border-b border-[#2d2d2d] pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-[4px] bg-[#1a1a1a] text-[#4CC2FF] border border-[#282828]">
                    <CertificateRegular className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#FFFFFF]">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-[#4CC2FF] font-medium">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  <DismissRegular className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 text-xs text-[#D4D4D8]">
                <p className="leading-relaxed">{selectedCert.summary}</p>
                <div className="p-2.5 rounded-[4px] bg-[#141414] border border-[#282828] text-[11px] font-mono text-[#A8AFBA] flex justify-between">
                  <span>Skills: {selectedCert.skillsGained.slice(0, 3).join(", ")}</span>
                  <span className="text-[#10B981]">Status: Verified</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-3 h-7 rounded-[4px] bg-white/[0.08] hover:bg-white/[0.12] text-[#FFFFFF] text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
