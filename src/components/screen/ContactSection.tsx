import { useState, useEffect, useRef } from 'react'
import { AudioManager } from '../../lib/AudioManager'
import { Send, Lock, Radio, MessageSquare, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react'

// Animated signal wave component
function SignalWave() {
  return (
    <div className="flex items-center gap-0.5 h-4">
      {[40, 70, 100, 70, 40].map((h, i) => (
        <div
          key={i}
          className="w-0.5 bg-neon-green rounded-full animate-pulse"
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.5s',
          }}
        />
      ))}
    </div>
  )
}

// Matrix rain effect background
function MatrixRain() {
  const [drops, setDrops] = useState<{ x: number; y: number; char: string; speed: number }[]>([])

  useEffect(() => {
    const chars = '01アイウエオカキクケコ'
    const initialDrops = [...Array(20)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      char: chars[Math.floor(Math.random() * chars.length)],
      speed: 0.5 + Math.random() * 1.5,
    }))
    setDrops(initialDrops)

    const interval = setInterval(() => {
      setDrops(prev => prev.map(drop => ({
        ...drop,
        y: drop.y + drop.speed > 100 ? -5 : drop.y + drop.speed,
        char: Math.random() > 0.95 ? chars[Math.floor(Math.random() * chars.length)] : drop.char,
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute font-terminal text-neon-green text-xs"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  )
}

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [encryptProgress, setEncryptProgress] = useState(0)
  const [signalStrength, setSignalStrength] = useState(95)

  // Timer refs for cleanup on unmount
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const sendTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
      if (sendTimeoutRef.current)    clearTimeout(sendTimeoutRef.current)
      if (resetTimeoutRef.current)   clearTimeout(resetTimeoutRef.current)
    }
  }, [])

  // Random signal fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(90 + Math.floor(Math.random() * 10))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setEncryptProgress(0)
    AudioManager.getInstance().playClick()

    progressIntervalRef.current = setInterval(() => {
      setEncryptProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current!)
          progressIntervalRef.current = null
          return 100
        }
        return prev + 5
      })
    }, 75)

    sendTimeoutRef.current = setTimeout(() => {
      setSending(false)
      setSent(true)
      AudioManager.getInstance().playSuccess()
      setFormData({ name: '', email: '', message: '' })
      resetTimeoutRef.current = setTimeout(() => {
        setSent(false)
        setEncryptProgress(0)
      }, 4000)
    }, 1800)
  }

  return (
    <section className="max-w-lg mx-auto relative">
      <MatrixRain />

      <div className="text-center mb-8">
        <h2 className="font-arcade text-neon-cyan text-lg mb-2 relative inline-block">
          SECURE COMMS
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse" />
        </h2>
        <p className="font-terminal text-white/50 text-sm">Encrypted transmission channel</p>
      </div>

      {/* Status panel with live signal */}
      <div className="border border-neon-green/30 bg-black/60 p-3 mb-6 flex items-center justify-between relative overflow-hidden">
        <div className="flex items-center gap-2">
          <Radio size={14} className="text-neon-green animate-pulse" />
          <span className="font-terminal text-neon-green text-xs">CHANNEL OPEN</span>
        </div>
        <div className="flex items-center gap-3">
          <SignalWave />
          <div className="flex items-center gap-2">
            <Lock size={12} className="text-neon-cyan" />
            <span className="font-terminal text-neon-cyan text-[10px]">AES-256</span>
          </div>
        </div>

        {/* Animated scan line */}
        <div 
          className="absolute top-0 left-0 right-0 h-px bg-neon-green/30"
          style={{ animation: 'scanline 3s linear infinite' }}
        />
      </div>

      {/* Contact info cards */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {[
          { icon: Mail, label: 'EMAIL', value: 'prasannaraj.pr12@gmail.com', color: '#00ffff' },
          { icon: Phone, label: 'PHONE', value: '+91 7810096062', color: '#ff00ff' },
          { icon: MapPin, label: 'LOCATION', value: 'Bengaluru, India', color: '#00ff41' },
          { icon: Github, label: 'GITHUB', value: 'github.com/prasannaraj', color: '#ff6600' },
        ].map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="border bg-black/40 p-2.5 transition-all hover:scale-105"
              style={{ borderColor: `${item.color}30` }}
              onMouseEnter={() => AudioManager.getInstance().playHover()}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Icon size={12} style={{ color: item.color }} />
                <span className="font-arcade text-[8px]" style={{ color: item.color }}>{item.label}</span>
              </div>
              <p className="font-terminal text-white/70 text-[10px] truncate">{item.value}</p>
            </div>
          )
        })}
      </div>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name field */}
        <div className="relative group">
          <label className="font-arcade text-neon-cyan text-[10px] block mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" />
            OPERATIVE DESIGNATION
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={sending}
              className="w-full bg-black/60 border-2 border-neon-cyan/30 text-white font-terminal px-3 py-2 outline-none focus:border-neon-cyan transition-all disabled:opacity-50"
              placeholder="Enter callsign..."
              onFocus={() => AudioManager.getInstance().playHover()}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <span className="font-terminal text-neon-cyan text-xs animate-blink">_</span>
            </div>
          </div>
        </div>

        {/* Email field */}
        <div className="group">
          <label className="font-arcade text-neon-cyan text-[10px] block mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            SECURE FREQUENCY
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={sending}
            className="w-full bg-black/60 border-2 border-neon-cyan/30 text-white font-terminal px-3 py-2 outline-none focus:border-neon-cyan transition-all disabled:opacity-50"
            placeholder="frequency@secure.net"
            onFocus={() => AudioManager.getInstance().playHover()}
          />
        </div>

        {/* Message field */}
        <div className="group">
          <label className="font-arcade text-neon-cyan text-[10px] block mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            TRANSMISSION DATA
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={sending}
            rows={4}
            className="w-full bg-black/60 border-2 border-neon-cyan/30 text-white font-terminal px-3 py-2 outline-none focus:border-neon-cyan transition-all resize-none disabled:opacity-50"
            placeholder="Enter transmission contents..."
            onFocus={() => AudioManager.getInstance().playHover()}
          />
        </div>

        {/* Encryption progress bar (shown during sending) */}
        {sending && (
          <div className="border border-neon-cyan/30 bg-black/40 p-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-terminal text-neon-cyan">ENCRYPTING...</span>
              <span className="font-terminal text-neon-cyan">{encryptProgress}%</span>
            </div>
            <div className="h-1.5 bg-black/60 border border-white/10">
              <div 
                className="h-full bg-neon-cyan transition-all duration-75"
                style={{ 
                  width: `${encryptProgress}%`,
                  boxShadow: '0 0 10px #00ffff',
                }}
              />
            </div>
            <div className="font-terminal text-white/30 text-[10px] mt-1">
              {'>'} Generating AES-256 key... {'>'} Encrypting payload... {'>'} Handshaking...
            </div>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={sending || sent}
          onMouseEnter={() => AudioManager.getInstance().playHover()}
          className={`
            w-full py-3 font-arcade text-xs border-2 transition-all flex items-center justify-center gap-2 relative overflow-hidden
            ${sent 
              ? 'bg-neon-green/20 border-neon-green text-neon-green' 
              : 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/30'
            }
          `}
          style={sent ? { textShadow: '0 0 10px #00ff41' } : { textShadow: '0 0 10px #00ffff' }}
        >
          {/* Button shimmer effect */}
          <div 
            className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: sending ? 'shimmer 1s linear infinite' : 'none',
            }}
          />

          {sending ? (
            <>
              <div className="w-4 h-4 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
              ENCRYPTING...
            </>
          ) : sent ? (
            <>
              <MessageSquare size={14} />
              TRANSMISSION SENT ✓
            </>
          ) : (
            <>
              <Send size={14} />
              INITIATE TRANSMISSION
            </>
          )}
        </button>
      </form>

      {/* Signal strength & latency dashboard */}
      <div className="mt-6 border border-white/10 p-3 bg-black/40">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-terminal text-white/30">SIGNAL STRENGTH</span>
          <span className="font-terminal text-neon-green">{signalStrength}%</span>
        </div>
        <div className="h-1.5 bg-black/60 border border-white/10 mb-2">
          <div 
            className="h-full bg-gradient-to-r from-neon-green to-neon-cyan transition-all duration-500"
            style={{ width: `${signalStrength}%`, boxShadow: '0 0 5px #00ff41' }}
          />
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div>
            <span className="font-terminal text-white/30 block">LATENCY</span>
            <span className="font-terminal text-neon-cyan">12ms</span>
          </div>
          <div>
            <span className="font-terminal text-white/30 block">PACKET LOSS</span>
            <span className="font-terminal text-neon-green">0.0%</span>
          </div>
          <div>
            <span className="font-terminal text-white/30 block">UPTIME</span>
            <span className="font-terminal text-neon-cyan">99.9%</span>
          </div>
        </div>
      </div>
    </section>
  )
}