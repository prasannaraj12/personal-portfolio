"use client";

import React from "react";
import {
  Win11ThisPCIcon,
  Win11RecycleBinIcon,
  Win11FolderIcon,
  Win11AILabIcon,
  Win11SettingsIcon,
  Win11TerminalIcon,
  Win11ResumeIcon,
  Win11ContactIcon,
} from "@/components/icons/Win11FluentIcons";

interface DesktopIconProps {
  id: string;
  label: string;
  iconName: string;
  isSelected: boolean;
  href?: string;
  onClick: (e: React.MouseEvent) => void;
  onDoubleClick?: () => void;
}

export function DesktopIcon({
  label,
  iconName,
  isSelected,
  href,
  onClick,
  onDoubleClick,
}: DesktopIconProps) {
  const renderIcon = () => {
    switch (iconName) {
      case "ThisPC":
        return <Win11ThisPCIcon className="w-12 h-12" />;
      case "RecycleBin":
        return <Win11RecycleBinIcon className="w-12 h-12" />;
      case "Folder":
        return <Win11FolderIcon className="w-12 h-12" />;
      case "AILab":
        return <Win11AILabIcon className="w-12 h-12" />;
      case "Settings":
        return <Win11SettingsIcon className="w-12 h-12" />;
      case "Terminal":
        return <Win11TerminalIcon className="w-12 h-12" />;
      case "Resume":
        return <Win11ResumeIcon className="w-12 h-12" />;
      case "Contact":
        return <Win11ContactIcon className="w-12 h-12" />;
      case "LinkedIn":
        return (
          <img
            src="/icons/windows/linkedin.png"
            alt="LinkedIn"
            className="w-11 h-11 object-contain"
            draggable={false}
          />
        );
      case "GitHub":
        return (
          <img
            src="/icons/windows/github.png"
            alt="GitHub"
            className="w-11 h-11 object-contain"
            draggable={false}
          />
        );
      default:
        return <Win11FolderIcon className="w-12 h-12" />;
    }
  };

  const commonClassName = `group relative flex flex-col items-center justify-start w-[76px] h-[84px] pt-1.5 px-1 rounded-[4px] cursor-pointer transition-colors duration-100 select-none no-underline focus:outline-none focus:ring-1 focus:ring-[#4CC2FF] focus:bg-white/[0.12] ${
    isSelected
      ? "bg-white/[0.12] border border-white/20 shadow-sm backdrop-blur-[2px]"
      : "hover:bg-white/[0.07] border border-transparent"
  }`;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (href) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else if (onDoubleClick) {
        onDoubleClick();
      }
    }
  };

  const content = (
    <>
      {/* Icon Badge */}
      <div className="w-12 h-12 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
        {renderIcon()}
      </div>

      {/* Label with clean Windows 11 typography and subtle text shadow */}
      <span className="mt-1 text-[11px] font-normal text-white text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] line-clamp-2 px-0.5 break-words max-w-[72px]">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className={commonClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onKeyDown={handleKeyDown}
      className={commonClassName}
    >
      {content}
    </div>
  );
}
