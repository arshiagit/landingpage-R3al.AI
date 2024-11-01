"use client";

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatusContainer() {
    // Set the initial count and target count
    const [count, setCount] = useState<number>(1);
    const targetCount = 266; // 266M
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
            }, 1000); // 4000 ms = 4 seconds

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }
    }, [count, targetCount]);
    return (
        <section className='max-w-screen-xl mx-auto pt-10 md:px-0 px-6'>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-8'>
                  <Counter targetCount={266} label="Hyper Qualified Companies" subtext="leverage AI" />
                  <Counter targetCount={2.5} label="Cost Reduction" subtext="when using our models" />
                  <CounterPer targetCount={40} label="Decrease in computing" subtext="from our methodology" />
            </div>
            <div className='w-full max-w-full relative'>
                <Image src={`/assets/svg/circle.svg`} className='w-full' alt='Gradient Radial' width={200} height={100} />
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



interface CounterProps {
    targetCount: number;
    label: string;
    subtext: string;
  }
  

const Counter: React.FC<CounterProps> = ({ targetCount, label, subtext }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
  
            const incrementStep = Math.ceil(targetCount / 100); // Adjust speed here
            let currentCount = 0;
  
            const counterInterval = setInterval(() => {
              currentCount += incrementStep;
              if (currentCount >= targetCount) {
                setCount(targetCount);
                clearInterval(counterInterval);
              } else {
                setCount(currentCount);
              }
            }, 20); // Interval time in milliseconds
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is in view
      );
  
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
  
      return () => {
        if (counterRef.current) observer.unobserve(counterRef.current);
      };
    }, [targetCount, hasAnimated]);
  
    return (
      <div ref={counterRef} className="w-full max-w-full md:text-center text-left">
        <h2 className="2xl:text-6xl xl:text-6xl md:text-6xl lg:text-6xl text-4xl font-medium bg-gradient-to-b to-white from-purple_600 text-transparent bg-clip-text">
          {count.toLocaleString()}M
        </h2>
        <p className="mt-3 text-white">{label}</p>
        <small className="text-white text-xs">{subtext}</small>
      </div>
    );
  };

  interface CounterPerProps {
    targetCount: number;
    label: string;
    subtext: string;
  }
  

const CounterPer: React.FC<CounterPerProps> = ({ targetCount, label, subtext }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
  
            const incrementStep = Math.ceil(targetCount / 100); // Adjust speed here
            let currentCount = 0;
  
            const counterInterval = setInterval(() => {
              currentCount += incrementStep;
              if (currentCount >= targetCount) {
                setCount(targetCount);
                clearInterval(counterInterval);
              } else {
                setCount(currentCount);
              }
            }, 1000); // Interval time in milliseconds
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is in view
      );
  
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
  
      return () => {
        if (counterRef.current) observer.unobserve(counterRef.current);
      };
    }, [targetCount, hasAnimated]);
  
    return (
      <div ref={counterRef} className="w-full max-w-full md:text-center text-left">
        <h2 className="2xl:text-6xl xl:text-6xl md:text-6xl lg:text-6xl text-4xl font-medium bg-gradient-to-b to-white from-purple_600 text-transparent bg-clip-text">
          {count.toLocaleString()}%
        </h2>
        <p className="mt-3 text-white">{label}</p>
        <small className="text-white text-xs">{subtext}</small>
      </div>
    );
  };