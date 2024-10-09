import { MdKeyboardArrowDown } from "react-icons/md";

export const HIW = () => {
  return (
    <div className="mt-5 md:mt-[80px] gap-8 md:gap-14 w-full h-fit md:h-[800px] flex flex-col justify-center items-center">
      <h1 className="font-bold">HOW IT WORKS</h1>
      <div className="w-[90%] md:w-[65%] h-[70%] flex flex-col md:flex-row justify-between gap-5">
        <div className=" flex-col px-5 w-full md:w-[50%] bg-primary-color flex items-center gap-10">
          {/* start */}
          <div className="h-[350px] md:h-[80%] relative rounded-b-xl pt-5 px-3 flex flex-col chat-shadow bg-white  w-[95%] gap-3">
            <div className=" flex flex-col gap-2 text-xs">
              <p className="text-basic-color">client's name</p>
              <div className="ml-4 bg-primary-color py-2 px-3 rounded-xl flex items-center w-[130px]">
                <p className="">Alex Martins</p>
              </div>
            </div>

            <div className=" flex flex-col gap-2 text-xs">
              <p>Client’s Contact information</p>
              <div className="ml-4 bg-primary-color py-2 px-3 rounded-xl flex items-center w-[130px]">
                <p className="">090 **** 6355 </p>
              </div>
            </div>

            <div className=" flex flex-col gap-2 text-xs">
              <p>How did you hear about our studio?</p>
              <div className="ml-4 bg-primary-color py-2 px-3 rounded-xl flex items-center w-fit">
                <p className="">
                  Quiet frankly i was informed via your social media page on
                  instagram...
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 py-4 px-2 text-xs flex flex-row items-center gap-1">
              <p className="bg-[#84B719] h-2 w-2 rounded-full"></p>
              <p>Live transcription</p>
            </div>
          </div>
          {/* end */}

          <div className="text-xs py-4 w-[95%]">
            <h1 className="font-bold">Basic Client information</h1>
            <p className="text-justify">
              Obtaining basic client information during booking on a photography
              studio's website is essential for personalizing services,
              confirming appointment details, and ensuring clear communication.
              It helps streamline scheduling, manage customer expectations, and
              provide a seamless client experience. Additionally, it enables the
              studio to build a client database for future marketing or
              follow-up purposes.
            </p>
          </div>
        </div>

        <div className="flex-col gap-4  md:w-[50%] flex items-center">
          <div className="flex flex-col w-full gap-8 items-center h-[50%] bg-primary-color">
            <div className="h-[35%] w-[90%] py-4 px-1 gap-x-4 gap-y-3 flex flex-row justify-center flex-wrap chat-shadow rounded-b-xl shadow-xl bg-white">
              <div className="w-fit gap-2 items-center flex flex-row px-3 py-1 bg-primary-color text-xs rounded-xl">
                <p className="w-2 h-2 bg-black rounded-full"></p>
                <p>Wedding</p>
              </div>
              <div className="w-fit gap-2 items-center flex flex-row px-3 py-1 bg-primary-color text-xs rounded-xl">
                <p className="w-2 h-2 border border-black rounded-full"></p>
                <p>Wedding</p>
              </div>
              <div className="w-fit gap-2 items-center flex flex-row px-3 py-1 bg-primary-color text-xs rounded-xl">
                <p className="w-2 h-2 border border-black  rounded-full"></p>
                <p>Wedding</p>
              </div>
              <div className="w-fit gap-2 items-center flex flex-row px-3 py-1 bg-primary-color text-xs rounded-xl">
                <p className="w-2 h-2 border border-black  rounded-full"></p>
                <p>Wedding</p>
              </div>
              <div className="w-fit gap-2 items-center flex flex-row px-3 py-1 bg-primary-color text-xs rounded-xl">
                <p className="w-2 h-2 border border-black  rounded-full"></p>
                <p>Wedding</p>
              </div>
            </div>
            <div className="text-xs w-[90%] flex flex-col gap-2">
              <h1 className="font-bold">Session / Event Details</h1>
              <p className="text-justify">
                Collecting session or event details when booking on our platform
                ensures that the studio can prepare the necessary equipment, set
                up the appropriate environment, and allocate the right amount of
                time for the shoot. It allows the photographer to tailor the
                session to the client's specific needs, whether it's a portrait,
                wedding, or product shoot. This information also helps in
                pricing, scheduling, and delivering the best possible
                experience.
              </p>
            </div>
          </div>
          {/* start */}
          {/*end*/}
          <div className="h-[50%] bg-primary-color justify-between items-center flex flex-col">
            <div className="w-[90%] items-center flex flex-col justify-center rounded-b-xl chat-shadow h-fit md:p-0 py-5 px-3 md:h-[40%] text-xs gap-5">
              <div className="flex flex-row justify-between items-center w-[100%] md:w-[85%]">
                <p>
                  Select the style or theme you’re envisioning for the shoot
                </p>
                <MdKeyboardArrowDown />
              </div>
              <p className="mr-[30px] font-semibold">
                Do you have any specific poses, concepts or a mood in mind?
              </p>
            </div>

            <div className="w-[90%] flex flex-col mt-8 gap-1">
              <h1 className="text-xs font-bold">
                Client Preferences and Vision
              </h1>

              <p className="text-justify text-xs pb-3">
                Obtaining client preferences and vision during booking allows
                the photography studio to align the shoot with the client's
                style, creative ideas, and specific goals. This ensures the
                final images reflect the client's desired aesthetic, whether
                it's for personal branding, artistic expression, or a commercial
                project. Understanding these preferences helps the photographer
                plan compositions, lighting, and poses, creating a more
                satisfying and personalized experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
