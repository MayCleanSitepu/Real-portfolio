import React, { useEffect } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSelenium, SiTailwindcss, SiKotlin, SiThreedotjs, SiDaisyui, SiNestjs, SiPlaywright } from "react-icons/si";
import { FaLaravel, FaJava, FaDocker, FaPython, FaNodeJs, FaPhp, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import Horizontal from "../Partial";

const stacks = [
  { name: "React", icon: RiReactjsLine },
  { name: "Next.js", icon: TbBrandNextjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Playwright", icon: SiPlaywright },
  { name: "Selenium", icon: SiSelenium },
  { name: "Laravel", icon: FaLaravel },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "PHP", icon: FaPhp },
  { name: "MySQL", icon: DiMysql },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "Docker", icon: FaDocker },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "DaisyUI", icon: SiDaisyui },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Figma", icon: FaFigma },
  { name: "Three.js", icon: SiThreedotjs },
];

const Tech = () => {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div
        id="konten"
        data-aos="fade-up"
        className=" flex flex-col justify-center items-center mt-5"
      >
        <span className="mt-3 mb-16 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 relative inline-block">
          <h1
            id="techStacks"
            className="text-[#373737] relative text-4xl font-[900] "
          >
            Tech Stacks
          </h1>
        </span>
      </div>

      {/* Grid */}
      <div
        className="mx-auto mb-10 grid w-full max-w-4xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
        data-aos="fade-up"
      >
        {stacks.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-xl border border-dashed px-3 py-2 text-sm shadow-sm"
            style={{ borderColor: "#373636" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg border"
              style={{ borderColor: "#373636" }}
            >
              <Icon className="text-lg text-[#373636] opacity-80" />
            </div>
            <span className="truncate text-xs sm:text-sm font-medium text-[#373636]">
              {name}
            </span>
          </div>
        ))}
      </div>

      <Horizontal />
    </div>
  );
};

export default Tech;
