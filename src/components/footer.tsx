import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const links = [
  { href: "/about", label: "• ABOUT US" },
  { href: "/services", label: "• SERVICES" },
  { href: "/gallery", label: "• OUR GALLERY" },
  { href: "/contact", label: "• CONTACT US" },
  { href: "/privacy", label: "• PRIVACY & POLICY" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#F4D03F] via-[#58D68D] to-[#5DADE2] px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-20 lg:py-28">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-8">
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
          <Image
            src="/nav-logo.png"
            alt="Wee Wonderland - Tiny Feet, Big Adventure!"
            width={1000}
            height={1000}
            className="object-contain h-32 sm:h-48 md:h-60 lg:h-72 w-auto"
          />
        </div>

        <div className="text-white w-full lg:w-auto">
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 tracking-wide text-center lg:text-left">
            USEFUL LINKS
          </h3>
          <ul className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white hover:text-yellow-200 transition-colors font-medium sm:font-semibold text-sm sm:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Contact Us */}
        <div className="text-white w-full lg:w-auto">
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 tracking-wide text-center lg:text-left">
            CONTACT US
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
              <div className="text-center lg:text-left">
                <p className="font-medium text-sm sm:text-base">
                  SECTOR-12A RD, BESIDE
                </p>
                <p className="font-medium text-sm sm:text-base">
                  BIKANERWALA, DWARKA,
                </p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+919858418383"
              className="flex items-center gap-3 justify-center lg:justify-start hover:text-yellow-200 transition-colors"
              target="_blank"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">099584 18383</p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/weewonderland/"
              className="flex items-center gap-3 justify-center lg:justify-start hover:text-yellow-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">@WEEWONDERLAND</p>
            </a>

            {/* Email */}
            <a
              href="mailto:wonderlandwee@gmail.com"
              className="flex items-center gap-3 justify-center lg:justify-start hover:text-yellow-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">
                WONDERLANDWEE@GMAIL.COM
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
