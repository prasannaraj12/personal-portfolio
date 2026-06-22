import { useState, useEffect, useCallback } from 'react'

export function useTypewriter(text: string, speed: number = 50, start: boolean = true) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!start) {
      setDisplayText('')
      setIsComplete(false)
      return
    }

    let index = 0
    setDisplayText('')
    setIsComplete(false)

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, start])

  return { displayText, isComplete }
}

export function useTerminalTypewriter(
  lines: string[], 
  speed: number = 30, 
  start: boolean = true
) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!start) {
      setDisplayedLines([])
      setCurrentLine(0)
      setCurrentChar(0)
      setIsComplete(false)
      return
    }

    if (currentLine >= lines.length) {
      setIsComplete(true)
      return
    }

    const line = lines[currentLine]

    if (currentChar >= line.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setCurrentChar(0)
      }, 300)
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
  }, [lines, speed, start, currentLine, currentChar])

  return { displayedLines, isComplete }
}