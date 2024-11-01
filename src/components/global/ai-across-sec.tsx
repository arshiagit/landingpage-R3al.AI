"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
export default function AIAcrosSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    return (
        <section className='max-w-screen-xl mx-auto pt-8 md:px-0 px-6'>
            <div className='flex justify-center pb-6'>
                <div className='w-fit max-w-fit px-8 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                    AI Across Industries
                </div>
            </div>
            <motion.h1
                ref={ref}
                className='md:text-center text-left 2xl:text-5xl mt-0 xl:text-5xl tracking-wide md:text-5xl bg-gradient-to-b from-white to-purple_400 text-transparent bg-clip-text lg:text-5xl text-xl font-medium'
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
            >
                R3AL.AI can be customized
            </motion.h1>
            <motion.h1
                ref={ref}
                className='md:text-center text-left 2xl:text-5xl mt-4 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-xl text-white font-medium'
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
            >
                for various sectors
            </motion.h1>

            <div className='flex 2xl:flex-row xl:flex-row flex-col md:items-center items-center gap-6 mt-16'>
                <div className='md:w-2/5 w-full'>
                    <Image src={`/assets/svg/buttons.svg`} alt="Buttons" className='mt-8' width={400} height={300} />
                </div>
                <div className='md:w-[10%] w-full flex justify-center'><Image src={`/assets/svg/arrow-icon.svg`} alt="Buttons" className='mt-8' width={100} height={100} /></div>
                <div className='md:w-5/12 w-full'>
                    <div className='w-full md:p-8 p-4 bg-[#191133]/50 border border-solid border-blue-600 rounded-2xl'>
                        <div className='inline-flex items-center gap-2'>
                            <FaMapMarkerAlt className="text-primary"/>
                            <span className='text-xs text-white'>Anywhere in the world</span>
                        </div>
                        <h1 className='text-left 2xl:text-3xl mt-4 xl:text-3xl tracking-wide md:text-3xl lg:text-3xl text-lg text-white font-medium'>
                            Universal Solutions
                        </h1>
                        <div className='flex md:flex-row flex-col md:items-center items-start gap-3 pt-5'>
                        <Image src={`/assets/svg/border-1.svg`} alt="Border" className='md:w-36 w-40' width={20} height={20} />
                        <Image src={`/assets/svg/border-2.svg`} alt="Border" className='w-48' width={20} height={20} />
                        </div>
                        <p className='text-sm text-white/50 mt-4 mb-4'>
                        All sectors can leverage their unique data to train R3al.AIs models, tailoring AI solutions to meet their specific needs and drive meaningful insights.
                        </p>
                        <span className='text-xs text-white mt-4 flex items-center gap-x-2'>Insert Your Data<GoInfo color='white' /></span>
                        <div className='md:inline-flex block items-center gap-3 pt-6'>
                            <button type="button" className='md:w-fit w-full md:px-4 px-2 py-2 border border-solid border-blue-600 rounded-lg text-white text-sm'>Create Demo</button>
                            <button type="button" className='md:w-fit w-full md:px-4 md:mt-0 mt-5 px-2 py-2 bg-primary rounded-lg text-white text-sm inline-flex justify-center items-center gap-x-2'>
                            <Image src={`/assets/svg/cloud-upload.svg`} alt="Cloud" width={20} height={20} />Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
