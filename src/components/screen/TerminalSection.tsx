import { useState, useRef, useEffect } from 'react'
import { useArcadeStore } from '../../hooks/useArcadeStore'
import { AudioManager } from '../../lib/AudioManager'

const COMMANDS: Record<string, string[]> = {
  help: [
    '╔══════════════════════════════════════════╗',
    '║         ARCADE_OS COMMAND LIST           ║',
    '╠══════════════════════════════════════════╣',
    '║  about    → Developer profile & bio      ║',
    '║  skills   → Technical arsenal            ║',
    '║  works    → Shipped projects             ║',
    '║  contact  → Secure comms channel         ║',
    '║  edu      → Education details          ║',
    '║  awards   → Achievements & certs         ║',
    '║  clear    → Clear terminal               ║',
    '║  reboot   → Restart system               ║',
    '╚══════════════════════════════════════════╝',
  ],
  about: [
    '┌── PRASANNA RAJ R ─────────────────────┐',
    '│                                        │',
    '│  Role:     AI Agent Engineer           │',
    '│  Focus:    GenAI Backend Development   │',
    '│  Location: Bengaluru, India            │',
    '│  Email:    prasannaraj.pr12@gmail.com  │',
    '│  Phone:    +91 7810096062            │',
    '│                                        │',
    '│  Building autonomous agent systems     │',
    '│  with reasoning, planning & tool-use │',
    '│                                        │',
    '└────────────────────────────────────────┘',
  ],
  skills: [
    '⚡ TECHNICAL ARSENAL:',
    '',
    'Agent Frameworks:  LangGraph | LangChain | crewAI',
    'LLMs & GenAI:      GPT | Gemini | Claude | HuggingFace',
    'Backend:           FastAPI | Python | Node.js | Express',
    'Databases:         PostgreSQL | MongoDB | Convex | Redis',
    'Frontend:          React | Next.js | TypeScript | Tailwind',
    'DevOps:            Docker | GitHub Actions | Vercel',
    '',
    'Proficiency: ████████████████████ 92%',
  ],
  works: [
    '🚀 SHIPPED PROJECTS:',
    '',
    '  [1] AGENTDB          → Natural language SQL generator',
    '  [2] CAMPUS-CONNECT   → Event management PWA',
    '  [3] URBANBLOOM AI    → IoT smart gardening',
    '  [4] SIH 2024 DRONES  → Disaster rescue routing',
    '  [5] NOVITECH INTERN  → ML pipeline automation',
    '  [6] 1M1B GREEN       → Sustainability impact',
    '',
    'Type "open <number>" to view details',
  ],
  contact: [
    '📡 SECURE COMMUNICATIONS:',
    '',
    '  Email:    prasannaraj.pr12@gmail.com',
    '  Phone:    +91 7810096062',
    '  GitHub:   github.com/prasannaraj',
    '  LinkedIn: linkedin.com/in/prasannaraj',
    '',
    'Response time: < 24 hours',
    'Status:        Available for hire',
  ],
  edu: [
    '🎓 EDUCATION:',
    '',
    '  Degree:  B.E. Artificial Intelligence & ML',
    '  College: Sri Sairam College of Engineering',
    '  City:    Bengaluru, India',
    '  Period:  2023 — 2027',
    '  CGPA:    8.91 / 10.0',
    '',
    'Focus: Agent systems, GenAI, backend architecture',
  ],
  awards: [
    '🏆 ACHIEVEMENTS:',
    '',
    '  • Smart India Hackathon 2024',
    '    National Finalist (Govt. of India)',
    '    Drone coordinator mapping system',
    '',
    '  • Advaya & Vihansa Hackathons',
    '    National Finalist',
    '    RAG workflows & LangGraph ReAct',
    '',
    '  • 1M1B Green Intern',
    '    Social Impact Win',
    '    100+ students | 1M+ beneficiaries',
    '',
    '  • Databricks GenAI Fundamentals',
    '  • IBM Data Analyst Specialization',
  ],
  clear: [],
  reboot: [
    '⚠️  SYSTEM REBOOT INITIATED...',
    '    ...',
    '    ...',
    '✅ SYSTEM READY.',
  ],
}

// Typing effect for command output
function useTypingEffect(lines: string[], speed: number = 20) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true)
      return
    }

    const line = lines[currentLine]
    if (currentChar >= line.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setCurrentChar(0)
      }, 100)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setDisplayedLines(prev => {
        const newLines = [...prev]
        newLines[currentLine] = line.slice(0, currentChar + 1)
        return newLines
      })
      setCurrentChar(prev => prev + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [lines, currentLine, currentChar, speed])

  return { displayedLines, done }
}

