import { useEffect, useState, useRef } from 'react'
import { AudioManager } from '../lib/AudioManager'

interface BootSequenceProps {
  onComplete: () => void
}

const BOOT_LINES = [
  { text: 'Initializing ARCADE_OS v3.0...', delay: 100, color: '#00ffff' },
  { text: 'Loading memory modules... [OK]', delay: 200, color: '#00ff41' },
  { text: 'Checking video buffer... [OK]', delay: 150, color: '#00ff41' },
  { text: 'Mounting 3D geometry... [OK]', delay: 180, color: '#00ff41' },
  { text: 'Loading shaders... [OK]', delay: 200, color: '#00ff41' },
  { text: 'Initializing WebGL context... [OK]', delay: 250, color: '#00ff41' },
  { text: 'Loading portfolio assets... [OK]', delay: 300, color: '#00ff41' },
  { text: 'Connecting to mainframe... [OK]', delay: 200, color: '#00ff41' },
  { text: 'Decrypting secure channels... [OK]', delay: 350, color: '#00ff41' },
  { text: 'System ready.', delay: 400, color: '#ffff00' },
  { text: 'PRESS START', delay: 500, blink: true, color: '#ff00ff' },
]

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [showCursor, setShowCursor] = useState(true)
  const [ready, setReady] = useState(false)
  const [glitchLine, setGlitchLine] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const audioPlayed = useRef(false)

  // Play boot sound on first interaction (after AudioContext is unlocked by user gesture)
  useEffect(() => {
    const playOnFirstInteraction = () => {
      if (!audioPlayed.current) {
        audioPlayed.current = true
        AudioManager.getInstance().playBoot()
        window.removeEventListener('click', playOnFirstInteraction)
        window.removeEventListener('keydown', playOnFirstInteraction)
      }
    }
    window.addEventListener('click', playOnFirstInteraction)
    window.addEventListener('keydown', playOnFirstInteraction)
    return () => {
      window.removeEventListener('click', playOnFirstInteraction)
      window.removeEventListener('keydown', playOnFirstInteraction)
    }
  }, [])

  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1)
        // Random glitch effect
        if (Math.random() > 0.7) {
          setGlitchLine(visibleLines)
          setTimeout(() => setGlitchLine(null), 100)
        }
      }, BOOT_LINES[visibleLines]?.delay || 100)
      return () => clearTimeout(timer)
    } else {
      setReady(true)
    }
  }, [visibleLines])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = () => {
      if (ready) {
        AudioManager.getInstance().playClick()
        onComplete()
      }
    }
    const handleClick = () => {
      if (ready) {
        AudioManager.getInstance().playClick()
        onComplete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('click', handleClick)
    }
  }, [ready, onComplete])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [visibleLines])

  return (
    <div 
      className="absolute inset-0 z-50 bg-black flex items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)',
      }}
    >
      {/* Animated vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)',
        }}
      />

      <div className="w-full max-w-2xl p-8 relative">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/30" />
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-neon-cyan/30" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/30" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/30" />

        <div 
          ref={containerRef}
          className="font-terminal text-crt-green text-xl md:text-2xl leading-relaxed h-[60vh] overflow-y-auto"
        >
          <div className="mb-4 text-neon-cyan text-sm">
            {'╔' + '═'.repeat(58) + '╗'}
          </div>
          <div className="mb-4 text-neon-cyan text-sm text-center">
            {'║  ARCADE_OS BOOT SEQUENCE v3.0                         ║'}
          </div>
          <div className="mb-4 text-neon-cyan text-sm">
            {'╚' + '═'.repeat(58) + '╝'}
          </div>

          {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
            <div 
              key={i} 
              className="mb-1 transition-all duration-100"
              style={{
                transform: glitchLine === i ? 'translateX(2px)' : 'translateX(0)',
                filter: glitchLine === i ? 'hue-rotate(90deg)' : 'none',
              }}
            >
              <span className="text-neon-cyan mr-2">{'>'}</span>
              <span 
                className={line.blink ? 'animate-blink text-neon-pink' : ''}
                style={{ color: line.color || '#00ff41' }}
              >
                {line.text}
              </span>
              {i === visibleLines - 1 && showCursor && (
                <span className="inline-block w-3 h-5 bg-crt-green ml-1 animate-blink" />
              )}
            </div>
          ))}

          {ready && (
            <div className="mt-8 text-center animate-scaleIn">
              <p className="text-neon-pink text-lg animate-pulse font-arcade">
                [ CLICK ANYWHERE OR PRESS ANY KEY TO START ]
              </p>
              <div className="mt-4 flex justify-center gap-2">
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

        {/* Progress bar */}
        <div className="mt-4 h-1 bg-black/50 border border-white/10">
          <div 
            className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink transition-all duration-300"
            style={{ 
              width: `${(visibleLines / BOOT_LINES.length) * 100}%`,
              boxShadow: '0 0 10px #00ffff',
            }}
          />
        </div>
      </div>
    </div>
  )
}