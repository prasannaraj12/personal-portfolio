import { useEffect, useRef } from 'react'

interface TrailPoint {
  x: number
  y: number
  age: number
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<TrailPoint[]>([])
  const mouseRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      // Move cursor dot directly via DOM — no React state
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    let frame = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Age existing points
      trailRef.current = trailRef.current
        .map(p => ({ ...p, age: p.age + 1 }))
        .filter(p => p.age < 20)

      // Add new point every 2 frames
      if (frame % 2 === 0) {
        trailRef.current.push({ x: mouseRef.current.x, y: mouseRef.current.y, age: 0 })
      }
      frame++

      // Draw trail points directly on canvas
      for (const point of trailRef.current) {
        const opacity = (1 - point.age / 20) * 0.6
        const size = Math.max(0.5, 6 - (point.age / 20) * 4)
        ctx.beginPath()
        ctx.arc(point.x, point.y, size / 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`
        ctx.shadowBlur = size * 2
        ctx.shadowColor = `rgba(0, 255, 255, ${opacity * 0.4})`
        ctx.fill()
      }

      ctx.shadowBlur = 0
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[100]"
      />
      {/* Main cursor ring — positioned via direct DOM mutation, no React state */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full border border-neon-cyan/50 pointer-events-none z-[101]"
        style={{
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 255, 255, 0.2)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
