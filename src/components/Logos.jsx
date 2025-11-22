import React from 'react';
import { logos } from '../constants';
import { LayoutTemplate,  Framer, Figma, PenTool, Hexagon, Box, Layers, Grid } from 'lucide-react';

const Logos = () => {

  // Helper to get icon based on name
  const getIcon = (name) => {
    switch(name.toLowerCase()) {
      case 'figma': return <Figma size={28} />;
      case 'framer': return <Framer size={28} />;
      case 'webflow': return <LayoutTemplate size={28} />;
      case 'dribbble': return <PenTool size={28} />;
      case 'linear': return <Layers size={28} />;
      case 'notion': return <Box size={28} />;
      case 'miro': return <Grid size={28} />;
      case 'relume': return <Hexagon size={28} />;
      default: return <Box size={28} />;
    }
  };

  return (
    <section className="w-full bg-cream-dark py-12 border-y border-gray-200/60 overflow-hidden">
      <div
        className="relative w-full flex overflow-hidden mask-image-gradient"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >

        {/* Track 1 */}
        <div className="animate-scroll flex items-center gap-16 md:gap-24  pl-16 md:pl-24 min-w-max">
          {logos.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex items-center gap-3 text-slate-600 hover:text-black transition-colors duration-300 cursor-default group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {getIcon(brand.name)}
              </span>
              <span className="font-display text-2xl font-bold uppercase tracking-widest opacity-80">
                {brand.name}
              </span>
            </div>
          ))}

          {logos.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex items-center gap-3 text-slate-600 hover:text-black transition-colors duration-300 cursor-default group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {getIcon(brand.name)}
              </span>
              <span className="font-display text-2xl font-bold uppercase tracking-widest opacity-80">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        
       

      </div>
    </section>
  );
};

export default Logos;
