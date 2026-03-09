"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import Dither from "./Dither"
import DecryptedText from "./DecryptedText"
import { TextEffect } from "./motion-primitives/text-effect"
import { AnimatedGroup } from "./motion-primitives/animated-group"
import { Button } from "./ui/button"
import Image from "next/image"

const textContent = {
  en: {
    title: "Engineering",
    subtitle: "Everything",
    dateSnippet: " Hi!, I'm Klinn and I, ",
    intro:
      "is a software engineer pushing the boundaries of full-stack development. Specializing in high-performance digital solutions that bridge complexity and elegance.",
    description: "-",
  },
  jp: {
    title: "エンジニアリング",
    subtitle: "エモーション",
    dateSnippet: "ソフトウェアエンジニア / デジタル職人",
    intro:
      "は、フルスタック開発の限界に挑むソフトウェアエンジニア。複雑さとエレガンスを繋ぐ高性能なデジタルソリューションを専門としています。",
    description: "-",
  },
}

export default function InteractiveLanding() {
  const [language, setLanguage] = useState<keyof typeof textContent>("en")

  return (
    <main className="relative min-h-screen w-full bg-black text-white font-mono overflow-hidden">
      {/* Background Layer */}
      <div className='absolute inset-0 w-full h-full opacity-60'>
        <Dither
          waveColor={[0.3, 0.3, 0.3]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          pixelSize={2}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>


      {/* Content Layer */}
      <div className="relative z-20 flex flex-col justify-between min-h-screen p-8 sm:p-16">
        {/* Header */}
        <header className="flex justify-between items-start w-full">
          <div className="flex items-center space-x-4">
            <Image
              src="/me.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />

            <div className="space-y-0.5">
              <p className="text-[10px] tracking-[0.2em] text-[#b4ff6c]">@ey_kean</p>
              <h1 className="text-xs font-bold tracking-widest uppercase">Klinn - Profile</h1>
            </div>
          </div>

          <button
            onClick={() => setLanguage(language === "en" ? "jp" : "en")}
            className="font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:text-[#b5ff6d] transition-opacity border border-white/40 px-3 py-1 rounded-full"
          >
            {language === "en" ? "日本語" : "English"}
          </button>
        </header>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
          <div className="max-w-[600px] space-y-10">
            <div className="space-y-4">
              <div className="h-6">
                <DecryptedText
                  text={textContent[language].dateSnippet}
                  animateOn="view"
                  revealDirection="start"
                  sequential
                  speed={50}
                  className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white"
                />
              </div>

              <div className="space-y-0">
                <TextEffect
                  key={language + "-title"}
                  preset="fade-in-blur"
                  per="char"
                  className="text-[#b5ff6d] text-6xl sm:text-6xl xl:text-9xl font-bold tracking-tighter leading-[0.85] uppercase selection:bg-purple-900"
                >
                  {textContent[language].title}
                </TextEffect>
                <TextEffect
                  key={language + "-subtitle"}
                  preset="fade-in-blur"
                  per="char"
                  delay={0.5}
                  className="text-6xl sm:text-6xl xl:text-9xl font-bold tracking-tighter leading-[0.85] uppercase text-white italic selection:bg-purple-900"
                >
                  {textContent[language].subtitle}
                </TextEffect>
              </div>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                delay={1}
                className="mt-8 max-w-[450px] text-sm sm:text-base leading-relaxed opacity-60 font-sans selection:text-[#b4ff6c]"
              >
                {textContent[language].intro}
              </TextEffect>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1.5,
                    },
                  },
                },
              }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button asChild size="lg" className="rounded-none px-8 text-[10px] font-bold uppercase tracking-widest h-12 bg-white text-black hover:bg-white/90">
                  <Link href="/project/Showcase" className="flex items-center gap-2 group/btn">
                    View Showcase
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button asChild variant="outline" size="lg" className="rounded-none px-8 text-[10px] font-bold uppercase tracking-widest h-12 border-white/20 bg-black/20 backdrop-blur-md">
                  <Link href="mailto:mayclean02@gmail.com">Contact Me</Link>
                </Button>
              </motion.div>
            </AnimatedGroup>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <ul className="flex flex-wrap gap-8 text-[9px] tracking-[0.2em] uppercase">
            <li>
              <Link href="https://github.com/maycleansitepu" className="hover:opacity-100 hover:text-white transition-opacity">
                Github / 01
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/mayclean-sitepu" className="hover:opacity-100 hover:text-white transition-opacity">
                Linkedin / 02
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/ey_kean" className="hover:opacity-100 hover:text-white transition-opacity">
                Instagram / 03
              </Link>
            </li>
          </ul>

          <p className="text-[9px] tracking-[0.2em] uppercase opacity-20">
            © 2026 mayclean.s
          </p>
        </footer>
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />
    </main>
  )
}
