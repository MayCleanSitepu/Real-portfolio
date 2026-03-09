"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Environment, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

function ArrowGeometry() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()

    // Arrow shape (mirip gambar)
    shape.moveTo(-1.5, -0.6)
    shape.lineTo(0.3, -0.6)
    shape.lineTo(0.3, -1.2)
    shape.lineTo(1.6, 0)
    shape.lineTo(0.3, 1.2)
    shape.lineTo(0.3, 0.6)
    shape.lineTo(-1.5, 0.6)
    shape.lineTo(-1.5, -0.6)

    const extrudeSettings = {
      depth: 0.6,
      bevelEnabled: false
    }

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    geo.center()

    return geo
  }, [])

  return geometry
}

function ReactiveArrow() {
  const groupRef = useRef<THREE.Group>(null)
  const { mouse, viewport } = useThree()
  const geometry = ArrowGeometry()

  useFrame(() => {
    if (!groupRef.current) return

    const targetX = (mouse.x * viewport.width) / 2
    const targetY = (mouse.y * viewport.height) / 2

    const target = new THREE.Vector3(targetX, targetY, 10)

    const currentRotation = groupRef.current.quaternion.clone()
    groupRef.current.lookAt(target)

    const targetRotation = groupRef.current.quaternion.clone()
    groupRef.current.quaternion.copy(currentRotation)
    groupRef.current.quaternion.slerp(targetRotation, 0.1)
  })

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh geometry={geometry} rotation={[0, -Math.PI / 2, 0]}>
          <meshPhysicalMaterial
            color="#b4ff6c"
            metalness={0.8}
            roughness={0.25}
            clearcoat={1}
          />
        </mesh>
      </group>
    </Float>
  )
}

export default function CursorArrowScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#444" />

        <ReactiveArrow />

        <Environment preset="night" />

        <ContactShadows
          position={[0, -3, 0]}
          opacity={0.3}
          scale={10}
          blur={2.5}
          far={4}
        />
      </Canvas>
    </div>
  )
}