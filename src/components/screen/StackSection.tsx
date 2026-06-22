import { useState, useEffect, useRef } from 'react'
import { AudioManager } from '../../lib/AudioManager'

const STACK_CATEGORIES = [
  {
    name: 'AGENT FRAMEWORKS',
    color: '#00ffff',
    icon: '🤖',
    tools: [
      { name: 'LangGraph', level: 95, status: 'ACTIVE', description: 'Agentic reasoning & planning' },
      { name: 'LangChain', level: 92, status: 'ACTIVE', description: 'LLM orchestration & chains' },
      { name: 'crewAI', level: 78, status: 'ACTIVE', description: 'Multi-agent collaboration' },
      { name: 'OpenAI API', level: 90, status: 'ACTIVE', description: 'GPT models integration' },
      { name: 'Gemini API', level: 88, status: 'ACTIVE', description: 'Google GenAI models' },
      { name: 'Claude API', level: 82, status: 'STANDBY', description: 'Anthropic integration' },
    ],
  },
  {
    name: 'BACKEND & DATA',
    color: '#ff00ff',
    icon: '⚡',
    tools: [
      { name: 'FastAPI', level: 94, status: 'ACTIVE', description: 'Streaming backends' },
      { name: 'Python', level: 96, status: 'ACTIVE', description: 'Primary language' },
      { name: 'Node.js', level: 80, status: 'ACTIVE', description: 'Express & APIs' },
      { name: 'PostgreSQL', level: 85, status: 'ACTIVE', description: 'Relational data' },
      { name: 'MongoDB', level: 78, status: 'STANDBY', description: 'Document store' },
      { name: 'Redis', level: 75, status: 'STANDBY', description: 'Caching layer' },
    ],
  },
  {
    name: 'FRONTEND & CREATIVE',
    color: '#00ff41',
    icon: '🎨',
    tools: [
      { name: 'React', level: 88, status: 'ACTIVE', description: 'Component architecture' },
      { name: 'Next.js', level: 85, status: 'ACTIVE', description: 'Full-stack React' },
      { name: 'TypeScript', level: 90, status: 'ACTIVE', description: 'Type safety' },
      { name: 'TailwindCSS', level: 92, status: 'ACTIVE', description: 'Utility styling' },
      { name: 'Framer Motion', level: 82, status: 'ACTIVE', description: 'Animations' },
      { name: 'Three.js', level: 70, status: 'STANDBY', description: '3D graphics' },
    ],
  },
  {
    name: 'DEVOPS & TOOLS',
    color: '#ff6600',
    icon: '🛠️',
    tools: [
      { name: 'Docker', level: 80, status: 'ACTIVE', description: 'Containerization' },
      { name: 'GitHub Actions', level: 75, status: 'ACTIVE', description: 'CI/CD pipelines' },
      { name: 'Convex', level: 78, status: 'ACTIVE', description: 'Real-time backend' },
      { name: 'Vercel', level: 88, status: 'ACTIVE', description: 'Deployment' },
      { name: 'Hugging Face', level: 72, status: 'STANDBY', description: 'Model hosting' },
      { name: 'Jupyter', level: 85, status: 'ACTIVE', description: 'Data analysis' },
    ],
  },
]

