"use client";

import React, { useState, useEffect } from "react";
import {
  WifiSettingsRegular,
  BluetoothRegular,
  WeatherMoonRegular,
  WeatherSunnyRegular,
  Speaker2Regular,
  BatteryChargeRegular,
  SettingsRegular,
  DismissRegular,
} from "@/components/icons/FluentIcons";

interface QuickSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSettings: () => void;
}

export function QuickSettingsPanel({
  isOpen,
  onClose,
  onOpenSettings,
}: QuickSettingsPanelProps) {
  const [wifiActive, setWifiActive] = useState(true);
  const [bluetoothActive, setBluetoothActive] = useState(true);
  const [volume, setVolume] = useState(80);
  const [brightness, setBrightness] = useState(90);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="fixed bottom-14 right-4 w-84 rounded-2xl mica-surface-elevated border border-white/[0.12] shadow-2xl p-4 z-50 space-y-4 select-none animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-xs">
          <span className="font-semibold text-[#F5F7FA]">Quick Settings</span>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-white/[0.08] text-[#A8AFBA]"
          >
            <DismissRegular className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick Toggles Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          {/* Wi-Fi Toggle */}
          <button
            onClick={() => setWifiActive(!wifiActive)}
            className={`p-3 rounded-xl border flex flex-col items-start gap-1 transition-all cursor-pointer ${
              wifiActive
                ? "bg-[#4CC2FF]/20 border-[#4CC2FF]/40 text-[#F5F7FA]"
                : "bg-white/[0.03] border-white/[0.06] text-[#A8AFBA]"
            }`}
          >
            <WifiSettingsRegular className="w-5 h-5 text-[#4CC2FF]" />
            <span className="font-medium text-[11px] mt-1">Wi-Fi</span>
            <span className="text-[10px] text-[#A8AFBA]">
              {wifiActive ? "Connected" : "Disconnected"}
            </span>
          </button>

          {/* Bluetooth Toggle */}
          <button
            onClick={() => setBluetoothActive(!bluetoothActive)}
            className={`p-3 rounded-xl border flex flex-col items-start gap-1 transition-all cursor-pointer ${
              bluetoothActive
                ? "bg-[#4CC2FF]/20 border-[#4CC2FF]/40 text-[#F5F7FA]"
                : "bg-white/[0.03] border-white/[0.06] text-[#A8AFBA]"
            }`}
          >
            <BluetoothRegular className="w-5 h-5 text-[#4CC2FF]" />
            <span className="font-medium text-[11px] mt-1">Bluetooth</span>
            <span className="text-[10px] text-[#A8AFBA]">
              {bluetoothActive ? "Active" : "Off"}
            </span>
          </button>
        </div>

        {/* Sliders */}
        <div className="space-y-3 pt-1">
          {/* Volume */}
          <div className="flex items-center gap-3">
            <Speaker2Regular className="w-4 h-4 text-[#A8AFBA] shrink-0" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 accent-[#4CC2FF] h-1.5 bg-white/[0.1] rounded-lg cursor-pointer"
            />
            <span className="text-[10px] font-mono text-[#A8AFBA] w-7 text-right">
              {volume}%
            </span>
          </div>

          {/* Brightness */}
          <div className="flex items-center gap-3">
            <WeatherSunnyRegular className="w-4 h-4 text-[#A8AFBA] shrink-0" />
            <input
              type="range"
              min="20"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="flex-1 accent-[#4CC2FF] h-1.5 bg-white/[0.1] rounded-lg cursor-pointer"
            />
            <span className="text-[10px] font-mono text-[#A8AFBA] w-7 text-right">
              {brightness}%
            </span>
          </div>
        </div>

        {/* Footer Battery & Settings Button */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A8AFBA]">
          <div className="flex items-center gap-2">
            <BatteryChargeRegular className="w-4 h-4 text-[#6CCB8A]" />
            <span className="font-mono text-[11px] text-[#F5F7FA]">100% • Fully Charged</span>
          </div>

          <button
            onClick={() => {
              onOpenSettings();
              onClose();
            }}
            className="p-1.5 rounded-lg hover:bg-white/[0.08] text-[#F5F7FA] transition-colors cursor-pointer"
            title="All Settings"
          >
            <SettingsRegular className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
