"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const servicesData = [
  {
    title: "Indoor Play Area",
    description:
      "Wee Wonderland features a comprehensive indoor play area that provides a safe and encouraging environment for children to explore, play, and learn through structured activities and free play.",
    buttonText: "Read more",
    bgColor: "bg-[#F8BA32]",
    image: "/images/services/1.png",
    position: "right",
  },
  {
    title: "Party Zone",
    description:
      "Wee Wonderland specializes in creating unforgettable birthday parties and special events with customized themes and fascinating decorations.",
    buttonText: "Read more",
    bgColor: "bg-[#6BAD6A]",
    image: "/images/services/2.png",
    position: "left",
  },
  {
    title: "Habit Building",
    description:
      "The Activity Zones creates a positive environment that fosters imagination and creative art. We also have toy play areas for children to participate in structured play and activity using toys.",
    buttonText: "Read more",
    bgColor: "bg-[#4155A6]",
    image: "/images/services/3.png",
    position: "right",
  },
  {
    title: "WEE Cafe",
    description:
      "You can try available snacks as a wide range for scrumptious dining from across the globe for both the children and parents accompanying them.",
    buttonText: "Read more",
    bgColor: "bg-[#DA413D]",
    image: "/images/services/4.png",
    position: "left",
  },
  {
    title: "TODDLER PLAY ZONE",
    description:
      "At wee wonderland we make sure that the little ones have a great time, while they learn through various activities they also enjoy rides. The soft play area of the Arena keeps the parents stress free as it gives the children liberty to explore under the supervision of our well trained staff.",
    buttonText: "Read more",
    bgColor: "bg-[#A32F88]",
    image: "/images/services/5.png",
    position: "right",
  },
  {
    title: "BOOK CLUB",
    description:
      "Want to encourage them to read and explore new books together? Then come along and join our Zoh's Book Club for Kids! Each week we hand pick a fun theme for your kids to do together, a featured book, and put together a week's plan of simple activities to play, learn and create with.",
    buttonText: "Read more",
    bgColor: "bg-[#199B67]",
    image: "/images/services/6.png",
    position: "left",
  },
];

const page = () => {
  return (
    <div
      className="bg-[#FEFFEB] min-h-screen py-16"
      style={{ backgroundImage: "url('/images/frame5.png')" }}
    >
      <div className="flex flex-col gap-8 items-center max-w-7xl mx-auto">
        {servicesData.map(
          (
            { bgColor, buttonText, description, image, position, title },
            idx
          ) => (
            <div
              key={idx}
              className={`w-full flex flex-col md:flex-row items-center justify-center gap-4 px-2 ${
                position === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card Section */}
              <div
                className={cn(
                  `flex-1 w-full max-w-xl ${bgColor} p-4 sm:p-6 md:p-8 shadow-xl flex flex-col justify-center min-h-[220px] sm:min-h-[280px] md:min-h-[340px]`,
                  position === "left"
                    ? "rounded-tr-[100px] md:rounded-tr-[150px] rounded-tl-[50px] rounded-b-[50px]"
                    : "rounded-tl-[100px] md:rounded-tl-[150px] rounded-tr-[50px] rounded-b-[50px]"
                )}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg text-center">
                  {title}
                </h2>
                <p className="text-base sm:text-lg text-center md:text-left md:text-xl text-white mb-4 sm:mb-6 leading-relaxed">
                  {description}
                </p>
                <button className="bg-white text-[#F8BA32] font-semibold px-4 sm:px-6 py-2 rounded-full border border-[#F8BA32] shadow hover:bg-[#fff7e0] transition-colors w-fit text-base sm:text-lg">
                  {buttonText}
                </button>
              </div>
              {/* Image Section */}
              <div className="flex-1 flex items-center justify-center">
                <div className="rounded-[40px] sm:rounded-[60px] bg-[#FEFFEB] p-1 sm:p-2 shadow-xl flex items-center justify-center aspect-square w-full max-w-[220px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px]">
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="rounded-[30px] sm:rounded-[50px] object-cover w-full h-full"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default page;
