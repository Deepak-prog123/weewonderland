"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/images/second.png"
          alt="Feature Image"
          width={1500}
          height={1500}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/images/text.png"
          alt="Feature Image"
          width={1500}
          height={1500}
          className="w-full h-full object-cover"
        />

        <motion.div
          className="absolute inset-0 left-4 sm:left-6 md:left-8 lg:left-10 top-32 sm:top-40 md:top-32 lg:top-140"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="w-fit text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-tighter bg-[#FEE0EB] rounded-full px-3 py-1 sm:px-4 md:px-5 lg:px-7 shadow-md border border-white"
            style={{
              WebkitTextStroke: "2px #E65A3B ",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            COMES TO PLAY!
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Features;
