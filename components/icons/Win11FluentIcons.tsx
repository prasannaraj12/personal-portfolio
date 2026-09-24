import React from "react";

// Windows 11 "This PC" Icon (Fluent Monitor with Desktop & Stand)
export function Win11ThisPCIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pcBezel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A3D45" />
          <stop offset="100%" stopColor="#1C1F24" />
        </linearGradient>
        <linearGradient id="pcScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="60%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <linearGradient id="pcStand" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#71717A" />
          <stop offset="100%" stopColor="#3F3F46" />
        </linearGradient>
        <filter id="pcGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Monitor Stand Base */}
      <rect x="20" y="52" width="24" height="4" rx="2" fill="url(#pcStand)" />
      {/* Monitor Neck */}
      <rect x="29" y="44" width="6" height="9" rx="1.5" fill="#52525B" />

      {/* Monitor Outer Frame */}
      <g filter="url(#pcGlow)">
        <rect x="6" y="8" width="52" height="38" rx="5" fill="url(#pcBezel)" stroke="#52525B" strokeWidth="1" />
        {/* Glossy Screen */}
        <rect x="9" y="11" width="46" height="30" rx="3" fill="url(#pcScreen)" />
        {/* Subtle Bloom Silhouette on Screen */}
        <path d="M14 36 C22 24 34 20 44 26 C48 28 50 32 55 35" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
        <circle cx="34" cy="24" r="5" fill="rgba(255,255,255,0.2)" />
        {/* Bottom Bezel Logo Dot */}
        <circle cx="32" cy="43.5" r="1" fill="#A1A1AA" />
      </g>
    </svg>
  );
}

// Windows 11 "Recycle Bin" Icon (Translucent Cylinder with Recycling Symbol)
export function Win11RecycleBinIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="binBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.35)" />
          <stop offset="30%" stopColor="rgba(255, 255, 255, 0.45)" />
          <stop offset="70%" stopColor="rgba(14, 165, 233, 0.4)" />
          <stop offset="100%" stopColor="rgba(3, 105, 161, 0.55)" />
        </linearGradient>
        <linearGradient id="binRim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Top Rim Ellipse Outer */}
      <ellipse cx="32" cy="14" rx="20" ry="6" fill="url(#binRim)" />
      {/* Top Rim Hollow */}
      <ellipse cx="32" cy="14" rx="17" ry="4.5" fill="#0C4A6E" />

      {/* Cylinder Body */}
      <path
        d="M12 14 L17 50 C17.5 54 23 57 32 57 C41 57 46.5 54 47 50 L52 14 Z"
        fill="url(#binBody)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.2"
      />

      {/* Translucent Ribs / Grooves */}
      <path d="M22 19 L25 49" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M32 20 L32 51" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M42 19 L39 49" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Recycling Tri-Arrows Badge in Center */}
      <g transform="translate(23, 27) scale(0.65)">
        <path
          d="M14 3L11 8H17L14 3ZM7 18L10 13L13 18H7ZM21 18L18 13L24 13L21 18Z"
          fill="#38BDF8"
          stroke="#0284C7"
          strokeWidth="1"
        />
        <path
          d="M14 7V13M9 16L13 10M19 16L15 10"
          stroke="#38BDF8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

// Windows 11 "File Explorer / Projects" Icon (Golden Yellow Folder with Blue Flap)
export function Win11FolderIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="folderBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="40%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <linearGradient id="folderFlap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Back tab */}
      <path d="M6 16C6 13.79 7.79 12 10 12H24L30 18H54C56.21 18 58 19.79 58 22V44C58 46.21 56.21 48 54 48H10C7.79 48 6 46.21 6 44V16Z" fill="url(#folderBack)" />

      {/* White Document Peeking Out */}
      <rect x="14" y="16" width="36" height="24" rx="2" fill="#F8FAFC" />
      <line x1="20" y1="22" x2="38" y2="22" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="26" x2="32" y2="26" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

      {/* Front Folder Lip */}
      <path
        d="M6 24C6 21.79 7.79 20 10 20H54C56.21 20 58 21.79 58 24V46C58 49.31 55.31 52 52 52H12C8.69 52 6 49.31 6 46V24Z"
        fill="url(#folderFront)"
        stroke="#EAB308"
        strokeWidth="0.8"
      />
      {/* Gloss Highlight on Top Lip */}
      <path d="M8 22H56" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Windows 11 "AI Lab / Neural Core" Icon (High-Tech Fluent Microprocessor Chip)
