import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <div className="w-full flex justify-center h-fit">
      <div className="w-[80%] md:w-[76%] h-fit flex flex-col gap-8 mt-[40px] md:mb-[60px] mb-[30px]">
        <div className="flex flex-col gap-1 w-full text-center">
          <h1 className="text-xl md:text-3xl font-semibold">Pricing</h1>
          <p className="md:text-xs text-sm">
            Get started today, we offer competitive rates with no hidden fees.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "120px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 md:gap-0 items-center md:flex-row justify-between md:items-start"
        >
          <Package
            name="Basic Package"
            info="Ideal for Quick portrait sessions, headshots or small events."
            price="10,500.99"
            l1="30-Minutes session"
            l2="5 High resolution edited images"
            l3="Digital download"
          />
          <StandardPackage />
          <Package
            name="Standard Package"
            info="Ideal for family portraits, engagements shoots or medium-sized events."
            price="25,500.99"
            l1="1-hour session"
            l2="15 High resolution edited images"
            l3="Digital download + 1 printed photo (8x10)"
          />
        </motion.div>
      </div>
    </div>
  );
};

function Package({ name, info, price, l1, l2, l3 }) {
  return (
    <div
      className="w-[100%] hover:scale-105 transition-all duration-200 md:w-[330px] bg-[#F9F9F9] text-black h-[347px]
       flex flex-col rounded-[10px] p-4 justify-between"
    >
      <div
        className=" bg-[#fff] h-[219px] text-black
      flex flex-col gap-10 w-full p-3 rounded-[10px]"
      >
        <div className="flex flex-col gap-3">
          <p className="text-sm">{name}</p>
          <h3 className="font-semibold text-sm">{info}</h3>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-xl font-semibold">
            <span className="text-sm ">N </span>
            {price}
          </h2>
          <button className="bg-black hover:bg-gray-500 transition-all duration-200 text-white cursor-pointer rounded-[22px] text-xs px-6 py-3">
            Get started
          </button>
        </div>
      </div>

      <div className="w-full  p-3">
        <ul className="flex flex-col gap-2 ">
          <li className="text-xs items-center md:text-xs flex flex-row gap-2">
            <GoDotFill /> {l1}
          </li>
          <li className="text-xs items-center md:text-xs flex flex-row gap-2">
            <GoDotFill />
            {l2}
          </li>
          <li className="text-xs items-center md:text-xs flex flex-row gap-2">
            <GoDotFill />
            {l3}
          </li>
        </ul>
      </div>
    </div>
  );
}

function StandardPackage() {
  return (
    <div
      className="w-[100%] bg-black hover:scale-105 transition-all duration-200 text-white md:w-[330px] h-[392px]
       flex flex-col rounded-[10px] p-4 justify-between"
    >
      <div
        className="bg-[#343434] h-[236px]
      flex flex-col gap-10 w-full p-3 rounded-[10px]"
      >
        <div className="flex flex-col gap-3">
          <p className="text-sm">Premium Package</p>
          <h3 className="font-semibold text-sm">
            Ideal for Weddings, Corporate events or large-scale sessions.
          </h3>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-xl font-semibold">
            <span className="text-sm ">N </span>
            75,500.99
          </h2>
          <button className="bg-white hover:bg-gray-700 hover:text-white transition-all duration-200 text-black cursor-pointer rounded-[22px] text-xs px-6 py-3">
            Get started
          </button>
        </div>
      </div>

      <div className="w-full  p-3">
        <ul className="flex flex-col gap-2">
          <li className="text-xs items-center md:text-xs flex flex-row gap-2">
            <GoDotFill /> 2-hour session
          </li>
          <li className="text-xs items-center md:text-xs flex flex-row gap-2">
            <GoDotFill /> 30 High resolution edited images
          </li>
          <li className="text-xs items-center md:text-xs flex flex-row gap-2">
            <GoDotFill /> Digital download, Photo album and 2 large prints
            (16x20)
          </li>
        </ul>
      </div>
    </div>
  );
}
