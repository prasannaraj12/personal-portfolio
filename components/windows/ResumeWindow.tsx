"use client";

import React, { useState, useRef } from "react";
import {
  ArrowDownloadRegular,
  PrintRegular,
  DocumentTextRegular,
  ArrowSyncRegular,
  ZoomInRegular,
  ZoomOutRegular,
  OpenRegular,
} from "@/components/icons/FluentIcons";
import { Win11ResumeIcon } from "@/components/icons/Win11FluentIcons";

export function ResumeWindow() {
  const [zoom, setZoom] = useState<number>(100);
  const [zoomMode, setZoomMode] = useState<"custom" | "fit-width" | "fit-page">("custom");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const zoomLevels = [50, 65, 75, 85, 100, 115, 125, 150, 175, 200];

  const handleZoomIn = () => {
    setZoomMode("custom");
    const next = zoomLevels.find((lvl) => lvl > zoom);
    setZoom(next !== undefined ? next : 200);
  };

  const handleZoomOut = () => {
    setZoomMode("custom");
    const prev = [...zoomLevels].reverse().find((lvl) => lvl < zoom);
    setZoom(prev !== undefined ? prev : 50);
  };

  const handleResetZoom = () => {
    setZoomMode("custom");
    setZoom(100);
  };

  const handleFitWidth = () => {
    setZoomMode("fit-width");
  };

  const handleFitPage = () => {
    setZoomMode("fit-page");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Prasannaraj_Resume.pdf";
    link.download = "Prasannaraj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    try {
      const printIframe = document.createElement("iframe");
      printIframe.style.position = "fixed";
      printIframe.style.right = "0";
      printIframe.style.bottom = "0";
      printIframe.style.width = "0";
      printIframe.style.height = "0";
      printIframe.style.border = "0";
      printIframe.src = "/Prasannaraj_Resume.pdf";
      document.body.appendChild(printIframe);

      printIframe.onload = () => {
        try {
          printIframe.contentWindow?.focus();
          printIframe.contentWindow?.print();
        } catch {
          window.open("/Prasannaraj_Resume.pdf", "_blank")?.print();
        }
        setTimeout(() => {
          if (document.body.contains(printIframe)) {
            document.body.removeChild(printIframe);
          }
        }, 5000);
      };
    } catch {
      window.open("/Prasannaraj_Resume.pdf", "_blank");
    }
  };

  const handleOpenInBrowser = () => {
    window.open("/Prasannaraj_Resume.pdf", "_blank");
  };

  const handleTryAgain = () => {
    setIsLoading(true);
    setHasError(false);
    setReloadKey((prev) => prev + 1);
  };

  // Determine width & height style based on zoomMode
  const getContainerStyle = (): React.CSSProperties => {
    if (zoomMode === "fit-width") {
      return {
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        minHeight: "850px",
      };
    }
    if (zoomMode === "fit-page") {
      return {
        width: "720px",
        maxWidth: "96%",
        height: "calc(100vh - 220px)",
        minHeight: "560px",
      };
    }
    // Custom zoom percentage
    return {
      width: `${Math.round(8.5 * zoom)}px`,
      maxWidth: "none",
      height: `${Math.round(11 * zoom)}px`,
      minHeight: "750px",
    };
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] select-none text-xs text-[#E1E1E1]">
      {/* 1. Windows 11 Document / PDF Viewer Ribbon Command Bar */}
      <div className="h-11 px-3 bg-[#1f1f1f] border-b border-[#2d2d2d] flex items-center justify-between gap-2 shrink-0">
        {/* Left: Document Identity */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 shrink-0 flex items-center justify-center">
            <Win11ResumeIcon className="w-4 h-4" />
          </div>
          <span className="text-[12px] font-medium text-white truncate">
            Prasannaraj_Resume.pdf
          </span>
          <span className="hidden sm:inline-block text-[10px] text-[#A8AFBA] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
            1 Page • PDF
          </span>
        </div>

        {/* Center: Zoom Controls */}
        <div className="flex items-center gap-1 bg-[#141414] px-1.5 py-1 rounded-[4px] border border-[#2d2d2d]">
          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 50 && zoomMode === "custom"}
            aria-label="Zoom Out"
            title="Zoom Out (−)"
            className="w-6 h-6 flex items-center justify-center rounded-[3px] hover:bg-white/[0.10] active:bg-white/[0.16] disabled:opacity-40 text-[#A8AFBA] hover:text-white transition-colors cursor-pointer"
          >
            <ZoomOutRegular className="w-3.5 h-3.5" />
          </button>

          {/* Current Zoom Percentage Indicator / Reset */}
          <button
            onClick={handleResetZoom}
            aria-label="Reset Zoom to 100%"
            title="Reset Zoom (100%)"
            className="px-2 h-6 flex items-center justify-center rounded-[3px] hover:bg-white/[0.10] text-[#E1E1E1] font-mono text-[11px] transition-colors cursor-pointer min-w-[46px]"
          >
            {zoomMode === "fit-width" ? "Width" : zoomMode === "fit-page" ? "Page" : `${zoom}%`}
          </button>

          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 200 && zoomMode === "custom"}
            aria-label="Zoom In"
            title="Zoom In (+)"
            className="w-6 h-6 flex items-center justify-center rounded-[3px] hover:bg-white/[0.10] active:bg-white/[0.16] disabled:opacity-40 text-[#A8AFBA] hover:text-white transition-colors cursor-pointer"
          >
            <ZoomInRegular className="w-3.5 h-3.5" />
          </button>

          <div className="w-[1px] h-3.5 bg-white/[0.10] mx-0.5" />

          {/* Fit to Width */}
          <button
            onClick={handleFitWidth}
            aria-label="Fit to Width"
            title="Fit to Width"
            className={`px-2 h-6 hidden md:flex items-center gap-1 rounded-[3px] text-[11px] transition-colors cursor-pointer ${
              zoomMode === "fit-width"
                ? "bg-[#0078D4]/30 text-[#4CC2FF] font-medium"
                : "text-[#A8AFBA] hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            <span>Fit Width</span>
          </button>

          {/* Fit to Page */}
          <button
            onClick={handleFitPage}
            aria-label="Fit to Page"
            title="Fit to Page"
            className={`px-2 h-6 hidden md:flex items-center gap-1 rounded-[3px] text-[11px] transition-colors cursor-pointer ${
              zoomMode === "fit-page"
                ? "bg-[#0078D4]/30 text-[#4CC2FF] font-medium"
                : "text-[#A8AFBA] hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            <span>Fit Page</span>
          </button>
        </div>

        {/* Right: Actions (Download, Print, Open in Browser) */}
        <div className="flex items-center gap-1.5">
          {/* Download Resume Button (Section 4: Clearly visible) */}
          <button
            onClick={handleDownload}
            aria-label="Download Resume"
            title="Download Prasannaraj_Resume.pdf"
            className="flex items-center gap-1.5 px-3 h-7 rounded-[4px] text-xs font-medium bg-[#0078D4] hover:bg-[#106EBE] active:bg-[#005A9E] text-white shadow-xs transition-colors cursor-pointer"
          >
            <ArrowDownloadRegular className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Download</span>
          </button>

          {/* Print Button (Section 5) */}
          <button
            onClick={handlePrint}
            aria-label="Print Resume"
            title="Print Resume"
            className="flex items-center gap-1.5 px-2.5 h-7 rounded-[4px] text-xs font-normal bg-white/[0.06] hover:bg-white/[0.12] text-[#E1E1E1] border border-white/[0.08] transition-colors cursor-pointer"
          >
            <PrintRegular className="w-3.5 h-3.5 text-[#A8AFBA]" />
            <span className="hidden sm:inline">Print</span>
          </button>

          {/* Open in Browser Button (Section 6) */}
          <button
            onClick={handleOpenInBrowser}
            aria-label="Open Resume in Browser"
            title="Open in Browser tab"
            className="flex items-center gap-1 px-2 h-7 rounded-[4px] text-xs font-normal text-[#A8AFBA] hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <OpenRegular className="w-3.5 h-3.5" />
            <span className="hidden lg:inline text-[11px]">Open in Browser</span>
          </button>
        </div>
      </div>

      {/* 2. PDF Rendering Canvas Container */}
      <div className="flex-1 overflow-auto bg-[#141414] p-3 sm:p-6 flex justify-center items-start relative">
        {/* Loading State (Section 9: Windows-style loading state) */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#141414]/90 backdrop-blur-xs text-center space-y-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#0078D4]/30 border-t-[#0078D4] animate-spin" />
            <span className="text-xs font-medium text-[#E1E1E1]">
              Opening Resume...
            </span>
          </div>
        )}

        {/* Error State (Section 10) */}
        {hasError ? (
          <div className="m-auto p-6 max-w-sm rounded-[6px] bg-[#1f1f1f] border border-[#333333] text-center space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-400 mx-auto flex items-center justify-center">
              <DocumentTextRegular className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Resume could not be opened.
              </h3>
              <p className="text-[11px] text-[#A8AFBA] mt-1">
                You can retry loading or directly download the original PDF file.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-1">
              <button
                onClick={handleTryAgain}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-normal transition-colors cursor-pointer"
              >
                <ArrowSyncRegular className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#0078D4] hover:bg-[#106EBE] text-white text-xs font-medium transition-colors cursor-pointer"
              >
                <ArrowDownloadRegular className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        ) : (
          /* Real Embedded PDF Document Sheet */
          <div
            style={getContainerStyle()}
            className="shadow-[0_16px_48px_rgba(0,0,0,0.7)] rounded-[2px] bg-white overflow-hidden transition-all duration-150 relative"
          >
            <iframe
              key={reloadKey}
              ref={iframeRef}
              src={`/Prasannaraj_Resume.pdf#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0 block"
              title="Prasannaraj Resume PDF"
              onLoad={() => {
                setIsLoading(false);
                setHasError(false);
              }}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
