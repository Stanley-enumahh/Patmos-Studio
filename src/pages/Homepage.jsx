import { Navbar } from "../components/Navbar";
import { useState } from "react";
import BG from "../assets/Premium PSD _ Shadow of tropical leaves on a wall.png";
import BGmobile from "../assets/heromobile.png";
import HeroImage1 from "../assets/Patmoshero1.png";
import HeroImage2 from "../assets/Patmoshero2.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import FilmIcon from "../assets/icons8-short-film-100 1.png";
import USBIcon from "../assets/icons8-usb-drive-100 1.png";
import { HIW } from "../components/HowItWorks";
import TurningLifeSection from "../components/TurningLife";
import { Services } from "../components/TurningLife";
import { Pricing } from "../components/pricing";
import Reviews from "../components/reviews";
import FAQS from "../components/faqs";
import Story from "../components/story";
import Pix from "../components/Pix";
import { Footerr } from "../components/footer";

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`w-full relative flex-col h-fit`}>
      <Tab isOpen={isOpen} handleIsOpen={handleIsOpen} />
      <Navbar onIsOpen={handleIsOpen} isOpen={isOpen} />
      <Hero1 />
      <HIW />
      <TurningLifeSection />
      <Services />
      <Pricing />
      <Reviews />
      <FAQS />
      <Story />
      <Pix />
      <Footerr />
    </div>
  );
}

const Hero1 = () => {
  return (
    <div className=" relative h-screen md:h-[1000px] w-full  flex flex-col overflow-hidden justify-end ">
      <img
        src={BG}
        alt=""
        className="h-full hidden md:flex z-10 w-full object-fill absolute top-0 left-0"
      />
      <img
        src={BGmobile}
        alt=""
        className="h-full md:hidden flex z-10 w-full object-fill absolute top-0 left-0"
      />
      <HeroContent />
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="h-full relative z-20 w-full flex justify-center items-center">
      <div className="h-full w-full flex-col flex justify-start items-center gap-[60px] md:gap-[90px]">
        {/* images  start*/}
        <div className=" w-full h-[30%] md:h-fit flex justify-center items-center relative md:mt-[170px] mt-[150px]">
          <div className="h-[160px] md:h-[270px] w-[118px] md:w-[200px] bg-white rounded-2xl mr-[80px] overflow-hidden flex flex-col md:gap-4 gap-3 heroImage">
            <img
              src={HeroImage1}
              alt=""
              className="h-[130px] md:h-[221px] w-full object-cover"
            />
            <div className="flex flex-row gap-3 w-full px-2">
              <p className="bg-[#EC0402] w-[11px] h-[11px] md:w-[19px] md:h-[19px] rounded-full"></p>
              <span className="flex flex-col gap-1 md:gap-2">
                <p className="bg-[#F5F5F5] w-[59px] md:w-[100px] h-[4px] md:h-[6px] rounded-lg"></p>
                <p className="bg-[#F5F5F5] w-[33px] md:w-[57px] h-[4px] md:h-[6px] rounded-lg"></p>
              </span>
            </div>
          </div>
        </div>
        <div className="md:h-[194px] w-[97px] h-[115px] md:w-[164px] bg-white p-[2px] rounded-lg absolute md:top-[315px] top-[35%] left-[49%] md:left-[691px] shadow-xl heroImage">
          <img src={HeroImage2} alt="" className="h-full w-full object-cover" />
        </div>
        {/* images  end*/}
        {/* text start */}
        <div className=" w-[95%] md:w-[50%] flex flex-col items-center justify-center text-center md:gap-3 ">
          <h1 className="text-xl md:text-4xl font-bold text-[#737070]">
            <span className="text-black text-nowrap"> Your Moments,</span>{" "}
            <br /> Our Masterpieces in Every Frame.
          </h1>
          <p className="text-xs md:font-semibold">
            Easily browse our availability and book your session in just few
            clicks, with exclusive deals waiting for you. Get instant
            confirmation and secure your spot hassle free{" "}
          </p>
          <button className="mt-6 md:mt-4 rounded-3xl flex flex-row items-center gap-3 justify-center w-[145px] md:w-[161px] h-[41px] bg-black text-white text-sm">
            Get started <MdKeyboardArrowRight />
          </button>
        </div>

        <div className="h-[50px] w-[85%] md:w-[530px] absolute bottom-0 hero-icon-section bg-white flex flex-row justify-around px-2">
          <div className="w-[160px] items-center justify-between gap-3 flex flex-row">
            <img src={FilmIcon} alt="" className="w-[25px] md:w-fit" />
            <p className="text-xs md:font-semibold">
              Professionally{" "}
              <span className="md:font-bold">Developed Film</span>
            </p>
          </div>
          <div className="w-[150px] items-center justify-center gap-2 flex flex-row">
            <img src={USBIcon} alt="" className="w-[25px] md:w-fit" />
            <p className="text-xs md:font-semibold">
              Optional Photo <br />
              <span className="md:font-bold">USB Drive</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ isOpen, handleIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "overlay flex" : " hidden "
      } w-full h-full z-50 absolute bg-opacity-5 duration-200 transition-all justify-end md:hidden`}
    >
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } mt-[55px]  mr-[30px] w-[156px] flex justify-center duration-200 transition-all items-center h-fit bg-white p-5 fixed`}
      >
        <ul className="flex flex-col gap-3 text-center ">
          <li onClick={handleIsOpen} className="border-b">
            Portfolio
          </li>
          <li onClick={handleIsOpen} className="border-b">
            Services
          </li>
          <li onClick={handleIsOpen} className="border-b">
            Contact us
          </li>
          <li onClick={handleIsOpen} className="border-b">
            FAQs
          </li>
          <li onClick={handleIsOpen} className="border-b">
            Sign in
          </li>
        </ul>
      </div>
    </div>
  );
};
