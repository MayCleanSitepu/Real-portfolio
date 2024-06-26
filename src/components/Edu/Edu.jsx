import React, { useEffect } from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';

const Edu = () => {
  const mouse = useMightyMouse(true, "eye", { x: 45, y: 45 });
  const { positionRelative: { angle: angleEye } = {} } = mouse || {};

  useEffect(() => {
    const eyeElement = document.getElementById('eye');
    console.log("Angle Eye:", angleEye); // Log for debugging
    if (eyeElement) {
      eyeElement.style.transform = `rotate(${angleEye}deg)`;
      console.log("Transform style applied:", eyeElement.style.transform); // Log for debugging
    }
  }, [angleEye]);

  return (
    <div className='bg-[#0a0a0a] mt-10 ml-10 w-full'>
      <div id="eye-container" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <div id='eye' className="w-4 h-4 bg-black rounded-full"></div>

        <h1>My education</h1>
      </div>
    </div>
  );
}

export default Edu;
