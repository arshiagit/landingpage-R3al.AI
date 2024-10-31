import Image from 'next/image'
import React from 'react'

function OurProductSection() {
    return (
        <section className='max-w-screen-xl mx-auto md:px-0 px-6 pt-20'>
            <div className='flex justify-center'>
                <div className='w-fit max-w-fit px-12 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                    Our Product
                </div>
            </div>
            <h1 className='text-center 2xl:text-5xl mt-8 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-4xl text-white font-medium'>
                Leading the <span className='bg-gradient-to-b from-white to-purple_600 text-transparent bg-clip-text'>Future of AI</span>
            </h1>
            <div className='flex justify-center'>
                <Image src={`/assets/images/diagram.png`} alt="Digram-Image" quality={80} className="w-full mt-16" width={200} height={50} />
            </div>
            <div className='grid 2xl:grid-cols-5 xl:grid-cols-5 md:grid-cols-5 grid-cols-1 md:gap-y-0 gap-x-6 gap-y-6 mt-20 mb-10'>
                <div className='w-full border border-solid border-blue-400/15 p-4 rounded-lg flex flex-col gap-y-3 py-8 items-center'>
                    <Image src={`/assets/svg/user.svg`} alt="User" width={40} height={40} />
                    <span className='text-white text-sm'>Our Team</span>
                </div>
                
                <div className='w-full border border-solid border-blue-400/15 p-4 rounded-lg flex flex-col gap-y-3 py-8 items-center'>
                    <Image src={`/assets/svg/user.svg`} alt="User" width={40} height={40} />
                    <span className='text-white text-sm'>Our Team</span>
                </div>
                <div className='w-full border border-solid border-blue-400/15 p-4 rounded-lg flex flex-col gap-y-3 py-8 items-center'>
                    <Image src={`/assets/svg/user.svg`} alt="User" width={40} height={40} />
                    <span className='text-white text-sm'>Our Team</span>
                </div>
            </div>
        </section>
    )
}

export default OurProductSection