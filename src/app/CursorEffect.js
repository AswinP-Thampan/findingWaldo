import React, { useEffect} from 'react';

const CursorEffect = () => {

    useEffect(() => {
        const updateCursor = (e) => {
            const x = e.clientX || (e.touches && e.touches[0]?.clientX);
            const y = e.clientY || (e.touches && e.touches[0]?.clientY);

            if (x !== undefined && y !== undefined) {
                const container = document.querySelector('.image-container');
                const rect = container.getBoundingClientRect();
                const cursorX = x - rect.left;
                const cursorY = y - rect.top;

                container.style.setProperty('--cursorX', `${cursorX}px`);
                container.style.setProperty('--cursorY', `${cursorY}px`);
            }
        };

        const resetCursor = () => {
            const container = document.querySelector('.image-container');
            container.style.setProperty('--cursorX', `50%`);
            container.style.setProperty('--cursorY', `50%`);
        };

        document.addEventListener('mousemove', updateCursor);
        document.addEventListener('touchmove', updateCursor);
        document.addEventListener('mouseleave', resetCursor);

        return () => {
            document.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('touchmove', updateCursor);
            document.removeEventListener('mouseleave', resetCursor);
        };
    }, []);

    return (
            <div className="relative mx-auto max-w-[90%] max-h-[90%] overflow-hidden border-[0.3vw] border-white shadow-[0_10px_50px_rgba(0,0,0,0.9)] rounded-[1vw] cursor-none image-container">
                <img src="/waldo/1.jpg" alt="Background" />
            </div>
    );
};

export default CursorEffect;
