"use client"

import { useRef, useState } from "react"
import { Html, Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { useCard } from "./card-context"

interface FloatingCardProps {
  card: {
    id: string
    imageUrl: string
    alt: string
    title: string
  }
  position: {
    x: number
    y: number
    z: number
    rotationX: number
    rotationY: number
    rotationZ: number
  }
}

export default function FloatingCard({ card, position }: FloatingCardProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const { setSelectedCard } = useCard()

  // Make cards always face the camera
  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }
  })

  const handleInteraction = (e: any, isStart: boolean) => {
    e.stopPropagation()
    setHovered(isStart)
    document.body.style.cursor = isStart ? "pointer" : "auto"
  }

  const handleClickAction = (e: any) => {
    e.stopPropagation()
    setSelectedCard(card)
  }

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      {/* Visual card content with direct DOM handlers for hitbox */}
      <Html
        transform
        distanceFactor={10}
        position={[0, 0, 0.01]}
        style={{
          transition: "all 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <div
          onClick={handleClickAction}
          onMouseEnter={(e) => handleInteraction(e, true)}
          onMouseLeave={(e) => handleInteraction(e, false)}
          className="w-72 h-48 rounded-lg overflow-hidden shadow-2xl bg-[#1F2121] p-3 select-none cursor-pointer"
          style={{
            boxShadow: hovered
              ? "0 25px 50px rgba(181, 255, 109, 0.5), 0 10px 30px rgba(181, 255, 109, 0.2)"
              : "0 15px 30px rgba(0, 0, 0, 0.6)",
            border: hovered ? "2px solid #b5ff6d" : "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <img
            src={card.imageUrl || "/placeholder.svg"}
            alt={card.alt}
            className="w-full h-36 object-cover rounded-md pointer-events-none"
            loading="lazy"
            draggable={false}
          />
          <div className="mt-1 text-center pointer-events-none">
            <p className="text-white text-xs font-medium truncate">{card.title}</p>
          </div>
        </div>
      </Html>

      {/* Keep the plane as a backup invisible catch-all or for shadow casting if needed, but removed interaction from it */}
      <Plane ref={meshRef} args={[8, 5]}>
        <meshBasicMaterial transparent opacity={0} />
      </Plane>
    </group>
  )
}
