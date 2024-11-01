"use client";

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'animate.css';
export default function StatusContainer() {
    // Set the initial count and target count
    const [count, setCount] = useState<number>(266);
    const targetCount = 800; // 266M
    // Ref to detect the visibility of the h2 element
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    useEffect(() => {
        // Only start counting if count is below the target
        if (count < targetCount) {
            const interval = setInterval(() => {
                setCount((prevCount) => {
                    const incrementAmount = 1; // Increment by 1 million every 4 seconds
                    const nextCount = prevCount + incrementAmount;

                    // Check if next count would exceed the target
                    return nextCount >= targetCount ? targetCount : nextCount;
                });
            }, 5000); // 4000 ms = 4 seconds

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }
    }, [count, targetCount]);
    return (
        <section className='max-w-screen-xl mx-auto pt-4 md:px-0 px-6'>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-8'>
                <div className='w-full max-w-full'>
                    <h2 className='2xl:text-6xl xl:text-6xl md:text-6xl lg:text-6xl text-4xl font-medium bg-gradient-to-b to-white from-purple_600 text-transparent bg-clip-text'>{count.toLocaleString()}M</h2>
                    <p className='mt-3 text-white'>
                        Hyper Qualified Companies
                    </p>
                    <small className='text-white text-xs'>leverage AI</small>
                </div>
                <div className='w-full max-w-full md:ml-0 ml-5'>
                    <h2 className='2xl:text-6xl xl:text-6xl md:text-6xl lg:text-6xl text-4xl font-medium bg-gradient-to-b to-white from-purple_600 text-transparent bg-clip-text'>2,5x</h2>
                    <p className='mt-3 text-white'>
                        Cost reduction
                    </p>
                    <small className='text-white text-xs'>when using our models</small>
                </div>
                <div className='w-full max-w-full md:text-center text-left'>
                    <h2 className='2xl:text-6xl xl:text-6xl md:text-6xl lg:text-6xl text-4xl font-medium bg-gradient-to-b to-white from-purple_600 text-transparent bg-clip-text'>40%</h2>
                    <p className='mt-3 text-white'>
                        Decrease in computing
                    </p>
                    <small className='text-white text-xs text-left'>from our methodology</small>
                </div>
            </div>
            <div className='w-full max-w-full relative'>
                <Image src={`/assets/images/gradiant-radial-img.png`} className='w-full' alt='Gradient Radial' width={200} height={100} />
                <motion.h2
                    ref={ref}
                    className='2xl:text-5xl xl:text-5xl text-white font-medium absolute md:bottom-28 bottom-2 left-0 right-0 text-center -translate-x-1/2 -translate-y-1/2'
                    initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                    animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                    transition={{ duration: 0.9, ease: "easeOut" }} // Smooth transition
                >
                    Problem & Solution
                </motion.h2>
            </div>
        </section>
    )
}
