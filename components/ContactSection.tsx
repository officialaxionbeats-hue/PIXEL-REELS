import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          {/* Header */}
          <div className="md:w-1/3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 border border-white/10 px-3 py-1 rounded-full mb-6 inline-block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-neutral-400 font-light">
              Ready to elevate your visual presence? Reach out to our team.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Thomas / Video */}
            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
              <h3 className="text-xl font-display font-bold text-white mb-2">{CONTACT_INFO.videography.name}</h3>
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">{CONTACT_INFO.videography.role}</p>
              
              <div className="space-y-4">
                <a href={`mailto:${CONTACT_INFO.videography.email}`} className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                    <Mail size={14} />
                  </div>
                  <span>{CONTACT_INFO.videography.email}</span>
                </a>
                <a href={`tel:${CONTACT_INFO.videography.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                    <Phone size={14} />
                  </div>
                  <span>{CONTACT_INFO.videography.phone}</span>
                </a>
              </div>
            </div>

            {/* General Info */}
            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
              <h3 className="text-xl font-display font-bold text-white mb-2">Inquiries</h3>
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">{CONTACT_INFO.general.role}</p>
              
              <div className="space-y-4">
                <a href={`mailto:${CONTACT_INFO.general.email}`} className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                    <Mail size={14} />
                  </div>
                  <span>{CONTACT_INFO.general.email}</span>
                </a>
                <a href={`tel:${CONTACT_INFO.general.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                    <Phone size={14} />
                  </div>
                  <span>{CONTACT_INFO.general.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;