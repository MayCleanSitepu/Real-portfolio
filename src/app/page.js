'use client'
import { useRef, useEffect, useState } from 'react';
import Landing from '../components/Landing';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import About from '../components/Tech';
import Scene from '@/components/Scene/Scene';
import ParticlesBackground from '@/components/ParticlesBackground/ParticlesBackground';
import Tech from '../components/Tech';
import Edu from '@/components/Edu/Edu';



export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  

  return (
    <main class="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-cyan-900">
      <div class="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <AnimatePresence mode='wait'>
        {isLoading &&  <Preloader/>}
      </AnimatePresence>
      <Scene/>
      <Hero/> 
      <Edu/>
      <Tech/> 
    </main>
  )
}