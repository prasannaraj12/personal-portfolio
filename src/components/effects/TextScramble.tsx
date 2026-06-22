import { useState, useEffect, useCallback } from 'react'

const CHARS = '!<>-_\/[]{}—=+*^?#________'

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
}

export function TextScramble({ text, className = '', speed = 50 }: TextScrambleProps) {
  const [display, setDisplay] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  const scramble = useCallback(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) return text[index]
            if (char === ' ') return ' '
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsComplete(true)
      }
      iteration += 1 / 3
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    const cleanup = scramble()
    return cleanup
  }, [scramble])

  return (
    <span className={`${className} ${!isComplete ? 'animate-pulse' : ''}`}>
      {display || text}
    </span>
  )
}