import React from 'react';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import BackgroundSphere from './components/BackgroundSphere';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import { CLIENTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-luxury-black text-white selection:bg-purple-500/30 selection:text-white overflow-x-hidden font-sans">
      
      {/* Global Ambient Gradient (The Purple Vibe) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      {/* 3D Wireframe Sphere Background */}
      <BackgroundSphere />
      
      {/* Hide cursor on touch devices */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <Navigation />

      <main className="relative z-10">
        <Hero />
        
        {/* Clients Section */}
        <section className="relative z-20 mt-[-50px]">
          <Marquee items={CLIENTS} />
        </section>

        {/* Intro / Philosophy */}
        <section className="py-32 px-6 flex justify-center">
           <div className="max-w-4xl text-center glass-panel p-12 rounded-3xl border border-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
              <span className="relative inline-block px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-bold tracking-[0.2em] text-neutral-400 mb-8 uppercase border border-white/5">
                Philosophy
              </span>
              <p className="relative text-3xl md:text-5xl font-display font-medium leading-tight text-white">
                We don't just record video. We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">legacy</span>. 
                Based in the Golden Mile, serving exclusive clientele from Gibraltar to Malaga.
              </p>
           </div>
        </section>
        
        <Services />
        
        <Reviews />
        
        <ContactSection />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;