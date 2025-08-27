import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="relative">
      <div className="">
        <Image
          src="/images/second.png"
          alt="Feature Image"
          width={1500}
          height={1500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full">
        <Image
          src="/images/text.png"
          alt="Feature Image"
          width={1500}
          height={1500}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 left-4 sm:left-6 md:left-8 lg:left-10 top-32 sm:top-40 md:top-32 lg:top-140">
          <h1
            className="w-fit text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-tighter bg-[#FEE0EB] rounded-full px-3 py-1 sm:px-4 md:px-5 lg:px-7 shadow-md border border-white"
            style={{
              WebkitTextStroke: "2px #E65A3B ",
            }}
          >
            COMES TO PLAY!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
