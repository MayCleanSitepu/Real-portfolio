"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Preloader from "../../../components/Preloader";
import Hero from "../../../components/Hero";
import Scene from "@/components/Scene/Scene";
import Tech from "../../../components/Tech";
import Edu from "@/components/Edu/Edu";
import Projects from "@/components/Project";
import Summon from "@/components/Summon";
import Profile from "../../../components/Navbar/Profile";

function Showcase() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="top-0 z-50 w-[99vw] fixed h-14">
        <div
          id="base-navbar"
          className={
            isScrolled
              ? "flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-dashed border-b-2 border-l-2 border-r-2 select-none lg:border-r-2 lg:border-l-2 lg:rounded-b-xl bg-white/40 border-[#949595] backdrop-blur-md"
              : "flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 select-none lg:border-r lg:border-l lg:rounded-b-xl border-transparent"
          }
        >
          <div
            id="brand"
            className={`h-5 text-base relative z-30 flex items-center space-x-1.5 ${isScrolled ? "text-[#373636]" : "text-[#373636]"} font-semibold overflow-hidden`}
          >
            ◑ Klinn
          </div>

          <button
            className="block sm:hidden text-black dark:text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div
            id="item"
            className={`fixed ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 z-40 flex-col items-center justify-start  ${isMenuOpen ? "flex, bg-white" : "hidden"}  h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:w-auto sm:pr-0 sm:pt-0 top-14 sm:top-auto`}
          >
            <Link
              href="/"
              className={`cursor-pointer relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-[#9fa362] ${isScrolled ? "text-[#373636]" : "text-[#373636]"}`}
            >
              Home
            </Link>
            <Link
              href="#Projects"
              className={`cursor-pointer relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-[#9fa362] ${isScrolled ? "text-[#373636]" : "text-[#373636]"}`}
            >
              Projects
            </Link>
            <Link
              href="#"
              className={`cursor-pointer relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-[#9fa362] ${isScrolled ? "text-[#373636]" : "text-[#373636]"}`}
            >
              Summon
            </Link>
            <Link className="cursor-pointer relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto">
              <Profile />
            </Link>
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-cyan-900">
        {/* <Scene/> */}
        <div className="absolute inset-0 -z-10 h-[540vh] w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <Hero />
        <Tech />
        {/* <Maintenance/> */}
        <Projects />
        <Summon />
        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1mibpgdICTAiAxz_XW4usPBwv5v3a0pE&ehbc=2E312F" width="640" height="480"></iframe> */}
      </main>
    </>
  );
}

export default Showcase;
