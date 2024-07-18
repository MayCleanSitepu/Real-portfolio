import React from 'react'
import ProjectCard from './cards'
import Image from 'next/image'
import Horizontal from '../Partial'

const Projects = () => {
  return (
    <>
    <div
        id="konten"
        className="flex flex-col justify-center items-center mt-5"
      >
        <h1 className="text-[#373737] text-4xl font-[900]">Projects</h1>
      </div>
      <ProjectCard
      name="Jose Morinho"
      title="Muhammadiyah Web Content Collaboration"
      desc="Garbage collection in Python is the process of automatically identifying and reclaiming memory that is no longer in use by the program. This helps to manage memory efficiently and prevent memory leaks."
      date="Jun 24"
      views="10.3k"
      imageSrc="/assets/mwcc2.png"
      fakeDigit={10}
      fakeCount={4}
    />
      <ProjectCard
      name="Jose Morinho"
      title="Muhammadiyah Web Content Collaboration"
      desc="Garbage collection in Python is the process of automatically identifying and reclaiming memory that is no longer in use by the program. This helps to manage memory efficiently and prevent memory leaks."
      date="Jun 24"
      views="10.3k"
      imageSrc="/assets/mwcc2.png"
      fakeDigit={1}
      fakeCount={8}
    />

    <Horizontal/>
    
    <div className="flex justify-center items-center">
      <Image
        id="circle1"
        alt="Lingkaran Besar"
        src="/assets/ring2.svg"
        width={500}
        height={500}
        className="rotate-circle absolute w-[90%]  sm:w-[70%] md:h-[60%] md:w-[60%]"
      />
      <Image
        id="circle2"
        alt="Lingkaran Kecil"
        src="/assets/ring2.svg"
        width={350}
        height={350}
        className="rotate-circle2 w-[65%] sm:w-[50%] md:h-[40%] md:w-[40%]"
        style={{ zIndex: 1 }}/>
    </div>
        
    </>
  )
}

export default Projects;