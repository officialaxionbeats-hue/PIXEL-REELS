import React from 'react';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6">Trusted by the Best</h2>
          <p className="text-neutral-400 text-lg font-light">
            Our reputation is built on discretion, precision, and an unyielding commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-10 rounded-2xl flex flex-col hover:bg-white/5 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6 text-yellow-500/80">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              
              <p className="text-xl md:text-2xl text-neutral-200 font-light leading-relaxed mb-10 flex-grow group-hover:text-white transition-colors">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center text-xs font-bold font-display text-white border border-white/10">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display uppercase tracking-wide text-white">{review.author}</h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;