import { useState, useRef, useEffect } from 'react'
import { useArcadeStore } from '../../hooks/useArcadeStore'
import { AudioManager } from '../../lib/AudioManager'
import { ExternalLink, Globe, Database, Leaf, Plane, Zap, Users } from 'lucide-react'

const PROJECTS = [
  {
    title: 'AGENTDB',
    category: 'LIVE SYSTEM',
    year: '2026',
    description: 'Natural language SQL generator and agent query routing system. Supports 50+ query types with sub-2.0s response latency and 98.5% validation accuracy.',
    highlight: '50+ queries | <2s latency | 98.5% accuracy',
    tech: ['LangGraph', 'FastAPI', 'PostgreSQL', 'Gemini 2.5 Flash', 'LangChain'],
    color: '#00ffff',
    icon: Database,
    link: 'https://agent-db-ten.vercel.app',
    status: 'LIVE',
  },
  {
    title: 'CAMPUS-CONNECT',
    category: 'LIVE PWA',
    year: '2024',
    description: 'Mobile-responsive Progressive Web App for event management with RBAC, offline QR code check-in, and real-time data sync.',
    highlight: '120ms load | 95% Lighthouse | Real-time sync',
    tech: ['React', 'Convex', 'TypeScript', 'Tailwind CSS', 'QR Engine'],
    color: '#ff00ff',
    icon: Globe,
    link: 'https://campusonnectcc.vercel.app',
    status: 'LIVE',
  },
  {
    title: 'URBANBLOOM AI',
    category: 'HARDWARE PROTOTYPE',
    year: '2024',
    description: 'IoT smart gardening system connecting soil sensors to OpenAI API. LLM translates telemetry into plant care dialogue via Telegram.',
    highlight: '10s polling | 92% diagnosis | 10+ scenarios',
    tech: ['Arduino C++', 'Python', 'FastAPI', 'OpenAI API', 'SQLite'],
    color: '#00ff41',
    icon: Leaf,
    link: '#',
    status: 'PROTOTYPE',
  },
  {
    title: 'SIH 2024 DRONES',
    category: 'HACKATHON WINNER',
    year: '2024',
    description: 'Real-time drone tracking map with OCR + NER processing for disaster field reports. Autonomous rescue routing suggestions.',
    highlight: '<250ms sync | 94% OCR | 36h build',
    tech: ['Python', 'FastAPI', 'Docker', 'Tesseract OCR', 'Leaflet JS'],
    color: '#ff6600',
    icon: Plane,
    link: '#',
    status: 'AWARDED',
  },
  {
    title: 'NOVITECH INTERN',
    category: 'PRODUCTION SHIPPED',
    year: '2024',
    description: 'Data pre-processing scripts and automated outlier detection preventing ML pipeline crashes during bulk nightly training.',
    highlight: '40% faster | 5+ datasets | 3+ metrics',
    tech: ['Python', 'Pandas', 'NumPy', 'PostgreSQL', 'Jupyter'],
    color: '#ff0040',
    icon: Zap,
    link: '#',
    status: 'SHIPPED',
  },
  {
    title: '1M1B GREEN INTERN',
    category: 'SOCIAL IMPACT WIN',
    year: '2025',
    description: 'Managed 100+ student cohorts in green sustainability programs. Synthesized workshop feedback into UN-SGD Goal 13 dashboards.',
    highlight: '1M+ beneficiaries | 100+ students | 3+ cohorts',
    tech: ['Data Viz', 'UN-SDG Metrics', 'Stakeholder Coordination'],
    color: '#ffff00',
    icon: Users,
    link: '#',
    status: 'IMPACT',
  },
]

export function WorksSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="relative">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00ffff, transparent)',
          filter: 'blur(100px)',
        }}
      />

      <div className="text-center mb-8">
        <h2 className="font-arcade text-neon-cyan text-lg mb-2 relative inline-block">
          <span className="relative z-10">SHIPPED WORKS</span>
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse" />
        </h2>
        <p className="font-terminal text-white/50 text-sm">Select a cartridge to inspect details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {PROJECTS.map((project, i) => (
          <HolographicCartridge 
            key={i} 
            project={project} 
            index={i}
            isActive={activeCard === i}
            onActivate={() => setActiveCard(i)}
            onDeactivate={() => setActiveCard(null)}
          />
        ))}
      </div>
    </section>
  )
}

