'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

export default function WhyChooseUsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [isInViews, setIsInView] = useState(false);
    const [isInProfromance, setIsInProfromance] = useState(false);
    const controls = useAnimation();
    const sectionRef = useRef<HTMLDivElement>(null);
    const profromanceRef = useRef<HTMLDivElement>(null);
    const controlsProfromance = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger animation when 30% of the element is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInViews) {
            controls.start({ opacity: 1, x: 0 });
        } else {
            controls.start({ opacity: 0, x: 100 });
        }
    }, [isInViews, controls]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInProfromance(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger animation when 30% of the element is visible
        );

        if (profromanceRef.current) {
            observer.observe(profromanceRef.current);
        }

        return () => {
            if (profromanceRef.current) {
                observer.unobserve(profromanceRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInProfromance) {
            controlsProfromance.start({ opacity: 1, x: 0 });
        } else {
            controlsProfromance.start({ opacity: 0, x: 100 });
        }
    }, [isInProfromance, controlsProfromance]);
    return (
        <section className='max-w-screen-xl mx-auto pt-6 md:px-0 px-5'>
            <div className='flex justify-center'>
                <div className='w-fit max-w-fit px-8 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                    Why R3AL.AI?
                </div>
            </div>
            <motion.h2
                ref={ref}
                className='text-center 2xl:text-5xl mt-8 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-4xl text-white font-medium'
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and y position 0
                transition={{ duration: 1.3, ease: "easeOut" }} // Smooth transition
            >
                Why <span className='bg-gradient-to-b from-white to-purple_600 text-transparent bg-clip-text'>Choose</span> Us?
            </motion.h2>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 relative md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-x-6 gap-y-6 mt-14 mb-8'>
                <div className='w-full p-8 py-14 bg-[#2753FD]/10 border border-solid border-primary/25 rounded-2xl'>
                    <div className='flex flex-col gap-y-4 items-center'>
                        <Image src={`/assets/svg/lock.svg`} alt="Plus" width={100} height={100} />
                        <span className='text-2xl text-white font-normal'>Seamless Integration</span>
                        <small className='text-sm text-white/50 text-center'>Plug-and-play architecture that integrates into your existing systems effortlessly.</small>
                    </div>
                </div>
                <div className='w-full p-8 py-14 bg-[#2753FD]/10 border border-solid border-primary/25 rounded-2xl'>
                    <div className='flex flex-col gap-y-4 items-center'>
                        <Image src={`/assets/svg/proof.svg`} alt="Plus" width={100} height={100} />
                        <span className='text-2xl text-white font-normal'>Future-Proof</span>
                        <small className='text-sm text-white/50 text-center'>Stay ahead with AI models that can adapt to new challenges and grow with your needs.</small>
                    </div>
                </div>
                <div className='w-full p-8 py-14 bg-[#2753FD]/10 border border-solid border-primary/25 rounded-2xl'>
                    <div className='flex flex-col gap-y-4 items-center'>
                        <Image src={`/assets/svg/cost.svg`} alt="Plus" width={100} height={100} />
                        <span className='text-2xl text-white font-normal'>Lower Costs</span>
                        <small className='text-sm text-white/50 text-center'>Achieve superior performance with a fraction of the computational load.</small>
                    </div>
                </div>
            </div>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 relative md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-x-4 gap-y-6 mb-10'>
                <motion.div ref={profromanceRef} initial={{ opacity: 0, x: 100 }} animate={controlsProfromance} transition={{ duration: 1.3, ease: "backOut" }}
                    className='w-full md:p-8 p-5 py-14 bg-[#2753FD]/10 border border-solid border-primary/25 rounded-2xl'>
                    <Image src={`/assets/svg/profomance.svg`} alt="Profomance-Image" quality={80} className="w-full" width={200} height={50} />
                    <h2 className='text-white 2xl:text-3xl xl:text-3xl md:text-3xl lg:text-3xl text-md text-center mt-10'>Performance Improvement</h2>
                    <p className='text-white/50 text-center 2xl:text-sm xl:text-sm md:text-sm lg:text-sm text-sm mt-5'>
                        At R3AL.AI, we push the boundaries of AI performance, delivering lightning-fast processing and unmatched accuracy. Our models are designed to seamlessly integrate into any system, drastically improving efficiency while reducing costs. Whether you’re scaling operations or fine-tuning processes, our AI solutions provide the flexibility and speed needed to stay ahead in a competitive market. With real-time insights and dynamic scalability, we ensure your business performs at its best, now and in the future.
                    </p>
                </motion.div>
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                    transition={{ duration: 1.3, ease: "backOut" }}
                    className='w-full md:p-8 p-5 py-14 bg-[#2753FD]/10 border border-solid border-primary/25 rounded-2xl'
                >
                    <Image src='/assets/svg/data.svg' alt="Data-Image" quality={80} className="w-full" width={200} height={50} />
                    <div className='flex justify-end'>
                        <Image src='/assets/svg/intelligence.svg' alt="intelligence-Image" quality={80} width={300} height={50} />
                    </div>
                    <h2 className='text-white 2xl:text-3xl xl:text-3xl md:text-3xl lg:text-3xl text-md text-center md:mt-[12.5rem] mt-6'>
                        From Data to Intelligence
                    </h2>
                    <p className='text-white/50 text-center md:text-sm text-sm mt-5'>
                        At R3al.AI, we take data from all sources—whether structured or unstructured, noisy or sparse—and turn it into cutting-edge AI models. Our advanced technology is designed to tackle a wide range of problems, even when faced with uncertainty or limited data. By integrating and processing your inputs, we create intelligent models that deliver actionable insights and solve real-world challenges across industries. No matter the complexity, we transform your data into powerful AI solutions that drive measurable impact.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

