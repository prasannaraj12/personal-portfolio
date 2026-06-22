import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ArcadeRoom() {
  const gridRef = useRef<THREE.GridHelper>(null)

  // Animate grid opacity — GridHelper has two materials, animate both
  useFrame((state) => {
    if (gridRef.current) {
      const materials = Array.isArray(gridRef.current.material)
        ? gridRef.current.material
        : [gridRef.current.material]
      materials.forEach((mat) => {
        (mat as THREE.Material).opacity = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
      })
    }
  })

  return (
    <group>
      {/* Floor */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#0a0a15" 
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Retro Grid Floor */}
      <gridHelper
        ref={gridRef}
        args={[30, 30, '#ff00ff', '#1a0a2e']}
        position={[0, -1.99, 0]}
      />

      {/* Back Wall */}
      <mesh position={[0, 3, -8]} receiveShadow>
        <planeGeometry args={[30, 12]} />
        <meshStandardMaterial 
          color="#0d0d1a" 
          roughness={0.9}
        />
      </mesh>

      {/* Neon strips on walls */}
      <mesh position={[-7, 2, -7.9]}>
        <boxGeometry args={[0.1, 6, 0.1]} />
        <meshBasicMaterial color="#ff00ff" />
      </mesh>
      <mesh position={[7, 2, -7.9]}>
        <boxGeometry args={[0.1, 6, 0.1]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>

      {/* Ceiling neon lines */}
      <mesh position={[0, 6, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[20, 0.05, 0.05]} />
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, 6, -4]} rotation={[0, 0, 0]}>
        <boxGeometry args={[20, 0.05, 0.05]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
      </mesh>

      {/* Side columns */}
      {[-6, 6].map((x, i) => (
        <group key={i} position={[x, 1, -5]}>
          <mesh>
            <cylinderGeometry args={[0.3, 0.4, 6, 8]} />
            <meshStandardMaterial 
              color="#1a1a2e" 
              roughness={0.5}
              metalness={0.8}
            />
          </mesh>
          {/* Column neon ring */}
          <mesh position={[0, 2, 0]}>
            <torusGeometry args={[0.5, 0.02, 8, 16]} />
            <meshBasicMaterial color={i === 0 ? '#ff00ff' : '#00ffff'} />
          </mesh>
          <mesh position={[0, -1, 0]}>
            <torusGeometry args={[0.5, 0.02, 8, 16]} />
            <meshBasicMaterial color={i === 0 ? '#ff00ff' : '#00ffff'} />
          </mesh>
        </group>
      ))}

      {/* Distant arcade machines (silhouettes) */}
      {[-4, 4].map((x, i) => (
        <group key={`machine-${i}`} position={[x, -2, -6]}>
          <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[1.5, 3, 1.2]} />
            <meshStandardMaterial color="#0a0a15" roughness={1} />
          </mesh>
          {/* Screen glow */}
          <mesh position={[0, 2, 0.61]}>
            <planeGeometry args={[1, 0.8]} />
            <meshBasicMaterial 
              color={i === 0 ? '#ff0040' : '#00ff41'} 
              transparent 
              opacity={0.3}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}