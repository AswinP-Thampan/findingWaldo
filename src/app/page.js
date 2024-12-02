"use client"
import { useEffect, useState } from 'react';
import CursorEffect from './CursorEffect';

const Home = () => {

  const [circleSize, setCircleSize] = useState(5);

  const handleCircleSize = (val) => {
    setCircleSize(val); // Increase size by 1vmax
  };

  useEffect(() => {
    // Update circle size dynamically via CSS variable
    document.documentElement.style.setProperty('--circleSize', `${circleSize}vmax`);
  }, [circleSize]);

  return (
    <div>
      <div className="relative w-screen h-screen bg-[url('/waldo/logo.jpg')] bg-repeat bg-[length:10%_auto] bg-top-left flex flex-col gap-4 justify-center items-center">
        <div className='flex flex-row gap-4'>
          <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={() => handleCircleSize(10)}>Easy</button>
          <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={() => handleCircleSize(5)}>Normal</button>
          <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={() => handleCircleSize(2)}>Hard</button>
        </div>

        {/* <img src='/waldo/1.jpg'/> */}
        <CursorEffect />
      </div>
    </div>
  );
};

export default Home;