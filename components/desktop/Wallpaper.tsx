"use client";

import React from "react";

export function Wallpaper() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#05070B]">
      {/* Official Windows 11 Dark Bloom Wallpaper */}
      <img
        src="/wallpaper.jpg"
        alt="Windows 11 Dark Bloom Wallpaper"
        className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-1000 select-none"
        draggable={false}
      />

      {/* Subtle depth vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15 pointer-events-none" />
    </div>
  );
}
