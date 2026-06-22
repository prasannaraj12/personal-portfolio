import { useState, useEffect, useRef } from 'react'
import { AudioManager } from '../lib/AudioManager'

interface CinematicIntroProps {
  onComplete: () => void
}

const INTRO_FRAMES = [
  { text: '', duration: 500, style: 'blank' },
  { text: 'A PORTFOLIO EXPERIENCE', duration: 2000, style: 'title' },
  { text: 'BY PRASANNA RAJ R', duration: 2000, style: 'subtitle' },
  { text: 'AI AGENT ENGINEER', duration: 1500, style: 'role' },
  { text: '', duration: 500, style: 'blank' },
]

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [visible, setVisible] = useState(false)
  const [glitching, setGlitching] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Do NOT call playBoot here — AudioContext requires a user gesture first

  useEffect(() => {
    if (currentFrame >= INTRO_FRAMES.length) {
      onComplete()
      return
    }

    const frame = INTRO_FRAMES[currentFrame]

    // Glitch effect before showing text
    if (frame.style !== 'blank') {
      setGlitching(true)
      setTimeout(() => {
        setGlitching(false)
        setVisible(true)
      }, 150)
    } else {
      setVisible(true)
    }

    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentFrame(prev => prev + 1)
      }, 300)
    }, frame.duration)

    return () => clearTimeout(timer)
  }, [currentFrame, onComplete])

  const frame = INTRO_FRAMES[currentFrame]
  if (!frame) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)',
      }}
    >
      {/* Animated vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Scanlines */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)',
        }}
      />

      {/* Main text */}
      <div 
        className="relative text-center transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.9)',
          filter: glitching ? 'blur(2px) hue-rotate(90deg)' : 'blur(0px)',
        }}
      >
        {frame.style === 'title' && (
          <>
            <h1 
              className="font-arcade text-neon-cyan text-2xl md:text-4xl tracking-widest"
              style={{ 
                textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 80px #00ffff',
                animation: visible ? 'flicker 0.1s infinite' : 'none',
              }}
            >
              {frame.text}
            </h1>
            <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          </>
        )}

        {frame.style === 'subtitle' && (
          <h2 
            className="font-terminal text-neon-pink text-xl md:text-2xl tracking-wider"
            style={{ 
              textShadow: '0 0 15px #ff00ff, 0 0 30px #ff00ff',
            }}
          >
            {frame.text}
          </h2>
        )}

        {frame.style === 'role' && (
          <div>
            <p 
              className="font-terminal text-white/80 text-lg"
              style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
            >
              {frame.text}
            </p>
            <div className="mt-6 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/30" />

      {/* Progress indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          {INTRO_FRAMES.map((_, i) => (
            <div 
              key={i}
              className="w-8 h-1 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i <= currentFrame ? '#00ffff' : 'rgba(255,255,255,0.2)',
                boxShadow: i <= currentFrame ? '0 0 10px #00ffff' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}