export function TerminalSection() {
  const { terminalOutput, addTerminalOutput, resetTerminal, setScreenContent } = useArcadeStore()
  const [input, setInput] = useState('')
  const [typingLines, setTypingLines] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(prev => !prev), 530)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalOutput, typingLines])

  // Focus input
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const [command, ...args] = trimmed.split(' ')

    AudioManager.getInstance().playClick()
    addTerminalOutput(`> ${cmd}`)

    if (command === 'snake') {
      addTerminalOutput('🐍 Starting Snake mini-game...')
      addTerminalOutput('   Use WASD or Arrow keys')
      return
    }

    if (command === 'clear') {
      resetTerminal()
      return
    }

    if (command === 'reboot') {
      COMMANDS.reboot.forEach(line => addTerminalOutput(line))
      setTimeout(() => {
        resetTerminal()
        addTerminalOutput('System initialized...')
        addTerminalOutput('Loading portfolio modules...')
        addTerminalOutput('Type "help" for available commands')
      }, 2000)
      return
    }

    if (command === 'open' && args[0]) {
      const num = parseInt(args[0])
      if (num >= 1 && num <= 6) {
        addTerminalOutput(`Opening project ${num}...`)
        setTimeout(() => setScreenContent('works'), 500)
      } else {
        addTerminalOutput('❌ ERROR: Invalid project number (1-6)')
      }
      return
    }

    if (command in COMMANDS) {
      const lines = COMMANDS[command as keyof typeof COMMANDS]
      lines.forEach(line => addTerminalOutput(line))
    } else if (trimmed) {
      addTerminalOutput(`❌ Unknown command: "${command}"`)
      addTerminalOutput('   Type "help" for available commands')
    }

    setInput('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  return (
    <section className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="font-arcade text-neon-cyan text-lg mb-2 relative inline-block">
          INTERACTIVE TERMINAL
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse" />
        </h2>
        <p className="font-terminal text-white/50 text-sm">Type commands to navigate</p>
      </div>

      <div className="border-2 border-neon-cyan/30 bg-black/90 overflow-hidden relative">
        {/* Animated border corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-cyan" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-cyan" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-cyan" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-cyan" />

        {/* Terminal header */}
        <div className="bg-neon-cyan/10 border-b border-neon-cyan/30 px-3 py-2 flex items-center justify-between">
          <span className="font-arcade text-neon-cyan text-[10px]">TERMINAL v2.0</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-neon-red animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-neon-yellow" />
            <div className="w-2.5 h-2.5 rounded-full bg-neon-green" />
          </div>
        </div>

        {/* Terminal output */}
        <div 
          ref={terminalRef}
          className="h-72 overflow-y-auto p-3 font-terminal text-sm scrollbar-arcade"
        >
          {terminalOutput.map((line, i) => (
            <div 
              key={i} 
              className="mb-0.5 whitespace-pre-wrap"
            >
              {line.startsWith('>') ? (
                <span className="text-neon-cyan">{line}</span>
              ) : line.startsWith('❌') || line.includes('ERROR') ? (
                <span className="text-neon-red">{line}</span>
              ) : line.startsWith('✅') || line.includes('READY') ? (
                <span className="text-neon-green">{line}</span>
              ) : line.startsWith('⚠️') ? (
                <span className="text-neon-yellow">{line}</span>
              ) : line.startsWith('╔') || line.startsWith('╚') || line.startsWith('╠') ? (
                <span className="text-neon-cyan">{line}</span>
              ) : line.startsWith('║') ? (
                <span className="text-neon-cyan/70">{line}</span>
              ) : line.startsWith('┌') || line.startsWith('└') || line.startsWith('│') ? (
                <span className="text-neon-pink/70">{line}</span>
              ) : line.startsWith('  ') || line.startsWith('•') ? (
                <span className="text-white/70">{line}</span>
              ) : (
                <span className="text-crt-green">{line}</span>
              )}
            </div>
          ))}

          {/* Live cursor */}
          <div className="flex items-center">
            <span className="text-neon-cyan mr-1">{'>'}</span>
            <span className="w-2 h-4 bg-neon-cyan inline-block" style={{ opacity: cursorVisible ? 1 : 0 }} />
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-neon-cyan/30 p-2 flex items-center bg-black/40">
          <span className="text-neon-cyan mr-2 font-terminal">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-crt-green font-terminal text-sm outline-none"
            placeholder="Enter command..."
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
          {input && (
            <span className="text-white/20 font-terminal text-xs mr-2">
              [{input.length}]
            </span>
          )}
        </form>
      </div>

      {/* Quick commands with icons */}
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {Object.keys(COMMANDS).map(cmd => (
          <button
            key={cmd}
            onClick={() => {
              AudioManager.getInstance().playClick()
              handleCommand(cmd)
            }}
            onMouseEnter={() => AudioManager.getInstance().playHover()}
            className="px-3 py-1.5 border border-white/20 text-white/50 font-terminal text-xs hover:border-neon-cyan hover:text-neon-cyan transition-all hover:bg-neon-cyan/10"
          >
            {cmd}
          </button>
        ))}
      </div>
    </section>
  )
}