"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const StippledBackground = () => {
  const points = useMemo(() => {
    const p = new Float32Array(8000 * 3)
    for (let i = 0; i < 8000; i++) {
        // Create a sphere of particles
        const r = 20 + Math.random() * 30
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        
        p[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        p[i * 3 + 2] = r * Math.cos(phi)
    }
    return p
  }, [])

  const materialRef = useRef<THREE.ShaderMaterial>(null)

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
      varying vec2 vUv;
      varying float vDist;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDist = length(position);
        gl_PointSize = 3.0 * (15.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
      fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;
      varying float vDist;
      
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
        vec2 st = gl_PointCoord.xy;
        float d = distance(st, vec2(0.5));
        if (d > 0.5) discard;
        
        // Dithering / Stippling effect
        float noise = random(gl_FragCoord.xy + floor(uTime * 10.0) * 0.1);
        
        // Distance based density
        float density = smoothstep(50.0, 20.0, vDist);
        
        if (noise > (1.0 - density * 0.5)) {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 0.6);
        } else {
          discard;
        }
      }
    `,
    }),
    [],
  )

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        fragmentShader={shaderArgs.fragmentShader}
        vertexShader={shaderArgs.vertexShader}
        uniforms={shaderArgs.uniforms}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 40], fov: 45 }}>
        <StippledBackground />
      </Canvas>
      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
    </div>
  )
}
