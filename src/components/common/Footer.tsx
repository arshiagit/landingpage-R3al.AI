import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (


        <footer className="bg-transparent">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Image src={`/assets/svg/logo.svg`} alt="Logo" width={200} height={200} />
                        <p className='text-gray-400 mt-4'>
                            Empowering Access to a <br />
                            World of Innovation
                        </p>
                        <div className="mt-4 flex space-x-4 sm:mt-4">
                            <FaXTwitter className="text-gray-400" />
                            <FaLinkedin className="text-gray-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold dark:text-white">Objectives</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">Vision Models</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">Large Language Models</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">Sustainability</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">Careers</Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline">Strategic Partnerships</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold dark:text-white">Business type</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline ">Startups and SMEs</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">Large Enterprises</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline ">Governments and <br />
                                        Public Sector</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">Investors</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400  font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline ">About us</Link>
                                </li>
                                <li className='mb-4'>
                                    <Link href="/" className="hover:underline">Pricing</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/contact" className="hover:underline ">Contact us</Link>
                                </li>
                                <li className='mb-4'>
                                    <Link href="/" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center items-start sm:justify-between gap-3">
                    <div className="flex md:flex-nowrap flex-wrap mt-4 sm:justify-center justify-start sm:mt-0 text-sm">
                        <Link href="/" className="text-gray-400 md:mt-0 mt-2">
                            Term Of Use
                        </Link>
                        <Link href="/" className="text-gray-400 md:mt-0 mt-2 ms-5">
                            Accessibility Statement
                        </Link>
                        <Link href="/" className="text-gray-400 md:mt-0 mt-2 md:ms-5 ms-0">
                            Cookies Policy
                        </Link>
                        <Link href="/" className="text-gray-400 md:mt-0 mt-2 ms-5">
                            Privacy Policy
                        </Link>
                    </div>
                    <span className="text-sm text-gray-500 sm:text-center md:mt-0 mt-3 dark:text-gray-400">© 2025 <Link href="/" className="hover:underline">R3AL.AI</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>

    )
}
