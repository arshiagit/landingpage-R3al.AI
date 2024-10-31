import Image from 'next/image'
import React from 'react'

export default function StatusContainer() {
    return (
        <section className='max-w-screen-xl mx-auto pt-4 md:px-0 px-6'>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-8'>
                <div className='w-full max-w-full'>
                    <h2 className='2xl:text-6xl xl:text-6xl md:text-6xl lg:text-6xl text-4xl font-medium bg-gradient-to-b to-white from-purple_600 text-transparent bg-clip-text'>266M</h2>
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
            <h2 className='2xl:text-5xl xl:text-5xl text-white font-medium absolute bottom-28 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                Problem & Solution
            </h2>
            </div>
        </section>
    )
}
