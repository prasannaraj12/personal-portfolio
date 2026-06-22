import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Vector2 } from 'three'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { ArcadeScene } from './components/arcade/ArcadeScene'
import { BootSequence } from './components/BootSequence'
import { CinematicIntro } from './components/CinematicIntro'
import { CursorTrail } from './components/effects/CursorTrail'
import { GlassmorphismOverlay } from './components/effects/GlassmorphismOverlay'
import { AnimatedGrid } from './components/effects/AnimatedGrid'
import { useArcadeStore } from './hooks/useArcadeStore'
import { AudioManager } from './lib/AudioManager'

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [bootComplete, setBootComplete] = useState(false)
  const { cameraMode } = useArcadeStore()

  useEffect(() => {
    const initAudio = () => {
      AudioManager.getInstance().init()
      window.removeEventListener('click', initAudio)
      window.removeEventListener('keydown', initAudio)
    }
    window.addEventListener('click', initAudio)
    window.addEventListener('keydown', initAudio)
    return () => {
      window.removeEventListener('click', initAudio)
      window.removeEventListener('keydown', initAudio)
    }
  }, [])

  return (
    <div className="w-screen h-screen bg-arcade-dark relative overflow-hidden">
      {/* Premium cursor trail */}
      <CursorTrail />

      {/* Glassmorphism overlay */}
      <GlassmorphismOverlay />

      {/* Animated background grid */}
      <AnimatedGrid />

      {/* Cinematic Intro */}
      {!introComplete && (
        <CinematicIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* Boot Sequence Overlay */}
      {introComplete && !bootComplete && (
        <BootSequence onComplete={() => setBootComplete(true)} />
      )}

      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{
          position: [0, 3, 8],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        className={`transition-opacity duration-1000 ${bootComplete ? 'opacity-100' : 'opacity-0'}`}
      >
        <Suspense fallback={null}>
          <ArcadeScene bootComplete={bootComplete} />

          {/* Enhanced Post Processing */}
          <EffectComposer>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <ChromaticAberration
              offset={new Vector2(0.002, 0.002)}
              radialModulation={false}
              modulationOffset={0}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

      {/* HUD Overlay for Room Mode */}
      {bootComplete && cameraMode === 'room' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none text-center">
          <div className="bg-black/60 backdrop-blur-md border border-neon-cyan/30 px-6 py-3 rounded-lg"
               style={{ boxShadow: '0 0 30px rgba(0,255,255,0.1)' }}>
            <p className="font-terminal text-neon-cyan text-sm animate-pulse-neon mb-1">
              CLICK SCREEN TO PLAY
            </p>
            <p className="font-terminal text-white/40 text-xs">
              OR CLICK "INSERT COIN" SLOT
            </p>
          </div>
        </div>
      )}

      {/* Mode indicator */}
      {bootComplete && (
        <div className="absolute top-4 right-4 pointer-events-none">
          <div className="font-terminal text-xs text-white/30 border border-white/10 px-3 py-1 bg-black/40 backdrop-blur-sm">
            {cameraMode === 'room' ? 'ROOM VIEW' : 'FULL SCREEN MODE'}
          </div>
        </div>
      )}

      {/* Premium CRT Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
          boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)',
        }}
      />

      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

export default App