export function Win11AILabIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chipBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="50%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
        <linearGradient id="chipGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>

      {/* Gold Pins around Chip */}
      {/* Top Pins */}
      <rect x="18" y="6" width="3" height="6" rx="1" fill="#FACC15" />
      <rect x="25" y="6" width="3" height="6" rx="1" fill="#FACC15" />
      <rect x="32" y="6" width="3" height="6" rx="1" fill="#FACC15" />
      <rect x="39" y="6" width="3" height="6" rx="1" fill="#FACC15" />
      <rect x="46" y="6" width="3" height="6" rx="1" fill="#FACC15" />

      {/* Bottom Pins */}
      <rect x="18" y="52" width="3" height="6" rx="1" fill="#FACC15" />
      <rect x="25" y="52" width="3" height="6" rx="1" fill="#FACC15" />
      <rect x="32" y="52" width="3" height="6" rx="1" fill="#FACC15" />
      <rect x="39" y="52" width="3" height="6" rx="1" fill="#FACC15" />
      <rect x="46" y="52" width="3" height="6" rx="1" fill="#FACC15" />

      {/* Left Pins */}
      <rect x="6" y="18" width="6" height="3" rx="1" fill="#FACC15" />
      <rect x="6" y="25" width="6" height="3" rx="1" fill="#FACC15" />
      <rect x="6" y="32" width="6" height="3" rx="1" fill="#FACC15" />
      <rect x="6" y="39" width="6" height="3" rx="1" fill="#FACC15" />
      <rect x="6" y="46" width="6" height="3" rx="1" fill="#FACC15" />

      {/* Right Pins */}
      <rect x="52" y="18" width="6" height="3" rx="1" fill="#FACC15" />
      <rect x="52" y="25" width="6" height="3" rx="1" fill="#FACC15" />
      <rect x="52" y="32" width="6" height="3" rx="1" fill="#FACC15" />
      <rect x="52" y="39" width="6" height="3" rx="1" fill="#FACC15" />
      <rect x="52" y="46" width="6" height="3" rx="1" fill="#FACC15" />

      {/* Main Ceramic Body */}
      <rect x="10" y="10" width="44" height="44" rx="8" fill="url(#chipBody)" stroke="#6366F1" strokeWidth="1.5" />

      {/* Center Silicon Die with Neural Node Network */}
      <rect x="19" y="19" width="26" height="26" rx="5" fill="#0F172A" stroke="url(#chipGlow)" strokeWidth="1.2" />

      {/* Neural Node Network */}
      <circle cx="26" cy="26" r="2.5" fill="#38BDF8" />
      <circle cx="38" cy="26" r="2.5" fill="#38BDF8" />
      <circle cx="32" cy="38" r="2.5" fill="#818CF8" />
      <line x1="26" y1="26" x2="38" y2="26" stroke="#38BDF8" strokeWidth="1.5" />
      <line x1="26" y1="26" x2="32" y2="38" stroke="#818CF8" strokeWidth="1.5" />
      <line x1="38" y1="26" x2="32" y2="38" stroke="#818CF8" strokeWidth="1.5" />
    </svg>
  );
}

