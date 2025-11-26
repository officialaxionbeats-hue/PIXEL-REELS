import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-100 ease-out"
        style={{ 
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isPointer ? 1.5 : 1})` 
        }}
      />
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[100] mix-blend-difference transition-all duration-300 ease-out"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
          opacity: 0.5
        }}
      />
    </>
  );
};

export default CustomCursor;