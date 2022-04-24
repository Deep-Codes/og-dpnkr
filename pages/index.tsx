import React from 'react';

const Home = () => {
  return (
    <div
      className='min-h-screen w-full  flex justify-center items-center text-fg'
      id='preview'
    >
      <div
        className='flex flex-col items-start justify-between h-full'
        style={{
          width: '1200px',
          height: '630px',
          padding: '80px',
          background: 'var(--bg)',
        }}
      >
        <p className='mono' style={{ fontSize: '28px', marginBottom: '25px' }}>
          Nov 02, 2021 - 7min read
        </p>
        <h1
          style={{ fontSize: '72px', lineHeight: '80px' }}
          className='font-extrabold'
        >
          Hello from Deepankar
        </h1>
        <div className='flex justify-between w-full'>
          <p className='mono' style={{ fontSize: '28px' }}>
            dpnkr.in
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            viewBox='0 0 493 383'
            fillRule='evenodd'
            clipRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            fill='white'
          >
            <path d='M218.618 0h69.188l204.933 382.941h-78.407L248.034 69.947l-29.416 49.748 141.486 263.246h-214.66l34.124-69.638h73.685L145.444 119.695 218.618 0z'></path>
            <path d='M118.883 159.521l41.552 79.868-72.369 143.552H0l118.883-223.42z'></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
