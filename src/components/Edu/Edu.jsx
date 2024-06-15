import React, { useEffect } from 'react'
import useMightyMouse from 'react-hook-mighty-mouse';

const Edu = () => {

  const mouse = useMightyMouse(true, "eye", { x: 45, y: 45 });
const { angle: angleEye } = mouse?.positionRelative || { angle: 0 };

  useEffect(()=>{
    if(angleEye > 0 && angleEye < 90){
      document.getElementById('eye').style.transform = `rotate(${angleEye}deg)`;
    }
  
  })

  return (
      <div className='bg-[#0a0a0a] mt-10 ml-10 w-full'>
        <div class="w-8 h-4 bg-white rounded-full ">
          <div id='eye' class="w-4 h-4 bg-black rounded-full " ></div>
        </div>
      </div>
  )
}

export default Edu