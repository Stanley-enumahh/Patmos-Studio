export const Pricing = () => {
  return (
    <div className="w-full flex justify-center h-fit">
      <div className="w-[80%] md:w-[76%] h-fit flex flex-col gap-8 mt-[40px] mb-[60px]">
        <div className="flex flex-col gap-1 w-full text-center">
          <h1 className="text-3xl font-semibold">Pricing</h1>
          <p className="md:text-xs text-sm">
            Get started today, we offer competitive rates with no hidden fees.
          </p>
        </div>
        <div className=" flex flex-col gap-8 md:gap-0 items-center md:flex-row justify-between md:items-start">
          {data.map((item, i) => (
            <Package item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Package({ item }) {
  return (
    <div
      className={`w-[100%] md:w-[330px] ${
        item.category
          ? "bg-[#000] text-white h-[392px]"
          : "bg-[#F9F9F9] text-black h-[347px]"
      }  flex flex-col rounded-[10px] p-4 justify-between`}
    >
      <div
        className={`bg-[#fff] ${
          item.category
            ? "bg-[#4b4a4a] text-white  h-[236px]"
            : "bg-[#F9F9F9]  h-[219px] text-black"
        }  flex flex-col gap-10 w-full p-3 rounded-[10px]`}
      >
        <div className="flex flex-col gap-3">
          <p className="text-sm">{item.name}</p>
          <h3 className="font-semibold text-sm">{item.info}</h3>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-xl font-semibold">
            <span className="text-sm ">N </span>
            {item.price}
          </h2>
          <button
            className={`${
              item.category ? "bg-white text-black" : "bg-black text-white"
            }
               cursor-pointer rounded-[22px] text-xs px-6 py-3 `}
          >
            Get started
          </button>
        </div>
      </div>

      <div className="w-full  p-3">
        <ul className="flex flex-col gap-2">
          <li className="text-xs md:text-sm">{item.l1}</li>
          <li className="text-xs md:text-sm">{item.l2}</li>
          <li className="text-xs md:text-sm">{item.l3}</li>
        </ul>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Basic Package",
    info: "Ideal for Quick portrait sessions, headshots or small events.",
    price: "10,500.99",
    l1: "30-Minutes session",
    l2: "5 High resolution edited images",
    l3: "Digital download",
  },
  {
    name: "Premium Package",
    category: "preminum",
    info: "Ideal for Weddings, Corporate events or large-scale sessions.",
    price: "75,500.99",
    l1: "2-hour session",
    l2: "30 High resolution edited images",
    l3: "Digital download, Photo album and 2 large prints (16x20)",
  },
  {
    name: "Standard Package",
    info: "Ideal for family portraits, engagements shoots or medium-sized events. ",
    price: "25,500.99",
    l1: "1-hour session",
    l2: "15 High resolution edited images",
    l3: "Digital download + 1 print (8x10)",
  },
];
