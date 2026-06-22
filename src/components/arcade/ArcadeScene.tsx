import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { ArcadeCabinet } from './ArcadeCabinet'
import { ArcadeRoom } from './ArcadeRoom'
import { FloatingDust } from './FloatingDust'
import { CameraController } from './CameraController'

export function ArcadeScene({ bootComplete }: { bootComplete: boolean }) {
  const { scene } = useThree()

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.012)
    return () => { scene.fog = null }
  }, [scene])

  return (
    <>
      <ambientLight intensity={0.4} color="#1a1a3e" />
      <hemisphereLight args={['#ffffff', '#1a1a3e', 0.5]} />

      <directionalLight
        position={[-5, 8, -5]}
        intensity={0.8}
        color="#4a4a8a"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Neon glow from cabinet screen */}
      <pointLight position={[0, 2.5, 1.5]} intensity={4}   color="#00ffff" distance={10} decay={2} />

      {/* Front fill — makes cabinet face visible from camera */}
      <pointLight position={[0, 2, 5]}    intensity={1.5}  color="#ffffff" distance={10} decay={2} />

      {/* Pink accent */}
      <pointLight position={[2, 1, 2]}    intensity={0.8}  color="#ff00ff" distance={6}  decay={2} />

      {/* Floor reflection */}
      <pointLight position={[0, -2, 3]}   intensity={0.5}  color="#00ffff" distance={5}  decay={2} />

      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0.5} fade speed={0.5} />

      <ArcadeRoom />
      <FloatingDust count={100} />

      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2} floatingRange={[-0.05, 0.05]}>
        <ArcadeCabinet bootComplete={bootComplete} />
      </Float>

      <CameraController bootComplete={bootComplete} />
    </>
  )
}
