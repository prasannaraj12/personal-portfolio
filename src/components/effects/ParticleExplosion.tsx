import { useRef, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Custom shader material for per-particle size + opacity
const vertexShader = `
  attribute float size;
  attribute float opacity;
  varying float vOpacity;
  void main() {
    vOpacity = opacity;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  uniform vec3 uColor;
  varying float vOpacity;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    gl_FragColor = vec4(uColor, vOpacity * (1.0 - d * 2.0));
  }
`

interface ParticleExplosionProps {
  trigger: boolean
  position?: [number, number, number]
  color?: string
  count?: number
}

export function ParticleExplosion({
  trigger,
  position = [0, 2, 0],
  color = '#00ffff',
  count = 200,
}: ParticleExplosionProps) {
  const meshRef = useRef<THREE.Points>(null)
  const activeRef = useRef(false)
  const timeRef = useRef(0)

  // All arrays stable — never reallocated mid-render
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const lifetimes = new Float32Array(count)
    const sizes = new Float32Array(count)
    const opacities = new Float32Array(count).fill(0) // start invisible

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = position[0]
      positions[i * 3 + 1] = position[1]
      positions[i * 3 + 2] = position[2]

      const theta = Math.random() * Math.PI * 2
      const phi   = Math.random() * Math.PI
      const speed = 2 + Math.random() * 8

      velocities[i * 3]     = Math.sin(phi) * Math.cos(theta) * speed
      velocities[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * speed
      velocities[i * 3 + 2] = Math.cos(phi) * speed

      lifetimes[i] = 1.0 + Math.random() * 2.0
      sizes[i]     = 4 + Math.random() * 8   // pixel size for shader
    }

    return { positions, velocities, lifetimes, sizes, opacities }
  }, [count, position])

  // Stable color uniform — only recreated when color prop changes
  const uniforms = useMemo(() => ({
    uColor: { value: new THREE.Color(color) },
  }), [color])

  useEffect(() => {
    if (trigger && !activeRef.current) {
      activeRef.current = true
      timeRef.current = 0
    }
  }, [trigger])

  useFrame((_, delta) => {
    if (!meshRef.current || !activeRef.current) return

    timeRef.current += delta
    const geo = meshRef.current.geometry
    const posArray = geo.attributes.position.array as Float32Array
    const sizeArray = geo.attributes.size.array as Float32Array
    const opacityArray = geo.attributes.opacity.array as Float32Array

    let allDead = true

    for (let i = 0; i < count; i++) {
      const life = particles.lifetimes[i] - timeRef.current

      if (life > 0) {
        allDead = false
        const t = timeRef.current
        posArray[i * 3]     = position[0] + particles.velocities[i * 3]     * t
        posArray[i * 3 + 1] = position[1] + particles.velocities[i * 3 + 1] * t + (-4.9 * t * t)
        posArray[i * 3 + 2] = position[2] + particles.velocities[i * 3 + 2] * t

        sizeArray[i]   = particles.sizes[i] * (life / particles.lifetimes[i])
        opacityArray[i] = Math.max(0, life / particles.lifetimes[i])
      } else {
        sizeArray[i]   = 0
        opacityArray[i] = 0
      }
    }

    geo.attributes.position.needsUpdate = true
    geo.attributes.size.needsUpdate     = true
    geo.attributes.opacity.needsUpdate  = true

    if (allDead) activeRef.current = false
  })

  // Hide completely when not active — avoids frozen particle clouds
  if (!trigger && !activeRef.current) return null

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-size"     args={[particles.sizes,     1]} />
        <bufferAttribute attach="attributes-opacity"  args={[particles.opacities, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
