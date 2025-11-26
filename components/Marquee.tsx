import React from 'react';

interface MarqueeProps {
  items: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="w-full overflow-hidden py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="flex w-max animate-marquee">
        {/* Tripled list for seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center group cursor-default">
            <span 
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-transparent stroke-text hover:text-white/10 transition-colors duration-500 px-16 whitespace-nowrap uppercase"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;