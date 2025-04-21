import hiw1 from "../assets/hiw1-desktop.png";
import hiw2 from "../assets/hiw2-desktop.png";
import hiw3 from "../assets/hiw-desktop.png";

const data = [
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
    <div className="mt-5 md:mt-[80px] gap-8 md:gap-5 w-full h-fit mb-[70px] flex flex-col justify-center items-center md:h-screen">
      <h1 className="font-bold text-lg md:text-xl">HOW IT WORKS</h1>
      <div className="w-[90%] md:w-[60%] h-fit md:h-[90%] flex flex-col md:flex-row justify-center gap-12 md:gap-5 items-center">
        <Design1 />
        <ul className="flex flex-col h-[90%] gap-12 md:gap-5 justify-center items-center w-[80%] md:w-[50%]">
          {data.map((item, i) => (
            <li
              key={i}
              className="md:w-full xs:w-[260px] sm:w-[290px] md:h-[50%] h-[297px] relative flex justify-center rounded-[7px] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute md:text-center
       w-[95%] bottom-4 md:bottom-3 flex flex-col h-fit text-white md:backdrop-blur-lg gap-2 md:gap-0"
              >
                <h1 className="font-bold md:text-xl ml-2">{item.title}</h1>
                <p className="backdrop-blur-lg text-xs p-2">{item.info}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Design1() {
  return (
    <div className="md:w-[48%] xs:w-[260px] sm:w-[290px] md:h-[90%] h-[297px] relative flex justify-center rounded-[7px] overflow-hidden">
      <img
        src={hiw1}
        alt="Basic Client information image"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute md:text-center
       w-[95%] bottom-4 md:bottom-3 flex flex-col h-fit text-white md:backdrop-blur-lg"
      >
        <h1 className="font-bold ml-2">Basic Client information</h1>
        <p className="md:bg-transparent backdrop-blur-lg text-xs p-2">
          Obtaining basic client information during booking on a photography
          studio's website is essential for personalizing services, confirming
          appointment details, and ensuring clear communication.
        </p>
      </div>
    </div>
  );
}
