import React from 'react'
import { projects } from '../constants';

const Projects = () => {
    return (
        <section id="works" className="w-full bg-cream pt-24 pb-24 px-4 md:px-8" >
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <h2  className="font-display text-5xl max-md:text-4xl font-bold text-center mb-16 uppercase tracking-tight text-black">
                    All Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 max-sm:mb-10">
                    {projects.map((project) => {
                        return (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-md border border-gray-200"
                            >
                                {/* Image */}
                                <div className=" md:aspect-4/2 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 "
                                    />

                                </div>


                                {/* Overlay */}
                                <div className="flex flex-col justify-end p-6 bg-[#f3efde] ">

                                    {/* Slide Up Content */}
                                    <div><h5 className='text-sm  text-[#e5b850]'>Hotel management website</h5></div>

                                    <div className="flex items-center justify-between pt-2 gap-2 ">

                                        <h3 className="text-black transition-colors font-display text-2xl max-sm:text-xl  font-semibold uppercase leading-none tracking-wide">
                                            {project.title}
                                        </h3>

                                        {/* Visit Website */}
                                        <a href={project.code}></a>
                                        <button className=" border-gray-400 border text-black px-6 py-3 rounded-full text-sm font-semibold capitalize tracking-wide active:bg-slate-950 hover:bg-slate-950 active:text-white hover:text-white bg-white cursor-pointer  transition-colors whitespace-nowrap">
                                            View Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects