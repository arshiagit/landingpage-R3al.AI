"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useCallback } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

// Debounce function to limit how often the scroll handler fires
function debounce(func: Function, wait: number) {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export default function NavbarMenu() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showHide, setshowHide] = useState(false);

    // Memoize the scroll handler with useCallback
    const handleScroll = useCallback(
        debounce(() => {
            setIsScrolled(window.scrollY > 50);
        }, 10), // Small debounce time for responsiveness
        []
    );

    useEffect(() => {
        // Add passive: true to improve scroll performance
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className={`w-full py-4 border-b border-solid border-white/10 will-change-transform ${isScrolled ? "fixed top-0 left-0 nav__bg z-50" : "relative"}`}>
            <header className='max-w-screen-xl mx-auto md:px-0 px-3'>
                <nav className='w-full flex justify-between items-center'>
                    {/* ========= Logo icon =========== */}
                    <Link href={`/`}><Image src={`/assets/svg/logo.svg`} alt="R3al.AI Logo" width={160} height={40} quality={80} priority /></Link>
                    {/* ========= Menu items links ========== */}
                    <ul className='2xl:inline-flex xl:inline-flex md:inline-flex lg:inline-flex hidden space-x-5 items-center text-white text-sm'>
                        {['Models', 'Industries', 'Who are we?', 'Product', 'Pricing', 'Resources'].map((item, i) => (
                            <li key={i}>
                                <Link href='/' className='tracking-wider flex items-center gap-x-1'>
                                    {item} {['Models', 'Industries', 'Resources'].includes(item) && <MdKeyboardArrowDown size={16} />}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href='/contact' className='tracking-wider flex items-center gap-x-1'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* =========== Get Started Button ======= */}
                    <Link href='/contact' className='w-fit max-w-fit px-6 font-medium 2xl:flex xl:flex md:flex lg:flex hidden py-2.5 text-white text-sm bg-primary rounded-lg'>Get started</Link>
                    {/* =========== Responsive menu ========== */}
                    <button type="button" onClick={() => setshowHide(!showHide)} className='border-none outline-none md:hidden flex text-white text-2xl'>
                        <FiMenu />
                    </button>
                </nav>
            </header>
            {/* responsive menu */}
            {showHide &&
            <div className='w-full fixed top-16 left-0 right-0 bg-black p-6 min-h-screen'>
                <ul className='flex flex-col space-y-5 items-start text-white text-sm'>
                    {['Models', 'Industries', 'Who are we?', 'Product', 'Pricing', 'Resources'].map((item, i) => (
                        <li key={i}>
                            <Link href='/' className='tracking-wider flex items-center gap-x-1'>
                                {item} {['Models', 'Industries', 'Resources'].includes(item) && <MdKeyboardArrowDown size={16} />}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href='/contact' className='tracking-wider flex items-center gap-x-1'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <Link href='/contact' className='w-fit max-w-fit px-6 font-medium flex mt-5 py-2.5 text-white text-sm bg-primary rounded-lg'>Get started</Link>
            </div> }
        </div>
    )
}
