import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import {  contact, nav_links, social } from '../constants';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-black text-cream pt-24 pb-12 px-4 md:px-8 relative z-20 -mt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Call to Action */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-orange-400 font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base animate-pulse">
            What's Next?
          </span>
          <h2 className="text-white font-display text-6xl  font-bold uppercase tracking-normal mb-10 leading-[0.9]">
            Let's Work <br className=""/> Together
          </h2>
          <a 
            href={`mailto:${contact.email}`} 
            className="group relative inline-flex items-center gap-3 text-2xl md:text-4xl font-serif italic hover:text-orange-200 transition-colors duration-300"
          >
            <span className="text-white border-b border-white/30 group-hover:border-orange-200 group-hover:text-orange-200 pb-1 transition-colors duration-300 ">
              {contact.email}
            </span>
            <span className="text-white group-hover:text-orange-200">
               <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Bottom Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand & Copyright - Spans 5 columns */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div className="mb-6">
              <a href="#" className="font-serif text-3xl md:text-4xl font-bold italic tracking-tight text-white inline-block hover:text-orange-200 transition-colors">
                Muneeb
              </a>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              &copy; {new Date().getFullYear()} Madison Portfolio. All rights reserved. <br/>
              Designed & Developed with <Heart className="inline w-3.5 h-3.5 text-red-500 mx-1 fill-current" /> for the web.
            </p>
          </div>

          {/* Navigation - Spans 3 columns */}
          <div className="md:col-span-3 md:pl-8">
             <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8 text-opacity-80">Menu</h3>
             <ul className="space-y-4">
                {nav_links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition duration-200  text-base font-medium inline-block hover:translate-x-1 transform">
                      {link.label}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          {/* Socials - Spans 4 columns */}
          <div className="md:col-span-4">
             <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8 text-opacity-80">Socials</h3>
             <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
                {social.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-200 transition-colors duration-200 text-base font-medium flex items-center gap-2 group">
                      {link.label}
                      <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
