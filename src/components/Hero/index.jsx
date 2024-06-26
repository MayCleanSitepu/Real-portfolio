import React from 'react';
import CodeEditor from './CodeEditor';
import Image from 'next/image';
import Themonitor from '../Themonitor/Themonitor';
import { Rowdies } from 'next/font/google';


const Index = () => {
  return (
    <div className='border-b mt-20 pb-28 lg:pb-1 border-neutral-400 lg:mb-35'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <div className='backdrop-blur-md font-Rowdies lg:mt-[6rem] ml-1 lg:ml-80 pb-4 lg:pb-10 text-4xl lg:text-7xl bg-gradient-to-r from-[#565261] via-[#a3a664] to-[#999999] animate-gradient-x bg-clip-text text-transparent font-bold tracking-tight '>         
                  <h1 className='mt-8'>May Clean Sitepu</h1>
            </div>
                  {/* While everyone else is trying to center their divs, Im already centered. Im different. */}
            <div className=' ml-10  lg:my-0 lg:ml-[20rem] pb-4 text-[#565261]'>
              <p className='pb-4 text-[#565261] font-light text-lg backdrop-blur-md 
                            hover:border hover:border-dashed hover:border-gray-300 hover:p-2
                            border-transparent'>
                Hi, I&apos;m May Clean Sitepu. I&apos;m a fullstack developer based in Indonesia. I&apos;m a self-taught developer who is passionate about learning new things and building cool stuff. 
              </p>


            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 flex justify-center'>
          {/* <Image
            className='rounded-lg w-48 h-48 lg:w-[400px] lg:h-[250px]'
            src='/assets/meklin.JPG'
            alt='Mypics'
            width={400}
            height={400}
            
          /> */}
          <Themonitor/>
        </div>
      </div>
    </div>
  );
};

export default Index;
