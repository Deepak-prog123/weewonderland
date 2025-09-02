"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="h-screen bg-gradient-to-b from-[#ff7b7b38] to-[#FFA7E5] relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/wee.png"
            alt="Description of the image"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Center Text/Logo */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center w-[90%] max-w-[700px] h-[200px] sm:h-[250px] md:h-[310px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/photos.png"
            alt="Text"
            fill
            className="object-contain"
            draggable={false}
          />
        </motion.div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="min-h-screen w-full relative overflow-hidden"
        style={{
          backgroundImage: "url('/gallery/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto pt-12 lg:pt-24 pb-12 px-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2 lg:gap-16 place-items-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Yellow Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-yellow-200 rounded-b-[60px] rounded-t-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/25.png"
                  alt="Children playing in colorful ball pit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Green Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-green-300 rounded-b-[60px] rounded-t-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/26.png"
                  alt="Boy in red shirt at ball pit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Blue Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-blue-400 rounded-t-[60px] rounded-b-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/27.png"
                  alt="Kids playing in ball pit area"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Red Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-red-400 rounded-t-[60px] rounded-b-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/28.png"
                  alt="Family photo with children"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="min-h-screen w-full relative overflow-hidden"
        style={{
          backgroundImage: "url('/gallery/bg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto pt-12 lg:pt-24 pb-12 px-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2 lg:gap-16 place-items-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Yellow Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-yellow-200 rounded-b-[60px] rounded-t-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/25.png"
                  alt="Children playing in colorful ball pit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Green Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-green-300 rounded-b-[60px] rounded-t-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/26.png"
                  alt="Boy in red shirt at ball pit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Blue Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-blue-400 rounded-t-[60px] rounded-b-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/27.png"
                  alt="Kids playing in ball pit area"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Red Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-red-400 rounded-t-[60px] rounded-b-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/28.png"
                  alt="Family photo with children"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="min-h-screen w-full relative overflow-hidden"
        style={{
          backgroundImage: "url('/gallery/bg2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto pt-12 lg:pt-24 pb-12 px-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2 lg:gap-16 place-items-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Yellow Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-yellow-200 rounded-b-[60px] rounded-t-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/25.png"
                  alt="Children playing in colorful ball pit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Green Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-green-300 rounded-b-[60px] rounded-t-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/26.png"
                  alt="Boy in red shirt at ball pit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Blue Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-blue-400 rounded-t-[60px] rounded-b-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/27.png"
                  alt="Kids playing in ball pit area"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Red Frame */}
          <motion.div
            className="w-full max-w-sm aspect-[5/3]"
            variants={fadeInVariants}
          >
            <div className="relative w-full h-full bg-red-400 rounded-t-[60px] rounded-b-[140px] p-4">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="/gallery/28.png"
                  alt="Family photo with children"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
