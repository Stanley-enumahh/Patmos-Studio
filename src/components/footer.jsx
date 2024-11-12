import Logo from "../assets/patmoslogo2.png";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function Footer() {
  function handleScrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className=" flex justify-center items-center h-[574px] md:h-[320px] bg-black text-white">
      <div className="w-[90%] flex flex-col h-[85%] md:h-[80%] justify-between">
        <div className="w-full flex flex-row justify-between items-center">
          <img src={Logo} alt="logo" className="md:w-fit w-8" />
          <FaCircleArrowUp
            onClick={handleScrollUp}
            className="text-white md:text-2xl cursor-pointer transition-all hover:scale-105 duration-150 text-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:items-center md:h-fit h-[380px] text-xs">
          <ul className="flex flex-col md:flex-row gap-5 md:gap-3 text-xs md:text-sm">
            <li>Home</li>
            <li>FAQs </li>
            <li>Services </li>
            <li>Pricing </li>
            <li>Term of services </li>
          </ul>
          <div className="flex flex-col md:text-center gap-4 md:gap-2">
            <p className="text-[#666262]">Contact us</p>
            <p>Info@email.com</p>
          </div>
          <p className="text-[#666262]">
            Copyright {new Date().getFullYear} CE All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
