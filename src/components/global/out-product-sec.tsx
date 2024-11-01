"use client";

import { motion, useInView } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'

function OurProductSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    return (
        <section className='max-w-screen-xl mx-auto md:px-0 px-6 pt-20'>
            <div className='flex justify-center'>
                <div className='w-fit max-w-fit px-12 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                    Our Product
                </div>
            </div>
            <motion.h1
                    ref={ref}
                    className='text-center 2xl:text-5xl mt-8 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-4xl text-white font-medium'
                    initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                    transition={{ duration: 0.9, ease: "easeOut" }} // Smooth transition
                >
                     Leading the <span className='bg-gradient-to-b from-white to-purple_600 text-transparent bg-clip-text'>Future of AI</span>
                </motion.h1>

            <div className='flex justify-center'>
                <Image src={`/assets/svg/diagrams.svg`} alt="Digram-Image" quality={80} className="w-full mt-16" width={200} height={50} />
            </div>
            <div className='grid 2xl:grid-cols-5 xl:grid-cols-5 relative md:grid-cols-5 grid-cols-2 md:gap-y-0 gap-x-6 gap-y-8 mt-20 mb-10'>
                <div className='w-full border border-solid relative border-blue-400/15 p-4 rounded-xl flex flex-col gap-y-3 py-8 items-center'>
                    <Image src={`/assets/svg/user.svg`} alt="User" width={40} height={40} />
                    <span className='text-white text-sm'>Our Team</span>
                    <Image src={`/assets/svg/add.svg`} alt="Plus" className='absolute 2xl:-right-5 xl:-right-5 md:-right-5 lg:-right-5 2xl:top-16 xl:top-16 md:top-16 lg:top-16 -bottom-6' width={12} height={12} />
                </div>
                <div className='w-full border border-solid relative border-blue-400/15 p-4 rounded-xl flex flex-col gap-y-3 py-8 items-center'>
                    <Image src={`/assets/svg/our-vision.svg`} alt="User" width={40} height={40} />
                    <span className='text-white text-sm'>Our Vision</span>
                    <Image src={`/assets/svg/add.svg`} alt="Plus" className='absolute 2xl:-right-5 xl:-right-5 md:-right-5 lg:-right-5 2xl:top-16 xl:top-16 md:top-16 lg:top-16 -bottom-6' width={12} height={12} />
                </div>

                <div className='w-full border border-solid relative border-blue-400/15 p-4 rounded-xl flex flex-col gap-y-3 py-8 items-center'>
                    <Image src={`/assets/svg/your-data.svg`} alt="User" width={40} height={40} />
                    <span className='text-white text-sm'>Your Data</span>
                    <Image src={`/assets/svg/add.svg`} alt="Plus" className='absolute 2xl:-right-5 xl:-right-5 md:-right-5 lg:-right-5 -right-5 2xl:top-16 xl:top-16 md:top-16 lg:top-16 top-16' width={12} height={12} />
                </div>
                <div className='w-full border border-solid relative border-blue-400/15 p-4 rounded-xl flex flex-col gap-y-3 py-8 items-center'>
                    <Image src={`/assets/svg/apps.svg`} alt="User" width={40} height={40} />
                    <span className='text-white text-sm'>Our Product</span>
                    <Image src={`/assets/svg/two-line.svg`} alt="Plus" className='absolute 2xl:-right-5 xl:-right-5 md:-right-5 lg:-right-5 2xl:top-16 xl:top-16 md:top-16 lg:top-16 -bottom-6 2xl:rotate-0 xl:rotate-0 md:rotate-0 lg:rotate-0 rotate-90' width={18} height={18} />
                </div>
                <div className='border border-solid 2xl:w-80 xl:w-80 md:w-80 lg:w-80 w-72 relative border-blue-600 p-4 rounded-xl flex justify-center items-center py-8'>
                    <Image src={`/assets/svg/logo.svg`} alt="User" width={180} height={40} />
                </div>
            </div>
        </section>
    )
}

export default OurProductSection