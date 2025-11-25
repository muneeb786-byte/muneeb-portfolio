import React from 'react'
import { Sparkles, Mail, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { avater, contact } from '../constants';

const Talk = () => {
    return (
<section id="contact" className="w-full bg-cream py-24 max-sm:py-13 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12 mt-4">
                <div className="flex items-center gap-2 text-orange-300 animate-fade-in">
                    <Sparkles size={18} />
                    <span className="text-sm font-bold tracking-widest uppercase">Connect with me</span>
                </div>
                <h2 className="font-display text-5xl  font-bold text-black tracking-tight leading-tight">
                    Let's start a project <br /> together
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                {/* Left Side - Form */}
                <div className="lg:col-span-2">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-base font-medium text-gray-900 block ml-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full h-14 px-6 rounded-2xl border border-gray-200 bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900  hover:border-gray-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-base font-medium text-gray-900 block ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                className="w-full h-14 px-6 rounded-2xl border border-gray-200 bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900  hover:border-gray-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-base font-medium text-gray-900 block ml-1">Message</label>
                            <textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                className="w-full h-48 p-6 rounded-2xl border border-gray-200 bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900 resize-none  hover:border-gray-300"
                            />
                        </div>

                        <div className="pt-4">
                            <input
                                type="submit"
                                className="px-6 py-2 bg-white border border-gray-400 rounded-full text-black font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 cursor-pointer"
                            />
                            
                        </div>
                    </form>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 h-full flex flex-col">

                        {/* Availability */}
                        <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-10 w-fit self-start border border-gray-200">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse   " />
                            <span className="text-slate-900 text-sm font-semibold tracking-wide">Available for work</span>
                        </div>

                        {/* Avatar */}
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-8 border-4 border-gray-50 shadow-inner">
                            <img
                                src={avater}
                                alt="Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="mb-auto">
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100">
                            <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Linkedin size={24} strokeWidth={1.5} /></a>
                            <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Github size={24} strokeWidth={1.5} /></a>
                            <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Instagram size={24} strokeWidth={1.5} /></a>
                            <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Mail size={24} strokeWidth={1.5} /></a>
                            <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Twitter size={24} strokeWidth={1.5} /></a>
                        </div>

                    </div>
                </div>

            </div>

        </div>
        </section>
    )
}

export default Talk