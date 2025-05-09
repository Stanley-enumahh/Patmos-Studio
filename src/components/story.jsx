import BG from "../assets/bg.png";
import BGmobile from "../assets/storymobile.png";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <div className="hero1 h-[600px] relative w-full justify-center items-center gap-3 flex">
      <motion.div
        initial={{ opacity: 0, y: "120px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 2 }}
        className="z-20 flex flex-col gap-5 md:gap-8 justify-center font-bold text-center "
      >
        <h1 className="text-xl md:text-4xl">
          Where Every
          <span className="text-[#737070]"> Shot </span> <br /> Tells Your
          <span className="text-[#737070]"> Story </span>
        </h1>
        <div className="w-full flex justify-center flex-row">
          <button className="bg-black text-xs rounded-[22px] px-8 py-2 w-fit text-white ">
            Gallery
          </button>
        </div>
      </motion.div>
      <img
        src={BG}
        alt=""
        className="h-full md:flex hidden z-10 w-full object-cover absolute top-0 left-0"
      />
      <img
        src={BGmobile}
        alt=""
        className="h-full md:hidden flex z-10 w-full object-cover absolute top-0 left-0"
      />
    </div>
  );
}
