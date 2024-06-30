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
        className=" ml-0 h-60 w-[30rem]"
      >
        <SwiperSlide className="border-2 border-dashed border-[#949494]">Slide 1</SwiperSlide>
        <SwiperSlide className="border-2 border-dashed border-[#949494]">Slide 2</SwiperSlide>
        <SwiperSlide className="border-2 border-dashed border-[#949494]">Slide 3</SwiperSlide>
        <SwiperSlide className="border-2 border-dashed border-[#949494]">Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
