import React from 'react';
import { BRAND_NAME, INSTAGRAM_URL } from '../constants';

const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-xl md:text-2xl font-display font-bold tracking-tighter">
        {BRAND_NAME}
      </div>
      
      <div className="hidden md:flex items-center gap-12">
        <a 
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:text-neutral-300 transition-colors cursor-pointer"
        >
          Work
        </a>
        <button 
          onClick={() => scrollToSection('services')}
          className="text-sm font-medium hover:text-neutral-300 transition-colors cursor-pointer"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-sm font-medium hover:text-neutral-300 transition-colors cursor-pointer"
        >
          Contact
        </button>
      </div>

      <div className="md:hidden">
        <div className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer group">
          <span className="w-full h-[2px] bg-white group-hover:bg-neutral-300 transition-colors"></span>
          <span className="w-2/3 h-[2px] bg-white group-hover:bg-neutral-300 transition-colors ml-auto"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;