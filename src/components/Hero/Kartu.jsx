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
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2004;

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        pagination={true}
        modules={[EffectCards, Pagination]}
        className="mb-10 lg:h-60 lg:w-[30rem] lg:mr-5 h-40 w-[19rem] ml-auto "
      >
        <SwiperSlide className=" border-2 border-dashed border-[#949494]">
          <div className="cursor-grab flex flex-col justify-between w-full h-full p-5">
            <div className="text-[#373737]">
              <h1 className="absolute top-3 left-6 rotate-90 text-[#f95858]">
                ♦
              </h1>
            </div>
            <h1 className="text-[#373737] flex justify-center ">{age} Y.O</h1>
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
              <h1 className="text-[#373737] flex justify-center text-center ">
                Thankyou for visiting !
              </h1>
            <div className="text-[#373737]">
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
