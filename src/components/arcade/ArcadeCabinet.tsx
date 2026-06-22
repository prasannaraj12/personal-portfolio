import { useRef, useState, useCallback } from 'react'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useArcadeStore } from '../../hooks/useArcadeStore'
import { AudioManager } from '../../lib/AudioManager'
import { ArcadeScreen } from '../screen/ArcadeScreen'
import { CRTShader } from './CRTShader'
import { ParticleExplosion } from '../effects/ParticleExplosion'

export function ArcadeCabinet({ bootComplete }: { bootComplete: boolean }) {
  const cabinetRef = useRef<THREE.Group>(null)
  const { cameraMode, setCameraMode, insertCoin, coinInserted } = useArcadeStore()
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)
  const [joystickTilt, setJoystickTilt] = useState({ x: 0, y: 0 })
  const [isDraggingJoystick, setIsDraggingJoystick] = useState(false)
  const [explodeCoin, setExplodeCoin] = useState(false)

  const handleScreenClick = useCallback((e: any) => {
    if (cameraMode === 'room') {
      e.stopPropagation()
      AudioManager.getInstance().playClick()
      setCameraMode('screen')
    }
  }, [cameraMode, setCameraMode])

  const handleCoinInsert = useCallback((e: any) => {
    e.stopPropagation()
    AudioManager.getInstance().playCoin()
    insertCoin()
    setExplodeCoin(true)
    setTimeout(() => setExplodeCoin(false), 3000)
    setTimeout(() => {
      setCameraMode('screen')
    }, 300)
  }, [insertCoin, setCameraMode])

  const handleJoystickDown = useCallback((e: any) => {
    e.stopPropagation()
    e.target.setPointerCapture(e.pointerId)
    setIsDraggingJoystick(true)
    AudioManager.getInstance().playJoystick()
  }, [])

  const handleJoystickMove = useCallback((e: any) => {
    if (!isDraggingJoystick) return
    e.stopPropagation()

    const point = e.point
    const localX = point.x - (-0.4)
    const localZ = point.z - 0.8
    const maxTilt = 0.4

    setJoystickTilt({
      x: Math.max(-maxTilt, Math.min(maxTilt, localZ * 3)),
      y: Math.max(-maxTilt, Math.min(maxTilt, -localX * 3)),
    })
  }, [isDraggingJoystick])

  const handleJoystickUp = useCallback((e: any) => {
    if (e) {
      e.stopPropagation()
      e.target.releasePointerCapture(e.pointerId)
    }
    setIsDraggingJoystick(false)
    setJoystickTilt({ x: 0, y: 0 })
  }, [])

  return (
    <group ref={cabinetRef} position={[0, 0, 0]}>
      {/* Particle explosion on coin insert */}
      <ParticleExplosion 
        trigger={explodeCoin} 
        position={[0, -0.5, 0.8]}
        color="#ff0040"
        count={150}
      />

      {/* Particle explosion on screen enter */}
      <ParticleExplosion 
        trigger={cameraMode === 'screen'} 
        position={[0, 2.2, 0.8]}
        color="#00ffff"
        count={100}
      />

      <CabinetBody />

      <group position={[0, 2.2, 0.76]}>
        <ScreenBezel />

        <mesh 
          position={[0, 0, 0.02]}
          onClick={handleScreenClick}
          visible={cameraMode === 'room'}
        >
          <planeGeometry args={[1.6, 1.2]} />
          <meshBasicMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.01}
            side={THREE.DoubleSide}
          />
        </mesh>

        <CRTShader>
          <planeGeometry args={[1.6, 1.2]} />
        </CRTShader>

        <Html
          transform
          position={[0, 0, 0.01]}
          style={{
            width: '640px',
            height: '480px',
            background: 'transparent',
            overflow: 'hidden',
            pointerEvents: cameraMode === 'screen' ? 'auto' : 'none',
            userSelect: 'none',
          }}
          distanceFactor={2.0}
        >
          <ArcadeScreen />
        </Html>
      </group>

      <ControlPanel 
        joystickTilt={joystickTilt}
        onJoystickDown={handleJoystickDown}
        onJoystickMove={handleJoystickMove}
        onJoystickUp={handleJoystickUp}
        isDraggingJoystick={isDraggingJoystick}
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
      />

      <CoinSlot 
        onInsert={handleCoinInsert} 
        inserted={coinInserted}
      />

      <CabinetDecals />

      {cameraMode === 'screen' && (
        <BackButton onClick={() => {
          AudioManager.getInstance().playClick()
          setCameraMode('room')
        }} />
      )}
    </group>
  )
}

function CabinetBody() {
  return (
    <group>
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 3.5, 1.5]} />
        <meshStandardMaterial 
          color="#1a0a2e" 
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>

      {[-1.01, 1.01].map((x, i) => (
        <mesh key={i} position={[x, 1.5, 0]} castShadow>
          <boxGeometry args={[0.05, 3.5, 1.5]} />
          <meshStandardMaterial 
            color="#2d1b4e"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      ))}

      <mesh position={[0, 3.5, 0]} castShadow>
        <boxGeometry args={[2, 0.6, 1.5]} />
        <meshStandardMaterial 
          color="#0d0d1a"
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>

      <mesh position={[0, 3.5, 0.76]}>
        <planeGeometry args={[1.8, 0.5]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.3} />
      </mesh>

      <mesh position={[0, 3.5, 0.77]}>
        <planeGeometry args={[1.6, 0.4]} />
        <meshBasicMaterial 
          color="#ff00ff" 
          transparent 
          opacity={0.6}
        />
      </mesh>

      <mesh position={[0, -0.3, 0]} castShadow>
        <boxGeometry args={[2.2, 0.3, 1.7]} />
        <meshStandardMaterial 
          color="#0a0a15"
          roughness={0.9}
        />
      </mesh>
    </group>
  )
}

