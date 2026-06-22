import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatingDustProps {
  count?: number
}

export function FloatingDust({ count = 100 }: FloatingDustProps) {
  const meshRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15

      velocities[i * 3] = (Math.random() - 0.5) * 0.01
      velocities[i * 3 + 1] = Math.random() * 0.005 + 0.002
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01
    }

    return { positions, velocities }
  }, [count])

  useFrame(() => {
    if (!meshRef.current) return

    const positionArray = meshRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      positionArray[i * 3] += particles.velocities[i * 3]
      positionArray[i * 3 + 1] += particles.velocities[i * 3 + 1]
      positionArray[i * 3 + 2] += particles.velocities[i * 3 + 2]

      // Reset particles that float too high
      if (positionArray[i * 3 + 1] > 5) {
        positionArray[i * 3 + 1] = -5
        positionArray[i * 3] = (Math.random() - 0.5) * 15
        positionArray[i * 3 + 2] = (Math.random() - 0.5) * 15
      }

      // Wrap around horizontally
      if (Math.abs(positionArray[i * 3]) > 7.5) {
        positionArray[i * 3] *= -0.9
      }
      if (Math.abs(positionArray[i * 3 + 2]) > 7.5) {
        positionArray[i * 3 + 2] *= -0.9
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}