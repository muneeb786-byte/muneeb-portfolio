import React from 'react';
import { about, yo } from '../constants';

const About = () => {
  return (
    <section id="about" className="w-full bg-cream pt-28 max-sm:pt-12 pb-20 px-4 md:px-8 overflow-hidden relative">

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Side: Text */}
        <div className="order-2 lg:order-2 flex flex-col gap-8">

          <div>
            <span className="inline-block text-sm font-bold tracking-widest text-orange-300 uppercase mb-3">
              {about.subtitle}
            </span>

            <h2 className="font-display text-6xl max-md:text-4xl font-bold text-black uppercase leading-none tracking-tight">
              {about.title}
            </h2>
          </div>

          <p className="text-gray-700  text-lg leading-relaxed  max-w-xl">
            {about.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            {about.stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-display text-4xl md:text-3xl font-bold text-black mb-1">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Video */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-auto h-105 max-sm:h-60   group">

            <video
              autoPlay
              loop
              muted
              className=" w-full h-full object-cover "
              
            >
              <source src={yo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            

        
          </div>
          {/* Background dots & decor */}
          {/* <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200/20 rounded-full -z-10 blur-2xl" /> */}
        </div>

      </div>
    </section>
  );
};

export default About;
