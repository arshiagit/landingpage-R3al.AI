'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'

export default function SustainabilitySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    return (
        <section className='max-w-screen-xl mx-auto md:px-0 px-5 pt-20 mt-20 border border-solid border-[#6DEC31]/40 rounded-3xl overflow-hidden md:h-fit h-screen'>
            <div className='flex justify-center pb-2'>
                <div className='w-fit max-w-fit px-8 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                    Sustainability
                </div>
            </div>
            <h1 className='text-center 2xl:text-4xl mt-2 xl:text-4xl tracking-wide md:text-4xl lg:text-4xl text-2xl text-white font-medium'>
                Increase your business impact
            </h1>
            <h1 className='text-center 2xl:text-4xl mt-2 xl:text-4xl tracking-wide md:text-4xl lg:text-4xl text-2xl text-white font-medium'>
                and reduce emissions
            </h1>
            <p className='text-center text-gray-400 mt-6'>
                Accelerate your sustainability goals. Make a positive impact. 🌱
            </p>
            <div className='grid 2xl:grid-cols-2 mt-20 xl:grid-cols-2 grid-cols-1 gap-10'>
                <div className='w-full relative'>
                    <div className='border-l border-dashed border-white/30 w-0.5 h-32 absolute -top-5 md:left-48 left-0'>
                        <div className='border-l border-solid border-[#7CC351] w-0.5 h-16 mt-10 -ml-[1px]'></div></div>
                    <h1 className='md:text-center text-left md:ml-0 ml-8 2xl:text-4xl xl:text-4xl tracking-wide md:text-4xl lg:text-4xl text-4xl text-white font-medium'>
                        14.3 Mt
                    </h1>
                    <p className='text-sm mt-1 text-white md:ml-0 ml-8 md:text-center text-left'>
                        million tons of CO2
                    </p>
                    <p className='text-sm text-white md:ml-0 ml-8 md:text-center text-left'>
                        produced by Google in 2023
                    </p>
                </div>
                <div className='w-full relative'>
                    <div className='border-l border-dashed border-white/30 w-0.5 h-32 absolute -top-5 md:-left-8 left-0'>
                        <div className='border-l border-solid border-[#7CC351] w-0.5 h-16 mt-10 -ml-[1px]'></div></div>
                    <h1 className='text-left w-44 md:ml-0 ml-8 mx-auto 2xl:text-4xl xl:text-4xl tracking-wide md:text-4xl lg:text-4xl text-4xl text-white font-medium'>
                        284 t
                    </h1>
                    <p className='text-sm mt-1 md:ml-0 ml-8 text-white text-left w-44 mx-auto'>
                        tons of CO2 produced to train GPT 3
                    </p>
                </div>
            </div>
            <div className='w-full relative flex justify-center pt-20'>
                <motion.div
                    ref={ref}
                    className='w-fit h-fit p-4 bg-black rounded-xl border border-solid border-white/20 md:bottom-20 bottom-0 md:left-20 left-4 absolute'
                    initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                    transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
                >
                    <div className='flex items-start gap-3'>
                        <div className='size-8 bg-[#7CC351] rounded-lg flex justify-center items-center'>
                            <Image src={`/assets/svg/aero.svg`} alt="User" width={15} height={15} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white text-sm'>New York to Paris round trip</span>
                            <div className='inline-flex items-center gap-20 pt-2'>
                                <div className='flex flex-col'>
                                    <h4 className='text-white font-medium text-xl'>7h</h4>
                                    <small className='text-white'>average flight</small>
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='text-white font-medium text-xl'>1.76 t</h4>
                                    <small className='text-white'>tons of CO2</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    className='w-fit h-fit p-4 bg-black rounded-xl border border-solid border-white/20 md:top-24 top-10 md:right-20 right-0 absolute'
                    initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                    transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
                >
                    <div className='flex items-start gap-3'>
                        <div className='size-8 bg-[#7CC351] rounded-lg flex justify-center items-center'>
                            <Image src={`/assets/svg/aero.svg`} alt="User" width={15} height={15} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white text-sm'>London to San Francisco</span>
                            <div className='inline-flex items-center gap-20 pt-2'>
                                <div className='flex flex-col'>
                                    <h4 className='text-white font-medium text-xl'>11h</h4>
                                    <small className='text-white'>average flight</small>
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='text-white font-medium text-xl'>1.30 t</h4>
                                    <small className='text-white'>tons of CO2</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <Image src={`/assets/svg/suns.svg`} alt="Sus" className='mt-8' width={600} height={600} />
                <Image src={`/assets/svg/overlay-blur.svg`} alt="Sus" className='mt-8 absolute -bottom-36 left-32' width={700} height={700} />
                <Image src={`/assets/svg/overlay-blur.svg`} alt="Sus" className='mt-8 absolute -bottom-36 right-32' width={700} height={700} />
            </div>
        </section>
    )
}
