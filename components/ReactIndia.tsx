import React from 'react';
import { ReactIndiaImageProps } from '../pages/images/react-india';

const ReactIndia: React.FC<ReactIndiaImageProps> = ({
  jobTitle,
  speaker,
  talkTitle,
  image,
}) => {
  return (
    <div className='min-h-screen w-full  flex justify-center items-center text-fg'>
      <div
        id='preview'
        className='flex items-start justify-between h-full relative overflow-hidden'
        style={{
          width: '1200px',
          height: '630px',
          padding: '80px',
          background: '#101124',
        }}
      >
        <img src='/pattern.svg' className='absolute top-0 left-0 ' alt='' />
        <div className='flex flex-col justify-between h-full z-10'>
          <img className='object-cover h-[300px]' src={image} />
          <img height={100} width={250} src='/reactindia.svg' alt='' />
        </div>
        <div className='flex flex-col justify-between h-full z-10'>
          <div className='w-[610px]'>
            <h1 className='font-extrabold text-5xl tracking-tight leading-[1.2] '>
              {talkTitle}
            </h1>
          </div>
          <div>
            <p className='text-[#ED5D26] text-5xl font-bold'>{speaker}</p>
            <p className='text-2xl font-medium mt-4'>{jobTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactIndia;
