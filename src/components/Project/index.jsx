import React from 'react'
import ProjectCard from './cards'

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
    </>
  )
}

export default Projects;