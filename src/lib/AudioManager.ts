export class AudioManager {
  private static instance: AudioManager
  private ctx: AudioContext | null = null
  private initialized = false

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager()
    }
    return AudioManager.instance
  }

  init(): void {
    if (this.initialized) return
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      this.initialized = true
    } catch {
      // AudioContext unavailable
    }
  }

  private ensureContext(): AudioContext | null {
    // Only create context after explicit init() call (triggered by user gesture)
    if (!this.initialized || !this.ctx) return null
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {})
    }
    return this.ctx
  }

  // Boot sound: Rising synth arpeggio
  playBoot(): void {
    const ctx = this.ensureContext()
    if (!ctx) return
    const notes = [220, 277, 330, 440, 554, 660, 880]
    const now = ctx.currentTime

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(freq, now + i * 0.1)

      gain.gain.setValueAtTime(0, now + i * 0.1)
      gain.gain.linearRampToValueAtTime(0.1, now + i * 0.1 + 0.05)
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now + i * 0.1)
      osc.stop(now + i * 0.1 + 0.3)
    })
  }

  // Hover blip
  playHover(): void {
    const ctx = this.ensureContext()
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'square'
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.05)

    gain.gain.setValueAtTime(0.05, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.05)
  }

  // Click sound
  playClick(): void {
    const ctx = this.ensureContext()
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'square'
    osc.frequency.setValueAtTime(600, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1)

    gain.gain.setValueAtTime(0.15, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.1)
  }

  // Coin insert: Double-pitched metallic chime
  playCoin(): void {
    const ctx = this.ensureContext()
    if (!ctx) return
    const now = ctx.currentTime

    const osc1 = ctx.createOscillator()
    const gain1 = ctx.createGain()
    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(1200, now)
    gain1.gain.setValueAtTime(0.2, now)
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15)
    osc1.connect(gain1)
    gain1.connect(ctx.destination)
    osc1.start(now)
    osc1.stop(now + 0.15)

    const osc2 = ctx.createOscillator()
    const gain2 = ctx.createGain()
    osc2.type = 'sine'
    osc2.frequency.setValueAtTime(1800, now + 0.08)
    gain2.gain.setValueAtTime(0.2, now + 0.08)
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25)
    osc2.connect(gain2)
    gain2.connect(ctx.destination)
    osc2.start(now + 0.08)
    osc2.stop(now + 0.25)
  }

  // Success fanfare
  playSuccess(): void {
    const ctx = this.ensureContext()
    if (!ctx) return
    const now = ctx.currentTime
    const melody = [523, 659, 784, 1047]

    melody.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'square'
      osc.frequency.setValueAtTime(freq, now + i * 0.12)

      gain.gain.setValueAtTime(0.1, now + i * 0.12)
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.2)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now + i * 0.12)
      osc.stop(now + i * 0.12 + 0.2)
    })
  }

  // Joystick movement
  playJoystick(): void {
    const ctx = this.ensureContext()
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(200, ctx.currentTime)
    osc.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.08)

    gain.gain.setValueAtTime(0.08, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.08)
  }
}