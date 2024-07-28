import React from "react";
import { HC1, HC2, HC3, HCL1, HCL2 } from "./constant";
import Image from "next/image";

const Medium = () => {
  return (
    <>
      <div id="container" className=" mt-20 flex flex-col items-center ">
        <div className=" flex flex-col gap-10 max-w-[680px] px-10">
          <div id="grupAtas" className="flex flex-col gap-4">
            <div id="title" className="">
              <h1 className="font-rowdies font-[800] text-[42px] text-[#242424]">
                Muhammadiyah Web Content Collaboration
              </h1>
            </div>
            <div id="profileBar" className="">
              <div className="flex flex-row gap-2 select-none cursor-pointer">
                <Image
                  src={"/assets/kevinRushProfile.jpg"}
                  alt="Profile"
                  width={25}
                  height={25}
                  className="rounded-full cursor-pointer"
                  loading="lazy"
                />
                <h1 className="font-medium text-[#373737] cursor-pointer">
                  May Clean S
                </h1>
              </div>
            </div>
          </div>
          {/*HERO START */}
          <div id="Hero" className="">
            <div className="flex justify-center">
              <Image
                src="/assets/mwcc2.png"
                alt="mwcc"
                width={500}
                height={500}
                className="rounded-sm mb-10"
              />
            </div>
            <p
              className="text-[#242424] text-base sm:text-lg tracking-wide">
              {HC1}
            </p>
            <br />
            <p className="text-[#242424] text-base sm:text-lg tracking-wide">{HC2}</p>
            <br />
            <p className="text-[#2e2e2e] text-base sm:text-lg tracking-wide">{HC3}</p>
            <br />
            <h1 className="ms-5 font-bold text-xl text-[#242424] tracking-wide">
              Main Feature
            </h1>
            <br />
            <ul className="text-[#242424] text-base sm:text-lg tracking-wide list-decimal pl-5">
              {HCL1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <br />
            <h1 className="ms-5 font-bold text-xl tracking-wide text-[#242424]">
              Tech Stacks
            </h1>
            <br />
            <ul className="text-[#242424] text-base sm:text-lg tracking-wide list-disc pl-5">
              {HCL2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/*HERO END */}
        </div>
      </div>
    </>
  );
};

export default Medium;
