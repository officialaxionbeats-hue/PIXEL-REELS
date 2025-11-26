import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 px-6 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full bg-purple-500/10">
              Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white">
              Our Expertise
            </h2>
            <p className="text-neutral-400 font-light max-w-md">
              Hover over a service to explore how we can elevate your brand.
            </p>
          </div>

          <div className="space-y-4">
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group cursor-pointer transition-all duration-300 border rounded-xl p-6 relative overflow-hidden ${
                  hoveredIndex === index 
                    ? 'bg-white/10 border-white/20 translate-x-2' 
                    : 'bg-white/5 border-transparent hover:border-white/10'
                }`}
              >
                {/* Hover Gradient Background */}
                <div 
                   className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                   style={{ background: `linear-gradient(to right, ${service.highlightColor}, transparent)` }}
                ></div>

                <div className="flex items-center justify-between mb-2 relative z-10">
                  <h3 className={`text-xl font-display transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-neutral-300'}`}>
                    {service.title}
                  </h3>
                  <ArrowRight 
                    size={20} 
                    className={`transition-all duration-300 ${hoveredIndex === index ? 'text-white opacity-100 translate-x-0' : 'text-neutral-500 opacity-0 -translate-x-4'}`} 
                  />
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-md">
                    {service.description}
                  </p>
                  {service.action && (
                    <p className="mt-3 text-sm text-white font-medium flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                       {service.action}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Sphere */}
        <div className="relative flex items-center justify-center h-full min-h-[400px]">
           {/* Visual Container */}
           <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Active Service Glow - Only visible on hover */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl transition-all duration-700 opacity-0 mix-blend-screen scale-50"
                style={{
                  backgroundColor: hoveredIndex !== null ? SERVICES_DATA[hoveredIndex].highlightColor : 'transparent',
                  opacity: hoveredIndex !== null ? 0.6 : 0,
                  transform: hoveredIndex !== null ? 'scale(1)' : 'scale(0.5)',
                }}
              ></div>
              
              {/* Solid Core Orb */}
              <div 
                className="relative z-10 w-48 h-48 rounded-full transition-all duration-700 shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.1)]"
                style={{
                  background: hoveredIndex !== null 
                    ? `radial-gradient(circle at 30% 30%, white, ${SERVICES_DATA[hoveredIndex].highlightColor}, black)`
                    : 'radial-gradient(circle at 30% 30%, #333, #000)',
                  boxShadow: hoveredIndex !== null
                    ? `0 0 50px ${SERVICES_DATA[hoveredIndex].highlightColor}40`
                    : 'none'
                }}
              >
                  {/* Text inside orb */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className={`font-display text-sm tracking-widest uppercase transition-opacity duration-300 ${hoveredIndex !== null ? 'text-white drop-shadow-md' : 'text-white/20'}`}>
                       {hoveredIndex !== null ? SERVICES_DATA[hoveredIndex].title.split(' ')[0] : ''}
                     </span>
                  </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;