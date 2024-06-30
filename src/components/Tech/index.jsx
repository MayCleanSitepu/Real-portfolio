import React, { use, useEffect } from 'react'
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import { SiSelenium } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiThreedotjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Tech = () => {

  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])
 

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl font-bold text-[#666666]'> Tech Stacks</h1>
      <div className='m-auto flex flex-wrap items-center justify-center gap-4 sm:gap-10 w-full sm:w-2/4'>
        {/* list tech stacks */}
        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4' data-aos="fade-down">
          <RiReactjsLine className='text-4xl sm:text-7xl text-cyan-400'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4' data-aos="fade-down">
          <TbBrandNextjs className='text-4xl sm:text-7xl text-[#666666]'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <SiSelenium className='text-4xl sm:text-7xl text-green-500'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <FaLaravel className='text-4xl sm:text-7xl text-red-600'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <FaJava className='text-4xl sm:text-7xl text-zinc-800'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <DiMysql className='text-4xl sm:text-7xl text-blue-300'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <SiTailwindcss className='text-4xl sm:text-7xl text-cyan-400'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <FaDocker className='text-4xl sm:text-7xl text-blue-500'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <FaPython className='text-4xl sm:text-7xl text-yellow-400'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <SiKotlin className='text-4xl sm:text-7xl text-purple-800'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <IoLogoFirebase className='text-4xl sm:text-7xl text-yellow-600'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <FaNodeJs className='text-4xl sm:text-7xl text-green-900'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <FaPhp className='text-4xl sm:text-7xl text-blue-950'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <SiThreedotjs className='text-4xl sm:text-7xl text-[#666666]'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <FaFigma className='text-4xl sm:text-7xl text-red-400'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <FaBootstrap className='text-4xl sm:text-7xl text-purple-600'/>
        </div>

        <div className='rounded-2xl border-2 border-neutral-600 p-2 sm:p-4'data-aos="fade-down">
          <SiDaisyui className='text-4xl sm:text-7xl text-blue-400'/>
        </div>
        
      </div>

      </div>
  )
}

export default Tech;