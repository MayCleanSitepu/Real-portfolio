import React from "react";
import ProjectCard from "./cards";
import Image from "next/image";
import Horizontal from "../Partial";
import Showmore from "../Partial/Tooltip";

const Projects = () => {
  return (
    <>
      <div
        id="konten"
        className="flex flex-col justify-center items-center mt-5"
      >
        <h1 id="projects" className="text-[#373737] text-4xl font-[900]">
          Projects
        </h1>
      </div>
      <ProjectCard
        routeLink="/project/1"
        name="May Clean S."
        title="Muhammadiyah Web Content Collaboration"
        desc="Garbage collection in Python is the process of automatically identifying and reclaiming memory that is no longer in use by the program. This helps to manage memory efficiently and prevent memory leaks."
        date="Jul 12"
        views="10.3k"
        imageSrc="/assets/mwcc2.png"
        fakeDigit={10}
        fakeCount={4}
      />
      <ProjectCard
      routeLink="/project/1"
        name="May Clean S."
        title="Pionir Gadjah Mada 2024 Official Website"
        desc="Garbage collection in Python is the process of automatically identifying and reclaiming memory that is no longer in use by the program. This helps to manage memory efficiently and prevent memory leaks."
        date="Jun 24"
        views="32.5k"
        imageSrc="/assets/pionir.png"
        fakeDigit={50}
        fakeCount={8}
      />
      <ProjectCard
      routeLink="/project/1"
        name="May Clean S."
        title="3D Scene Animation with blender"
        desc="Garbage collection in Python is the process of automatically identifying and reclaiming memory that is no longer in use by the program. This helps to manage memory efficiently and prevent memory leaks."
        date="Jun 1"
        views="100.3k"
        imageSrc="/assets/mwcc2.png"
        fakeDigit={30}
        fakeCount={2}
      />
      <div className="my-20 flex justify-center items-center">
        <Showmore />
      </div>

      <Horizontal />
    </>
  );
};

export default Projects;
