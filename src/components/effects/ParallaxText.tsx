import { useRef, useEffect, useState } from 'react'

interface ParallaxTextProps {
  text: string
  color?: string
  speed?: number
  className?: string
  // Pass the scrollable container ref from ArcadeScreen if available
  scrollContainer?: React.RefObject<HTMLElement>
}

export function ParallaxText({
  text,
  color = '#00ffff',
  speed = 0.5,
  className = '',
  scrollContainer,
}: ParallaxTextProps) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use passed container, otherwise fall back to closest scrollable parent
    const container = scrollContainer?.current
      ?? ref.current?.closest('[data-scroll]') as HTMLElement
      ?? document.querySelector('.scrollbar-arcade') as HTMLElement

    if (!container) return

    const handleScroll = () => {
      if (!ref.current) return
      const containerRect = container.getBoundingClientRect()
      const rect = ref.current.getBoundingClientRect()
      const relativeTop = rect.top - containerRect.top
      const scrollPercent =
        (container.clientHeight - relativeTop) /
        (container.clientHeight + rect.height)
      setOffset(scrollPercent * speed * 100)
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => container.removeEventListener('scroll', handleScroll)
  }, [speed, scrollContainer])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className="font-arcade text-lg md:text-xl tracking-widest transition-transform duration-100"
        style={{
          color,
          textShadow: `0 0 20px ${color}40`,
          transform: `translateX(${offset}px)`,
        }}
      >
        {text}
      </div>
    </div>
  )
}
