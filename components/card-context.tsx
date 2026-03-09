"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface Card {
  id: string
  imageUrl: string
  alt: string
  title: string
  description?: string
  stack?: string[]
}

interface CardContextType {
  selectedCard: Card | null
  setSelectedCard: (card: Card | null) => void
  cards: Card[]
}

const CardContext = createContext<CardContextType | undefined>(undefined)

export function CardProvider({ children }: { children: ReactNode }) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  const cards: Card[] = [
    {
      id: "1",
      imageUrl: "/projects-image/apple-clone.jpg",
      alt: "Apple Clone",
      title: "Apple Website Clone",
      description: "A high-fidelity reconstruction of the Apple website, featuring smooth GSAP animations and responsive design.",
      stack: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    },
    {
      id: "2",
      imageUrl: "/projects-image/girimulyo.jpg",
      alt: "Girimulyo Project",
      title: "Girimulyo Digitalization",
      description: "A community-focused platform designed to streamline local government services and information sharing.",
      stack: ["Next.js", "Shadcn UI", "Gemini-AI"],
    },
    {
      id: "3",
      imageUrl: "/projects-image/mwcc2.png",
      alt: "MWCC Project",
      title: "MWCC Dashboard",
      description: "A complex data visualization dashboard for content collaboration GitHub like features.",
      stack: ["React", "Laravel", "MySQL", "Tailwind"],
    },
    {
      id: "4",
      imageUrl: "/projects-image/palongaan.jpg",
      alt: "Palongaan Site",
      title: "Palongaan Village Portal",
      description: "An interactive portal showcasing local heritage, news, and official documents for the Palongaan community.",
      stack: ["Next.js", "Strapi CMS"],
    },
    {
      id: "5",
      imageUrl: "/projects-image/pionir.png",
      alt: "Pionir App",
      title: "Pionir UGM 2024",
      description: "An University freshman guide, onboarding and information center",
      stack: ["Next.js", "Strapi CMS", "Three.js", "Figma"],
    },
    {
      id: "6",
      imageUrl: "/projects-image/rentzy.jpg",
      alt: "Rentzy Platform",
      title: "Rentzy Marketplace",
      description: "A peer-to-peer rental marketplace with integrated payment processing and user verification.",
      stack: ["Next.js", "Nest.js", "Postgresql", "TypeScript"],
    },
    {
      id: "7",
      imageUrl: "https://i.ibb.co/bjV35jNQ/7.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "8",
      imageUrl: "https://i.ibb.co/PZ7WLs7g/8.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "9",
      imageUrl: "https://i.ibb.co/qLR5bQRM/9.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "10",
      imageUrl: "https://i.ibb.co/PdNhw3K/10.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "11",
      imageUrl: "https://i.ibb.co/zWpN1nqJ/11.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "12",
      imageUrl: "https://i.ibb.co/fVYnCXgR/12.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "13",
      imageUrl: "https://i.ibb.co/1G6jZWcZ/13.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "14",
      imageUrl: "https://i.ibb.co/xKG7m905/14.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "15",
      imageUrl: "https://i.ibb.co/7dJzR3xK/15.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "16",
      imageUrl: "https://i.ibb.co/NdJ1csXB/16.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "17",
      imageUrl: "https://i.ibb.co/8L2Sdt5Q/17.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "18",
      imageUrl: "https://i.ibb.co/mC1zxJYq/18.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "19",
      imageUrl: "https://i.ibb.co/wryzsKs4/20.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
    {
      id: "20",
      imageUrl: "https://i.ibb.co/1fvnxL3L/19.png",
      alt: "Coming Soon",
      title: "Coming Soon",
      description: "Coming Soon",
      stack: ["Coming Soon"],
    },
  ]

  return <CardContext.Provider value={{ selectedCard, setSelectedCard, cards }}>{children}</CardContext.Provider>
}

export function useCard() {
  const context = useContext(CardContext)
  if (context === undefined) {
    throw new Error("useCard must be used within a CardProvider")
  }
  return context
}
