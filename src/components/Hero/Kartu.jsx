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
          <h1 className="text-[#373737]">20 Tahun</h1> 
          </SwiperSlide>
        <SwiperSlide className="border-2 border-dashed border-[#949494]">
          <h1 className="text-[#373737]">Domisili Jogja</h1>  
        </SwiperSlide>
        <SwiperSlide className="flex flex-col border-2 border-dashed border-[#949494]">
          <h1 className="text-[#373737]">Teknologi Rekayasa Perangkat Lunak</h1>  
          <h1 className="text-[#373737]">Vokasi UGM</h1>  
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-4 border-2 border-dashed border-[#949494]">
          <h1 className="text-[#373737]">Contact Me </h1>
          <button className="border-[1px] border-dashed w-[10vh] rounded-md border-[#373737] text-[#373737]" onClick={() => window.location.href = 'mailto:maycleansitepu0204@mail.ugm.ac.id'}>📩</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
