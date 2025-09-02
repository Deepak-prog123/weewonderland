"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Contact Form Submission from Wee Wonderland";
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:wonderlandwee@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <motion.div
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/frame4.png"
          alt="Contact Background"
          width={1500}
          height={1500}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>

      <motion.div
        className="absolute top-18 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full flex justify-center">
          <Image
            src="/images/contact-us.png"
            alt="Feature Image"
            width={1500}
            height={1500}
            className="w-full max-w-[600px] h-[100px] md:h-[180px] object-contain border-2 rounded-full backdrop-blur-xl shadow-lg"
            draggable="false"
            priority
          />
        </div>
      </motion.div>

      <div className="relative z-10 flex items-center justify-center  px-4 pb-18 pt-80">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center">
          <motion.div
            className="bg-[#8BC34A] bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 w-full lg:w-1/2 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-700 placeholder-gray-500 bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-700 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-700 placeholder-gray-500 bg-white"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-700 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-700 placeholder-gray-500 bg-white resize-none"
              ></textarea>

              {/* Send Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#E91E63] hover:bg-[#C2185B] text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg cursor-pointer"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Side - Contact Information */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Email Card */}
            <motion.div
              className="bg-[#4CAF50] rounded-b-[150px] rounded-t-[350px] p-6 text-white shadow-xl text-center border-2 border-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-4 mb-2">
                <Mail className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Our Email</h3>
              </div>
              <p className="text-lg font-medium">WONDERLANDWEE@GMAIL.COM</p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="bg-[#4CAF50] rounded-b-[150px] rounded-t-[350px] p-6 text-white shadow-xl text-center border-2 border-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-4 mb-2">
                <MapPin className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Location</h3>
              </div>
              <p className="text-lg font-medium">SECTOR-12A RD, BESIDE</p>
              <p className="text-lg font-medium">BIKANERWALA, DWARKA,</p>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="bg-[#4CAF50] rounded-b-[150px] rounded-t-[350px] p-6 text-white shadow-xl text-center border-2 border-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-4 mb-2">
                <Phone className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Phone</h3>
              </div>
              <p className="text-lg font-medium">099584 18383</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
