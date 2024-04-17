import Image from "next/image";
import Navbar from "./navbar/page";
import Body from "./body/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-blue-500">
      <Navbar />
      <Body />
      <p></p>
      <Footer />
    </div>
  );
}
