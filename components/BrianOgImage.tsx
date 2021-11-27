import React from 'react';

export interface ImageProps {
  title: string;
  slug: string;
}

// For CSS Background patterns
// https://codepen.io/bansal-io/pen/mdereZN

const BrianOgImage: React.FC<ImageProps> = ({ title, slug }) => {
  return (
    <div className='min-h-screen w-full  flex justify-center items-center text-fg'>
      <div
        id='preview'
        className='flex flex-col items-start justify-end h-full relative'
        style={{
          width: '1200px',
          height: '630px',
          padding: '80px',
          background: 'black',
        }}
      >
        <img
          width={80}
          className='absolute top-10 right-10'
          src='https://og.dpnkr.in/cursor.png'
          alt=''
        />
        <h1
          style={{
            fontSize: '110px',
            fontWeight: 900,
            fontFamily: 'Inter',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: '36px',
            fontFamily: 'vera',
            color: 'rgb(163, 163, 163)',
          }}
        >
          {slug ? `brianlovin.com/${slug}` : 'brianlovin.com'}
        </p>
      </div>
    </div>
  );
};

export default BrianOgImage;
