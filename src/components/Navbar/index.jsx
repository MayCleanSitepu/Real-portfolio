'use client'
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Profile from "./Profile.jsx"; 

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled (more than 0)
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <header className="top-0 z-50 w-full fixed h-14">
      <div id="base-navbar" className={isScrolled ? 
        "flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-dashed border-b border-l-0 border-r-0 select-none lg:border-r lg:border-l lg:rounded-b-xl border-neutral-300/50 bg-white/50 dark:border-neutral-600/40 dark:bg-neutral-900/60 backdrop-blur-md" : 
        "flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 select-none lg:border-r lg:border-l lg:rounded-b-xl border-transparent"}>
          <div id="brand" className="h-5 text-base relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold">
          ✦ Klinn
          </div>
          <div id="item" className="fixed ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 z-40 flex-col items-center justify-start hidden h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0 top-[75px]">
  <Link className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-500 dark:hover:text-white text-neutral-900 dark:text-white">Home</Link>
  <Link className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-500 dark:hover:text-white text-neutral-900 dark:text-white">About</Link>
  <Link className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-500 dark:hover:text-white text-neutral-900 dark:text-white">Projects</Link>
  <Link className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto"> <Profile /> </Link>
</div>
      </div>
    </header>
  );
}