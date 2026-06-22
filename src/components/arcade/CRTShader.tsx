import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // CRT curve distortion
  vec2 curve(vec2 uv) {
    uv = (uv - 0.5) * 2.0;
    uv *= 1.1;
    uv.x *= 1.0 + pow((abs(uv.y) / 5.0), 2.0);
    uv.y *= 1.0 + pow((abs(uv.x) / 4.0), 2.0);
    uv = (uv / 2.0) + 0.5;
    return uv;
  }

  void main() {
    vec2 uv = curve(vUv);

    // Scanlines
    float scanline = sin(uv.y * 800.0) * 0.04;

    // Moving scanline
    float scanlineMove = sin(uv.y * 2.0 - uTime * 2.0) * 0.02;

    // Vignette
    float vignette = 1.0 - length((uv - 0.5) * 1.5);
    vignette = smoothstep(0.0, 1.0, vignette);

    // RGB shift / chromatic aberration
    float rgbShift = 0.002;

    // Base color with slight blue tint
    vec3 color = vec3(0.02, 0.02, 0.05);

    // Scanline overlay
    color += vec3(scanline + scanlineMove);

    // Phosphor glow
    float phosphor = sin(uv.x * 1000.0) * sin(uv.y * 1000.0) * 0.01;
    color += vec3(phosphor);

    // Apply vignette
    color *= vignette;

    // Screen edge darkening
    float edge = smoothstep(0.0, 0.1, uv.x) * smoothstep(1.0, 0.9, uv.x) *
                 smoothstep(0.0, 0.1, uv.y) * smoothstep(1.0, 0.9, uv.y);
    color *= edge;

    // Slight noise
    float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    color += noise * 0.02;

    gl_FragColor = vec4(color, 0.3);
  }
`

export function CRTShader({ children }: { children: React.ReactNode }) {
  const meshRef = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(640, 480) },
  }), [])

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef}>
      {children}
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}