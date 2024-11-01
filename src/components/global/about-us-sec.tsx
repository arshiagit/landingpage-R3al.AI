import Image from 'next/image'
import React from 'react'

export default function AboutUsSection() {
    return (
        <section className='max-w-screen-xl mx-auto pt-36 md:px-0 px-5 relative'>
            <div className='flex justify-center pb-6'>
                <div className='w-fit max-w-fit px-8 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white'>
                    About Us
                </div>
            </div>
            <h1 className='md:text-center text-left 2xl:text-5xl mt-4 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-xl md:text-white bg-gradient-to-b from-white to-purple_600 text-transparent bg-clip-text font-medium'>
                A dynamic team uniting top
            </h1>
            <h1 className='md:text-center text-left 2xl:text-5xl md:mt-4 mt-2 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-xl text-white font-medium'>
                talent and expertise
            </h1>
            <p className='text-sm text-white/60 mt-4 md:w-1/2 text-center md:mx-auto w-full'>
                At R3al.AI, our dynamic team combines top talent and diverse expertise to deliver innovative AI solutions. We collaborate to tackle challenges and drive impactful results, ensuring we stay at the forefront of the industry. Join us in redefining whats possible with artificial intelligence!
            </p>
            <div className='flex justify-center pt-8'>
                <button type="button" className='w-fit max-w-fit px-6 font-medium 2xl:flex xl:flex md:flex lg:flex md:mb-0 mb-7 py-2.5 text-white text-sm bg-primary rounded-lg'>About Us</button>
            </div>
            <div className='flex justify-center '>
                <Image src={`/assets/svg/lines-circle.svg`} alt="Global" className='-mt-80 w-full md:block hidden' width={300} height={300} />
            </div>
            <div className='w-fit p-5 md:absolute md:top-1/2 bg-black_400/20 text-white/50 rounded-xl border border-solid border-white/20'>
                15+ years of experience <br />
                across various industries
            </div>
            <div className='w-fit p-5 md:absolute md:bottom-40 md:left-1/2 md:-ml-24 md:mt-0 mt-8 bg-black_400/20 text-white/50 rounded-xl border border-solid border-white/20'>
                Driven by Results and Impact
            </div>
            <div className='w-fit p-5 md:absolute md:top-1/2 md:right-0 md:mt-0 mt-8 bg-black_400/20 text-white/50 rounded-xl border border-solid border-white/20'>
                An embedded network featuring <br />
                talent from the world’s top <br />
                educators and employers
            </div>
        </section>
    )
}
