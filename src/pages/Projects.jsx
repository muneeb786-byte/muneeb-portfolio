import React from 'react'
import { projects } from '../constants';

const Projects = () => {
    return (
        <section className="w-full bg-cream pt-24 pb-24 px-4 md:px-8" id="works">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <h2 className="font-display text-5xl max-md:text-4xl font-bold text-center mb-16 uppercase tracking-tight text-black">
                    All Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-lg"
                        >
                            {/* Image */}
                            <div className="aspect-4/3 md:aspect-5/3 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />

                            </div>

                            <div className="absolute max-sm:flex hidden  inset-0  flex-col justify-end p-6 bg-linear-to-t from-black/50 via-black/10 to-transparent  max-md:hidden">

                                {/* Slide Up Content */}
                                <div className="">
                                    {/* Actions */}
                                    <div className="flex items-center justify-between pt-5">

                                        <h3 className="text-white font-display text-lg  font-semibold uppercase leading-none tracking-wide">
                                            {project.title}
                                        </h3>

                                        {/* Visit Website */}
                                        <button className="bg-white text-black px-4 py-1 rounded-full text-medium font-semibold active:bg-gray-200  tracking-wide hover:bg-gray-200 transition-colors">
                                            view
                                        </button>
                                    </div>

                                </div>
                            </div>

                            {/* Overlay */}
                            <div className="absolute max-sm:hidden   inset-0 flex flex-col justify-end p-6 md:p-8 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0  group-hover:opacity-100 transition-opacity duration-500 max-md:hidden">

                                {/* Slide Up Content */}
                                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    {/* Actions */}
                                    <div className="flex items-center justify-between pt-5">

                                        <h3 className="text-white font-display text-2xl  font-bold uppercase leading-none tracking-wide">
                                            {project.title}
                                        </h3>

                                        {/* Visit Website */}
                                        <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                                            View Site
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                {/* <div className="flex justify-center w-full">
                        <a
                            href="#all-projects"
                            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-black rounded-full overflow-hidden transition-all duration-300 hover:bg-black hover:text-white hover:px-12 hover:shadow-xl"
                        >
                            <span className="font-display font-bold text-lg uppercase tracking-widest">
                                View All Projects
                            </span>
    
                            <ArrowRight
                                size={20}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div> */}
            </div>
        </section>
    )
}

export default Projects