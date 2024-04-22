"use client"

import Image from "next/image"
import image1 from '../images/peniel-logo.png'
import { useState } from "react"
import { FaBars } from 'react-icons/fa'
import Link from "next/link"

export default function Navbar() {

    const [isNavbarOPen, setIsNavbarOPen] = useState(false)

    const handleNavabar = () => {
        setIsNavbarOPen(true)
    }

    return(
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
            <Link href={'/'}><Image src={image1} alt="image" className="px-4 py-8"/></Link>
            <div className="flex">
                <button onClick={handleNavabar} className="text-3xl px-4 dark:text-blue-500"><FaBars /></button>
            </div>
            </div>
            {isNavbarOPen && ( 
                <div className="flex flex-col xl:flex-row xl:justify-around xl:w-[70%] xl:mx-auto items-center justify-center shadow-b slide-in-left">
                <Link href={'/'}><p className="text-xl xl:text-2xl font-medium py-2 dark:text-blue-500">Home</p></Link>
               <Link href={'/about'}> <p className="text-xl xl:text-2xl font-medium py-2 dark:text-blue-500">About Us</p> </Link>
                <Link href={'/businessAreas'}><p className="text-xl xl:text-2xl font-medium py-2 dark:text-blue-500">Business Areas</p></Link>
                <p className="text-xl xl:text-2xl font-medium py-2 dark:text-blue-500">Blog</p>
               <Link href={'/conatct'}> <p className="text-xl xl:text-2xl font-medium py-2 dark:text-blue-500">Contact Us</p></Link>
                </div>
                )}
        </div>
    )
}