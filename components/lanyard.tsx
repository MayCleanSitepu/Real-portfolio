"use client"

import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  useDistanceJoint,
  useSphericalJoint,
  Physics,
  RigidBody,
  BallCollider,
  CuboidCollider,
  RapierRigidBody,
} from "@react-three/rapier"
import { MeshLineGeometry, MeshLineMaterial } from "meshline"
import { extend } from "@react-three/fiber"
import { Text, Float } from "@react-three/drei"

extend({ MeshLineGeometry, MeshLineMaterial })

const segmentProps = {
  type: "dynamic" as const,
  canSleep: false,
  colliders: false as const,
  angularDamping: 4,
  linearDamping: 4,
}

const Lanyard = () => {
  const { width, height } = useThree((state) => state.viewport)
  const [dragged, setDragged] = useState<THREE.Vector3 | null>(null)
  
  const card = useRef<RapierRigidBody>(null!)
  const j1 = useRef<RapierRigidBody>(null!)
  const j2 = useRef<RapierRigidBody>(null!)
  const j3 = useRef<RapierRigidBody>(null!)
  const fixed = useRef<RapierRigidBody>(null!)

  // Fixed point at the top
  useSphericalJoint(fixed, j1, [[0, 0, 0], [0, 0.5, 0]])
  useSphericalJoint(j1, j2, [[0, -0.5, 0], [0, 0.5, 0]])
  useSphericalJoint(j2, j3, [[0, -0.5, 0], [0, 0.5, 0]])
  useSphericalJoint(j3, card, [[0, -0.5, 0], [0, 1.4, 0]])

  useFrame((state) => {
    if (dragged) {
      const vec = new THREE.Vector3().set(state.mouse.x * width / 2, state.mouse.y * height / 2, 0)
      card.current?.setNextKinematicTranslation(vec)
    }
  })

  return (
    <>
      <RigidBody ref={fixed} type="fixed" position={[0, height / 2, 0]} />
      
      <RigidBody ref={j1} {...segmentProps} position={[0, height / 2 - 1, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      
      <RigidBody ref={j2} {...segmentProps} position={[0, height / 2 - 2, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      
      <RigidBody ref={j3} {...segmentProps} position={[0, height / 2 - 3, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      
      <RigidBody 
        ref={card} 
        {...segmentProps} 
        type={dragged ? "kinematicPosition" : "dynamic"}
        position={[0, height / 2 - 5, 0]}
        enabledRotations={[true, true, true]}
        mass={2}
      >
        <CuboidCollider args={[0.8, 1.2, 0.05]} />
        <group
          onPointerDown={(e) => (e.stopPropagation(), setDragged(new THREE.Vector3()))}
          onPointerUp={(e) => (e.stopPropagation(), setDragged(null))}
          style={{ cursor: 'grab' }}
        >
          {/* Main Card Body */}
          <mesh>
            <boxGeometry args={[1.6, 2.4, 0.08]} />
            <meshPhysicalMaterial 
              color="#050505" 
              metalness={0.8} 
              roughness={0.1} 
              clearcoat={1}
              emissive="#111"
            />
          </mesh>

          {/* Card Content Decoration */}
          <group position={[0, 0, 0.05]}>
            <mesh position={[0, 0, -0.01]}>
              <planeGeometry args={[1.5, 2.3]} />
              <meshBasicMaterial color="#0a0a0a" />
            </mesh>
            
            {/* "Attendee" Text */}
            <Text
              position={[0, -0.9, 0.01]}
              fontSize={0.1}
              color="white"
              font="/fonts/GeistMono-Bold.woff"
              anchorX="center"
              anchorY="middle"
              opacity={0.5}
            >
              ATTENDEE / KLINN
            </Text>

            {/* Title */}
            <Text
              position={[-0.6, 0.85, 0.01]}
              fontSize={0.15}
              color="white"
              maxWidth={1.4}
              textAlign="left"
              anchorX="left"
            >
              KLINN
            </Text>
            
            <Text
              position={[-0.6, 0.7, 0.01]}
              fontSize={0.07}
              color="#fff"
              opacity={0.5}
              anchorX="left"
            >
              PROMPT TO PRODUCTION
            </Text>

            {/* ID Barcode Graphic */}
            <group position={[0, -0.5, 0.01]}>
               {[...Array(12)].map((_, i) => (
                 <mesh key={i} position={[(i - 6) * 0.1, 0, 0]}>
                    <planeGeometry args={[0.04, 0.4]} />
                    <meshBasicMaterial color="white" opacity={Math.random() > 0.3 ? 0.8 : 0.2} transparent />
                 </mesh>
               ))}
            </group>
          </group>
        </group>
      </RigidBody>

      <Line points={[fixed, j1, j2, j3, card]} />
    </>
  )
}

const Line = ({ points }: { points: React.RefObject<RapierRigidBody>[] }) => {
    const ref = useRef<any>(null)
    useFrame(() => {
        if (!ref.current) return
        const p = points.map(p => {
            const t = p.current?.translation()
            if (!t) return [0, 0, 0]
            // Offset for the card connection point
            if (p === points[points.length - 1]) {
                const rot = new THREE.Quaternion().copy(p.current?.rotation() as any)
                const offset = new THREE.Vector3(0, 1.4, 0).applyQuaternion(rot)
                return [t.x + offset.x, t.y + offset.y, t.z + offset.z]
            }
            return [t.x, t.y, t.z]
        }).flat()
        ref.current.setPoints(p)
    })
    return (
        <mesh>
            <meshLineGeometry ref={ref} />
            <meshLineMaterial 
                transparent 
                lineWidth={0.04} 
                color="#ffffff" 
                depthWrite={false}
                opacity={0.8}
            />
        </mesh>
    )
}

export default function LanyardScene() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas 
        shadows
        camera={{ position: [0, 0, 10], fov: 35 }}
        onCreated={(state) => state.gl.setClearColor(0x000000, 0)}
        style={{ pointerEvents: 'none' }}
      >
        <Physics gravity={[0, -25, 0]} interpolate>
           <group style={{ pointerEvents: 'auto' }}>
                <Lanyard />
           </group>
        </Physics>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[0, 5, 5]} angle={0.15} penumbra={1} intensity={2} castShadow />
      </Canvas>
    </div>
  )
}
