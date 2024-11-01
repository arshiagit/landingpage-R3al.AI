'use client';

import { useRef, useEffect } from "react";

export const Timeline: React.FC = () => {
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const greyLine = document.querySelector('.default-line') as HTMLElement;
            const drawLine = document.querySelector('.draw-line') as HTMLElement;
            const greyLineHeight = greyLine.offsetHeight;

            const windowDistance = window.scrollY;
            const windowHeight = window.innerHeight / 2;
            const timelineDistance = document.querySelector('.timeline')!.getBoundingClientRect().top + window.scrollY;

            if (windowDistance >= timelineDistance - windowHeight) {
                const lineHeight = Math.min(windowDistance - timelineDistance + windowHeight + 20, greyLineHeight);
                drawLine.style.height = `${lineHeight}px`;
            }

            itemsRef.current.forEach((item) => {
                const circlePosition = item.getBoundingClientRect().top + window.scrollY;
                if (windowDistance + windowHeight > circlePosition) {
                    item.classList.add('in-view');
                } else {
                    item.classList.remove('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="container mx-auto px-4 py-16 pt-0 pb-0">
            <div className="relative timeline">
                <div className="absolute md:left-1/2 -left-6 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-800 default-line"></div>
                <div className="absolute md:left-1/2 -left-6 transform -translate-x-1/2 h-0 border-l-2 border-primary draw-line"></div>

                <div className="relative md:mb-40 mb-10 flex flex-col items-start md:flex-row-reverse md:items-center">
                    <div className="md:w-1/2 md:pl-8">
                        <div className="flex flex-col items-start">
                            <p className="text-primary font-bold text-lg">01</p>
                            <h5 className='text-base text-white mt-2'>Connect</h5>
                        </div>
                        <p className="text-gray-400">Reach out to us via our contact form, email, or phone. We’re here to listen to your needs and answer any questions you may have.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-start md:justify-end">
                        <div className="size-3 bg-primary md:-mr-1.5 -ml-[29.5px] md:-mt-14 -mt-44 rounded-full"></div>
                    </div>
                </div>

                <div className="relative md:mb-40 mb-10 flex flex-col items-start md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-8">
                        <div className="mb-2 flex md:justify-end justify-start items-center">
                            <div className="text-primary font-bold text-lg">02</div>
                        </div>
                        <h5 className='text-base text-white mt-2 mb-2 md:text-right text-left'>Connect</h5>
                        <p className="text-gray-400">Schedule a consultation where we can discuss your goals, challenges, and how our AI solutions can help. This is an opportunity to explore your ideas in detail.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <div className="size-3 2xl:-mr-1.5 xl:-ml-1.5 -ml-12 md:-mt-12 -mt-52 bg-primary rounded-full"></div>
                    </div>
                </div>


                <div className="relative md:mb-40 mb-10 flex flex-col items-start md:flex-row-reverse md:items-center">
                    <div className="md:w-1/2 md:pl-8">
                        <div className="mb-2 flex items-center">
                            <div className="text-primary font-bold text-lg">03</div>
                        </div>
                        <h5 className='text-base text-white mt-2 mb-2'>Define</h5>
                        <p className="text-gray-400">Together, we’ll define the scope of your project. We’ll outline objectives, deliverables, and timelines to ensure we’re aligned on what to expect.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="size-3  md:-mr-1.5 -ml-12 md:-mt-12 xl:-mt-12 -mt-52 bg-primary rounded-full"></div>
                    </div>
                </div>

                <div className="relative md:mb-40 mb-10 flex flex-col items-start md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-8 pt-8">
                        <div className="mb-2 flex md:justify-end justify-start items-center mt-2">
                            <div className="text-primary font-bold text-lg">04</div>
                        </div>
                        <h5 className='text-base md:text-end text-left text-white mt-2 mb-2'>Design</h5>
                        <p className="text-gray-400">Our team will create a tailored plan that includes a detailed strategy and implementation roadmap. This step focuses on customizing our approach to fit your requirements.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <div className="size-3  2xl:-mr-1.5 xl:-ml-1.5 -ml-12 md:-mt-12 xl:-mt-11 -mt-52 bg-primary rounded-full"></div>
                    </div>
                </div>

                <div className="relative md:mb-40 mb-10 flex flex-col items-start md:flex-row-reverse md:items-center">
                    <div className="md:w-1/2 md:pl-8">
                        <div className="mb-2 flex items-center">
                            <div className="text-primary font-bold text-lg mt-8">05</div>
                        </div>
                        <h5 className='text-base text-white mt-2 mb-2'>Develop</h5>
                        <p className="text-gray-400">We begin the development phase, where our experts build and test the AI solutions. We ensure everything meets our quality standards and your expectations.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="size-3  md:-mr-1.5 -ml-12 md:-mt-14 xl:-mt-12 -mt-52 bg-primary rounded-full"></div>
                    </div>
                </div>
                <div className="relative mb-10 flex flex-col items-start md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-8">
                        <div className="mb-2 flex md:justify-end justify-start items-center">
                            <div className="text-primary font-bold text-lg mt-4">06</div>
                        </div>
                        <h5 className='text-base md:text-end text-start text-white mt-2 mb-2'>Deploy</h5>
                        <p className="text-gray-400">Once ready, we’ll deploy the solution and provide training and support. Our goal is to ensure a smooth transition and successful integration into your operations.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <div className="size-3  md:-mr-1.5 xl:-ml-1.5 -ml-12 md:-mt-14 xl:-mt-13 -mt-52 bg-primary rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>

    );
};