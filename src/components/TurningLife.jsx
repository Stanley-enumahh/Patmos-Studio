import Section1 from "../assets/-1586399874.png";
import sectionMobile from "../assets/-1586399874 (1).png";
import camera from "../assets/icons8-camera-100 1.png";
import keys from "../assets/icons8-lease-100 1.png";
import video from "../assets/icons8-video-trimming-100 1.png";
import fashion from "../assets/icons8-fashion-model-100 1.png";
import print from "../assets/icons8-print-100 (1) 1.png";
import drone from "../assets/icons8-drone-100 (1) 1.png";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";

const container = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemV = {
  hidden: { opacity: 0, y: "-100px" },
  show: { opacity: 1, y: "0px" },
};

export default function TurningLifeSection() {
  return (
    <div className="w-full h-fit md:h-screen md:mb-0 mb-8 flex flex-col items-center justify-center md:mt-0 mt-[60px]">
      <div className="w-[90%] md:w-[80%] h-[70%] justify-center items-center flex flex-col gap-5">
        <h1 className="text-center text-xl md:text-2xl font-semibold">
          Turning Life’s Best <span className="text-[#737070]">Memories</span>{" "}
          <br className="md:flex hidden" /> into{" "}
          <span className="text-[#737070]">Timeless </span>
          Art
        </h1>
        <div className=" relative">
          <img src={Section1} alt="" className="md:flex hidden object-cover" />
          <motion.img
            initial={{ opacity: 0, y: "80px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1 }}
            src={sectionMobile}
            alt=""
            className="flex md:hidden object-cover"
          />
          <span className="absolute w-full h-full flex items-center justify-center  top-0 left-0">
            <span className="p-2 md:p-4 cursor-pointer bg-white w-fit rounded-full flex justify-center items-center">
              <FaPlay size={20} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export const Services = () => {
  return (
    <div className="w-full h-fit flex items-center justify-center mt-[80px]">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-[90%] gap-6 flex flex-col md:flex-row flex-wrap justify-center items-center "
      >
        {ServicesData.map((service, index) => (
          <motion.li
            variants={itemV}
            key={index}
            className="w-[300px] md:w-[350px] h-fit md:h-[290px] p-7 md:p-5 gap-6 flex flex-col justify-center items-center hover:border transition-all cursor-pointer duration-200"
          >
            <img
              src={service.image}
              alt={service.title}
              className="md:w-fit w-[35px]"
            />
            <div className="text-sm flex flex-col gap-2 md:items-start items-center">
              <h1 className="font-bold">{service.title}</h1>
              <p className="md:text-start text-center text-xs md:text-sm">
                {service.info}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

const ServicesData = [
  {
    image: camera,
    title: "Photo Restoration and Editing",
    info: "Photo restoration and editing revitalizes old, damaged photos by repairing imperfections, enhancing clarity, and preserving cherished memories",
  },
  {
    image: keys,
    title: "Studio Rentals",
    info: "Providing fully equipped photography studios with professional lighting, backdrops, and props, perfect for shoots, video productions, or creative projects.",
  },
  {
    image: video,
    title: "Video Services",
    info: "Offering professional video production, from filming to editing, to create high-quality videos for events, commercials, or personal projects.",
  },
  {
    image: print,
    title: "Printing and Album Creation",
    info: "Providing custom photo printing and beautifully designed albums to showcase and preserve your memories in physical form.",
  },
  {
    image: fashion,
    title: "Model Portfolio Development",
    info: " Crafting polished model portfolios with professional photography, styling, and editing to help models stand out in the industry.",
  },
  {
    image: drone,
    title: "Drone Photography",
    info: " Delivering stunning aerial shots and videos using drone technology for unique perspectives on landscapes, events, and real estate.",
  },
];
