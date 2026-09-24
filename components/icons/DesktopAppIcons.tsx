import React from "react";

export function LinkedInBadge({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23" fill="#0A66C2" />
      <path
        d="M17.5 15C17.5 16.38 16.38 17.5 15 17.5C13.62 17.5 12.5 16.38 12.5 15C12.5 13.62 13.62 12.5 15 12.5C16.38 12.5 17.5 13.62 17.5 15ZM12.75 20.25H17.25V34.5H12.75V20.25ZM24.25 20.25H28.5V22.25H28.56C29.15 21.13 30.6 19.95 32.76 19.95C37.26 19.95 38.1 22.91 38.1 26.77V34.5H33.6V27.45C33.6 25.77 33.57 23.61 31.26 23.61C28.92 23.61 28.56 25.43 28.56 27.33V34.5H24.06L24.25 20.25Z"
        fill="white"
      />
    </svg>
  );
}

export function SteamBadge({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23" fill="url(#steamGrad)" />
      <defs>
        <radialGradient id="steamGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1B354D" />
          <stop offset="100%" stopColor="#0D1926" />
        </radialGradient>
      </defs>
      {/* Steam Arm & Valves */}
      <path
        d="M24 10C16.27 10 10 16.27 10 24C10 27.67 11.42 31.02 13.76 33.53L18.42 27.2C18.15 26.24 18 25.14 18 24C18 20.69 20.69 18 24 18C27.31 18 30 20.69 30 24C30 27.31 27.31 30 24 30C23.68 30 23.36 29.97 23.05 29.92L17.7 35.15C19.64 36.32 21.75 37 24 37C31.18 37 37 31.18 37 24C37 16.27 31.18 10 24 10Z"
        fill="white"
        opacity="0.95"
      />
      <circle cx="24" cy="24" r="3.5" fill="#0D1926" />
    </svg>
  );
}

export function InstagramBadge({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="30%" stopColor="#FD1D1D" />
          <stop offset="70%" stopColor="#E1306C" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#igGrad)" />
      {/* Camera Outer Box */}
      <rect x="12" y="12" width="24" height="24" rx="7" stroke="white" strokeWidth="2.5" />
      {/* Camera Lens */}
      <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2.5" />
      {/* Camera Flash */}
      <circle cx="31" cy="17" r="1.5" fill="white" />
    </svg>
  );
}

export function DribbbleBadge({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23" fill="#EA4C89" />
      <circle cx="24" cy="24" r="13" stroke="white" strokeWidth="2.2" />
      <path
        d="M13 22C19 23 27 21 34 16M16 33C21 27 25 18 27 12M24 37C23 30 27 23 35 24"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GitHubBadge({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23" fill="#18181B" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path
        d="M24 12C17.37 12 12 17.37 12 24C12 29.3 15.44 33.8 20.21 35.39C20.81 35.5 21.03 35.13 21.03 34.81C21.03 34.52 21.02 33.56 21.01 32.55C17.67 33.27 16.97 31.14 16.97 31.14C16.42 29.75 15.63 29.38 15.63 29.38C14.54 28.64 15.71 28.65 15.71 28.65C16.92 28.74 17.55 29.89 17.55 29.89C18.62 31.73 20.36 31.2 21.04 30.89C21.15 30.11 21.46 29.58 21.81 29.28C19.14 28.98 16.34 27.95 16.34 23.35C16.34 22.04 16.81 20.97 17.57 20.13C17.45 19.83 17.04 18.61 17.69 16.96C17.69 16.96 18.7 16.64 21 18.2C21.96 17.93 22.98 17.8 24 17.8C25.02 17.8 26.04 17.93 27 18.2C29.3 16.64 30.31 16.96 30.31 16.96C30.96 18.61 30.55 19.83 30.43 20.13C31.19 20.97 31.66 22.04 31.66 23.35C31.66 27.96 28.85 28.97 26.17 29.27C26.6 29.64 26.98 30.37 26.98 31.5C26.98 33.12 26.97 34.42 26.97 34.81C26.97 35.13 27.19 35.51 27.79 35.39C32.55 33.79 36 29.3 36 24C36 17.37 30.63 12 24 12Z"
        fill="white"
      />
    </svg>
  );
}

/* Dock Icons matching user's image exactly */
export function Win11StartLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-0.5 p-0.5 ${className}`}>
      <span className="bg-[#4CC2FF] rounded-[1.5px]" />
      <span className="bg-[#4CC2FF] rounded-[1.5px]" />
      <span className="bg-[#4CC2FF] rounded-[1.5px]" />
      <span className="bg-[#4CC2FF] rounded-[1.5px]" />
    </div>
  );
}

export function DockPurpleCamera({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect x="3" y="6" width="26" height="20" rx="6" fill="#7C3AED" />
      <path d="M12 6L14 3H18L20 6H12Z" fill="#6D28D9" />
      <circle cx="16" cy="16" r="6" fill="#A78BFA" />
      <circle cx="16" cy="16" r="3.5" fill="#3B0764" />
      <circle cx="23" cy="10" r="1.5" fill="#C4B5FD" />
    </svg>
  );
}

export function DockFileExplorer({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M3 8C3 6.34 4.34 5 6 5H13L16 8H26C27.66 8 29 9.34 29 11V23C29 24.66 27.66 26 26 26H6C4.34 26 3 24.66 3 23V8Z" fill="#0284C7" />
      <path d="M3 12C3 10.34 4.34 9 6 9H26C27.66 9 29 10.34 29 12V23C29 24.66 27.66 26 26 26H6C4.34 26 3 24.66 3 23V12Z" fill="#FACC15" />
      <path d="M3 14C3 12.34 4.34 11 6 11H26C27.66 11 29 12.34 29 14V23C29 24.66 27.66 26 26 26H6C4.34 26 3 24.66 3 23V14Z" fill="#EAB308" />
    </svg>
  );
}

export function DockGreenDiamond({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      {/* Plumbob / Green Diamond */}
      <path d="M16 2L23 16L16 30L9 16L16 2Z" fill="url(#greenDiamondGrad)" />
      <path d="M16 2L23 16L16 20L9 16L16 2Z" fill="#4ADE80" opacity="0.6" />
      <defs>
        <linearGradient id="greenDiamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="50%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DockVideoCamera({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="8" width="16" height="16" rx="4" fill="#0D9488" />
      <path d="M20 12L28 7V25L20 20V12Z" fill="#14B8A6" />
      <circle cx="12" cy="16" r="3" fill="#99F6E4" />
    </svg>
  );
}

export function DockBrowserGlobe({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" fill="#0284C7" />
      <circle cx="16" cy="16" r="12" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M4 16H28M16 4C19 8 20.5 12 20.5 16C20.5 20 19 24 16 28C13 24 11.5 20 11.5 16C11.5 12 13 8 16 4Z" stroke="#E0F2FE" strokeWidth="1.5" />
    </svg>
  );
}

export function DockDocumentResume({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M7 6C7 4.34 8.34 3 10 3H20L25 8V26C25 27.66 23.66 29 22 29H10C8.34 29 7 27.66 7 26V6Z" fill="#38BDF8" />
      <path d="M20 3V8H25L20 3Z" fill="#0284C7" />
      {/* Document text lines */}
      <line x1="11" y1="12" x2="21" y2="12" stroke="#F0F9FF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="11" y1="16" x2="21" y2="16" stroke="#F0F9FF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="11" y1="20" x2="17" y2="20" stroke="#F0F9FF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
