import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './kartu.css'; 

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';


export default function Kartu() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        pagination={true}
        modules={[EffectCards, Pagination]}
        className=" lg:h-60 lg:w-[30rem] lg:mr-5 h-40 w-[19rem] ml-auto "
      >
        <SwiperSlide className="border-2 border-dashed border-[#949494]"> 
          <div className="flex flex-col justify-between w-full h-full p-5">
            <div className="text-[#373737]">
                <h1 className="absolute top-3 left-6 rotate-90 text-[#f95858]">♦</h1>
            </div>
            <h1 className="text-[#373737] flex justify-center ">20 Tahun</h1> 
            <div className="text-[#373737]">
                <h1 className="absolute bottom-3 right-6 rotate-90 text-[#f95858]">♦</h1>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide className="border-2 border-dashed border-[#949494]">
          <div className="flex flex-col justify-between w-full h-full p-5">
            <div className="text-[#373737]">
                <h1 className="absolute top-3 left-6 rotate-90 text-[#f95858]">♦</h1>
            </div>
            <h1 className="text-[#373737] flex justify-center ">20 Tahun</h1> 
            <div className="text-[#373737]">
                <h1 className="absolute bottom-3 right-6 rotate-90 text-[#f95858]">♦</h1>
            </div>
          </div>  
        </SwiperSlide>
        <SwiperSlide className="flex flex-col border-2 border-dashed border-[#949494]">
          <div className="flex flex-col justify-between w-full h-full p-5">
            <div className="text-[#373737]">
                <h1 className="absolute top-3 left-6 rotate-90 text-[#f95858]">♦</h1>
            </div>
            <h1 className="text-[#373737] flex justify-center ">20 Tahun</h1> 
            <div className="text-[#373737]">
                <h1 className="absolute bottom-3 right-6 rotate-90 text-[#f95858]">♦</h1>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-4 border-2 border-dashed border-[#949494]">
          <h1 className="text-[#373737]">Contact Me </h1>
          <button className="border-[1px] border-dashed w-[10vh] rounded-md border-[#373737] text-[#373737]" onClick={() => window.location.href = 'mailto:maycleansitepu0204@mail.ugm.ac.id'}>📩</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
