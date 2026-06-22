import { useEffect, useState, useRef, useCallback } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter'
import { AudioManager } from '../../lib/AudioManager'
import { useArcadeStore } from '../../hooks/useArcadeStore'
import { MagneticButton } from '../effects/MagneticButton'
import { TextScramble } from '../effects/TextScramble'
import { ChevronRight, Rocket, Award, Shield, MapPin, GraduationCap, Trophy, Sparkles } from 'lucide-react'

// Animated counter hook
function useAnimatedCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [start, target, duration])

  return count
}

// Floating particle component
function FloatingParticle({ delay, color, size = 2, seed }: { delay: number; color: string; size?: number; seed: number }) {
  const initialX = ((seed * 1327) % 100)
  const initialY = ((seed * 2657) % 100)
  const [pos, setPos] = useState({ x: initialX, y: initialY })

  useEffect(() => {
    const interval = setInterval(() => {
      setPos({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })
    }, 3000 + delay)
    return () => clearInterval(interval)
  }, [delay])

  const px = Math.max(1, Math.round(size))
  return (
    <div
      className="absolute rounded-full transition-all duration-[3000ms] ease-in-out"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: px,
        height: px,
        backgroundColor: color,
        boxShadow: `0 0 ${px * 3}px ${color}`,
        opacity: 0.6,
      }}
    />
  )
}

// Holographic text effect
function HolographicText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute inset-0 opacity-50 blur-[1px]"
        style={{ 
          color: '#00ffff',
          transform: 'translateX(2px)',
        }}
      >
        {text}
      </span>
      <span 
        className="absolute inset-0 opacity-50 blur-[1px]"
        style={{ 
          color: '#ff00ff',
          transform: 'translateX(-2px)',
        }}
      >
        {text}
      </span>
    </span>
  )
}