// Animated radar chart component
function RadarChart({ tools, color }: { tools: typeof STACK_CATEGORIES[0]['tools']; color: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)

  useEffect(() => {
    let start: number
    let frameId: number
    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / 1000, 1)
      setAnimationProgress(progress)
      if (progress < 1) frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [tools])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = 120
    const center = size / 2
    const radius = 45
    const levels = 5

    ctx.clearRect(0, 0, size, size)

    // Draw grid
    for (let i = 1; i <= levels; i++) {
      const r = (radius / levels) * i
      ctx.beginPath()
      ctx.strokeStyle = `${color}20`
      ctx.lineWidth = 1
      for (let j = 0; j < tools.length; j++) {
        const angle = (Math.PI * 2 / tools.length) * j - Math.PI / 2
        const x = center + Math.cos(angle) * r
        const y = center + Math.sin(angle) * r
        if (j === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.stroke()
    }

    // Draw axes
    for (let i = 0; i < tools.length; i++) {
      const angle = (Math.PI * 2 / tools.length) * i - Math.PI / 2
      ctx.beginPath()
      ctx.strokeStyle = `${color}30`
      ctx.moveTo(center, center)
      ctx.lineTo(center + Math.cos(angle) * radius, center + Math.sin(angle) * radius)
      ctx.stroke()
    }

    // Draw data
    ctx.beginPath()
    ctx.fillStyle = `${color}30`
    ctx.strokeStyle = color
    ctx.lineWidth = 2

    for (let i = 0; i < tools.length; i++) {
      const angle = (Math.PI * 2 / tools.length) * i - Math.PI / 2
      const value = (tools[i].level / 100) * radius * animationProgress
      const x = center + Math.cos(angle) * value
      const y = center + Math.sin(angle) * value
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Draw points
    for (let i = 0; i < tools.length; i++) {
      const angle = (Math.PI * 2 / tools.length) * i - Math.PI / 2
      const value = (tools[i].level / 100) * radius * animationProgress
      const x = center + Math.cos(angle) * value
      const y = center + Math.sin(angle) * value
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
    }
  }, [tools, color, animationProgress])

  return (
    <canvas 
      ref={canvasRef} 
      width={120} 
      height={120} 
      className="mx-auto mb-2"
    />
  )
}

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [selectedTool, setSelectedTool] = useState<number | null>(null)

  return (
    <section>
      <div className="text-center mb-6">
        <h2 className="font-arcade text-neon-cyan text-lg mb-2 relative inline-block">
          CORE STACK
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse" />
        </h2>
        <p className="font-terminal text-white/50 text-sm">System capabilities and loadout</p>
      </div>

      {/* Category tabs with icons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {STACK_CATEGORIES.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => {
              AudioManager.getInstance().playClick()
              setActiveCategory(i)
              setSelectedTool(null)
            }}
            onMouseEnter={() => AudioManager.getInstance().playHover()}
            className={`
              px-3 py-2 font-arcade text-[10px] border-2 transition-all flex items-center gap-1.5
              ${activeCategory === i 
                ? 'bg-opacity-20 scale-105' 
                : 'bg-transparent opacity-50 hover:opacity-80 scale-100'
              }
            `}
            style={{
              borderColor: activeCategory === i ? cat.color : 'rgba(255,255,255,0.2)',
              backgroundColor: activeCategory === i ? `${cat.color}20` : 'transparent',
              color: cat.color,
              textShadow: activeCategory === i ? `0 0 10px ${cat.color}` : 'none',
            }}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Radar chart for active category */}
      <div className="mb-6">
        <RadarChart 
          tools={STACK_CATEGORIES[activeCategory].tools} 
          color={STACK_CATEGORIES[activeCategory].color} 
        />
        <p className="text-center font-terminal text-white/30 text-xs">
          Proficiency Radar — {STACK_CATEGORIES[activeCategory].name}
        </p>
      </div>

      {/* Tool grid with enhanced cards */}
      <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
        {STACK_CATEGORIES[activeCategory].tools.map((tool, i) => (
          <ToolCard 
            key={tool.name} 
            tool={tool} 
            color={STACK_CATEGORIES[activeCategory].color}
            index={i}
            isSelected={selectedTool === i}
            onSelect={() => setSelectedTool(selectedTool === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}

function ToolCard({ 
  tool, 
  color, 
  index, 
  isSelected,
  onSelect,
}: { 
  tool: typeof STACK_CATEGORIES[0]['tools'][0]
  color: string
  index: number
  isSelected: boolean
  onSelect: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const [pulsePhase, setPulsePhase] = useState(0)

  useEffect(() => {
    if (tool.status !== 'ACTIVE') return
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 4)
    }, 500)
    return () => clearInterval(interval)
  }, [tool.status])

  return (
    <div
      onMouseEnter={() => {
        setHovered(true)
        AudioManager.getInstance().playHover()
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
      className="border bg-black/40 p-3 transition-all cursor-pointer relative overflow-hidden"
      style={{ 
        borderColor: isSelected ? color : hovered ? `${color}60` : 'rgba(255,255,255,0.1)',
        boxShadow: isSelected 
          ? `0 0 20px ${color}40, inset 0 0 10px ${color}20`
          : hovered ? `0 0 15px ${color}30` : 'none',
      }}
    >
      {/* Animated border glow */}
      {isSelected && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}20, transparent)`,
            animation: 'shimmer 2s linear infinite',
          }}
        />
      )}

      <div className="flex items-center justify-between mb-2">
        <span className="font-arcade text-white text-xs">{tool.name}</span>
        <span 
          className="font-terminal text-[9px] px-1.5 py-0.5 flex items-center gap-1"
          style={{ 
            color,
            backgroundColor: `${color}20`,
            border: `1px solid ${color}40`
          }}
        >
          <span 
            className="w-1.5 h-1.5 rounded-full"
            style={{ 
              backgroundColor: tool.status === 'ACTIVE' ? color : 'rgba(255,255,255,0.2)',
              boxShadow: tool.status === 'ACTIVE' ? `0 0 5px ${color}` : 'none',
              opacity: tool.status === 'ACTIVE' ? (pulsePhase % 2 === 0 ? 1 : 0.4) : 1,
              transition: 'opacity 0.3s',
            }}
          />
          {tool.status}
        </span>
      </div>

      {/* Description (shown when selected) */}
      {isSelected && (
        <p className="font-terminal text-white/50 text-[10px] mb-2 leading-relaxed animate-fadeIn">
          {tool.description}
        </p>
      )}

      {/* LED bar with glow segments */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 bg-black/60 border border-white/10 relative overflow-hidden flex">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="flex-1 border-r border-black/30 last:border-r-0 transition-all duration-300"
              style={{
                backgroundColor: i < Math.ceil(tool.level / 10) ? color : 'transparent',
                boxShadow: i < Math.ceil(tool.level / 10) ? `0 0 5px ${color}` : 'none',
                opacity: i < Math.ceil(tool.level / 10) ? 1 : 0.2,
              }}
            />
          ))}
        </div>
        <span className="font-terminal text-xs w-10 text-right" style={{ color }}>
          {tool.level}%
        </span>
      </div>

      {/* LED indicators */}
      <div className="flex gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-sm"
            style={{
              backgroundColor: i < Math.ceil(tool.level / 20) ? color : 'rgba(255,255,255,0.1)',
              boxShadow: i < Math.ceil(tool.level / 20) ? `0 0 5px ${color}` : 'none',
              animation: i < Math.ceil(tool.level / 20) && tool.status === 'ACTIVE' 
                ? `pulse 1.5s ease-in-out ${i * 0.1}s infinite` 
                : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}