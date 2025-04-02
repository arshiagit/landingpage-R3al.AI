import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

const PreoblemSolutionSection = () => {
    return (
        <section className='max-w-screen-xl mx-auto md:px-0 px-6'>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-6'>
                <div className='w-full'>
                    <div className='size-10 bg-black border border-solid border-white/20 rounded-full flex justify-center items-center text-sm mb-3 text-white'>01</div>
                    <span className='text-white font-medium'>The Challenge</span>
                    <ul className='flex flex-col gap-y-6 md:w-60 w-fit mt-8 relative'>
                        <li className='inline-flex items-start gap-4 font-medium text-[#99AEFF]'>
                            <BsArrowReturnRight className='text-[#99AEFF] -mt-6' size={70} />
                            AI systems often require enormous resources and can struggle with all kinds of data.
                        </li>
                        <li className='inline-flex items-start gap-4 font-medium text-[#99AEFF]'>
                            <BsArrowReturnRight className='text-[#99AEFF] -mt-6' size={70} />
                            Many models are rigid and fail to adapt quickly to different environments.
                        </li>
                        <li className='inline-flex items-start gap-4 font-medium text-[#99AEFF]'>
                            <BsArrowReturnRight className='text-[#99AEFF] -mt-6' size={70} />
                            ​Traditional AI systems often require significant computational resources and can struggle with diverse data types, leading to inefficiencies and increased operational costs.
                        </li>
                    </ul>
                </div>
                <div className='w-full'>
                    <div className='size-10 bg-black border border-solid border-white/20 rounded-full flex justify-center items-center text-sm mb-3 text-white'>02</div>
                    <span className='text-white font-medium'>Our Apporch</span>
                    <ul className='flex flex-col gap-y-6 md:w-60 w-fit mt-8 relative'>
                        <li className='inline-flex items-start gap-4 font-medium text-[#99AEFF]'>
                            <BsArrowReturnRight className='text-[#99AEFF] -mt-6' size={75} />
                            We offer state-of-the-art AI models that are adaptable, efficient in resource utilization, and seamlessly integrate into existing systems.
                        </li>
                        <li className='inline-flex items-start gap-4 font-medium text-[#99AEFF]'>
                            <BsArrowReturnRight className='text-[#99AEFF] -mt-6' size={70} />
                            Designed to evolve with your business, reducing cost while improving performance.

                        </li>
                    </ul>
                </div>
                <div className='w-full'>
                    <div className='size-10 bg-black border border-solid border-white/20 rounded-full flex justify-center items-center text-sm mb-3 text-white'>03</div>
                    <span className='text-white font-medium'>The Results</span>
                    <ul className='flex flex-col gap-y-6 md:w-60 w-fit mt-8 relative'>
                        <li className='inline-flex items-start gap-4 font-medium text-[#99AEFF]'>
                            <BsArrowReturnRight className='text-[#99AEFF] -mt-6' size={70} />
                            Our AI solutions enhance efficiency, streamline workflows, and reduce operational costs for businesses of all sizes.
                        </li>
                        <li className='inline-flex items-start gap-4 font-medium text-[#99AEFF]'>
                            <BsArrowReturnRight className='text-[#99AEFF] -mt-6' size={70} />
                            We enable data-driven decisions by delivering real-time insights that help companies stay competitive and agile, ensuring robustness even in uncertain environments.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PreoblemSolutionSection
