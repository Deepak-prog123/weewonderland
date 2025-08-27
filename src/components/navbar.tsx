"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-[#fff6f4] border-b-4 border-[#fbb040] flex items-center font-sans h-[60px] px-4 sm:px-8 md:px-16 lg:px-[80px] relative py-8">
      <Image
        src="/nav-logo.png"
        alt="Wee Wonderland Logo"
        width={120}
        height={120}
        className="h-10 sm:h-14 md:h-16 lg:h-18 object-contain flex-shrink-0 mr-4 sm:mr-8 md:mr-12 lg:mr-2 mt-2 lg:mt-5"
        draggable="false"
      />
      {/* Hamburger button for mobile */}
      <button
        className="lg:hidden ml-auto z-20 p-2 focus:outline-none"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <div className="w-6 h-6 relative flex flex-col justify-center items-center cursor-pointer">
          <span
            className={`block w-6 h-0.5 bg-[#fbb040] rounded absolute transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#fbb040] rounded absolute transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#fbb040] rounded absolute transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
      {/* Desktop nav */}
      <ul className="hidden lg:flex list-none flex-1 justify-around items-center text-base sm:text-lg md:text-xl lg:text-[20px] gap-2 sm:gap-6 md:gap-10 lg:gap-0">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`no-underline px-1 transition-colors whitespace-nowrap ${
                pathname === link.href
                  ? "text-[#fbb040] font-bold"
                  : "text-[#181818] font-bold hover:text-[#fbb040]"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile nav */}
      <ul
        className={`lg:hidden absolute top-full left-0 w-full bg-[#fff6f4] border-b-4 border-[#fbb040] flex flex-col items-center gap-2 py-4 shadow-md transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ zIndex: 10 }}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`no-underline px-1 py-2 block text-lg transition-colors whitespace-nowrap ${
                pathname === link.href
                  ? "text-[#fbb040] font-bold"
                  : "text-[#181818] font-bold hover:text-[#fbb040]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