function ScreenBezel() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1.8, 1.4, 0.1]} />
        <meshStandardMaterial 
          color="#0a0a15"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[1.7, 1.3, 0.05]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>

      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[1.6, 1.2]} />
        <meshPhysicalMaterial
          color="#000000"
          transparent
          opacity={0.1}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </group>
  )
}

function ControlPanel({ 
  joystickTilt, 
  onJoystickDown,
  onJoystickMove,
  onJoystickUp,
  isDraggingJoystick,
  hoveredButton,
  setHoveredButton,
}: {
  joystickTilt: { x: number; y: number }
  onJoystickDown: (e: any) => void
  onJoystickMove: (e: any) => void
  onJoystickUp: (e: any) => void
  isDraggingJoystick: boolean
  hoveredButton: number | null
  setHoveredButton: (idx: number | null) => void
}) {
  const buttons = [
    { color: '#ff0040', pos: [0.5, 0.6, 0.5] as [number, number, number], label: 'A' },
    { color: '#ff6600', pos: [0.8, 0.6, 0.3] as [number, number, number], label: 'B' },
    { color: '#00ffff', pos: [0.5, 0.6, 0.1] as [number, number, number], label: 'X' },
    { color: '#00ff41', pos: [0.8, 0.6, -0.1] as [number, number, number], label: 'Y' },
  ]

  return (
    <group position={[0, 0.5, 0.8]}>
      <mesh rotation={[-0.3, 0, 0]} position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 0.1, 0.8]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      <group 
        position={[-0.4, 0.15, 0]} 
        rotation={[joystickTilt.x, 0, joystickTilt.y]}
      >
        <mesh 
          position={[0, 0.15, 0]}
          onPointerDown={onJoystickDown}
          onPointerMove={onJoystickMove}
          onPointerUp={onJoystickUp}
        >
          <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh 
          position={[0, 0.32, 0]}
          onPointerDown={onJoystickDown}
          onPointerMove={onJoystickMove}
          onPointerUp={onJoystickUp}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ff0040" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>

      <mesh position={[-0.4, 0.05, 0]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.18, 0.05, 16]} />
        <meshStandardMaterial color="#0a0a15" metalness={0.8} roughness={0.3} />
      </mesh>

      {buttons.map((btn, i) => (
        <group key={i} position={btn.pos}>
          <mesh
            position={[0, hoveredButton === i ? -0.02 : 0, 0]}
            onPointerEnter={(e) => {
              e.stopPropagation()
              setHoveredButton(i)
              AudioManager.getInstance().playHover()
            }}
            onPointerLeave={(e) => {
              e.stopPropagation()
              setHoveredButton(null)
            }}
            onClick={(e) => {
              e.stopPropagation()
              AudioManager.getInstance().playClick()
            }}
          >
            <cylinderGeometry args={[0.06, 0.06, 0.08, 16]} />
            <meshStandardMaterial 
              color={btn.color}
              emissive={btn.color}
              emissiveIntensity={hoveredButton === i ? 2 : 0.5}
              metalness={0.3}
              roughness={0.4}
            />
          </mesh>
          <pointLight
            position={[0, 0.1, 0]}
            color={btn.color}
            intensity={hoveredButton === i ? 1 : 0.3}
            distance={1}
            decay={2}
          />
        </group>
      ))}
    </group>
  )
}

function CoinSlot({ onInsert, inserted }: { onInsert: (e: any) => void; inserted: boolean }) {
  return (
    <group position={[0, -0.5, 0.76]}>
      <mesh>
        <boxGeometry args={[0.4, 0.15, 0.05]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[0.25, 0.03, 0.02]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      <mesh 
        position={[0, -0.15, 0.03]}
        onClick={onInsert}
        onPointerEnter={() => AudioManager.getInstance().playHover()}
      >
        <planeGeometry args={[0.5, 0.1]} />
        <meshBasicMaterial 
          color={inserted ? '#00ff41' : '#ff0040'}
          transparent
          opacity={0.8}
        />
      </mesh>

      <pointLight
        position={[0, 0, 0.2]}
        color={inserted ? '#00ff41' : '#ff0040'}
        intensity={inserted ? 2 : 1}
        distance={2}
        decay={2}
      />
    </group>
  )
}

function CabinetDecals() {
  return (
    <group>
      <mesh position={[-1.03, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[1.2, 2]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[1.03, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[1.2, 2]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>

      {[-1.04, 1.04].map((x, i) => (
        <mesh key={i} position={[x, 2, 0]} rotation={[0, i === 0 ? Math.PI / 2 : -Math.PI / 2, 0]}>
          <planeGeometry args={[1, 1.8]} />
          <meshBasicMaterial 
            color={i === 0 ? '#ff00ff' : '#00ffff'}
            transparent 
            opacity={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <group position={[0, 3.2, 0.8]}>
      <mesh onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}>
        <boxGeometry args={[0.6, 0.2, 0.1]} />
        <meshStandardMaterial 
          color="#ff0040"
          emissive="#ff0040"
          emissiveIntensity={0.5}
        />
      </mesh>
      <Html position={[0, 0, 0.06]} transform center>
        <div 
          className="text-white font-arcade text-xs cursor-pointer select-none whitespace-nowrap"
          style={{ textShadow: '0 0 10px #ff0040' }}
        >
          BACK
        </div>
      </Html>
    </group>
  )
}