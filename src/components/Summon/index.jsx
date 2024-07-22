import React from "react";
import Image from "next/image";

function Summon() {
  return (
    <div>
      <div id="Summon" className="flex justify-center items-center mb-[50px] my-10">
        <h1 className=" text-[#373737] font-bold sm:text-4xl text-4xl ">🪄 Summon Me 🤝</h1>
      </div>

      <div className="flex justify-center items-center">
        <Image
          id="circle1"
          alt="Lingkaran Besar"
          src="/assets/ring2.svg"
          loading="lazy"
          width={500}
          height={500}
          className="rotate-circle absolute w-[90%]  sm:w-[70%] md:h-[60%] md:w-[60%]"
        />
        <Image
          id="circle2"
          alt="Lingkaran Kecil"
          src="/assets/ring2.svg"
          loading="lazy"
          width={350}
          height={350}
          className="rotate-circle2 w-[65%] sm:w-[50%] md:h-[40%] md:w-[40%]"
          style={{ zIndex: 1 }}
        />
        <Image
          id="cicle-btn"
          alt="Lingkaran Button"
          src="/assets/ring-btn.svg"
          loading="lazy"
          width={350}
          height={350}
          onClick={() => window.location.href = 'mailto:maycleansitepu0204@mail.ugm.ac.id'}
          className="absolute cursor-pointer opacity-50  hover:rotate-[120deg] hover:w-[200px] transition-transform duration-[50] ease-in-out w-[150px] sm:w-[50px] md:w-[80px] "
          style={{ zIndex: 20 }}
        />

        {/* <h1 className="absolute mt-20 text-[#373737] font-bold text-4xl sm:text-xl md:text-2xl rotate-180 ">♠️</h1> */}
      </div>
    </div>
  );
}

export default Summon;
