"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  PersonFilled,
  PowerRegular,
  WifiSettingsRegular,
  ArrowRightRegular,
} from "@/components/icons/FluentIcons";
import { Eye, EyeOff, Accessibility, Camera } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
  onRestart?: () => void;
}

export function LoginScreen({ onLogin, onRestart }: LoginScreenProps) {
  const [username, setUsername] = useState("Guest");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Welcome...");
  const [showPowerMenu, setShowPowerMenu] = useState(false);

  const handleSignIn = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setLoadingText("Starting Prasannaraj's Portfolio...");

    // Smooth simulated transition (650ms)
    setTimeout(() => {
      onLogin();
    }, 650);
  };

  const handleQuickGuest = () => {
    if (isLoading) return;
    onLogin();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden select-none bg-[#05070B] text-white animate-in fade-in duration-300">
      {/* Background Wallpaper with Windows 11 Acrylic Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/wallpaper.jpg"
          alt="Windows 11 Bloom Wallpaper"
          className="w-full h-full object-cover object-center filter blur-[14px] scale-105 opacity-90 transition-all duration-700"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Top Bar Spacer */}
      <div className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white/50 text-xs">
          <Camera size={14} className="opacity-70" />
          <span>Windows 11 Workstation</span>
        </div>
      </div>

      {/* Center Sign-In Interface */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-sm mx-auto w-full -mt-8">
        {/* Windows 11 Profile Avatar Circle */}
        <div className="relative mb-4 group">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-white/20 to-white/5 p-[1px] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="w-full h-full rounded-full bg-[#1b222c]/80 backdrop-blur-xl flex items-center justify-center border border-white/20 overflow-hidden">
              <PersonFilled className="w-16 h-16 md:w-20 md:h-20 text-white/90" />
            </div>
          </div>
        </div>

        {/* Display Name & Subtitle */}
        <div className="space-y-0.5 mb-5">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white drop-shadow-md">
            {profileData.name}
          </h1>
          <p className="text-xs md:text-sm text-[#4CC2FF] font-medium tracking-wide drop-shadow-sm">
            {profileData.role}
          </p>
          <p className="text-[11px] text-white/60 font-normal tracking-wide pt-0.5">
            Welcome to my portfolio workstation
          </p>
        </div>

        {/* Dynamic State: Form vs Windows Loading Animation */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-3 py-4 min-h-[110px] animate-in fade-in duration-200">
            {/* Windows 11 Circular Ring Spinner */}
            <div className="relative w-8 h-8">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[#4CC2FF] animate-spin" />
            </div>
            <p className="text-sm font-medium text-white/90 tracking-wide">
              {loadingText}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSignIn} className="w-full max-w-[280px] space-y-2.5">
            {/* Username Input */}
            <div className="relative w-full">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                aria-label="Username"
                className="w-full h-8 px-3 rounded-[4px] bg-[#1a202c]/70 hover:bg-[#1a202c]/85 focus:bg-[#1a202c]/95 border border-white/20 focus:border-[#4CC2FF] text-xs text-white placeholder-white/40 focus:outline-none transition-all shadow-inner"
              />
            </div>

            {/* Password Input with eye toggle and submit arrow */}
            <div className="relative w-full flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                aria-label="Password"
                className="w-full h-8 pl-3 pr-16 rounded-[4px] bg-[#1a202c]/70 hover:bg-[#1a202c]/85 focus:bg-[#1a202c]/95 border border-white/20 focus:border-[#4CC2FF] text-xs text-white placeholder-white/40 focus:outline-none transition-all shadow-inner"
              />

              <div className="absolute right-1 flex items-center gap-1">
                {/* Show/Hide password toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="w-6 h-6 rounded flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>

                {/* Windows 11 Sign-In Arrow [ → ] */}
                <button
                  type="submit"
                  aria-label="Sign in"
                  title="Sign In"
                  className="w-6 h-6 rounded-[3px] bg-white/15 hover:bg-white/25 active:bg-white/35 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ArrowRightRegular className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sign in Button */}
            <div className="pt-1.5 flex flex-col items-center gap-2">
              <button
                type="submit"
                className="px-6 py-1 rounded-[4px] bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/15 text-xs text-white font-normal transition-all cursor-pointer shadow-sm"
              >
                Sign in to Portfolio
              </button>

              {/* Optional Recruiter Fast-Track Bypass */}
              <button
                type="button"
                onClick={handleQuickGuest}
                className="text-[11px] text-white/70 hover:text-white underline decoration-white/30 hover:decoration-white transition-colors cursor-pointer pt-0.5"
              >
                Continue as Guest
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Bottom Utility Bar (Windows 11 Lock Screen Tray) */}
      <div className="relative z-10 p-6 flex justify-between items-end">
        {/* Bottom Left: Status / Workstation info */}
        <div className="text-[11px] text-white/50 hidden sm:block">
          <span>Prasannaraj Workstation • Windows 11 Pro</span>
        </div>

        {/* Bottom Right: Network, Accessibility, Power */}
        <div className="flex items-center gap-3 relative ml-auto">
          {/* Network icon */}
          <div
            title="Internet Connected"
            className="w-8 h-8 rounded-[4px] flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <WifiSettingsRegular className="w-4 h-4" />
          </div>

          {/* Accessibility icon */}
          <div
            title="Accessibility"
            className="w-8 h-8 rounded-[4px] flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Accessibility size={16} />
          </div>

          {/* Power Button */}
          <div className="relative">
            <button
              onClick={() => setShowPowerMenu(!showPowerMenu)}
              aria-label="Power options"
              title="Power options"
              className="w-8 h-8 rounded-[4px] flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <PowerRegular className="w-4 h-4" />
            </button>

            {/* Power Menu Popover */}
            {showPowerMenu && (
              <div className="absolute bottom-10 right-0 w-36 rounded-[6px] bg-[#1f1f1f]/95 border border-[#333333] shadow-2xl backdrop-blur-xl p-1 text-xs text-white z-20 animate-in fade-in slide-in-from-bottom-2 duration-150">
                <button
                  onClick={() => {
                    setShowPowerMenu(false);
                    if (onRestart) onRestart();
                    else window.location.reload();
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-[4px] hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <PowerRegular className="w-3.5 h-3.5 text-[#4CC2FF]" />
                  <span>Restart</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
