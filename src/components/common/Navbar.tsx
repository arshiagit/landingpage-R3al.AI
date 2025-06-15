"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useCallback } from 'react'
import { FiMenu } from "react-icons/fi";

// Debounce function to limit how often the scroll handler fires
function debounce(func: (args: unknown) => void, wait: number): () => void {
    let timeout: NodeJS.Timeout;
    return function executedFunction(): void {
        const later = () => {
            clearTimeout(timeout);
            func(null);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export default function NavbarMenu() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showHide, setshowHide] = useState(false);

    // Memoize the scroll handler with useCallback
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);
    }, []);

    // Apply debounce to the scroll handler
    const debouncedHandleScroll = useCallback(
        debounce(() => handleScroll(), 10),
        [handleScroll]
    );

    useEffect(() => {
        // Add passive: true to improve scroll performance
        window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
        return () => window.removeEventListener("scroll", debouncedHandleScroll);
    }, [debouncedHandleScroll]);

    return (
        <>
            {/* Placeholder div to maintain layout space */}
            <div className="w-full py-4 border-b border-solid border-transparent">
                <div className='max-w-screen-xl mx-auto md:px-0 px-3'>
                    <div className='w-full flex justify-between items-center opacity-0 pointer-events-none'>
                        <div className="w-40 h-10"></div>
                        <div className="w-20 h-10"></div>
                    </div>
                </div>
            </div>

            {/* Fixed navbar with smooth transitions */}
            <div className={`w-full py-4 border-b border-solid border-white/10 fixed top-0 left-0 z-50 will-change-transform transition-all duration-300 ease-in-out ${
                isScrolled 
                    ? "nav__bg backdrop-blur-sm bg-opacity-90" 
                    : "bg-transparent backdrop-blur-none bg-opacity-0"
            }`}>
                <header className='max-w-screen-xl mx-auto md:px-0 px-3'>
                    <nav className='w-full flex justify-between items-center'>
                        {/* ========= Logo icon =========== */}
                        <Link href={`/`}><Image src={`/assets/svg/logo.svg`} alt="R3al.AI Logo" width={160} height={40} quality={80} priority /></Link>
                        {/* ========= Menu items links ========== */}
                        <ul className='2xl:inline-flex xl:inline-flex md:inline-flex lg:inline-flex hidden space-x-5 items-center text-white text-sm'>
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
                        <li>
                            <Link href='/contact' className='tracking-wider flex items-center gap-x-1'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Link href='/contact' className='w-fit max-w-fit px-6 font-medium flex mt-5 py-2.5 text-white text-sm bg-primary rounded-lg'>Get started</Link>
                </div> }
            </div>
        </>
    )
}
