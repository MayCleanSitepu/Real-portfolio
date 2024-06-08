import React from 'react'
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


const Index = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl font-bold'> Tech Stacks</h1>
      <div className='m-auto flex flex-wrap items-center justify-center gap-4 sm:gap-10 w-full sm:w-2/4'>
        {/* list tech stacks */}
        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <RiReactjsLine className='text-4xl sm:text-7xl text-cyan-400'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <TbBrandNextjs className='text-4xl sm:text-7xl text-white'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <SiSelenium className='text-4xl sm:text-7xl text-green-500'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaLaravel className='text-4xl sm:text-7xl text-red-600'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaJava className='text-4xl sm:text-7xl text-white'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <DiMysql className='text-4xl sm:text-7xl text-white'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <SiTailwindcss className='text-4xl sm:text-7xl text-cyan-400'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaDocker className='text-4xl sm:text-7xl text-blue-500'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaPython className='text-4xl sm:text-7xl text-yellow-400'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <SiKotlin className='text-4xl sm:text-7xl text-purple-800'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <IoLogoFirebase className='text-4xl sm:text-7xl text-yellow-600'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaNodeJs className='text-4xl sm:text-7xl text-green-900'/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaPhp className='text-4xl sm:text-7xl text-blue-800'/>
        </div>
      </div>

      </div>
  )
}

export default Index;