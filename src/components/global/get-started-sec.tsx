import React from 'react'

export default function GetStartedSection() {
  return (
    <section className='w-full pt-0 px-0 relative md:pb-0 pb-6'>
      <div className='w-full bg-center bg-cover md:h-screen h-[500px] bg-[url("/assets/svg/get-started.svg")] relative'>
      <div className='absolute md:bottom-40 bottom-0 left-0 right-0 md:p-0 p-5'>
        <h1 className='md:text-center text-center 2xl:text-5xl mt-4 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-3xl text-white font-medium'>
          Get Started In
        </h1>
        <h1 className='md:text-center text-center 2xl:text-5xl md:mt-4 mt-2 xl:text-5xl tracking-wide md:text-5xl lg:text-5xl text-3xl text-white font-medium'>
          Minutes
        </h1>
        <p className='text-sm text-white/60 mt-4 md:w-80 text-center md:mx-auto w-full'>
          Are you ready to scale the unscalable? Talk with
          us to get a tailored approach to your business.
        </p>
        <div className='md:w-96 w-full bg-white p-4 rounded-lg md:mx-auto mt-8 px-3 relative'>
          <input type="text" className='border-none outline-none bg-transparent' placeholder='Your e-mail' />
          <button type="button" className='w-fit max-w-fit px-4 absolute right-2 top-2 font-medium 2xl:flex xl:flex md:flex lg:flex py-2.5 text-white text-sm bg-primary rounded-lg'>Get started</button>
        </div>
      </div></div>
     
    </section>
  )
}
