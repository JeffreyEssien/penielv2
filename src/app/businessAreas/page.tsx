import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Image from 'next/image'
import image1 from '../images/Gemini_Generated_Image (1).jpeg'
import image2 from '../images/4.jpeg'
import image3 from '../images/Gemini_Generated_Image (2).jpeg'


export default function BusinessAreas() {
    return (
        <div className="bg-white text-black dark:text-blue-500 dark:bg-black">
            <Navbar />

            <div className="my-20">
                <p className="text-center text-4xl font-bold tracking-widest">Our Services</p>
            </div>

            <div className="flex flex-col lg:w-[80%] lg:mx-auto h-auto">
                <div className="flex flex-col lg:flex-row lg:h-[300px] lg:overflow-hidden lg:justify-around my-10">
                    <Image src={image1} alt="image 1" width={700} className="lg:h-[700px] px-4 hidden lg:flex" />
                    <div className="flex flex-col items-center py-10">
                        <p className="text-3xl font-medium flex flex-col lg:w-[80%] mx-auto text-blue-500">e-Government Solutions</p>
                        <p className="w-[80%] mx-auto text-xl py-3 dark:text-gray-500">Streamline your workflows and boost efficiency with our automated software solutions. We can automate repetitive tasks, improve data accuracy, and free your team to focus on more strategic initiatives.</p>
                        <button className="bg-blue-500 rounded-lg w-[80%] mx-auto px-3 py-3">
                            <p className="text-white text-xl">View more</p>
                        </button>
                    </div>
                    <Image src={image1} alt="image 1" width={700} className="lg:h-[700px] px-8 lg:hidden flex" />
                </div>
                <div className="flex flex-col lg:flex-row h-auto lg:h-[400px] lg:overflow-hidden lg:justify-around my-10 w-[96%] mx-auto">
                    <div className="flex flex-col py-20">
                        <p className="text-3xl font-medium flex flex-col lg:w-[80%]  text-blue-500">Software Automations</p>
                        <p className="w-[80%] text-xl py-3 dark:text-gray-500">Tired of tedious tasks slowing you down? Our software automation services are here to revolutionize your operations. We can automate repetitive processes, improve data accuracy, and free up your valuable resources to focus on what truly matters - strategic growth and innovation.</p>
                        <button className="bg-blue-500 rounded-lg w-[80%] lg:mx-0 mx-auto px-3 py-3">
                            <p className="text-white text-xl">View more</p>
                        </button>
                    </div>
                    <Image src={image2} alt="image 2" width={2000} className="px-4 lg:h-[500px]"/>
                </div>
                <div className="flex flex-col lg:flex-row lg:h-[300px] h-auto pb-20 lg:overflow-hidden lg:justify-around my-10 w-[96%] mx-auto">
                    <Image src={image3} alt="image 3" width={700} className="hidden lg:flex "/>
                    <div className="flex flex-col py-10">
                        <p className="text-3xl font-medium flex flex-col w-[80%] mx-auto text-blue-500">e-Commerce Application Development</p>
                        <p className="w-[80%] mx-auto text-xl py-3  dark:text-gray-500">Take your business online with a powerful and scalable e-commerce platform. We develop custom e-commerce applications to streamline your sales process and maximize your online revenue.</p>
                        <button className="bg-blue-500 rounded-lg w-[80%] mx-auto  px-3 py-3">
                            <p className="text-white text-xl">View more</p>
                        </button>
                    </div>
                    <Image src={image3} alt="image 3" width={700} className="lg:hidden "/>
                </div>

            </div>

            <Footer />
        </div>
    )
}