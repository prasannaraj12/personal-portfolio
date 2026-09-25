"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  SubtractRegular,
  MaximizeRegular,
  SquareMultipleRegular,
  DismissRegular,
} from "@/components/icons/FluentIcons";

interface WindowFrameProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  isActive: boolean;
  initialWidth?: number;
  initialHeight?: number;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  children: React.ReactNode;
}

export function WindowFrame({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  isActive,
  initialWidth = 780,
  initialHeight = 520,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  children,
}: WindowFrameProps) {
  // Dragging state
  const [pos, setPos] = useState({ x: 60, y: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; initialX: number; initialY: number }>({
    mouseX: 0,
    mouseY: 0,
    initialX: 0,
    initialY: 0,
  });

  // Resizing state
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [isResizing, setIsResizing] = useState<string | null>(null);
  const resizeStartRef = useRef<{
    mouseX: number;
    mouseY: number;
    initialWidth: number;
    initialHeight: number;
    initialX: number;
    initialY: number;
  }>({
    mouseX: 0,
    mouseY: 0,
    initialWidth,
    initialHeight,
    initialX: 60,
    initialY: 40,
  });

  // Calculate smart default offset per window id
  useEffect(() => {
    const offsets: Record<string, { x: number; y: number }> = {
      about: { x: 90, y: 50 },
      "recycle-bin": { x: 130, y: 60 },
      projects: { x: 120, y: 70 },
      "project-detail": { x: 140, y: 50 },
      "ai-lab": { x: 160, y: 65 },
      skills: { x: 130, y: 80 },
      experience: { x: 110, y: 90 },
      resume: { x: 150, y: 45 },
      terminal: { x: 180, y: 110 },
      contact: { x: 200, y: 100 },
      diagnostics: { x: 220, y: 95 },
    };
    if (offsets[id]) {
      setPos(offsets[id]);
    }
  }, [id]);

  const handleMouseDownHeader = (e: React.MouseEvent) => {
    if (isMaximized) return;
    onFocus();
    setIsDragging(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      initialX: pos.x,
      initialY: pos.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartRef.current.mouseX;
      const dy = e.clientY - dragStartRef.current.mouseY;

      // Keep window within reasonable viewport boundaries
      const newX = Math.max(10, Math.min(window.innerWidth - 200, dragStartRef.current.initialX + dx));
      const newY = Math.max(10, Math.min(window.innerHeight - 100, dragStartRef.current.initialY + dy));

      setPos({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Resizing event handlers
  const handleResizeStart = (direction: string, e: React.MouseEvent) => {
    if (isMaximized) return;
    e.stopPropagation();
    e.preventDefault();
    onFocus();
    setIsResizing(direction);
    resizeStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      initialWidth: size.width,
      initialHeight: size.height,
      initialX: pos.x,
      initialY: pos.y,
    };
  };

  useEffect(() => {
    const handleResizeMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const dx = e.clientX - resizeStartRef.current.mouseX;
      const dy = e.clientY - resizeStartRef.current.mouseY;

      let newWidth = resizeStartRef.current.initialWidth;
      let newHeight = resizeStartRef.current.initialHeight;
      let newX = resizeStartRef.current.initialX;
      let newY = resizeStartRef.current.initialY;

      if (isResizing.includes("e")) {
        newWidth = Math.max(380, Math.min(window.innerWidth - newX - 10, resizeStartRef.current.initialWidth + dx));
      }
      if (isResizing.includes("s")) {
        newHeight = Math.max(260, Math.min(window.innerHeight - newY - 60, resizeStartRef.current.initialHeight + dy));
      }
      if (isResizing.includes("w")) {
        const potentialWidth = resizeStartRef.current.initialWidth - dx;
        if (potentialWidth >= 380) {
          newWidth = potentialWidth;
          newX = resizeStartRef.current.initialX + dx;
        }
      }
      if (isResizing.includes("n")) {
        const potentialHeight = resizeStartRef.current.initialHeight - dy;
        if (potentialHeight >= 260) {
          newHeight = potentialHeight;
          newY = resizeStartRef.current.initialY + dy;
        }
      }

      setSize({ width: newWidth, height: newHeight });
      setPos({ x: newX, y: newY });
    };

    const handleResizeUp = () => {
      setIsResizing(null);
    };

    if (isResizing) {
      window.addEventListener("mousemove", handleResizeMove);
      window.addEventListener("mouseup", handleResizeUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleResizeMove);
      window.removeEventListener("mouseup", handleResizeUp);
    };
  }, [isResizing]);

  if (!isOpen || isMinimized) return null;

  return (
    <div
      onMouseDown={onFocus}
      style={{
        zIndex,
        ...(isMaximized
          ? {
              top: 0,
              left: 0,
              right: 0,
              bottom: 58,
              width: "100%",
              height: "calc(100vh - 58px)",
              borderRadius: 0,
            }
          : {
              top: `${pos.y}px`,
              left: `${pos.x}px`,
              width: `min(${size.width}px, 96vw)`,
              height: `min(${size.height}px, 86vh)`,
            }),
      }}
      className={`fixed flex flex-col bg-[#1f1f1f] text-[#F5F7FA] select-none overflow-hidden transition-all duration-100 ${
        isMaximized
          ? "border-b border-[#333333]"
          : "rounded-[8px] border border-[#383838] shadow-[0_12px_36px_rgba(0,0,0,0.7)]"
      } ${isActive ? "opacity-100 ring-1 ring-white/10" : "opacity-95"}`}
    >
      {/* Title Bar with official Windows 11 Chrome */}
      <div
        onMouseDown={handleMouseDownHeader}
        onDoubleClick={onMaximize}
        className={`h-[34px] px-3 flex items-center justify-between border-b transition-colors cursor-move shrink-0 ${
          isActive
            ? "bg-[#242424] border-[#303030]"
            : "bg-[#1c1c1c] border-[#262626]"
        }`}
      >
        {/* Left: Window Icon + Title */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-4 h-4 flex items-center justify-center shrink-0">
            {icon}
          </div>
          <span className="text-[12px] font-normal text-[#E1E1E1] tracking-normal truncate">
            {title}
          </span>
        </div>

        {/* Right: Authentic Windows 11 Window Chrome Controls */}
        <div
          className="flex items-center -mr-3"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Minimize Button */}
          <button
            onClick={onMinimize}
            aria-label="Minimize"
            title="Minimize"
            className="w-11 h-[34px] flex items-center justify-center hover:bg-white/[0.08] active:bg-white/[0.14] text-[#A8AFBA] hover:text-[#F5F7FA] transition-colors cursor-pointer"
          >
            <SubtractRegular className="w-3.5 h-3.5" />
          </button>

          {/* Maximize / Restore Button */}
          <button
            onClick={onMaximize}
            aria-label={isMaximized ? "Restore" : "Maximize"}
            title={isMaximized ? "Restore" : "Maximize"}
            className="w-11 h-[34px] flex items-center justify-center hover:bg-white/[0.08] active:bg-white/[0.14] text-[#A8AFBA] hover:text-[#F5F7FA] transition-colors cursor-pointer"
          >
            {isMaximized ? (
              <SquareMultipleRegular className="w-3.5 h-3.5" />
            ) : (
              <MaximizeRegular className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Close Button with authentic Windows red hover treatment */}
          <button
            onClick={onClose}
            aria-label="Close"
            title="Close"
            className="w-11 h-[34px] flex items-center justify-center hover:bg-[#E81123] active:bg-[#C4101F] text-[#A8AFBA] hover:text-white transition-colors cursor-pointer"
          >
            <DismissRegular className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Window Body Container */}
      <div className="flex-1 overflow-auto bg-[#181818] text-[#F5F7FA] relative">
        {(isDragging || isResizing !== null) && (
          <div className="absolute inset-0 z-50 bg-transparent select-none pointer-events-auto" />
        )}
        {children}
      </div>

      {/* Interactive Resizing Handles (Active when not maximized) */}
      {!isMaximized && (
        <>
          {/* Right Edge Handle */}
          <div
            onMouseDown={(e) => handleResizeStart("e", e)}
            className="absolute top-0 right-0 bottom-0 w-2 cursor-ew-resize hover:bg-[#0078D4]/20 z-20"
          />
          {/* Bottom Edge Handle */}
          <div
            onMouseDown={(e) => handleResizeStart("s", e)}
            className="absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize hover:bg-[#0078D4]/20 z-20"
          />
          {/* Left Edge Handle */}
          <div
            onMouseDown={(e) => handleResizeStart("w", e)}
            className="absolute top-0 left-0 bottom-0 w-2 cursor-ew-resize hover:bg-[#0078D4]/20 z-20"
          />
          {/* Bottom-Right Corner Handle */}
          <div
            onMouseDown={(e) => handleResizeStart("se", e)}
            className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize hover:bg-[#0078D4]/30 z-30"
          />
          {/* Bottom-Left Corner Handle */}
          <div
            onMouseDown={(e) => handleResizeStart("sw", e)}
            className="absolute bottom-0 left-0 w-4 h-4 cursor-nesw-resize hover:bg-[#0078D4]/30 z-30"
          />
        </>
      )}
    </div>
  );
}
