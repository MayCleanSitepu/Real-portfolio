import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import Img from "next/image";
import { useState, useEffect } from "react";
import Horizontal from "../Partial";

const ProjectCard = ({ name, title, desc, date, views, imageSrc, fakeDigit, fakeCount }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setIsLikeCount] = useState(fakeCount);
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
    <div className="flex flex-col items-center w-full p-5 md:p-10">
      <div className="flex flex-col w-full max-w-3xl gap-5">
        <div className="flex flex-row gap-2 select-none">
          <Img
            src={"/assets/kevinRushProfile.jpg"}
            alt="Profile"
            width={25}
            height={25}
            className="rounded-full"
            loading="lazy"
          />
          <h1 className="font-medium text-[#373737]">{name}</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-bold text-2xl text-[#373737]">{title}</h2>
            <p className="text-[#373737] font-medium line-clamp-3">{desc}</p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2">
                <div className="flex flex-row items-center gap-2">
                  <h1 className="font-bold text-2xl text-[#373737]">✦</h1>
                  <h1 className="text-sm font-bold text-[#373737]">{date}</h1>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <h1>🔥</h1>
                  <h1 className="text-sm font-bold text-[#373737]">{views}</h1>
                </div>
              </div>
              <div onClick={handleLikeToggle} className="flex items-center cursor-pointer">
                {isLiked ? <IoMdHeart className=" text-[1.790rem] text-red-600" /> : <FaRegHeart className="  text-2xl text-[#373737]" />}
                <span className="text-[#373737] select-none text-sm font-bold ms-2">{fakeDigit}</span>
                <h1 className={`text-[#373737] select-none text-sm font-bold ${isAnimating ? 'animate-spin-grow' : ''}`}>{likeCount}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <Img
              src={imageSrc}
              alt="Project Image"
              width={500}
              height={700}
              className="select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
