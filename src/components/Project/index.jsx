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
        data-aos="fade-up"
        className=" flex flex-col justify-center items-center mt-5"
      >
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
          <h1
            id="Projects"
            className="text-[#373737] relative text-4xl font-[900] "
          >
            Projects
          </h1>
        </span>
      </div>
      <ProjectCard
        routeLink="/project/Mwcc"
        name="May Clean S."
        title="Muhammadiyah Web Content Collaboration"
        desc="The Muhammadiyah Web Content Collaboration project is a web platform designed to support collaboration in the creation and development of Muhammadiyah studies. This platform allows users to create, edit, and publish studies collaboratively, similar to the forking mechanism on GitHub."
        date="Jul 12"
        views="10.3k"
        imageSrc="/assets/mwcc2.png"
        fakeDigit={10}
        fakeCount={4}
        goTo="Visit"
        goToLink="https://dev.mwcc.masmoendigital.store/"
        bool={true}
      />
      <ProjectCard
        routeLink="/project/PionirUgm"
        name="May Clean S."
        title="Pionir Gadjah Mada 2024 Official Website"
        desc="Universitas Gadjah Mada's official student orientation website as a foundational introduction to the academic, social, and event activiy timeline of the university, equipping new students with essential resources and guidance for a successful academic journey."
        date="Jun 24"
        views="32.5k"
        imageSrc="/assets/pionir.png"
        fakeDigit={50}
        fakeCount={8}
        goTo="Visit"
        goToLink="https://pionir.ugm.ac.id/2024/"
        bool={true}
      />

      <ProjectCard
        routeLink="/project/appleClone"
        name="May Clean S."
        title="Apple Clone Website Using React" 
        desc=" Building a clone of the Apple website using React, Tailwind CSS, GSAP, React ThreeFiber. The project includes a homepage layout and animation, with a responsive design for mobile and desktop."
        date="Aug 15"
        views="3.1k"
        imageSrc="/assets/apple-clone.jpg"
        fakeDigit={1}
        fakeCount={0}
        goTo="Visit"
        goToLink="https://project-apple-clone.klinnn.xyz/"
        bool={true}
      />

      <ProjectCard
        routeLink="/project/3"
        name="May Clean S."
        title="3D Scene Animation with blender"
        desc="Low poly animation with 3D Software blender, creating a 3D scene with a low poly style, including a building, tree, animal and character."
        date="Jun 1"
        views="100.3k"
        imageSrc="/assets/Kereta.jpg"
        fakeDigit={30}
        fakeCount={2}
        goTo=""
        goToLink=""
        bool={false}
      />
      <div className="my-20 flex justify-center items-center">
        <Showmore />
      </div>

      <Horizontal />
    </>
  );
};

export default Projects;
