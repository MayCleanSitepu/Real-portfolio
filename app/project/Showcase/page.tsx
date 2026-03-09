"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import StarfieldBackground from "@/components/starfield-background"
import CardGalaxy from "@/components/card-galaxy"
import CardModal from "@/components/card-modal"
import { CardProvider, useCard } from "@/components/card-context"
import Link from "next/link"
import { motion } from "motion/react"

export default function ShowcasePage() {
  return (
    <CardProvider>
      <div className="w-full h-screen relative overflow-hidden bg-black flex flex-col items-center justify-center">
        <StarfieldBackground />

        {/* Back Button */}
        <div className="absolute top-8 right-8 z-50">
          <Link 
            href="/" 
            className="text-[#b5ff6d] hover:text-[#b5ff6d] transition-all text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 group"
          >
            <span className="w-8 h-[1px] bg-white/20 group-hover:bg-[#b5ff6d] transition-all" />
            [ Return to Home ]
          </Link>
        </div>

        <Canvas
          camera={{ position: [0, 0, 45], fov: 60 }}
          className="absolute inset-0 z-10"
          onCreated={({ gl }: { gl: any }) => {
            gl.domElement.style.pointerEvents = "auto"
          }}
        >
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.6} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />

            <CardGalaxy />

            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={5}
              maxDistance={80}
              autoRotate={false}
              rotateSpeed={0.5}
              zoomSpeed={1.2}
              panSpeed={0.8}
              target={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>

        <CardModal />

        <ShowcaseUI />
      </div>
    </CardProvider>
  )
}

function ShowcaseUI() {
  const { cards, selectedCard } = useCard()
  
  return (
    <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-10 flex flex-col justify-between overflow-hidden">
      {/* Top Header */}
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white"
        >
          <div className="bg-black/40 backdrop-blur-md p-5 rounded-sm border-l-2 border-[#b5ff6d]">
            <h1 className="text-[#b5ff6d] text-4xl font-black mb-1 tracking-tighter uppercase italic leading-none">
              Project Showcase
            </h1>
            <p className="text-[10px] font-mono opacity-50 flex items-center gap-2 tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5ff6d] animate-pulse" />
              STATUS: ARCHIVE_ACCESSED / {cards.length} ENTRIES FOUND
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:block text-right"
        >
          <div className="inline-block bg-black/40 backdrop-blur-md p-4 border border-white/5">
            <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em] mb-3">
              Interaction_Protocol
            </p>
            <ul className="text-[10px] font-mono text-white/60 space-y-1.5 uppercase">
              <li className="flex items-center justify-end gap-2">MOUSE_1 <span className="text-white/20">•</span> ORBIT</li>
              <li className="flex items-center justify-end gap-2">WHEEL <span className="text-white/20">•</span> DEPTH</li>
              <li className="flex items-center justify-end gap-2">CLICK <span className="text-white/20">•</span> SCAN</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Vertical Typography - Precision positioned */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute left-[2vw] top-1/2 -translate-y-1/2 select-none"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        <h2 className="text-[12rem] font-black text-white uppercase tracking-[-0.05em] leading-none">
          {selectedCard ? `PROJECT_${selectedCard.id}` : "SOURCE_DUMP_01"}
        </h2>
      </motion.div>

      {/* Scanning Line */}
      <motion.div 
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-white/10 z-10"
      />

      {/* Bottom Info Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0 relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[9px] space-y-4 md:space-y-2 bg-black/40 backdrop-blur-sm p-4 w-full md:w-auto rounded-sm border-l-2 border-[#b5ff6d]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-white/50">
            <span className="flex items-center gap-2">
              <span className="text-[#b5ff6d]">ACTIVE_NODE:</span> {selectedCard ? selectedCard.title : "NULL"}
            </span>
            <span className="hidden sm:block w-[1px] h-3 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="text-[#b5ff6d]">VERSION:</span> {selectedCard ? `v0.${selectedCard.id}.2` : "v0.0.0"}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-white/30 uppercase tracking-[0.2em]">
            <span>© 2024 PORTFOLIO_OS</span>
            <span className="hidden sm:block w-[1px] h-3 bg-white/10" />
            <span className="animate-pulse">KERNEL_RUNTIME: 0x92F</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-start md:items-end gap-2"
        >
          <div className="px-6 py-2 bg-[#b5ff6d] text-black font-mono text-[11px] font-black rounded-sm skew-x-[-12deg]">
            BETA_VERSION_0.9.1
          </div>
          <p className="text-[9px] font-mono text-white/40 tracking-widest uppercase">
            unauthorized access prohibited
          </p>
        </motion.div>
      </div>
    </div>
  )
}
