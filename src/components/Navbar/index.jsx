import React from 'react'
import Image from 'next/image'
import {FaLinkedin } from 'react-icons/fa'
import {FaGithub } from 'react-icons/fa'
import {FaInstagram } from 'react-icons/fa'

const index = () => {
  return (
    <nav className=' flex flex-column items-center justify-beetween py-6'>
        <div className='flex ml-10 flex-shrink-0 items-center'>
        <Image 
        src="/next.svg"
        width={100}
        height={100}
        alt="background"
      />
        </div>
        <div className='m-8 ml-auto flex items-center justify-center gap-4 text-2xl text-white'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default index