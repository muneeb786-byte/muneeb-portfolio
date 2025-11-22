import React, { useState, useEffect } from 'react';
import { nav_links } from '../constants';
import { Menu, X} from 'lucide-react';
import { Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 ${isScrolled ? 'bg-[#fafaf1] py-3  shadow-sm border border-gray-200 rounded-full mx-6 mt-6 overflow-hidden' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="shrink-0">
                        <a
                            href="#"
                            className="font-serif text-2xl  font-bold italic tracking-tight text-gray-900">
                            Muneeb
                        </a>
                    </div>

                    
                    <div className="hidden md:flex items-center justify-center gap-8">
                        {nav_links.map((link) => (
                            <Link className="text-medium font-lg   text-slate-700 hover:text-black transition-colors duration-200" to={link.href} >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                           className="inline-block px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" 
                            to='muneeb-portfolio/contact'
                        >
                            Contact  
                        </Link>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-600 hover:text-black focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isOpen && (
    <div className="mobile-nav fixed top-25 left-0 w-screen bg-[#fafaf1] border-b border-gray-100 shadow-lg md:hidden flex flex-col py-4 px-4 space-y-4">
        {nav_links.map((link) => (
            <a
                key={link.label}
                href={link.href}
                className="text-2xl text-center font-semibold text-gray-700 hover:text-black py-2 border-b border-gray-50 last:border-none"
                onClick={() => setIsOpen(false)}
            >
                {link.label}
            </a>
        ))}

        <a
            href="#contact"
            className="text-center w-full bg-black text-white py-3 rounded-full font-medium mt-2"
            onClick={() => setIsOpen(false)}
        >
            Contact
        </a>
    </div>
)}

        </nav>

    )
}

export default Navbar