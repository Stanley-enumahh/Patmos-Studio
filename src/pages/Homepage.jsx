import { Navbar } from "../components/Navbar";
import BG from "../assets/Premium PSD _ Shadow of tropical leaves on a wall.png";
import HeroImage1 from "../assets/Patmoshero1.png";
import HeroImage2 from "../assets/Patmoshero2.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import FilmIcon from "../assets/icons8-short-film-100 1.png";
import USBIcon from "../assets/icons8-usb-drive-100 1.png";

export default function Homepage() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Hero1 />
    </div>
  );
}

const Hero1 = () => {
  return (
    <div className="Hero1 relative h-screen md:h-[1000px] w-full  flex flex-col overflow-hidden justify-end ">
      <img
        src={BG}
        alt=""
        className="h-full z-10 w-full object-fill absolute top-0 left-0"
      />
      <HeroContent />
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="h-[100%] relative z-50 w-full flex justify-center items-center">
      <div className="h-full w-full flex-col flex  justify-center items-center gap-[70px] md:gap-[90px]">
        {/* images  start*/}
        <div className=" w-full h-[40%] md:h-fit flex justify-center items-center relative">
          <div className="h-[245px] md:h-[270px] w-[180px] md:w-[200px] bg-white rounded-2xl mr-[80px] overflow-hidden flex flex-col gap-4">
            <img
              src={HeroImage1}
              alt=""
              className="h-[200px] md:h-[221px] w-full object-cover"
            />
            <div className="flex flex-row gap-3 w-full px-5">
              <p className="bg-[#EC0402] w-[19px] h-[19px] rounded-full"></p>
              <span className="flex flex-col gap-2">
                <p className="bg-[#F5F5F5] w-[100px] h-[6px] rounded-lg"></p>
                <p className="bg-[#F5F5F5] w-[57px] h-[6px] rounded-lg"></p>
              </span>
            </div>
          </div>
        </div>
        <div className="md:h-[194px] w-[140px] h-[170px] md:w-[164px] bg-white p-[2px] rounded-lg absolute md:top-[360px] top-[34%] left-[52%] md:left-[730px]">
          <img src={HeroImage2} alt="" className="h-full w-full object-cover" />
        </div>
        {/* images  end*/}
        {/* text start */}
        <div className=" w-[100%] md:w-[50%] flex flex-col items-center justify-center text-center md:gap-3">
          <h1 className="text-2xl md:text-4xl font-bold text-[#737070]">
            <span className="text-black text-nowrap"> Your Moments,</span>{" "}
            <br /> Our Masterpieces in Every Frame.
          </h1>
          <p className="text-xs font-semibold">
            Easily browse our availability and book your session in just few
            clicks, with exclusive deals waiting for you. Get instant
            confirmation and secure your spot hassle free{" "}
          </p>
          <button className="mt-6 md:mt-4 rounded-3xl flex flex-row items-center gap-3 justify-center w-[145px] md:w-[161px] h-[41px] bg-black text-white text-sm">
            Get started <MdKeyboardArrowRight />
          </button>
        </div>

        <div className="h-[50px] w-[85%] md:w-[530px] absolute bottom-0 hero-icon-section bg-white flex flex-row justify-around">
          <div className="w-[160px] items-center justify-between gap-3 flex flex-row">
            <img src={FilmIcon} alt="" />
            <p className="text-xs font-semibold">
              Professionally <span className="font-bold">Developed Film</span>{" "}
            </p>
          </div>
          <div className="w-[150px] items-center justify-center gap-2 flex flex-row">
            <img src={USBIcon} alt="" />
            <p className="text-xs font-semibold">
              Optional Photo <br />
              <span className="font-bold">USB Drive</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
