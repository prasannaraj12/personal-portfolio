"use client";

import React, { useState, useEffect } from "react";
import { WindowState } from "@/types";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import { Wallpaper } from "./Wallpaper";
import { DesktopIcon } from "./DesktopIcon";
import { DesktopContextMenu } from "./ContextMenu";
import { Taskbar } from "../taskbar/Taskbar";
import { StartMenu } from "../start-menu/StartMenu";
import { WindowFrame } from "../windows/WindowFrame";
import { AboutWindow } from "../windows/AboutWindow";
import { ProjectsWindow } from "../windows/ProjectsWindow";
import { ProjectDetailWindow } from "../windows/ProjectDetailWindow";
import { AILabWindow } from "../windows/AILabWindow";
import { SkillsWindow } from "../windows/SkillsWindow";
import { ExperienceWindow } from "../windows/ExperienceWindow";
import { EducationWindow } from "../windows/EducationWindow";
import { CertificationsWindow } from "../windows/CertificationsWindow";
import { AchievementsWindow } from "../windows/AchievementsWindow";
import { ResumeWindow } from "../windows/ResumeWindow";
import { ContactWindow } from "../windows/ContactWindow";
import { DiagnosticsWindow } from "../windows/DiagnosticsWindow";
import { RecycleBinWindow } from "../windows/RecycleBinWindow";
import { AskAIWindow } from "../windows/AskAIWindow";
import { TerminalWindow } from "../terminal/TerminalWindow";
import { CopilotPanel } from "../chat/CopilotPanel";
import { CommandPalette } from "../search/CommandPalette";
import { RecruiterModal } from "../recruiter/RecruiterModal";
import { BootScreen } from "../boot/BootScreen";
import { LockScreen } from "../boot/LockScreen";
import { LoginScreen } from "../boot/LoginScreen";
import { WindowsNotification } from "./WindowsNotification";
import { MobileView } from "../mobile/MobileView";
import {
  Win11ThisPCIcon,
  Win11RecycleBinIcon,
  Win11FolderIcon,
  Win11AILabIcon,
  Win11SettingsIcon,
  Win11TerminalIcon,
  Win11ResumeIcon,
  Win11ContactIcon,
  Win11AskAIIcon,
} from "@/components/icons/Win11FluentIcons";
import {
  DesktopRegular,
  DeleteRegular,
  FolderRegular,
  BrainCircuitRegular,
  SettingsRegular,
  WindowConsoleRegular,
  DocumentTextRegular,
  PersonRegular,
  BriefcaseRegular,
  HatGraduationRegular,
  CertificateRegular,
  TrophyRegular,
  MailRegular,
} from "@/components/icons/FluentIcons";

