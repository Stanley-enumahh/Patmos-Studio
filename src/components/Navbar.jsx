import Logo from "../assets//patmos logo.png";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="w-full bg-transparent h-fit py-6 md:py-4 flex justify-center fixed top-0 left-0">
      <div className="w-[85%] md:w-[80%] flex flex-row justify-between">
        <div>
          <img
            src={Logo}
            className="w-[38px] md:w-[58px] h-[35px] md:h-[58px]"
          />
        </div>
        <div className=" bg-basic-color w-fit box p-1 flex flex-row h-[30px] md:h-[45px] rounded-3xl items-center justify-between md:w-[161px]">
          <div className="md:pl-3 pl-1 burger">
            <FaBars className="font-sold cursor-pointer" />
          </div>
          <button className="bg-black text-sm text-white flex justify-center items-center h-[24px] md:h-[39px] w-[53px] md:w-[109px] rounded-3xl">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
