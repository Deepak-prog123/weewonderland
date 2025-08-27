import Image from "next/image";
import React from "react";

const buttonName = [
  {
    name: "Toddler Play Zone",
  },
  {
    name: "Party Zone",
  },
  {
    name: "Indoor Play Zone",
  },
];

const Features = () => {
  return (
    <>
      <div className="relative pb-2 md:pb-0">
        <div className="">
          <Image
            src="/images/forth.png"
            alt="Feature Image"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
        <div className="absolute top-4 left-2 md:top-20 md:left-0 w-full">
          <Image
            src="/images/fifth.png"
            alt="Feature Image"
            width={1000}
            height={1000}
            className="w-[300px] md:w-[1200px] h-full object-cover"
            draggable="false"
          />

          <div className="absolute inset-0 left-0 md:left-8 lg:left-16 top-30 md:top-32 lg:top-110 select-none px-2 md:px-0">
            <h1 className="max-w-56 font-semibold md:font-normal md:max-w-xl lg:max-w-2xl leading-tight text-xs md:text-lg lg:text-xl xl:text-2xl md:leading-relaxed">
              Wee Wonderland Dwarka's premier kids' play area, offering a safe,
              clean, and magical space for children to explore, play, learn, and
              grow through free play and special events.
            </h1>
            <button className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl border-2 border-black rounded-full py-1 px-2 sm:px-3 mt-2 sm:mt-3 md:mt-4 cursor-pointer hover:bg-black hover:text-white transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="">
          <Image
            src="/images/frame.png"
            alt="Feature Image"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
        <div className="absolute w-full -top-3 md:-top-12">
          <Image
            src="/images/frame2.png"
            alt="Feature Image"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center sm:justify-between px-2 sm:px-4 md:px-8 lg:px-16 py-4 gap-12 sm:gap-4">
          {buttonName.map(({ name }, index) => (
            <button
              key={index}
              className="font-semibold text-white bg-gradient-to-r from-[#3401F6] to-[#E6007B] px-2 sm:px-2 md:px-4 py-1 sm:py-2 rounded-full text-xs md:text-md lg:text-xl xl:text-3xl cursor-pointer hover:scale-105 transition-transform whitespace-nowrap"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
