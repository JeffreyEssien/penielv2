import Navbar from "../navbar/page";
import Image from "next/image";
import image1 from '../images/happycustomer.jpg'
import image2 from '../images/coinarrow.jpg'
import image3 from '../images/groupexplain.jpg'
import Footer from "../footer/page";

export default function About() {
    return(
        <div className="bg-white text-black dark:text-blue-500 dark:bg-black">
            <Navbar />

            
            <div className="my-20">
                <p className="tracking-widest text-5xl font-bold text-center">About Us</p>
                <p className="text-center -text-2xl font-medium py-5 w-[70%] mx-auto">Friendship, Respect, Innovation, Quality, Sustainability</p>
            </div>

            <div className="pb-40">
                <div className="px-4 flex flex-col lg:flex-row lg:w-[79%] lg:mx-auto items-center">
                    <div className="lg:w-[40%] flex-col">
                    <p className="text-3xl py-2 font-medium">Our Mission</p>
                    <p className="lg:w-[70%] text-xl xl:text-2xl pb-10 dark:text-gray-500">To provide first rate and highly reliable software solutions that ease client’s daily computable tasks with utmost attention to satisfaction.</p>

                    <div className="hidden lg:flex flex-col ">
                        <p className="text-3xl py-2 font-medium">Our Vision</p>
                        <p className="xl:w-[70%] text-2xl pb-10 dark:text-gray-500">Empowering clients with sustainable competitive advantage by providing innovative business software solutions and excellent services within cost effective bottom-line.</p>
                    </div>
                    <div className="hidden lg:flex lg:flex-col">
                        <p className="text-3xl py-2 font-medium">Our Motto</p>
                        <p className="lg:w-[70%] text-2xl pb-10 dark:text-gray-500">Innovation. Value. Satisfaction</p>
                    </div>
                    </div>

                    <div className="px-2 xl:w-[60%] flex justify-center py-3">
                    <Image src={image1} alt="image" width={450} className="xl:h-[600px] "/>
                    <div className="hidden xl:flex xl:flex-col">
                    <Image src={image2} alt="image 2" width={500} className="xl:h-[300px]"/>
                    <Image src={image3} alt="image 3" width={500} className="xl:h-[300px]"/>
                    </div>
                    </div>
                </div>
                <div className="px-4 lg:hidden mt-10">
                    <p className="text-4xl py-2 font-medium">Our Vision</p>
                    <p className="xl:w-[70%] text-xl xl:text-2xl pb-10 dark:text-gray-500">Empowering clients with sustainable competitive advantage by providing innovative business software solutions and excellent services within cost effective bottom-line.</p>
                    <Image src={image2} alt="image 2" />
                </div>
                <div className="flex flex-col px-4 lg:hidden mt-10">
                    <p className="text-3xl py-2 font-medium">Our Motto</p>
                    <p className="lg:w-[70%] text-xl xl:text-2xl pb-10 dark:text-gray-500">Innovation. Value. Satisfaction</p>
                    <Image src={image3} alt="image 3" />
                </div>
            </div>
            <Footer />
        </div>
    )
}