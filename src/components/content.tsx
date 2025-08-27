import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <>
      <div className="relative">
        <div className="">
          <Image
            src="/images/frame3.png"
            alt="Feature Image"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
        <div className="absolute top-1 w-full flex justify-center">
          <Image
            src="/images/text1.png"
            alt="Feature Image"
            width={1000}
            height={1000}
            className="w-[300px] md:w-[800px] h-full object-cover border-4 rounded-full border-white"
            draggable="false"
          />
        </div>
        <div className="absolute top-24 md:top-44 lg:top-96 w-full flex justify-center">
          <Image
            src="/images/wee.png"
            alt="Feature Image"
            width={1000}
            height={1000}
            className="w-[300px] md:w-[400px] lg:w-[800px] h-full object-cover"
            draggable="false"
          />
        </div>
      </div>

      <div className="relative pb-2 md:pb-0">
        <div className="">
          <Image
            src="/images/shower.png"
            alt="Feature Image"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
        <div className="absolute top-1 w-full flex justify-center">
          <Image
            src="/images/text2.png"
            alt="Feature Image"
            width={1000}
            height={1000}
            className="w-[300px] md:w-[800px] h-full object-cover"
            draggable="false"
          />
        </div>
      </div>
    </>
  );
};

export default Content;
