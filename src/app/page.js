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
import Maintenance from '@/components/Maintenance/maintenance';



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
    <main class=" overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-cyan-900">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <AnimatePresence mode='wait'>
        {isLoading &&  <Preloader/>}
      </AnimatePresence>
      {/* <Scene/> */}
      {/* <Hero/>  */}
      {/* <Edu/> */}
      {/* <Tech/>  */}
      <Maintenance/>
    </main>


  )
}