function HolographicCartridge({ 
  project, 
  index, 
  isActive,
  onActivate,
  onDeactivate,
}: { 
  project: typeof PROJECTS[0]
  index: number
  isActive: boolean
  onActivate: () => void
  onDeactivate: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const [glitching, setGlitching] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = project.icon

  useEffect(() => {
    if (!hovered) return
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitching(true)
        setTimeout(() => setGlitching(false), 100)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [hovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(500px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg) scale(1)'
    }
    setHovered(false)
    onDeactivate()
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => {
        setHovered(true)
        onActivate()
        AudioManager.getInstance().playHover()
      }}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={() => AudioManager.getInstance().playClick()}
      className="relative glass-card cursor-pointer overflow-hidden transition-all duration-300 group"
      style={{ 
        borderColor: hovered ? `${project.color}60` : 'rgba(255,255,255,0.1)',
        boxShadow: hovered 
          ? `0 0 30px ${project.color}40, 0 0 60px ${project.color}20, inset 0 0 30px ${project.color}10`
          : '0 8px 32px rgba(0,0,0,0.3)',
        transform: glitching ? 'translateX(2px)' : 'translateX(0)',
      }}
    >
      {/* Scanline overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />

      {/* Animated header stripe */}
      <div 
        className="h-2 w-full relative overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)`,
            animation: 'shimmer 2s linear infinite',
          }}
        />
      </div>

      <div className="p-4">
        {/* Label area with icon */}
        <div className="bg-white/5 border border-white/10 p-3 mb-3 relative overflow-hidden glassmorphism">
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: project.color }} />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" style={{ borderColor: project.color }} />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" style={{ borderColor: project.color }} />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: project.color }} />

          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Icon size={14} style={{ color: project.color }} />
              <span className="font-arcade text-[10px]" style={{ color: project.color }}>
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-terminal text-white/30 text-xs">{project.year}</span>
              <span 
                className="font-terminal text-[9px] px-1.5 py-0.5"
                style={{ 
                  color: project.color,
                  backgroundColor: `${project.color}20`,
                  border: `1px solid ${project.color}40`
                }}
              >
                {project.status}
              </span>
            </div>
          </div>

          <h3 className="font-arcade text-white text-sm mb-1" style={{ textShadow: `0 0 10px ${project.color}40` }}>
            {project.title}
          </h3>

          <p className="font-terminal text-white/60 text-xs leading-relaxed mb-2">
            {project.description}
          </p>

          {/* Highlight stats */}
          <div 
            className="font-terminal text-[10px] py-1 px-2 border-l-2"
            style={{ 
              borderColor: project.color,
              backgroundColor: `${project.color}10`,
              color: project.color,
            }}
          >
            {project.highlight}
          </div>
        </div>

        {/* Tech tags with pulse animation */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((t, j) => (
            <span 
              key={j}
              className="font-terminal text-[9px] px-2 py-0.5 border transition-all duration-300"
              style={{ 
                borderColor: hovered ? `${project.color}60` : `${project.color}30`,
                color: project.color,
                animation: hovered ? `pulse 2s ease-in-out ${j * 0.1}s infinite` : 'none',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link button */}
        {project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-terminal group"
            style={{ color: project.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <Globe size={12} />
            <span className="group-hover:underline">Visit Live App</span>
            <ExternalLink size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        )}
      </div>

      {/* Holographic sheen effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${project.color}20 50%, transparent 60%)`,
          backgroundSize: '200% 200%',
          animation: hovered ? 'shimmer 3s ease-in-out infinite' : 'none',
        }}
      />

      {/* Active indicator line */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
        style={{ 
          width: isActive ? '100%' : '0%',
          backgroundColor: project.color,
          boxShadow: `0 0 10px ${project.color}`,
        }}
      />

      {/* Premium card shine on hover */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
          backgroundSize: '200% 200%',
          animation: 'shimmer 2s ease-in-out infinite',
        }}
      />
    </div>
  )
}