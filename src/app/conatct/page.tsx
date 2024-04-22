"use client"

import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { useState } from "react";


export default function Contact() {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors

  const validateForm = (event) => {
    event.preventDefault(); // Prevent default form submission

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Submit form via mailto or other method only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      // Choose one of the following form submission methods:

      // Option 1: Mailto (less secure, might not work in all email clients)
      window.location.href = `mailto:youremail@example.com?subject=Contact Form Submission&body=${name}%0A${email}%0A${message}`;


    }
}
    
    return(
        <div className="bg-white text-black dark:bg-black dark:text-blue-500">
            <Navbar />
            <p className="text-center text-5xl py-20 font-black tracking-widest">Contact</p>
            <div className="flex flex-col lg:flex-row lg:w-[85%] lg:justify-around mx-auto">
                
                <div className="flex flex-col lg:w-[40%]">
                    <p className="text-4xl font-bold">Get In Touch</p>
                    <p className="dark:text-gray-500 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis atque maiores, at deleniti tenetur iure quisquam nam soluta voluptatem voluptate eaque earum aliquam, explicabo vero quas aliquid maxime hic. Labore?</p>
                </div>

                <div className="px-3 py-3 bg-gray-500 rounded-lg lg:w-[50%]">
                    <form onSubmit={validateForm} className="flex flex-col space-y-4 bg-blue-500 dark:bg-black rounded-lg px-4 py-8">
                    
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your name" className="lg:h-[50px] bg-white dark:bg-black rounded-lg dark:text-gray-400 text-xl font-medium-500 px-4 font-sans outline-blue-500 outline"/>

                        
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email" className="lg:h-[50px]  outline-blue-500 outline bg-white dark:bg-black rounded-lg dark:text-gray-400 text-xl font-medium-500 px-4 font-sans"/>

                    
                        <textarea type="message" placeholder="Write your message" className="lg:h-[200px] py-3 outline-blue-500 outline bg-white dark:bg-black rounded-lg dark:text-gray-400 text-xl font-medium-500 px-4 font-sans"/>

                        <button className="text-left text-white bg-blue-500 py-4 rounded-lg flex justify-center px-4">Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}