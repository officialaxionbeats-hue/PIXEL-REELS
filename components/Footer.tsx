import React from 'react';
import { BRAND_NAME, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight">{BRAND_NAME}</h2>
          <div className="flex flex-col gap-3 text-sm text-neutral-400 font-light">
            <p>Marbella, Spain</p>
            <a href={`mailto:${CONTACT_INFO.general.email}`} className="hover:text-white transition-colors">
              {CONTACT_INFO.general.email}
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-end mt-20 pt-8 border-t border-white/5">
        <div className="text-[10px] text-neutral-600 uppercase tracking-widest">
          © {new Date().getFullYear()} Pixel Reels.
        </div>
        <div className="text-[10px] text-neutral-600 uppercase tracking-widest hidden md:block">
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;