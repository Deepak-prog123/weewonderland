import React from "react";
import Image from "next/image";

const Sections = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <Image
          src="/images/first.png"
          alt="Be Your Own Rainbow - Wee Wonderland"
          width={1500}
          height={1500}
          className="w-full h-full object-fill md:object-cover"
          priority
          draggable="false"
        />
      </div>

      <div className="absolute bottom-80 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20 px-4 md:px-0">
        <div className="backdrop-blur-2xl border-2 bg-opacity-90 px-2 py-2 md:px-8 md:py-4 rounded-full shadow-lg">
          <h1 className="text-white text-sm md:text-md lg:text-3xl xl:text-4xl font-bold tracking-wide text-center">
            WELCOME TO WEE WONDERLAND
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Sections;
