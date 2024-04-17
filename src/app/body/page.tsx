"use client"

import Image from "next/image"
import image1 from '../images/transparentpc.png'
import { useState, useRef } from "react"


export default function Body() {

    const [longText, setLongText] = useState(false)
    const [shortText, setShortText] = useState(true)

    const handleLongText = () => {
        setLongText(true)
        setShortText(false)
    }

    
        const infoRef = useRef(null); 
        const [showInfo, setShowInfo] = useState(false); 
      
        const handleHover = () => {
          setShowInfo(!showInfo); 
        }

    return(
        <div>
            <p className="text-center text-2xl mt-20 font-bold my-3 dark:text-blue-500">WELCOME TO</p>
            <p className="text-center text-3xl xl:text-5xl font-black tracking-widest my-2x dark:text-blue-500">PENIEL SOFTWARE SOLUTIONS</p>
            <p className="text-center text-md font-medium my-2 dark:text-blue-500">Innovaton . Value . Satisfaction</p>

            <div className="flex justify-center">
                <Image src={image1} alt="image" width={1000}/>
                {/* //add this text: We create innovative and valuable business software solutions that give client satisfaction. */}
            </div>

            <div className="flex flex-col xl:flex-row shadow-md mt-20">
                <div className="flex flex-col">
                    <p className="text-xl font-bold w-[80%] xl:w-[70%] mx-auto">Vision:</p>
                    <p className="w-[80%] xl:w-[70%] mx-auto text-2xl text-grey-500 pb-10">Empowering clients with sustainable competitive advantage by providing innovative business software solutions and excellent services within cost effective bottom-line.</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl font-bold w-[80%] xl:w-[70%] mx-auto text-right xl:text-left">Mission</p>
                    <p className="w-[80%] xl:w-[70%] mx-auto text-2xl text-grey-500 pb-10 text-right xl:text-left">Empowering clients with sustainable competitive advantage by providing innovative business software solutions and excellent services within cost effective bottom-line.</p>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row my-20">
                <div className="bg-blue-500 rounded-full h-96 w-96 flex items-center justify-center mx-auto">
                    <p className="text-center text-white text-5xl py-3 font-medium px-2">Peniel Software Solutions</p>
                </div>
                <div className="xl:w-[70%]">
                    <p className="text-3xl mt-10 font-bold w-[80%] mx-auto">Who are we?</p>
                    <div className="flex flex-row">
                        {shortText && (
                    <p className="w-[80%] mx-auto mt-3 text-xl pb-10">We are a software solutions company driven by customer’s satisfaction. Our core values of Friendship, Respect, Innovation, Quality, and Sustainability help us create lasting bonds with our clients. This enables us take their businesses as ours. Simply put, we are our customers ally in business success. We create innovative and valuable business software<span onClick={handleLongText} onMouseEnter={handleHover} onMouseLeave={handleHover}>...</span>
                    </p>
                   
                     )}
                    
                    {longText && (
                    <p className="w-[80%] mx-auto mt-3 text-xl pb-10">We are a software solutions company driven by customer’s satisfaction. Our core values of Friendship, Respect, Innovation, Quality, and Sustainability help us create lasting bonds with our clients. This enables us take their businesses as ours. Simply put, we are our customers ally in business success. We create innovative and valuable business software solutions that give client satisfaction. We provide first rate and highly reliable software solutions that make clients’ daily business tasks easy with utmost attention to satisfaction while empowering clients with sustainable competitive advantage by providing innovative solutions and excellent services in a cost effective manner.
                    </p>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}