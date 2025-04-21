import { IoMdAddCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Questions = [
  {
    question: "What types of photography services do you offer?",
  },
  {
    question: "How do I book a session?",
  },
  {
    question: "What should I wear for my photoshoot?",
  },
  {
    question: "How long will it take to receive my photos?",
  },
  {
    question: "Do you offer any packages or discounts?",
  },
];

export default function FAQS() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "80px", scale: 0.2 }}
      whileInView={{ opacity: 1, x: "0px", scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-[400px] md:h-[450px] flex flex-col gap-7 md:gap-14 w-full items-center"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl font-semibold md:text-3xl md:font-bold">FAQs</h1>
        <p className="text-xs">Common questions you may have</p>
      </div>

      <div className="w-full justify-center items-center flex">
        <div className="flex flex-col gap-4 w-[90%] md:w-[50%]">
          {Questions.map((item, i) => (
            <FaqObj item={item} key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export const FaqObj = ({ item }) => {
  return (
    <div className="w-full justify-between flex-row flex items-center  cursor-pointer">
      <div className="flex flex-row px-4 w-[93%] rounded-md py-2 gap-2 bg-[#F9F9F9]">
        <p className="text-xs md:text-sm">{item.question}</p>
      </div>
      <IoMdAddCircleOutline className="text-sm" />
    </div>
  );
};