export function Desktop() {
  // Boot & Lock & Login screen states
  const [hasBooted, setHasBooted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  // Global z-index counter
  const [topZ, setTopZ] = useState(10);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);

  // Selection state on desktop icons
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);

  // Right-click context menu state
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  // App UI overlays
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);

  // Project detail active project
  const [selectedProjectId, setSelectedProjectId] = useState<string>("trust-cv");

  // Windows initial configuration
  const [windows, setWindows] = useState<Record<string, WindowState>>({
    about: {
      id: "about",
      title: "This PC",
      icon: "ThisPC",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    "recycle-bin": {
      id: "recycle-bin",
      title: "Recycle Bin",
      icon: "RecycleBin",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    projects: {
      id: "projects",
      title: "File Explorer",
      icon: "Folder",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    "project-detail": {
      id: "project-detail",
      title: "Project Details",
      icon: "Folder",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    "ai-lab": {
      id: "ai-lab",
      title: "AI Research Lab",
      icon: "AILab",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    "ask-ai": {
      id: "ask-ai",
      title: "Ask AI",
      icon: "AskAI",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    skills: {
      id: "skills",
      title: "Settings",
      icon: "Settings",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    experience: {
      id: "experience",
      title: "Experience",
      icon: "Briefcase",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    education: {
      id: "education",
      title: "Education",
      icon: "Education",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    certifications: {
      id: "certifications",
      title: "Certifications",
      icon: "Certifications",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    achievements: {
      id: "achievements",
      title: "Achievements",
      icon: "Achievements",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    resume: {
      id: "resume",
      title: "Prasannaraj_Resume.pdf - Document Viewer",
      icon: "Resume",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    terminal: {
      id: "terminal",
      title: "Windows Terminal",
      icon: "Terminal",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    contact: {
      id: "contact",
      title: "Contact & Inquiries",
      icon: "Contact",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
    diagnostics: {
      id: "diagnostics",
      title: "System Diagnostics",
      icon: "Settings",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 9,
    },
  });

  // Check localStorage for boot and sessionStorage for login
  useEffect(() => {
    try {
      const seen = localStorage.getItem("prasannaraj_os_booted");
      if (seen === "true") {
        setHasBooted(true);
      }
      const logged = sessionStorage.getItem("prasannaraj_os_logged_in");
      if (logged === "true") {
        setIsLoggedIn(true);
      }
    } catch (e) {
      setHasBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    setHasBooted(true);
    try {
      localStorage.setItem("prasannaraj_os_booted", "true");
    } catch (e) {}
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    try {
      sessionStorage.setItem("prasannaraj_os_logged_in", "true");
    } catch (e) {}
  };

  const handleRestartExperience = () => {
    try {
      localStorage.removeItem("prasannaraj_os_booted");
      sessionStorage.removeItem("prasannaraj_os_logged_in");
    } catch (e) {}
    setHasBooted(false);
    setIsLoggedIn(false);
    setIsLocked(false);
  };

  // Keyboard shortcut for CTRL+K (or Command+K) and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
        setIsStartMenuOpen(false);
      } else if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsStartMenuOpen(false);
        setIsRecruiterOpen(false);
        setIsCopilotOpen(false);
        setContextMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Window Management Handlers
  const bringToFront = (id: string) => {
    setTopZ((prev) => {
      const nextZ = prev + 1;
      setWindows((w) => ({
        ...w,
        [id]: {
          ...w[id],
          zIndex: nextZ,
          isMinimized: false,
        },
      }));
      return nextZ;
    });
    setActiveWindowId(id);
  };

  const openApp = (appId: string) => {
    if (appId.startsWith("project-")) {
      const projId = appId.replace("project-", "");
      setSelectedProjectId(projId);
      bringToFront("project-detail");
      setWindows((w) => ({
        ...w,
        "project-detail": {
          ...w["project-detail"],
          isOpen: true,
          isMinimized: false,
          title: `${projectsData.find((p) => p.id === projId)?.title || "Project Details"} - Case Study`,
        },
      }));
      return;
    }

    if (!windows[appId]) return;

    bringToFront(appId);
    setWindows((w) => ({
      ...w,
      [appId]: {
        ...w[appId],
        isOpen: true,
        isMinimized: false,
      },
    }));
  };

  const closeWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        isOpen: false,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        isMinimized: true,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const toggleMaximizeWindow = (id: string) => {
    setWindows((w) => ({
      ...w,
      [id]: {
        ...w[id],
        isMaximized: !w[id].isMaximized,
      },
    }));
  };

  // Taskbar Click
  const handleTaskbarAppClick = (appId: string) => {
    const win = windows[appId];
    if (!win || !win.isOpen) {
      openApp(appId);
    } else if (win.isMinimized) {
      bringToFront(appId);
    } else if (activeWindowId === appId) {
      minimizeWindow(appId);
    } else {
      bringToFront(appId);
    }
  };

  // Right Click on Desktop Canvas
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  // Authentic Windows 11 Desktop Icons connected to Portfolio content
  // Row 1: [This PC]              [Resume]
  // Row 2: [Projects]             [Contact]
  // Row 3: [LinkedIn]             [GitHub]
  // Row 4: [Ask AI]               [Settings]
  // Row 5: [Terminal]             [Recycle Bin]
  const desktopIcons = [
    // Column 1
    {
      id: "this-pc",
      label: "This PC",
      icon: "ThisPC",
      action: () => openApp("about"),
    },
    {
      id: "projects",
      label: "Projects",
      icon: "Folder",
      action: () => openApp("projects"),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: "LinkedIn",
      href: profileData.links.linkedin,
    },
    {
      id: "ask-ai",
      label: "Ask AI",
      icon: "AskAI",
      action: () => openApp("ask-ai"),
    },
    {
      id: "terminal",
      label: "Terminal",
      icon: "Terminal",
      action: () => openApp("terminal"),
    },
    // Column 2
    {
      id: "resume",
      label: "Resume",
      icon: "Resume",
      action: () => openApp("resume"),
    },
    {
      id: "contact",
      label: "Contact",
      icon: "Contact",
      action: () => openApp("contact"),
    },
    {
      id: "github",
      label: "GitHub",
      icon: "GitHub",
      href: profileData.links.github,
    },
    {
      id: "settings",
      label: "Settings",
      icon: "Settings",
      action: () => openApp("skills"),
    },
    {
      id: "recycle-bin",
      label: "Recycle Bin",
      icon: "RecycleBin",
      action: () => openApp("recycle-bin"),
    },
  ];

  const currentDetailProject =
    projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden select-none bg-[#0B0D10]"
      onClick={() => {
        setSelectedIconId(null);
        setContextMenu(null);
      }}
      onContextMenu={handleContextMenu}
    >
      {/* 1. Cinematic Boot Screen (if not seen yet) */}
      {!hasBooted && <BootScreen onBootComplete={handleBootComplete} />}

      {/* 2. Authentic Windows 11 Login / Sign-In Screen */}
      {hasBooted && !isLoggedIn && (
        <LoginScreen onLogin={handleLogin} onRestart={handleRestartExperience} />
      )}

      {/* 3. Optional Lock Screen */}
      {isLocked && <LockScreen onUnlock={() => setIsLocked(false)} />}

      {/* 4. Mobile View (Automatic for small screens) */}
      <MobileView onOpenRecruiter={() => setIsRecruiterOpen(true)} />

      {/* 5. Desktop View (For tablets & laptops/desktops) */}
      <div className="hidden md:flex flex-col w-full h-full relative">
        {/* Official Windows 11 Dark Bloom Wallpaper */}
        <Wallpaper />

        {/* First Desktop Entrance Windows Notification Toast */}
        {isLoggedIn && <WindowsNotification />}

        {/* Desktop Workspace Canvas */}
        <div className="relative flex-1 p-3 pb-16 flex flex-col justify-between overflow-hidden">
          {/* Top-Left: Vertical Grid of Windows 11 Desktop Icons (5 rows x 2 cols) */}
          <div
            className="grid grid-flow-col grid-rows-5 gap-y-2 gap-x-2 w-max z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {desktopIcons.map((icon) => (
              <DesktopIcon
                key={icon.id}
                id={icon.id}
                label={icon.label}
                iconName={icon.icon}
                href={icon.href}
                isSelected={selectedIconId === icon.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIconId(icon.id);
                  setContextMenu(null);
                }}
                onDoubleClick={() => {
                  if (icon.action) {
                    icon.action();
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Windows 11 Desktop Context Menu */}
        {contextMenu && (
          <DesktopContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            onClose={() => setContextMenu(null)}
            onOpenApp={openApp}
            onRefresh={() => setSelectedIconId(null)}
          />
        )}

        {/* Windows Manager Layer */}
        {/* About Window (This PC) */}
        <WindowFrame
          id="about"
          title={windows.about.title}
          icon={<Win11ThisPCIcon className="w-4 h-4" />}
          isOpen={windows.about.isOpen}
          isMinimized={windows.about.isMinimized}
          isMaximized={windows.about.isMaximized}
          zIndex={windows.about.zIndex}
          isActive={activeWindowId === "about"}
          initialWidth={800}
          initialHeight={560}
          onFocus={() => bringToFront("about")}
          onClose={() => closeWindow("about")}
          onMinimize={() => minimizeWindow("about")}
          onMaximize={() => toggleMaximizeWindow("about")}
        >
          <AboutWindow onOpenApp={openApp} />
        </WindowFrame>

        {/* Recycle Bin Window */}
        <WindowFrame
          id="recycle-bin"
          title={windows["recycle-bin"].title}
          icon={<Win11RecycleBinIcon className="w-4 h-4" />}
          isOpen={windows["recycle-bin"].isOpen}
          isMinimized={windows["recycle-bin"].isMinimized}
          isMaximized={windows["recycle-bin"].isMaximized}
          zIndex={windows["recycle-bin"].zIndex}
          isActive={activeWindowId === "recycle-bin"}
          initialWidth={780}
          initialHeight={500}
          onFocus={() => bringToFront("recycle-bin")}
          onClose={() => closeWindow("recycle-bin")}
          onMinimize={() => minimizeWindow("recycle-bin")}
          onMaximize={() => toggleMaximizeWindow("recycle-bin")}
        >
          <RecycleBinWindow />
        </WindowFrame>

        {/* Projects Explorer Window */}
        <WindowFrame
          id="projects"
          title={windows.projects.title}
          icon={<Win11FolderIcon className="w-4 h-4" />}
          isOpen={windows.projects.isOpen}
          isMinimized={windows.projects.isMinimized}
          isMaximized={windows.projects.isMaximized}
          zIndex={windows.projects.zIndex}
          isActive={activeWindowId === "projects"}
          initialWidth={860}
          initialHeight={560}
          onFocus={() => bringToFront("projects")}
          onClose={() => closeWindow("projects")}
          onMinimize={() => minimizeWindow("projects")}
          onMaximize={() => toggleMaximizeWindow("projects")}
        >
          <ProjectsWindow
            onSelectProject={(projId) => openApp(`project-${projId}`)}
          />
        </WindowFrame>

        {/* Project Detail Window */}
        <WindowFrame
          id="project-detail"
          title={windows["project-detail"].title}
          icon={<FolderRegular className="w-4 h-4 text-[#38BDF8]" />}
          isOpen={windows["project-detail"].isOpen}
          isMinimized={windows["project-detail"].isMinimized}
          isMaximized={windows["project-detail"].isMaximized}
          zIndex={windows["project-detail"].zIndex}
          isActive={activeWindowId === "project-detail"}
          initialWidth={880}
          initialHeight={580}
          onFocus={() => bringToFront("project-detail")}
          onClose={() => closeWindow("project-detail")}
          onMinimize={() => minimizeWindow("project-detail")}
          onMaximize={() => toggleMaximizeWindow("project-detail")}
        >
          <ProjectDetailWindow
            project={currentDetailProject}
            onBackToExplorer={() => openApp("projects")}
          />
        </WindowFrame>

        {/* AI Lab Window */}
        <WindowFrame
          id="ai-lab"
          title={windows["ai-lab"].title}
          icon={<Win11AILabIcon className="w-4 h-4" />}
          isOpen={windows["ai-lab"].isOpen}
          isMinimized={windows["ai-lab"].isMinimized}
          isMaximized={windows["ai-lab"].isMaximized}
          zIndex={windows["ai-lab"].zIndex}
          isActive={activeWindowId === "ai-lab"}
          initialWidth={860}
          initialHeight={560}
          onFocus={() => bringToFront("ai-lab")}
          onClose={() => closeWindow("ai-lab")}
          onMinimize={() => minimizeWindow("ai-lab")}
          onMaximize={() => toggleMaximizeWindow("ai-lab")}
        >
          <AILabWindow />
        </WindowFrame>

        {/* Skills Window (Settings) */}
        <WindowFrame
          id="skills"
          title={windows.skills.title}
          icon={<Win11SettingsIcon className="w-4 h-4" />}
          isOpen={windows.skills.isOpen}
          isMinimized={windows.skills.isMinimized}
          isMaximized={windows.skills.isMaximized}
          zIndex={windows.skills.zIndex}
          isActive={activeWindowId === "skills"}
          initialWidth={840}
          initialHeight={540}
          onFocus={() => bringToFront("skills")}
          onClose={() => closeWindow("skills")}
          onMinimize={() => minimizeWindow("skills")}
          onMaximize={() => toggleMaximizeWindow("skills")}
        >
          <SkillsWindow />
        </WindowFrame>

        {/* Experience Window */}
        <WindowFrame
          id="experience"
          title={windows.experience.title}
          icon={<BriefcaseRegular className="w-4 h-4 text-[#F2C94C]" />}
          isOpen={windows.experience.isOpen}
          isMinimized={windows.experience.isMinimized}
          isMaximized={windows.experience.isMaximized}
          zIndex={windows.experience.zIndex}
          isActive={activeWindowId === "experience"}
          initialWidth={780}
          initialHeight={520}
          onFocus={() => bringToFront("experience")}
          onClose={() => closeWindow("experience")}
          onMinimize={() => minimizeWindow("experience")}
          onMaximize={() => toggleMaximizeWindow("experience")}
        >
          <ExperienceWindow />
        </WindowFrame>

        {/* Education Window */}
        <WindowFrame
          id="education"
          title={windows.education.title}
          icon={<HatGraduationRegular className="w-4 h-4 text-[#60A5FA]" />}
          isOpen={windows.education.isOpen}
          isMinimized={windows.education.isMinimized}
          isMaximized={windows.education.isMaximized}
          zIndex={windows.education.zIndex}
          isActive={activeWindowId === "education"}
          initialWidth={780}
          initialHeight={500}
          onFocus={() => bringToFront("education")}
          onClose={() => closeWindow("education")}
          onMinimize={() => minimizeWindow("education")}
          onMaximize={() => toggleMaximizeWindow("education")}
        >
          <EducationWindow />
        </WindowFrame>

        {/* Certifications Window */}
        <WindowFrame
          id="certifications"
          title={windows.certifications.title}
          icon={<CertificateRegular className="w-4 h-4 text-[#38BDF8]" />}
          isOpen={windows.certifications.isOpen}
          isMinimized={windows.certifications.isMinimized}
          isMaximized={windows.certifications.isMaximized}
          zIndex={windows.certifications.zIndex}
          isActive={activeWindowId === "certifications"}
          initialWidth={820}
          initialHeight={540}
          onFocus={() => bringToFront("certifications")}
          onClose={() => closeWindow("certifications")}
          onMinimize={() => minimizeWindow("certifications")}
          onMaximize={() => toggleMaximizeWindow("certifications")}
        >
          <CertificationsWindow />
        </WindowFrame>

        {/* Achievements Window */}
        <WindowFrame
          id="achievements"
          title={windows.achievements.title}
          icon={<TrophyRegular className="w-4 h-4 text-[#FACC15]" />}
          isOpen={windows.achievements.isOpen}
          isMinimized={windows.achievements.isMinimized}
          isMaximized={windows.achievements.isMaximized}
          zIndex={windows.achievements.zIndex}
          isActive={activeWindowId === "achievements"}
          initialWidth={800}
          initialHeight={520}
          onFocus={() => bringToFront("achievements")}
          onClose={() => closeWindow("achievements")}
          onMinimize={() => minimizeWindow("achievements")}
          onMaximize={() => toggleMaximizeWindow("achievements")}
        >
          <AchievementsWindow />
        </WindowFrame>

        {/* Resume Window */}
        <WindowFrame
          id="resume"
          title={windows.resume.title}
          icon={<Win11ResumeIcon className="w-4 h-4" />}
          isOpen={windows.resume.isOpen}
          isMinimized={windows.resume.isMinimized}
          isMaximized={windows.resume.isMaximized}
          zIndex={windows.resume.zIndex}
          isActive={activeWindowId === "resume"}
          initialWidth={840}
          initialHeight={600}
          onFocus={() => bringToFront("resume")}
          onClose={() => closeWindow("resume")}
          onMinimize={() => minimizeWindow("resume")}
          onMaximize={() => toggleMaximizeWindow("resume")}
        >
          <ResumeWindow />
        </WindowFrame>

        {/* Terminal Window */}
        <WindowFrame
          id="terminal"
          title={windows.terminal.title}
          icon={<Win11TerminalIcon className="w-4 h-4" />}
          isOpen={windows.terminal.isOpen}
          isMinimized={windows.terminal.isMinimized}
          isMaximized={windows.terminal.isMaximized}
          zIndex={windows.terminal.zIndex}
          isActive={activeWindowId === "terminal"}
          initialWidth={720}
          initialHeight={460}
          onFocus={() => bringToFront("terminal")}
          onClose={() => closeWindow("terminal")}
          onMinimize={() => minimizeWindow("terminal")}
          onMaximize={() => toggleMaximizeWindow("terminal")}
        >
          <TerminalWindow onOpenApp={openApp} />
        </WindowFrame>

        {/* Contact Window */}
        <WindowFrame
          id="contact"
          title={windows.contact.title}
          icon={<Win11ContactIcon className="w-4 h-4" />}
          isOpen={windows.contact.isOpen}
          isMinimized={windows.contact.isMinimized}
          isMaximized={windows.contact.isMaximized}
          zIndex={windows.contact.zIndex}
          isActive={activeWindowId === "contact"}
          initialWidth={760}
          initialHeight={540}
          onFocus={() => bringToFront("contact")}
          onClose={() => closeWindow("contact")}
          onMinimize={() => minimizeWindow("contact")}
          onMaximize={() => toggleMaximizeWindow("contact")}
        >
          <ContactWindow />
        </WindowFrame>

        {/* Ask AI Window */}
        <WindowFrame
          id="ask-ai"
          title="Ask AI"
          icon={<Win11AskAIIcon className="w-4 h-4" />}
          isOpen={windows["ask-ai"].isOpen}
          isMinimized={windows["ask-ai"].isMinimized}
          isMaximized={windows["ask-ai"].isMaximized}
          zIndex={windows["ask-ai"].zIndex}
          isActive={activeWindowId === "ask-ai"}
          initialWidth={720}
          initialHeight={520}
          onFocus={() => bringToFront("ask-ai")}
          onClose={() => closeWindow("ask-ai")}
          onMinimize={() => minimizeWindow("ask-ai")}
          onMaximize={() => toggleMaximizeWindow("ask-ai")}
        >
          <AskAIWindow onOpenApp={openApp} />
        </WindowFrame>

        {/* Diagnostics Window */}
        <WindowFrame
          id="diagnostics"
          title={windows.diagnostics.title}
          icon={<SettingsRegular className="w-4 h-4 text-[#38BDF8]" />}
          isOpen={windows.diagnostics.isOpen}
          isMinimized={windows.diagnostics.isMinimized}
          isMaximized={windows.diagnostics.isMaximized}
          zIndex={windows.diagnostics.zIndex}
          isActive={activeWindowId === "diagnostics"}
          initialWidth={700}
          initialHeight={460}
          onFocus={() => bringToFront("diagnostics")}
          onClose={() => closeWindow("diagnostics")}
          onMinimize={() => minimizeWindow("diagnostics")}
          onMaximize={() => toggleMaximizeWindow("diagnostics")}
        >
          <DiagnosticsWindow />
        </WindowFrame>

        {/* Windows 11 Taskbar with Centered Fluent Dock & System Tray */}
        <Taskbar
          isStartMenuOpen={isStartMenuOpen}
          onToggleStartMenu={() => setIsStartMenuOpen((prev) => !prev)}
          onOpenSearch={() => setIsSearchOpen(true)}
          windows={Object.values(windows)}
          activeWindowId={activeWindowId}
          onAppClick={handleTaskbarAppClick}
          isCopilotOpen={isCopilotOpen}
          onToggleCopilot={() => setIsCopilotOpen((prev) => !prev)}
          onOpenRecruiterMode={() => setIsRecruiterOpen(true)}
        />

        {/* Start Menu */}
        <StartMenu
          isOpen={isStartMenuOpen}
          onClose={() => setIsStartMenuOpen(false)}
          onOpenApp={openApp}
          onOpenSearch={() => setIsSearchOpen(true)}
          onRestartExperience={handleRestartExperience}
          onLockPortfolio={() => {
            setIsLoggedIn(false);
            setIsStartMenuOpen(false);
            try {
              sessionStorage.removeItem("prasannaraj_os_logged_in");
            } catch (e) {}
          }}
          onOpenRecruiterMode={() => setIsRecruiterOpen(true)}
        />

        {/* Copilot Assistant Side Panel */}
        <CopilotPanel
          isOpen={isCopilotOpen}
          onClose={() => setIsCopilotOpen(false)}
          onOpenApp={openApp}
        />

        {/* Search / Command Palette (Ctrl+K) */}
        <CommandPalette
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onOpenApp={openApp}
        />

        {/* Recruiter Fast-Track Modal */}
        <RecruiterModal
          isOpen={isRecruiterOpen}
          onClose={() => setIsRecruiterOpen(false)}
          onOpenApp={openApp}
        />
      </div>
    </div>
  );
}
