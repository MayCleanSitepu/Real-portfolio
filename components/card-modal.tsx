"use client"

import type React from "react"

import { useState, useRef, type MouseEvent } from "react"
import { Download, Heart, X } from "lucide-react"
import { useCard } from "./card-context"

export default function CardModal() {
  const { selectedCard, setSelectedCard } = useCard()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  if (!selectedCard) return null

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const handleClose = () => {
    setSelectedCard(null)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-5xl w-full bg-[#1F2121] rounded-[24px] overflow-hidden shadow-2xl border border-white/10">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-20 bg-black/20 backdrop-blur-md p-2 rounded-full border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          {/* Image Section */}
          <div className="lg:col-span-3 relative bg-black flex items-center justify-center p-4 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                alt={selectedCard.alt}
                src={selectedCard.imageUrl || "/placeholder.svg"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-[#1F2121] to-[#1a1c1c]">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#b5ff6d]/10 border border-[#b5ff6d]/20">
                <p className="text-[#b5ff6d] text-[10px] font-bold uppercase tracking-[0.2em]">Project Case Study</p>
              </div>
              <h3 className="text-white text-3xl lg:text-4xl font-bold leading-tight">{selectedCard.title}</h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">The Concept</h4>
              <p className="text-white/70 text-base lg:text-lg leading-relaxed font-sans">
                {selectedCard.description || "No description provided for this project yet. Stay tuned for updates on the implementation details and design process."}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCard.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/90 text-xs font-mono hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                )) || (
                  <span className="text-white/30 text-xs italic">Stack information not listed.</span>
                )}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={handleClose}
                className="w-full py-4 bg-[#b5ff6d] text-black font-bold uppercase tracking-widest text-xs hover:bg-[#a2e661] transition-transform active:scale-[0.98] rounded-none"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