// Windows 11 "Settings / Skills" Icon (Fluent Deep Blue Dual Gears)
export function Win11SettingsIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      {/* Main Gear Teeth & Body */}
      <path
        d="M32 12C33.6 12 35 13.4 35 15V17.2C36.7 17.7 38.3 18.5 39.8 19.5L41.6 18.2C43 17.2 45 17.4 46.1 18.7L48.7 21.3C49.8 22.4 50 24.4 49 25.8L47.7 27.6C48.7 29.1 49.5 30.7 50 32.4H52.2C53.8 32.4 55.2 33.8 55.2 35.4V39C55.2 40.6 53.8 42 52.2 42H50C49.5 43.7 48.7 45.3 47.7 46.8L49 48.6C50 50 49.8 52 48.7 53.1L46.1 55.7C45 56.8 43 57 41.6 56L39.8 54.7C38.3 55.7 36.7 56.5 35 57V59.2C35 60.8 33.6 62.2 32 62.2H28.4C26.8 62.2 25.4 60.8 25.4 59.2V57C23.7 56.5 22.1 55.7 20.6 54.7L18.8 56C17.4 57 15.4 56.8 14.3 55.7L11.7 53.1C10.6 52 10.4 50 11.4 48.6L12.7 46.8C11.7 45.3 10.9 43.7 10.4 42H8.2C6.6 42 5.2 40.6 5.2 39V35.4C5.2 33.8 6.6 32.4 8.2 32.4H10.4C10.9 30.7 11.7 29.1 12.7 27.6L11.4 25.8C10.4 24.4 10.6 22.4 11.7 21.3L14.3 18.7C15.4 17.6 17.4 17.4 18.8 18.4L20.6 19.7C22.1 18.7 23.7 17.9 25.4 17.4V15.2C25.4 13.6 26.8 12.2 28.4 12.2H32Z"
        fill="url(#gearGrad)"
      />
      {/* Inner Hole */}
      <circle cx="30.2" cy="37.2" r="10" fill="#0C4A6E" />
      <circle cx="30.2" cy="37.2" r="6" fill="#38BDF8" opacity="0.8" />
    </svg>
  );
}

// Windows 11 "Terminal" Icon (Dark Sleek Console with Blue Angle Prompt)
export function Win11TerminalIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="termBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Terminal Window Box */}
      <rect x="6" y="10" width="52" height="44" rx="7" fill="url(#termBg)" stroke="#475569" strokeWidth="1.5" />
      {/* Top Title Bar Line */}
      <line x1="6" y1="21" x2="58" y2="21" stroke="#334155" strokeWidth="1" />
      {/* Top Window Control Dots */}
      <circle cx="14" cy="15.5" r="2" fill="#EF4444" />
      <circle cx="20" cy="15.5" r="2" fill="#F59E0B" />
      <circle cx="26" cy="15.5" r="2" fill="#10B981" />

      {/* Prompt `>` and Cursor `_` */}
      <path d="M16 28L25 35L16 42" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="29" y="40" width="12" height="3" rx="1" fill="#F8FAFC" />
    </svg>
  );
}

// Windows 11 "Resume / Document" Icon (Fluent Light Blue Document)
export function Win11ResumeIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="docBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Main Document Body */}
      <path
        d="M12 10C12 7.79 13.79 6 16 6H38L52 20V54C52 56.21 50.21 58 48 58H16C13.79 58 12 56.21 12 54V10Z"
        fill="url(#docBody)"
        stroke="#7DD3FC"
        strokeWidth="1"
      />
      {/* Folded Corner */}
      <path d="M38 6V18C38 19.1 38.9 20 40 20H52L38 6Z" fill="#0369A1" />

      {/* Text Lines */}
      <rect x="20" y="26" width="24" height="3" rx="1.5" fill="#FFFFFF" />
      <rect x="20" y="33" width="24" height="3" rx="1.5" fill="#E0F2FE" />
      <rect x="20" y="40" width="18" height="3" rx="1.5" fill="#E0F2FE" />
      <rect x="20" y="47" width="14" height="3" rx="1.5" fill="#BAE6FD" />
    </svg>
  );
}
