import { useArcadeStore } from '../../hooks/useArcadeStore'
import { AudioManager } from '../../lib/AudioManager'
import { Home, Gamepad2, Cpu, Terminal, Mail } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'hero' as const, label: 'HERO', icon: Home },
  { id: 'works' as const, label: 'WORKS', icon: Gamepad2 },
  { id: 'stack' as const, label: 'STACK', icon: Cpu },
  { id: 'terminal' as const, label: 'TERMINAL', icon: Terminal },
  { id: 'contact' as const, label: 'COMMS', icon: Mail },
]

export function Navigation() {
  const { screenContent, setScreenContent, setStage } = useArcadeStore()

  const handleNav = (id: typeof NAV_ITEMS[number]['id'], index: number) => {
    AudioManager.getInstance().playClick()
    setScreenContent(id)
    setStage(`0${index + 1}: ${id.toUpperCase()}`)
  }

  return (
    <nav className="sticky top-[52px] left-0 right-0 z-20 bg-black/60 backdrop-blur-sm border-b border-white/5">
      <div className="flex justify-center gap-1 px-2 py-2">
        {NAV_ITEMS.map((item, index) => {
          const Icon = item.icon
          const isActive = screenContent === item.id

          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id, index)}
              onMouseEnter={() => AudioManager.getInstance().playHover()}
              className={`
                relative px-3 py-1.5 font-arcade text-[9px] transition-all duration-200
                flex items-center gap-1.5 overflow-hidden
                ${isActive 
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50' 
                  : 'text-white/50 hover:text-white hover:bg-white/5 border border-transparent'
                }
              `}
              style={isActive ? { textShadow: '0 0 10px #00ffff' } : {}}
            >
              {/* Active indicator glow */}
              {isActive && (
                <div className="absolute inset-0 bg-neon-cyan/10 animate-pulse" />
              )}

              <span className="relative z-10">
                <Icon size={12} />
              </span>
              <span className="relative z-10">{item.label}</span>

              {isActive && (
                <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-neon-cyan animate-pulse" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}