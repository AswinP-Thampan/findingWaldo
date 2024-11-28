import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [isCursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      const x = e.clientX || (e.touches && e.touches[0]?.clientX);
      const y = e.clientY || (e.touches && e.touches[0]?.clientY);

      if (x !== undefined && y !== undefined) {
        document.documentElement.style.setProperty('--cursorX', `${x}px`);
        document.documentElement.style.setProperty('--cursorY', `${y}px`);
        setCursorVisible(true);
      }
    };

    const hideCursor = () => setCursorVisible(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('touchmove', updateCursor);
    document.addEventListener('mouseleave', hideCursor); // Hide cursor on leaving viewport
    document.addEventListener('touchend', hideCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('touchmove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('touchend', hideCursor);
    };
  }, []);

  return (
    <div
      className={`cursor-effect ${isCursorVisible ? 'visible' : 'hidden'}`}
    ></div>
  );
};

export default CursorEffect;
