import React from 'react';
import CodeEditor from './CodeEditor';
import Image from 'next/image';
import Themonitor from '../Themonitor/Themonitor';
import { Rowdies } from 'next/font/google';
import Link from 'next/link';
import Kartu from './Kartu';


const Index = () => {
  return (
    <div className='mt-40 pb-28 lg:pb-1  lg:mb-35'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-start lg:items-start'>
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
              <div className="mt-10 flex items-start justify-start self-start">
                <Kartu/>
              </div>
              {/* <div>
              <Link
                  href="mailto:your-email@example.com"
                  className="w-64 h-32 bg-gradient-to-r from-[#cfcfcf] via-[#dfe489] to-[#cfcfcf] animate-gradient-x flex items-center justify-center cursor-pointer hover:bg-blue-300 text-[#2F4F4F] font-bold text-lg"
                  onMouseEnter={(e) => {
                    setTimeout(() => {
                      e.currentTarget.click();
                    }, 500); // Delay of 500ms before executing the click
                  }}
                >
                  Hover over me to email!
                </Link>
              </div> */}


            
            
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
      <div className="flex text-black items-center justify-between">
        <div className="w-1/2 border-[#999999] border-t border-dashed"></div>
        <div className="w-8 h-8 border-[#d6d6d6] cursor-default rounded-full flex items-center justify-center border-2">◑</div>
        <div className="w-1/2 border-[#999999] border-t border-dashed"></div>
      </div>
    </div>
    
  );
};

export default Index;


