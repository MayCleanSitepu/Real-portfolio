import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import Img from "next/image";
import { useState, useEffect } from "react";

const Projects = () => {


  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setIsLikeCount] = useState(8);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setIsLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Durasi animasi
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div>
      <div
        id="konten"
        className="flex flex-col justify-center items-center mt-5"
      >
        <h1 className="text-[#373737] text-4xl font-[900]">Projects</h1>
      </div>
      <div id="isi" className=" bg-purple-500 flex justify-center w-full p-10">

        <div>

          <div id="x" className=" px-12 flex flex-row gap-2">
            <Img
            src={"/assets/kevinRushProfile.jpg"}
            alt="Shoes"
            width={25}
            height={25}
            className="rounded-full"
            />
              <h1 className="font-[500] text-[#373737]">Jose Morinho</h1>
          </div>
          <div id="y" className=" w-[60vw] flex flex-row gap-10 justify-between px-10">
            <div className=" w-full flex flex-col gap-1 p-2">
                <h2 className=" font-[900] text-[#373737] text-2xl">Muhammadiyah Web Content Collaboration</h2>
                <h1 className=" text-[#373737] line-clamp-3">Garbage collection in Python is the process of automatically identifying and reclaiming memory that is no longer in use by the program. This helps to manage memory efficiently and prevent memory leaks.</h1>
                <div id="icon-bawah" className=" flex flex-row gap-2 justify-between w-full">
                  <div id="grup-kiri" className="flex flex-row gap-2">
                    <div id="1-1" className="flex flex-row gap-2  justify-center items-center  "> 
                      <h1 className="font-bold text-[#373737] text-2xl">✦</h1> 
                      <h1 className="text-[12px] font-[900] text-[#373737] text-4xl">Jun 24</h1>
                    </div>
                    <div id="1-1" className="flex flex-row gap-2  justify-center items-center  "> 
                      <h1>🔥</h1> 
                      <h1 className="text-[12px] font-[900] text-[#373737] text-4xl">10.3k</h1>
                    </div>
                    
                    
                  </div>
                  
                  <div id="grup-kanan" className="flex flex-row">
                    <div id="1-4" onClick={handleLikeToggle} className="cursor-pointer flex flex-row justify-center items-center "> 
                      {isLiked ? <IoMdHeart className="text-3xl text-red-600" /> : <FaRegHeart className="text-[#373737] text-3xl" />}
                      <span className="ms-2 select-none text-[#373737]">10</span>
                      <h1 className={` text-[#373737] select-none ${isAnimating ? 'animate-spin-grow' : ''}`} >{likeCount}</h1>
                    </div>
                  </div>
                </div>
            </div>

            <div className="bg-slate-500 flex justify-center">
                <Img
                  src="/assets/mwcc2.png"
                  alt="Shoes"
                  width={500}
                  height={700}
                  className="select-none"
                />
                
            </div>
            <div>
              <hr className="bg-black" />
            </div>
          </div>
        </div>
      

      </div>

      <hr />
    </div>
  );
};

export default Projects;
