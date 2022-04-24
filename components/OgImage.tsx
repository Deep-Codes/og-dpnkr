import React from 'react';

export interface ImageProps {
  title: string;
  top: string;
}

// For CSS Background patterns
// https://codepen.io/bansal-io/pen/mdereZN

const OgImage: React.FC<ImageProps> = ({ title = '', top }) => {
  const lg = {
    fontSize: '72px',
    lineHeight: '80px',
    fontWeight: 800,
    fontFamily: 'Inter',
  };
  const md = {
    fontSize: '62px',
    lineHeight: '70px',
    fontWeight: 800,
    fontFamily: 'Inter',
  };
  return (
    <div className='min-h-screen w-full  flex justify-center items-center text-fg'>
      <div
        id='preview'
        className='flex flex-col items-start justify-between h-full'
        style={{
          width: '1200px',
          height: '630px',
          padding: '80px',
          background: 'var(--bg)',
          // backgroundImage:
          //   'radial-gradient(ellipse  100% 100% , #181818, #181818 25%, transparent 25%),radial-gradient(ellipse  50% 50% , #333, #333 25%, #252525 25%)',
          // backgroundSize: '2em 2em, 4em 4em',
          backgroundImage:
            'linear-gradient(#222222 1px , transparent 1px ),linear-gradient(to right, #222222 1px , transparent 1px )',
          backgroundSize: '100px 100px',
        }}
      >
        <p
          className='mono'
          style={{ fontSize: '28px', marginBottom: '25px', color: '#c4c4c4' }}
        >
          {top}
        </p>
        <h1 style={title.length < 60 ? lg : md}>{title}</h1>
        <div className='flex justify-between w-full'>
          <p className='mono' style={{ fontSize: '28px', color: '#c4c4c4' }}>
            dpnkr.in
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 683 514'
            width='60'
            height='60'
            fill='white'
          >
            <path d='m207.65 308.28-14.83-25.68-29.66-51.38-44.49 77.07L103.83 334 89 359.66l-14.84 25.69L59.33 411 44.5 436.73l-14.83 25.69-14.84 25.69L0 513.8h118.66l44.49-77.07L178 411l14.84-25.69 14.83-25.69L222.48 334l-14.83-25.72Z' />
            <path d='m667.46 488.11-14.82-25.69-14.83-25.69L623 411l-29.66-51.38L578.46 334 534 256.9l-14.84-25.69-29.66-51.38-14.82-25.68-14.88-25.7-14.8-25.69-14.86-25.69-29.66-51.38L385.64 0h-89l-14.82 25.68L267 51.38l-14.85 25.69-14.83 25.69-14.84 25.69-29.66 51.38 29.66 51.38 14.83 25.68 14.83 25.69 14.86 25.7 29.66 51.38 14.83 25.68L326.3 411h-89l-14.84 25.69-29.66 51.38L178 513.8h326.3l-14.83-25.68-14.82-25.68-14.85-25.71L445 411l-14.83-25.69-14.87-25.65L400.47 334l-14.83-25.68L356 256.9l-14.84-25.69-29.66-51.38 14.83-25.69 14.83-25.68L356 154.13l59.32 102.76 14.83 25.68L445 308.28 459.8 334l14.84 25.69 14.83 25.69L504.3 411l14.83 25.69L534 462.42l29.66 51.38h118.63l-14.83-25.69Z' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OgImage;
