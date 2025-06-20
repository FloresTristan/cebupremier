'use client'
import Link from "next/link";
import Image from "next/image";
import React, {useState, useEffect} from "react";

export default function NavBar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleResize =()=>{
            setIsMobile(window.innerWidth < 768)
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    },[]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    return(
        <nav className={`sticky z-50 top-0 shadow-md text-black p-4 flex justify-between items-center ease-in-out duration-300  ${isScrolled ? 'bg-opacity-90 bg-gray-800 backdrop-blur-md text-white' : ''} `}>
            <Link href="/" className="flex items-center">
                <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-full border-2 bg-white border-green-600"
                    priority
                />
                <span className={`ml-2 text-xl font-[family-name:var(--font-geist-sans)] ${ isMobile ? 'hidden': '' } `}>Cebu Premiere Real Estate</span>
            </Link>
            <ul className="flex space-x-4 font-[family-name:var(--font-geist-sans)] ">
                <li>
                    <Link
                        href="/"
                        className=" duration-300 ease-in-out border-2 border-transparent p-2 hover:border-blue-500 rounded-md ">
                            Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className=" duration-300 ease-in-out border-2 border-transparent p-2 hover:border-blue-500 rounded-md ">
                            About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className=" duration-300 ease-in-out border-2 border-transparent p-2 hover:border-blue-500 rounded-md ">
                            Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}