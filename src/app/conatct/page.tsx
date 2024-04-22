"use client"

import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { useState } from "react";

export default function Contact() {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `mailto:solomonilegar@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  };

  return (
    <div className="bg-white text-black dark:bg-black dark:text-blue-500">
      <Navbar />
      <p className="text-center text-5xl py-20 font-black tracking-widest">Contact</p>
      <div className="flex flex-col lg:flex-row lg:w-[85%] lg:justify-around mx-auto">
        <div className="flex flex-col lg:w-[40%]">
          <p className="text-3xl xl:text-4xl font-bold w-[80%] mx-auto">Get In Touch</p>
          <p className="dark:text-gray-500 text-lg w-[80%] mx-auto xl:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis atque
            maiores, at deleniti tenetur iure quisquam nam soluta voluptatem
            voluptate eaque earum aliquam, explicabo vero quas aliquid maxime
            hic. Labore?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 xl:w-[50%] w-[80%] mx-auto pt-10">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Your Name"
        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Your Email"
        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
      />
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Your Message"
        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
      />
      <button
        type="submit"
        className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
      >
        Send Message
      </button>
    </form>

        </div>
      <Footer />
    </div>
  );
}