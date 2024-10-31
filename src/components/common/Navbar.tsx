import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function NavbarMenu() {
    return (
        <div className='w-full py-6 border-b border-solid border-white/10'>
            <header className='max-w-screen-xl mx-auto md:px-0 px-3'>
                <nav className='w-full flex justify-between items-center'>
                    {/* ========= Logo icon =========== */}
                    <Link href={``}><Image src={`/assets/svg/logo.svg`} alt="" width={180} height={40} /></Link>
                    {/* ========= Menu items links ========== */}
                    <ul className='2xl:inline-flex xl:inline-flex md:inline-flex lg:inline-flex hidden space-x-5 items-center text-white text-sm'>
                        {['Models', 'Industries', 'Who are we?', 'Product', 'Pricing', 'Resources', 'Contact'].map((item, i) => (
                            <li key={i}>
                                <Link href='/' className='tracking-wider flex items-center gap-x-1'>
                                    {item} {['Models', 'Industries', 'Resources'].includes(item) && <MdKeyboardArrowDown size={16} />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* =========== Get Started Button ======= */}
                    <button type="button" className='w-fit max-w-fit px-6 font-medium 2xl:flex xl:flex md:flex lg:flex hidden py-2.5 text-white text-sm bg-primary rounded-lg'>Get started</button>
                    {/* =========== Responsive menu ========== */}
                    <button type="button" className='border-none outline-none md:hidden flex text-white text-2xl'>
                        <FiMenu />
                    </button>
                </nav>
            </header>
        </div>
    )
}
