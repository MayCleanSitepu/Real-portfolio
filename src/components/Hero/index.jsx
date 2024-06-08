import React from 'react';
import CodeEditor from './CodeEditor';
import Image from 'next/image';

const Index = () => {
  return (
    <div className='border-b pb-28 lg:pb-60 border-neutral-400 lg:mb-35'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <div className='font-borel ml-1 lg:ml-80 pb-4 lg:pb-14 text-4xl lg:text-6xl bg-gradient-to-r from-blue-800 via-teal-300 to-indigo-700 animate-gradient-x bg-clip-text text-transparent font-bold tracking-tight lg:mt-16'>         
                  <h1 className='mt-8'>May Clean Sitepu</h1>
            </div>
            <span className='ml-10 my-10 lg:my-0 lg:ml-[19rem] pb-4 text-white font-light text-2xl '>
              "While everyone else is trying to center their divs, I'm already centered. I'm different."
            </span>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 flex justify-center'>
          <Image
            className='rounded-lg'
            src='/assets/meklin.JPG'
            alt='Mypics'
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
