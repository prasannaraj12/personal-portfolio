import { useState, useEffect } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
  active: boolean
}

export function PageTransition({ children, active }: PageTransitionProps) {
  const [visible, setVisible] = useState(false)
  const [entering, setEntering] = useState(false)

  useEffect(() => {
    if (active) {
      setEntering(true)
      const timer = setTimeout(() => setVisible(true), 50)
      return () => clearTimeout(timer)
    } else {
      setVisible(false)
      const timer = setTimeout(() => setEntering(false), 500)
      return () => clearTimeout(timer)
    }
  }, [active])

  if (!entering) return null

  return (
    <div
      className="transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
        filter: visible ? 'blur(0px)' : 'blur(4px)',
      }}
    >
      {children}
    </div>
  )
}