"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/types";
import {
  FolderRegular,
  FolderFilled,
  FolderOpenRegular,
  FolderOpenFilled,
  SearchRegular,
  DocumentTextRegular,
  DesktopRegular,
  ArrowSyncRegular,
  ChevronRightRegular,
  ChevronLeftRegular,
  ChevronUpRegular,
  AppsRegular,
  CheckmarkCircleRegular,
} from "@/components/icons/FluentIcons";
import { Win11FolderIcon } from "@/components/icons/Win11FluentIcons";

interface ProjectsWindowProps {
  onSelectProject: (projectId: string) => void;
}

export function ProjectsWindow({ onSelectProject }: ProjectsWindowProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"icons" | "details">("icons");

  const categories = [
    "All",
    "Computer Vision",
    "Generative AI / Agents",
    "Machine Learning / NLP",
    "IoT & Hardware",
    "Full-Stack AI",
  ];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCat =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-[#181818] select-none text-xs text-[#E1E1E1]">
      {/* 1. Windows 11 File Explorer Command Bar / Ribbon */}
      <div className="h-10 px-3 bg-[#1f1f1f] border-b border-[#2d2d2d] flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-1">
          {/* New Button */}
          <button className="flex items-center gap-1.5 px-2.5 h-7 rounded-[4px] hover:bg-white/[0.08] active:bg-white/[0.12] text-[#E1E1E1] transition-colors cursor-pointer">
            <span className="text-sm font-light text-[#4CC2FF]">+</span>
            <span className="text-[11px] font-normal">New</span>
          </button>

          <div className="w-[1px] h-4 bg-white/[0.10] mx-1" />

          {/* Action icons */}
          <button
            title="Cut"
            className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#E1E1E1] transition-colors cursor-pointer"
          >
            ✂
          </button>
          <button
            title="Copy"
            className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#E1E1E1] transition-colors cursor-pointer"
          >
            📋
          </button>
          <button
            title="Rename"
            className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#E1E1E1] transition-colors cursor-pointer"
          >
            ✎
          </button>
          <button
            title="Share"
            className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#E1E1E1] transition-colors cursor-pointer"
          >
            ↗
          </button>
        </div>

        {/* View Mode Toggle: Icons vs Details */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode("icons")}
            title="Large icons"
            className={`px-2.5 h-7 rounded-[4px] flex items-center gap-1.5 transition-colors cursor-pointer ${
              viewMode === "icons"
                ? "bg-white/[0.12] text-[#4CC2FF] border border-white/10"
                : "text-[#A8AFBA] hover:bg-white/[0.08] hover:text-[#E1E1E1]"
            }`}
          >
            <AppsRegular className="w-3.5 h-3.5" />
            <span className="text-[11px]">Icons</span>
          </button>
          <button
            onClick={() => setViewMode("details")}
            title="Details view"
            className={`px-2.5 h-7 rounded-[4px] flex items-center gap-1.5 transition-colors cursor-pointer ${
              viewMode === "details"
                ? "bg-white/[0.12] text-[#4CC2FF] border border-white/10"
                : "text-[#A8AFBA] hover:bg-white/[0.08] hover:text-[#E1E1E1]"
            }`}
          >
            <DocumentTextRegular className="w-3.5 h-3.5" />
            <span className="text-[11px]">Details</span>
          </button>
        </div>
      </div>

      {/* 2. Navigation & Breadcrumb Address Bar */}
      <div className="h-10 px-3 bg-[#1c1c1c] border-b border-[#282828] flex items-center justify-between gap-3 shrink-0">
        {/* Navigation arrows (Back, Forward, Up, Refresh) */}
        <div className="flex items-center gap-0.5 text-[#A8AFBA]">
          <button
            onClick={() => setSelectedCategory("All")}
            className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#E1E1E1] transition-colors"
          >
            <ChevronLeftRegular className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-[4px] text-[#A8AFBA]/40 cursor-not-allowed">
            <ChevronRightRegular className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setSelectedCategory("All")}
            className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#E1E1E1] transition-colors"
          >
            <ChevronUpRegular className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setSearchQuery("")}
            className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/[0.08] text-[#A8AFBA] hover:text-[#E1E1E1] transition-colors"
          >
            <ArrowSyncRegular className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Breadcrumb Path Box */}
        <div className="flex-1 flex items-center gap-1.5 px-3 h-7 rounded-[4px] bg-[#222222] border border-[#333333] text-xs text-[#A8AFBA] overflow-hidden">
          <DesktopRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
          <span>This PC</span>
          <ChevronRightRegular className="w-3 h-3 text-white/30" />
          <span className="text-[#E1E1E1] font-medium">Projects</span>
          {selectedCategory !== "All" && (
            <>
              <ChevronRightRegular className="w-3 h-3 text-white/30" />
              <span className="text-[#4CC2FF] font-medium">
                {selectedCategory}
              </span>
            </>
          )}
        </div>

        {/* Search Input */}
        <div className="relative">
          <SearchRegular className="w-3.5 h-3.5 text-[#A8AFBA] absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Projects"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-40 sm:w-48 h-7 pl-8 pr-2 rounded-[4px] bg-[#222222] border border-[#333333] text-xs text-[#E1E1E1] placeholder-[#A8AFBA]/60 focus:outline-none focus:border-[#0078D4]"
          />
        </div>
      </div>

      {/* 3. Main Explorer Area: Navigation Pane + Files Pane */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Navigation Tree */}
        <div className="w-52 border-r border-[#282828] bg-[#1a1a1a] p-2 hidden sm:flex flex-col gap-0.5 overflow-y-auto shrink-0 select-none">
          <div className="px-2 py-1.5 text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider">
            Quick access
          </div>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full flex items-center justify-between px-2.5 h-7 rounded-[4px] text-xs transition-colors text-left cursor-pointer ${
                  isSelected
                    ? "bg-[#0078D4]/20 text-[#4CC2FF] font-medium"
                    : "text-[#A8AFBA] hover:text-[#E1E1E1] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  {isSelected ? (
                    <FolderOpenFilled className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                  ) : (
                    <FolderFilled className="w-3.5 h-3.5 text-[#EAB308] shrink-0" />
                  )}
                  <span className="truncate text-[11px]">{cat}</span>
                </div>
                <span className="text-[10px] text-[#71717A] font-mono">
                  {count}
                </span>
              </button>
            );
          })}

          <div className="my-2 border-t border-[#282828]" />

          <div className="px-2 py-1 text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider">
            This PC
          </div>
          <div className="px-2.5 h-7 flex items-center gap-2 text-[#A8AFBA] text-[11px]">
            <DesktopRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
            <span>Desktop</span>
          </div>
          <div className="px-2.5 h-7 flex items-center gap-2 text-[#A8AFBA] text-[11px]">
            <DocumentTextRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
            <span>Documents</span>
          </div>
          <div className="px-2.5 h-7 flex items-center gap-2 text-[#4CC2FF] font-medium text-[11px] bg-[#0078D4]/15 rounded-[4px]">
            <FolderFilled className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Projects (D:)</span>
          </div>
        </div>

        {/* Right Content Pane: Windows 11 Folders & Files */}
        <div
          className="flex-1 p-4 overflow-y-auto"
          onClick={() => setSelectedProjectId(null)}
        >
          {/* Section 3 & 13: Clean Explorer Structure */}
          <div className="mb-4 pb-2 border-b border-[#282828] flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold text-white tracking-wider uppercase">
                PROJECTS
              </h2>
              <p className="text-[11px] text-[#A8AFBA]">
                {filteredProjects.length} projects
              </p>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="h-48 flex flex-col items-center justify-center text-center text-[#A8AFBA]">
              <FolderRegular className="w-10 h-10 text-[#A8AFBA]/40 mb-2" />
              <p className="text-xs">No projects match the current filter.</p>
            </div>
          ) : viewMode === "icons" ? (
            /* Standard Windows 11 Folder Icon Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {filteredProjects.map((project) => {
                const isSelected = selectedProjectId === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProjectId(project.id);
                    }}
                    onDoubleClick={() => onSelectProject(project.id)}
                    className={`flex flex-col items-start p-3 rounded-[6px] cursor-pointer transition-colors text-left select-none ${
                      isSelected
                        ? "bg-[#0078D4]/25 border border-[#0078D4]/60 text-[#FFFFFF]"
                        : "bg-[#202020] hover:bg-[#252525] border border-[#2d2d2d] text-[#E1E1E1]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 w-full">
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        <Win11FolderIcon className="w-8 h-8 drop-shadow-sm" />
                      </div>
                      <span className="text-xs font-semibold leading-tight text-white line-clamp-1">
                        {project.title}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#A8AFBA] line-clamp-2 leading-relaxed mb-2.5">
                      {project.overview}
                    </p>

                    <div className="mt-auto flex items-center justify-between w-full pt-1 border-t border-white/[0.06] text-[10px]">
                      <span className="text-[#4CC2FF] truncate max-w-[120px]">
                        {project.technologies.slice(0, 2).join(" · ")}
                      </span>
                      <span className="text-[#10B981] font-mono shrink-0">
                        {project.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Classic Windows Details Table View */
            <div className="w-full">
              <div className="grid grid-cols-12 gap-2 pb-2 border-b border-[#282828] text-[11px] font-semibold text-[#8A8A8A] px-2 select-none">
                <div className="col-span-5">Name</div>
                <div className="col-span-3">Category</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2 text-right">Status</div>
              </div>

              <div className="divide-y divide-transparent pt-1">
                {filteredProjects.map((project) => {
                  const isSelected = selectedProjectId === project.id;
                  return (
                    <div
                      key={project.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProjectId(project.id);
                      }}
                      onDoubleClick={() => onSelectProject(project.id)}
                      className={`grid grid-cols-12 gap-2 items-center px-2 h-8 rounded-[4px] text-xs cursor-pointer select-none transition-colors ${
                        isSelected
                          ? "bg-[#0078D4]/25 text-white border border-[#0078D4]/40"
                          : "hover:bg-white/[0.05] text-[#E1E1E1] border border-transparent"
                      }`}
                    >
                      <div className="col-span-5 flex items-center gap-2 truncate">
                        <FolderFilled className="w-4 h-4 text-[#FACC15] shrink-0" />
                        <span className="truncate font-medium text-[11px]">
                          {project.title}
                        </span>
                      </div>
                      <div className="col-span-3 text-[11px] text-[#A8AFBA] truncate">
                        {project.category}
                      </div>
                      <div className="col-span-2 text-[11px] text-[#8A8A8A]">
                        AI Project Folder
                      </div>
                      <div className="col-span-2 text-right text-[11px] font-mono text-[#4CC2FF]">
                        {project.badge || "Verified"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. Bottom Status Bar */}
      <div className="h-6 px-3 bg-[#1c1c1c] border-t border-[#262626] flex items-center justify-between text-[10px] text-[#8A8A8A] shrink-0 select-none">
        <div className="flex items-center gap-3">
          <span>{filteredProjects.length} items</span>
          {selectedProjectId && (
            <span>
              Selected:{" "}
              {projectsData.find((p) => p.id === selectedProjectId)?.title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-[#4CC2FF]">
          <CheckmarkCircleRegular className="w-3 h-3 text-[#10B981]" />
          <span>Double-click any folder to view architecture & verification</span>
        </div>
      </div>
    </div>
  );
}
