import Image from 'next/image'
import React from 'react'

export default function CybersecuritySection() {
    return (
        <section className='max-w-screen-xl mx-auto pt-14 md:px-0 px-5'>
            <div className='w-full bg-gradient-to-b from-blue_800 to-black_400 p-8 rounded-2xl border border-solid border-blue-600'>
                <div className='flex 2xl:flex-row xl:flex-row flex-col justify-between'>
                    <div className='md:w-1/2 w-full'>
                        <div className='w-fit max-w-fit px-8 py-1.5 bg-transparent border border-solid border-white/20 rounded-full text-xs text-white'>
                            CyberSecurity
                        </div>
                        <h1 className='text-left 2xl:text-4xl mt-4 xl:text-4xl tracking-wide md:text-4xl lg:text-4xl text-2xl text-white font-medium'>
                            Cybersecurity and
                        </h1>
                        <h1 className='text-left 2xl:text-4xl mt-1 xl:text-4xl tracking-wide md:text-4xl lg:text-4xl text-xl text-white font-medium'>
                            protection of your data
                        </h1>
                        <p className='text-sm text-white/60 mt-4 md:w-96 w-full'>
                            R3al.AI meets the highest standards of data and compiles with
                            major regulations.
                        </p>
                    </div>
                    <div className='md:w-1/2 w-full flex justify-center'>
                    <Image src={`/assets/svg/cyber-security.svg`} alt="Global" className='mt-8' width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}
