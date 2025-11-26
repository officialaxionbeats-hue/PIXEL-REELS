import React from 'react';

const GradientOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1: Purple */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
      
      {/* Orb 2: Blue/Cyan */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      
      {/* Orb 3: Pink/Violet */}
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-pink-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48ZmlsdGVyIGlkPSJ4Ij48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI3gpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-20"></div>
    </div>
  );
};

export default GradientOrbs;