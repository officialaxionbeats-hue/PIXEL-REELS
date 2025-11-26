import React, { useRef, useEffect } from 'react';
import { HERO_VIDEO_URL, TAGLINE, INSTAGRAM_URL } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background with strong overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="object-cover w-full h-full opacity-20 grayscale"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto space-y-12">
        {/* Animated Badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-medium text-neutral-300">Available for 2025</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-display font-medium leading-[0.9] tracking-tight text-white mix-blend-screen animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {TAGLINE.split(' ').map((word, i) => (
             <span key={i} className="block">{word}</span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-neutral-400 text-lg md:text-xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Crafting digital legacy for the Costa del Sol’s most exclusive estates and brands.
        </p>

        {/* Cool Button */}
        <div className="animate-fade-in-up pt-4" style={{ animationDelay: '0.6s' }}>
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
          >
             {/* Gradient Shine Effect */}
             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
             
             <span className="relative font-display uppercase tracking-widest text-xs font-bold text-white">See Our Work</span>
             <div className="relative w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={16} />
             </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;