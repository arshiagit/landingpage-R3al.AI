'use client';

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

export default function GlobalNetworkSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });


    return (
        <section className='max-w-screen-xl mx-auto md:px-0 px-5 pt-20'>
            <div className='flex justify-center pb-6'>

                <div className='w-fit max-w-fit px-8 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                    Global network
                </div>
            </div>
            <motion.h1
                ref={ref}
                className='text-center 2xl:text-5xl mt-8 xl:text-5xl tracking-wide md:text-5xl bg-gradient-to-b from-white to-purple_600 text-transparent bg-clip-text lg:text-5xl text-4xl font-medium'
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
            >
                Connecting Your Business to
            </motion.h1>
            <motion.h1
                ref={ref}
                className='text-center 2xl:text-5xl mt-4 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-4xl text-white font-medium'
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
            >
                Global Opportunities
            </motion.h1>

            <p className='text-center text-white/50 mt-12 text-base md:w-[800px] w-full md:mx-auto'>
                Unlock new possibilities for growth and innovation as we connect your business to global opportunities. With R3al.AI, you gain access to cutting-edge solutions that empower you to thrive in a competitive landscape. Expand your horizons and take your business further than ever before!
            </p>
            <Image src={`/assets/svg/global.svg`} alt="Global" className='w-full mt-8' width={200} height={200} />
        </section>
    )
}