// 3D rotating skill cylinder — uses rAF instead of setInterval (no React re-renders at 20fps)
function SkillCylinder() {
  const skills = ['LangGraph', 'LangChain', 'FastAPI', 'React', 'GenAI', 'Python', 'PostgreSQL', 'Gemini']
  const containerRef = useRef<HTMLDivElement>(null)
  const rotationRef = useRef(0)
  const rafRef = useRef<number>()

  useEffect(() => {
    const tick = () => {
      rotationRef.current += 0.3
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(${rotationRef.current}deg)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <div className="relative w-32 h-32 mx-auto mb-6" style={{ perspective: '400px' }}>
      <div 
        ref={containerRef}
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * 360
          return (
            <div
              key={skill}
              className="absolute inset-0 flex items-center justify-center font-terminal text-xs"
              style={{
                transform: `rotateX(${angle}deg) translateZ(60px)`,
                color: i % 2 === 0 ? '#00ffff' : '#ff00ff',
                textShadow: `0 0 10px ${i % 2 === 0 ? '#00ffff' : '#ff00ff'}`,
                backfaceVisibility: 'hidden',
              }}
            >
              {skill}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Animated background orbs
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #00ffff, transparent)',
          filter: 'blur(60px)',
          top: '10%',
          left: '10%',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #ff00ff, transparent)',
          filter: 'blur(80px)',
          bottom: '10%',
          right: '10%',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />
    </div>
  )
}

export function HeroSection() {
  const { displayText, isComplete } = useTypewriter('AI AGENT ENGINEER & GenAI BACKEND DEVELOPER', 40, true)
  const [mascotFrame, setMascotFrame] = useState(0)
  const [showStats, setShowStats] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)
  const [titleScrambled, setTitleScrambled] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const projectCounter = useAnimatedCounter(6, 1500, showStats)
  const hackathonCounter = useAnimatedCounter(3, 1500, showStats)
  const certCounter = useAnimatedCounter(2, 1500, showStats)

  useEffect(() => {
    const interval = setInterval(() => {
      setMascotFrame(prev => (prev + 1) % 4)
    }, 250)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 300)
      }, 200)

      setTimeout(() => {
        setShowStats(true)
      }, 500)

      setTimeout(() => {
        setTitleScrambled(true)
      }, 1000)
    }
  }, [isComplete])

  const mascotPixels = [
    '  ██  ',
    ' ████ ',
    '██  ██',
    '██████',
    ' █  █ ',
  ]

  return (
    <section ref={sectionRef} className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative">
      {/* Background orbs */}
      <BackgroundOrbs />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 200} 
            color={i % 2 === 0 ? '#00ffff' : '#ff00ff'}
            size={1 + (i % 3)}
            seed={i + 1}
          />
        ))}
      </div>

      {/* 8-bit Mascot with glow ring */}
      <div className="mb-6 relative group">
        <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/30 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-0 rounded-full bg-neon-cyan/5 blur-xl animate-pulse" />
        <div className="w-28 h-28 border-2 border-neon-cyan/50 bg-black/50 flex items-center justify-center animate-float relative z-10 backdrop-blur-sm">
          <pre className="font-terminal text-neon-cyan text-xs leading-none">
            {mascotPixels.join('\n')}
          </pre>
        </div>
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-neon-pink rounded-full animate-pulse" />

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
          <div className="absolute -top-1 left-1/2 w-2 h-2 bg-neon-cyan rounded-full" style={{ transform: 'translateX(-50%)' }} />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
          <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 bg-neon-pink rounded-full" style={{ transform: 'translateY(-50%)' }} />
        </div>

        {/* Sparkle effect */}
        <Sparkles 
          size={16} 
          className="absolute -top-4 -left-4 text-neon-yellow animate-pulse" 
          style={{ animationDuration: '1.5s' }}
        />
      </div>

      {/* Name with holographic effect */}
      <h2 className="font-arcade text-neon-pink text-sm mb-2 tracking-widest">
        {titleScrambled ? (
          <TextScramble text="PRASANNA RAJ R" speed={30} />
        ) : (
          <HolographicText text="PRASANNA RAJ R" />
        )}
      </h2>

      {/* Typewriter Headline with glitch effect */}
      <h1 
        className={`font-arcade text-neon-cyan text-xs md:text-sm mb-4 min-h-[3rem] transition-all duration-100 ${glitchActive ? 'translate-x-1' : ''}`}
        style={glitchActive ? { textShadow: '2px 0 #ff00ff, -2px 0 #00ffff' } : { textShadow: '0 0 10px #00ffff' }}
      >
        {displayText}
        {!isComplete && <span className="animate-blink">_</span>}
      </h1>

      {/* Location & Education badges with glass effect */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {[
          { icon: MapPin, text: 'Bengaluru, India', color: '#00ffff' },
          { icon: GraduationCap, text: 'B.E. AI & ML | 8.91 CGPA', color: '#ff00ff' },
          { icon: Trophy, text: 'SIH 2024 National Finalist', color: '#00ff41' },
        ].map((badge, i) => {
          const Icon = badge.icon
          return (
            <div 
              key={i}
              className="flex items-center gap-1.5 glass-card px-3 py-1.5 transition-all duration-300 hover:scale-105"
              style={{ borderColor: `${badge.color}30` }}
            >
              <Icon size={12} style={{ color: badge.color }} />
              <span className="font-terminal text-xs" style={{ color: badge.color }}>{badge.text}</span>
            </div>
          )
        })}
      </div>

      {/* Skill Cylinder */}
      <SkillCylinder />

      {/* Subtitle with typing effect */}
      <p className="font-terminal text-white/70 text-sm max-w-lg mb-6 leading-relaxed">
        Building intelligent agent systems with <span className="text-neon-cyan">LangGraph</span>,{' '}
        <span className="text-neon-pink">LangChain</span>, and{' '}
        <span className="text-neon-green">GenAI</span>.
        Specializing in autonomous reasoning, multi-agent orchestration, and 
        streaming backend architectures.
      </p>

      {/* Animated Stats Grid */}
      <div 
        className={`grid grid-cols-3 gap-3 mb-6 w-full max-w-md transition-all duration-700 ${showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {[
          { icon: Rocket, label: 'PROJECTS', value: projectCounter, color: '#00ffff' },
          { icon: Award, label: 'HACKATHONS', value: hackathonCounter, color: '#ff00ff' },
          { icon: Shield, label: 'CERTS', value: certCounter, color: '#00ff41' },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div 
              key={i}
              className="border bg-black/40 p-3 text-center relative overflow-hidden group glass-card transition-all duration-300 hover:scale-105"
              style={{ borderColor: `${stat.color}40` }}
              onMouseEnter={() => AudioManager.getInstance().playHover()}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${stat.color}, transparent)` }}
              />
              <Icon size={16} className="mx-auto mb-1" style={{ color: stat.color }} />
              <div className="font-arcade text-lg" style={{ color: stat.color, textShadow: `0 0 10px ${stat.color}` }}>
                {stat.value}+
              </div>
              <div className="font-terminal text-white/50 text-[10px]">{stat.label}</div>
            </div>
          )
        })}
      </div>

      {/* CTA Buttons with magnetic effect */}
      <div className="flex gap-4">
        <MagneticButton
          onClick={() => {
            AudioManager.getInstance().playClick()
            useArcadeStore.getState().setScreenContent('works')
          }}
          strength={0.2}
        >
          <button
            onMouseEnter={() => AudioManager.getInstance().playHover()}
            className="arcade-btn bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan px-6 py-3 font-arcade text-xs hover:bg-neon-cyan/30 transition-all relative overflow-hidden group"
            style={{ textShadow: '0 0 10px #00ffff' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket size={12} />
              VIEW WORKS
            </span>
            <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </MagneticButton>

        <MagneticButton
          onClick={() => {
            AudioManager.getInstance().playClick()
            useArcadeStore.getState().setScreenContent('contact')
          }}
          strength={0.2}
        >
          <button
            onMouseEnter={() => AudioManager.getInstance().playHover()}
            className="arcade-btn bg-neon-pink/20 border-2 border-neon-pink text-neon-pink px-6 py-3 font-arcade text-xs hover:bg-neon-pink/30 transition-all relative overflow-hidden group"
            style={{ textShadow: '0 0 10px #ff00ff' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={12} />
              HIRE ME
            </span>
            <div className="absolute inset-0 bg-neon-pink/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </MagneticButton>
      </div>

      {/* Scroll indicator with wave animation */}
      <div className="mt-8 flex flex-col items-center gap-1">
        <div className="w-4 h-6 border-2 border-neon-cyan/50 rounded-full flex justify-center pt-1">
          <div className="w-1 h-1.5 bg-neon-cyan rounded-full animate-bounce" />
        </div>
        <ChevronRight size={16} className="text-neon-cyan/50 rotate-90 animate-bounce" />
      </div>
    </section>
  )
}