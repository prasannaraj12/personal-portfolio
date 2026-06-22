import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useArcadeStore } from '../../hooks/useArcadeStore'

const ROOM_POSITION = new THREE.Vector3(0, 2.5, 6)
const ROOM_TARGET = new THREE.Vector3(0, 1.5, 0)
const SCREEN_POSITION = new THREE.Vector3(0, 2.2, 2.4)
const SCREEN_TARGET = new THREE.Vector3(0, 2.2, 0)

export function CameraController({ bootComplete }: { bootComplete: boolean }) {
  const { camera } = useThree()
  const { cameraMode } = useArcadeStore()
  const targetPos = useRef(new THREE.Vector3().copy(ROOM_POSITION))
  const targetLook = useRef(new THREE.Vector3().copy(ROOM_TARGET))
  const currentLook = useRef(new THREE.Vector3().copy(ROOM_TARGET))
  const introComplete = useRef(false)

  // Snap camera to starting position when boot completes
  useEffect(() => {
    if (bootComplete && !introComplete.current) {
      camera.position.set(0, 6, 10)
      currentLook.current.copy(ROOM_TARGET)
    }
  }, [bootComplete, camera])

  useFrame((_, delta) => {
    if (!bootComplete) return

    const dt = Math.min(delta, 0.1)

    // Mark intro done once camera is close enough to room position
    if (!introComplete.current) {
      if (camera.position.distanceTo(ROOM_POSITION) < 0.05) {
        introComplete.current = true
        camera.position.copy(ROOM_POSITION)
      }
    }

    // Camera mode targets
    if (cameraMode === 'room') {
      targetPos.current.copy(ROOM_POSITION)
      targetLook.current.copy(ROOM_TARGET)
    } else {
      targetPos.current.copy(SCREEN_POSITION)
      targetLook.current.copy(SCREEN_TARGET)
    }

    // Smooth lerp — faster speed (3) to actually reach target
    camera.position.lerp(targetPos.current, dt * 3)
    currentLook.current.lerp(targetLook.current, dt * 3)
    camera.lookAt(currentLook.current)
  })

  return null
}