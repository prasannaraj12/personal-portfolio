import { useEffect, useRef, useCallback } from 'react'
import { useArcadeStore } from '../../hooks/useArcadeStore'
import { AudioManager } from '../../lib/AudioManager'
import { HUD } from './HUD'
import { HeroSection } from './HeroSection'
import { WorksSection } from './WorksSection'
import { StackSection } from './StackSection'
import { TerminalSection } from './TerminalSection'
import { ContactSection } from './ContactSection'
import { Navigation } from './Navigation'

export function ArcadeScreen() {
  const { screenContent, cameraMode, setCameraMode } = useArcadeStore()
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to top when content changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }, [screenContent])

  // Handle click on the idle screen to enter play mode
  const handleIdleClick = useCallback(() => {
    if (cameraMode === 'room') {
      AudioManager.getInstance().playClick()
      setCameraMode('screen')
    }
  }, [cameraMode, setCameraMode])

  if (cameraMode === 'room') {
    return (
      <div 
        className="w-full h-full bg-black/90 flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleIdleClick}
      >
        <div className="text-center animate-pulse-neon">
          <p className="font-arcade text-neon-cyan text-xs mb-2">
            ARCADE PORTFOLIO v3.0
          </p>
          <p className="font-terminal text-white/70 text-sm mb-1">
            CLICK OR DOUBLE-CLICK TO ENTER
          </p>
          <p className="font-terminal text-neon-pink/70 text-xs">
            OR CLICK "INSERT COIN" BELOW
          </p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-neon-cyan animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-arcade-dark overflow-y-auto scrollbar-arcade relative"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)',
      }}
    >
      {/* CRT Scanline Overlay — absolute, not fixed, so it stays inside the Html container */}
      <div className="absolute inset-0 pointer-events-none z-50 crt-scanlines opacity-30" />

      {/* Screen glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,255,255,0.05) 100%)',
        }}
      />

      {/* HUD Header */}
      <HUD />

      {/* Navigation */}
      <Navigation />

      {/* Content Sections */}
      <main className="pb-8 px-4">
        {screenContent === 'hero' && <HeroSection />}
        {screenContent === 'works' && <WorksSection />}
        {screenContent === 'stack' && <StackSection />}
        {screenContent === 'terminal' && <TerminalSection />}
        {screenContent === 'contact' && <ContactSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-neon-cyan/20 py-4 px-4 text-center">
        <p className="font-terminal text-neon-cyan/50 text-xs">
          {'>'} ARCADE_OS v3.0 | ALL SYSTEMS NOMINAL
        </p>
      </footer>
    </div>
  )
}