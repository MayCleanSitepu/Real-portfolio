import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "./kartu.css";

// import required modules
import { EffectCards, Pagination } from "swiper/modules";

export default function Kartu() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        pagination={true}
        modules={[EffectCards, Pagination]}
        className="c lg:h-60 lg:w-[30rem] lg:mr-5 h-40 w-[19rem] ml-auto "
      >
        <SwiperSlide className=" border-2 border-dashed border-[#949494]">
          <div className="cursor-grab flex flex-col justify-between w-full h-full p-5">
            <div className="text-[#373737]">
              <h1 className="absolute top-3 left-6 rotate-90 text-[#f95858]">
                ♦
              </h1>
            </div>
            <h1 className="text-[#373737] flex justify-center ">20 Y.O</h1>
            <div className="text-[#373737]">
              <h1 className="absolute bottom-3 right-6 rotate-90 text-[#f95858]">
                ♦
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" border-2 border-dashed border-[#949494]">
          <div className="cursor-grab flex flex-col justify-between w-full h-full p-5">
            <div className="text-[#373737]">
              <h1 className="absolute top-3 left-6 rotate-[-90deg] text-[#373737]">
                ♠
              </h1>
            </div>
            <h1 className="text-[#373737] flex justify-center text-center">
              📍 Yogyakarta, Indonesia
            </h1>
            <div className="text-[#373737]">
              <h1 className="absolute bottom-3 right-6 rotate-90 text-[#373737]">
                ♠
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col border-2 border-dashed border-[#949494]">
          <div className="cursor-grab flex flex-col justify-between w-full h-full p-5">
            <div className="text-[#373737]">
              <h1 className="absolute top-3 left-6 rotate-[-90deg] text-[#373737]">
                ♣
              </h1>
            </div>
            <h1 className="text-[#373737] flex justify-center text-center ">
              Software Engineering SV UGM
            </h1>
            <div className="text-[#373737]">
              <h1 className="absolute bottom-3 right-6 rotate-90 text-[#373737]">
                ♣
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-grab flex flex-col gap-4 border-2 border-dashed border-[#949494]">
          <div className="cursor-grab flex flex-col justify-between w-full h-full p-5">
            <div className="text-[#373737]">
              <h1 className="absolute top-3 left-6 rotate-[-90deg] text-[#f95858]">
                ♥
              </h1>
            </div>
            <div className="flex flex-col items-center sm:mb-5 mb-20">
              {/* <h1 className="text-[#373737] flex justify-center text-center ">
                Contact Me
              </h1>
              <button
                className="border-[1px] border-dashed w-[10vh] rounded-md border-[#373737] text-[#373737]"
                onClick={() =>
                  (window.location.href =
                    "mailto:maycleansitepu0204@mail.ugm.ac.id")
                }
              >
                📩
              </button> */}
              <h1 className="absolute bottom-3 right-6 rotate-90 text-[#f95858]">
                ♥
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
