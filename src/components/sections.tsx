"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Sections = () => {
  return (
    <motion.section
      className="relative w-full h-[60vh] md:h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="absolute inset-0 flex justify-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/first.png"
          alt="Be Your Own Rainbow - Wee Wonderland"
          width={1500}
          height={1500}
          className="w-full h-full object-fill md:object-cover"
          priority
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-80 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20 px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="backdrop-blur-2xl border-2 bg-opacity-90 px-2 py-2 md:px-8 md:py-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-white text-sm md:text-md lg:text-3xl xl:text-4xl font-bold tracking-wide text-center">
            WELCOME TO WEE WONDERLAND
          </h1>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Sections;
