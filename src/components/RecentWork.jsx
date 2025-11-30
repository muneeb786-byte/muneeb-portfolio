import React from 'react';
import { projects } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';



const RecentProjects = () => {


    return (
        <section className="w-full bg-cream pt-16 max-sm:pt-12 pb-10  px-4 md:px-8" id="works">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <h2 className="font-display text-5xl max-md:text-4xl font-bold text-center max-md:text-start mb-16 uppercase tracking-tight text-black">
                    Recent Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 max-sm:mb-10">

                    {projects.map((project) => {
                        if (project.id <= 4) {
                            return (

                                <div
                                    className="recent-work-item group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-sm border border-gray-200"
                                    key={project.id}
                                >

                                    {/* Image */}
                                    <div className="recent-work-item relative md:aspect-4/2 overflow-hidden" onMouseEnter={() => window.dispatchEvent(new Event("cursor-hover-button"))}
                                        onMouseLeave={() => window.dispatchEvent(new Event("cursor-hover-leave"))} >

                                        <a href={project.link} target='_blank'><div className='absolute w-full h-full bg-transparent z-14 '> </div> </a>
                                        
                                        <img

                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                        />
  
                                    </div>

                                    {/* Overlay */}
                                    <div className="flex flex-col justify-end p-6 bg-[#f3efde] ">

                                        {/* Slide Up Content */}
                                        <div><h5 className='text-sm  text-[#e5b850]'>{project.category}</h5></div>

                                        <div className="flex items-center justify-between pt-2 gap-2 ">

                                            <h3 className="text-black font-display text-2xl max-sm:text-xl  font-semibold uppercase leading-none tracking-wide">
                                                {project.title}
                                            </h3>

                                            {/* Visit Website */}
                                            <a href={project.code} target='_blank'>
                                            <button className=" border-gray-400 border text-black transition-colors px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide active:bg-slate-950 hover:bg-slate-950 hover:text-white active:text-white bg-white cursor-pointer whitespace-nowrap">
                                                View Code
                                            </button> </a>


                                        </div>
                                    </div>
                                </div>

                            )
                        }

                    })}

                </div>

                {/* View All Button */}
                <div className="flex justify-center w-full">
                    <Link
                        to="projects/#works"
                        className="group relative inline-flex items-center gap-3 px-10 py-3 bg-transparent border border-black rounded-full overflow-hidden transition-all duration-300 hover:bg-black active:bg-black hover:text-white active:text-white hover:px-12 hover:shadow-xl"
                    >
                        <span className="font-display font-bold text-lg uppercase tracking-widest">
                            View All Projects
                        </span>

                        <ArrowRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
