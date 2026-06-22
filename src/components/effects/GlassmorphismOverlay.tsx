import { useRef, useEffect } from 'react'

export function GlassmorphismOverlay() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      containerRef.current.style.setProperty('--mouse-x', `${x}%`)
      containerRef.current.style.setProperty('--mouse-y', `${y}%`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[90]"
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,255,255,0.03) 0%, transparent 50%)',
        transition: 'background 0.3s ease-out',
      }}
    >
      {/* Glass panels */}
      <div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.1), transparent)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,255,0.1), transparent)',
          filter: 'blur(50px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />
    </div>
  )
}