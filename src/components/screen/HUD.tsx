import { useEffect, useState } from 'react'
import { useArcadeStore } from '../../hooks/useArcadeStore'

export function HUD() {
  const { score, stage, playerName, coinInserted } = useArcadeStore()
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      useArcadeStore.getState().incrementScore(1)
    }, 1000)
    return () => clearInterval(scoreInterval)
  }, [])

  return (
    <header className="sticky top-0 left-0 right-0 z-30 bg-arcade-dark/90 backdrop-blur-sm border-b border-neon-cyan/30">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left: Score */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-arcade text-neon-yellow text-[10px]">SCORE</span>
            <span className="font-terminal text-neon-cyan text-lg tabular-nums" style={{ textShadow: '0 0 10px #00ffff' }}>
              {score.toString().padStart(8, '0')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-arcade text-neon-pink text-[10px]">HI</span>
            <span className="font-terminal text-neon-pink text-lg tabular-nums" style={{ textShadow: '0 0 10px #ff00ff' }}>
              00999999
            </span>
          </div>
        </div>

        {/* Center: Stage with animated indicators */}
        <div className="text-center">
          <span className="font-arcade text-neon-green text-[10px] block" style={{ textShadow: '0 0 5px #00ff41' }}>
            STAGE {stage}
          </span>
          <div className="flex gap-1 justify-center mt-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rotate-45 transition-all duration-300 ${i < (coinInserted ? 3 : 1) ? 'bg-neon-cyan' : 'bg-white/20'}`}
                style={{ 
                  boxShadow: i < (coinInserted ? 3 : 1) ? '0 0 8px #00ffff' : 'none',
                  animation: i < (coinInserted ? 3 : 1) ? 'pulse 1s ease-in-out infinite' : 'none',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Player & Time */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="font-arcade text-neon-orange text-[10px] block" style={{ textShadow: '0 0 5px #ff6600' }}>
              {playerName}
            </span>
            <span className="font-terminal text-white/50 text-xs">
              {time.toLocaleTimeString('en-US', { hour12: false })}
            </span>
          </div>
          <div className="w-8 h-8 border-2 border-neon-cyan rounded-full flex items-center justify-center relative">
            <span className="font-arcade text-neon-cyan text-[8px]">P1</span>
            <div className="absolute inset-0 rounded-full border border-neon-cyan/30 animate-ping" style={{ animationDuration: '2s' }} />
          </div>
        </div>
      </div>

      {/* Health bar with animated gradient */}
      <div className="h-1.5 bg-black/50 relative overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-green transition-all duration-1000"
          style={{ 
            width: `${(score % 1000) / 10}%`,
            boxShadow: '0 0 10px #00ffff',
          }}
        />
        {/* Animated scan line — pure CSS, no React state */}
        <div 
          className="absolute top-0 bottom-0 w-4 bg-white/20"
          style={{ animation: 'scanline-x 2s linear infinite' }}
        />
      </div>
    </header>
  )
}