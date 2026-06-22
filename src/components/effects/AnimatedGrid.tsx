import { useRef, useEffect } from 'react'

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 40
      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      // Pre-compute all wave values
      const waveX: number[] = []
      const waveY: number[] = []
      for (let i = 0; i <= cols; i++) {
        waveX[i] = Math.sin(i * 0.3 + time) * 10
      }
      for (let j = 0; j <= rows; j++) {
        waveY[j] = Math.cos(j * 0.3 + time * 0.7) * 10
      }

      // Batch all dot fills into one path
      ctx.beginPath()
      ctx.fillStyle = `rgba(0, 255, 255, 0.12)`
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize
          const y = j * gridSize + waveX[i] * Math.cos(j * 0.3 + time * 0.7)
          ctx.moveTo(x + 1.5, y)
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        }
      }
      ctx.fill()

      // Batch all horizontal lines into one path
      ctx.beginPath()
      ctx.strokeStyle = `rgba(0, 255, 255, 0.04)`
      ctx.lineWidth = 0.5
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x  = i * gridSize
          const nx = (i + 1) * gridSize
          const y  = j * gridSize + waveX[i]  * Math.cos(j * 0.3 + time * 0.7)
          const ny = j * gridSize + waveX[i + 1] * Math.cos(j * 0.3 + time * 0.7)
          ctx.moveTo(x, y)
          ctx.lineTo(nx, ny)
        }
      }
      ctx.stroke()

      // Batch all vertical lines into one path
      ctx.beginPath()
      ctx.strokeStyle = `rgba(0, 255, 255, 0.04)`
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x  = i * gridSize
          const y  = j * gridSize       + waveX[i] * Math.cos(j * 0.3       + time * 0.7)
          const y2 = (j + 1) * gridSize + waveX[i] * Math.cos((j + 1) * 0.3 + time * 0.7)
          ctx.moveTo(x, y)
          ctx.lineTo(x, y2)
        }
      }
      ctx.stroke()

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ opacity: 0.4 }}
    />
  )
}