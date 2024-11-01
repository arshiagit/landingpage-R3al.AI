"use client";

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { Timeline } from '../common/time-line';

export default function HowToStartSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    return (
        <section className='max-w-screen-xl mx-auto pt-14 md:px-0 px-5'>
            <div className='flex justify-center pb-6'>
                <div className='w-fit max-w-fit px-8 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                    How to start
                </div>
            </div>
            <motion.h1
                ref={ref}
                className='text-center 2xl:text-5xl mt-0 xl:text-5xl tracking-wide md:text-5xl bg-gradient-to-b from-white to-purple_400 text-transparent bg-clip-text lg:text-5xl text-4xl font-medium'
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
            >
                How to start using R3AL.AI
            </motion.h1>
            <motion.h1
                ref={ref}
                className='text-center 2xl:text-5xl mt-4 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-4xl text-white font-medium'
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
            >
                to meet your goals
            </motion.h1>

            <div className='flex justify-center pb-6 pt-8'>
                <button type="button" className='w-fit max-w-fit px-6 font-medium 2xl:flex xl:flex md:flex lg:flex hidden py-2.5 text-white text-sm bg-primary rounded-lg'>Get started</button>
            </div>
            {/* timeline */}
            <div className="container mx-auto px-4 py-16 pt-10 pb-0">
                <div className="relative">
                    <Timeline />
                </div>
            </div>
        </section>
    )
}

