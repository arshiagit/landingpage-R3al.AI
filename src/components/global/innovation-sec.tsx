'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const items = [
    'SportTech',
    'HealthTech',
    'Artificial Intelligence',
    'Automotive',
    'FinTech',
    'Manufacturing',
];

export default function InnvotionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const listRef = useRef<HTMLUListElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <section className='max-w-screen-xl mx-auto pt-6 md:px-0 px-5'>
            <div className='flex 2xl:flex-row xl:flex-row md:flex-row flex-col md:gap-24 gap-10'>
                <div className='2xl:w-1/2 xl:w-1/2 w-full relative'>
                    <Image src={`/assets/svg/gradient-blur.svg`} alt="" className='w-full rounded-full absolute -left-64 -top-28' width={200} height={200} />
                    <div className='w-fit max-w-fit px-6 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                        Innovation
                    </div>
                    <motion.h1
                        ref={ref}
                        className='2xl:text-5xl xl:text-5xl text-4xl font-medium mt-7 bg-gradient-to-b from-white to-purple_600 text-transparent bg-clip-text'
                        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                        transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
                    >
                        We help
                    </motion.h1>
                    <motion.h1
                        ref={ref}
                        className='2xl:text-5xl xl:text-5xl text-4xl font-medium mt-2 text-white'
                        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                        transition={{ duration: 1.6, ease: "easeOut" }} // Smooth transition
                    >
                        businesses grow
                    </motion.h1>
                    <p className='text-gray-300 mt-6 tracking-wide text-base'>
                        At R3AL.AI, we deliver adaptable AI solutions, drawing from our extensive expertise across multiple industries.  Proudly versatile, R3AL.AI supports businesses of all sizes, sectors, and needs, ensuring a customized approach with every deployment.
                    </p>
                    <p className='text-gray-300 mt-8 tracking-wide text-base'>
                        Were dedicated to providing innovative models that elevate your operations and decision-making.
                    </p>
                    <p className='text-gray-300 mt-6 tracking-wide text-base'>
                        Ready to take your organizations growth to the next level?
                    </p>
                    <button type="button" className='w-fit max-w-fit px-9 font-medium mt-10 2xl:flex xl:flex md:flex lg:flex hidden py-3 text-white text-sm bg-primary rounded-lg'>Get started</button>
                </div>
                <div className='2xl:w-1/2 xl:w-1/2 w-full text-center h-96 overflow-hidden mt-10'>
                    <ul ref={listRef} className='flex flex-col animation__text overflow-hidden items-start text-white/25 gap-y-8 2xl:text-4xl xl:text-4xl md:text-4xl text-xl font-medium'>
                        {items.concat(items).map((item, index) => (
                            <li
                                key={index}
                                className={`transition-colors duration-500 ${activeIndex === index % items.length ? 'text-white' : 'text-white/25'
                                    }`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
