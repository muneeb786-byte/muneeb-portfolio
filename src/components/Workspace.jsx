import React from 'react';
import { workstation } from '../constants';

const Workspace = () => {
  return (
    <section className="w-full bg-cream pt-24 pb-34 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24 max-md:mb-16 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-black">
          My Workstation
        </h2>
      </div>

     <div className="relative w-full flex overflow-hidden">
  {/* Track 1 */}
  <div className="flex animate-scroll">
    {workstation.map(item => (
      <div key={`a-${item.id}`} className="shrink-0 w-72 md:w-96 mr-6">
        <img src={item.image} alt={item.alt} className="w-full h-full object-cover rounded-2xl" />
      </div>
    ))}
    {/* Duplicate for seamless effect */}
    {workstation.map(item => (
      <div key={`b-${item.id}`} className="shrink-0 w-72 md:w-96 mr-6">
        <img src={item.image} alt={item.alt} className="w-full h-full object-cover rounded-2xl" />
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default Workspace;
