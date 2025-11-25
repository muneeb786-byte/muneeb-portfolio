import React from 'react';
import TextType from './TextType.jsx';
import { bghero, hero, profile2 } from '../constants';

const Hero = () => {
    return (
        <section id='home' className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end pt-24 pb-10 md:pb-0">
            {/* Background Gradient Spot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-50/90 rounded-full blur-[120px] pointer-events-none z-1" />
            <img src={bghero} alt="" className='absolute top-0 w-screen h-full z-0' />
            {/* Main Content Container */}
            <div className="relative z-10  mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:block h-full grow">

                {/* Central Image */}
                <div className="absolute inset-0">
                    <div className="h-full  w-full">
                        <img
                            src={profile2}
                            alt="Portrait of Madison"
                            className="w-full max-md:ml-20 max-sm:ml-30 lg:h-[90vh] max-md:h-[90vh]  object-cover  object-top md:object-contain mix-blend-normal mask-image-gradient"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                            }}
                        />
                    </div>
                </div>




                {/* Main info */}
                <div className=" flex flex-col gap-4  z-20 absolute max-md:relative max-sm:mt-5 bottom-6">
                    <div className="w-fit flex  items-center gap-3 max-sm:gap-0  backdrop-blur-sm pl-2 pr-5  rounded-full shadow-sm border border-white/50">
                        <span className="relative flex h-8 w-8 items-center justify-center rounded-full ">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-orange-400 opacity-80"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span className="text-xs  max-sm:hidden font-semibold tracking text-gray-800 uppercase">
                            {hero.availability}
                        </span>
                        <span className="text-xs hidden max-sm:flex font-semibold tracking text-gray-800">
                            Available for work
                        </span>
                    </div>

                    <div className="relative z-20 ">
                        <div className="flex flex-col leading-none select-none max-sm:ml-2">
                            <span className="font-display font-bold text-8xl max-sm:text-5xl  drop-shadow-xs  max-md:drop-shadow-gray-300  text-black   uppercase tracking-tighter transform md:translate-y-4">
                                I AM
                            </span>
                            <span className="font-display font-bold text-8xl max-sm:text-5xl drop-shadow-xs  max-md:drop-shadow-gray-300    text-black  uppercase tracking-tighter">
                                Muneeb
                            </span>
                        </div>
                    </div>

                </div>

                <div className='lbg flex flex-col  gap-13 z-20 absolute  bottom-6 max-md:bottom-0  md:right-25 max-md:left-1 max-md:ml-4   '>
                    <div className="relative z-20 max-w-[280px] text-left max-md:hidden">
                        <p className="text-medium font text-gray-800 leading-[1.4]">
                            {hero.description}
                        </p>
                    </div>
                    <div className="relative z-20 flex flex-col items-start ">
                        <h2 className="font-display font-bold text-3xl max-sm:text-4xl md:text-5xl  drop-shadow-xs  max-md:drop-shadow-gray-300 lg:text-4xl text-black/90 uppercase leading-none max-w-xs md:max-w-md text-left  tracking-tight">
                            Creative <br /> <TextType
                                text={["Frontend", "Backend", "FullStack"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="_"
                            /> <br /> Developer
                        </h2>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
