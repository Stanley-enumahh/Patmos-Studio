import { MdKeyboardArrowDown } from "react-icons/md";
import hiw1 from "../assets/HIW3.png";
import hiw2 from "../assets/HIW2.png";
import hiw3 from "../assets/HIW1.png";

const data = [
  {
    image: hiw1,
    title: "Basic Client information",
    info: "Obtaining basic client information during booking on a photography studio's website is essential for personalizing services, confirming appointment details, and ensuring clear communication.",
  },
  {
    image: hiw2,
    title: "Session/Event Details",
    info: "Collecting session or event details when booking on our platform ensures that the studio can prepare the necessary equipment, set up the appropriate environment, and allocate the right amount of time for the shoot.",
  },
  {
    image: hiw3,
    title: "Clients Preference and Vision",
    info: "Obtaining client preferences and vision during booking allows the photography studio to align the shoot with the client's style, creative ideas, and specific goals.",
  },
];

export const HIW = () => {
  return (
    <div className="mt-5 md:mt-[80px] gap-8 md:gap-14 w-full h-fit md:h-[600px]  flex flex-col justify-center items-center ">
      <h1 className="font-bold">HOW IT WORKS</h1>
      <div className="w-[90%] md:w-[80%] h-fit md:h-[90%] flex flex-col md:flex-row justify-between gap-12 items-center">
        {data.map((item, i) => (
          <Design item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

function Design({ item }) {
  return (
    <div className="md:w-[320px] w-[260px] md:h-[350px] h-[297px] relative flex justify-center rounded-md overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute w-[90%] bottom-14 md:bottom-8 flex flex-col justify-between h-[30%] gap-1 text-white">
        <h1 className="font-bold ml-2">{item.title}</h1>
        <p className="backdrop-blur-md text-xs p-2">{item.info}</p>
      </div>
    </div>
  );
}
