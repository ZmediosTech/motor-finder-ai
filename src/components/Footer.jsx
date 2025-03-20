import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-2 xl:flex-row items-center text-[7px] md:text-[10px]   font-thin lg:font-normal lg:text-sm justify-between mx-2 md:mx-4 lg:mx-8 mb-4">
      <div>
        <h1 className="text-[#4B4CFF] text-[10px] md:text-[14px]">
          © 2025 Copyright motorsfinder.ai / All Rights Reserved.
        </h1>
      </div>
      <div className="flex gap-1 md:gap-2 lg:gap-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className=" size-2 md:size-3 lg:size-4 text-[#4B4CFF]" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="size-2 md:size-3 lg:size-4 text-[#4B4CFF]" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="size-2 md:size-3 lg:size-4 text-[#4B4CFF]" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="size-2 md:size-3 lg:size-4 text-[#4B4CFF]" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="size-2 md:size-3 lg:size-4 text-[#4B4CFF]" />
        </a>
      </div>
      <div className="text-[#4B4CFF] font-semibold space-x-4  md:space-x-2 lg:space-x-4">
        <a href="" className="text-[10px] md:text-[14px]">
          Language:{" "}
          <span className="text-white text-[10px] md:text-[14px]  font-thin lg:font-normal lg:text-sm">
            English
          </span>{" "}
        </a>
        <a href="" className="text-[10px] md:text-[14px]">
          Country:
          <span className="text-white text-[10px] md:text-[14px]  font-thin lg:font-normal lg:text-sm">
            UAE
          </span>
        </a>
        <a href="/about" className="text-[10px] md:text-[14px]">
          About Us{" "}
        </a>
        <a href="/privacy" className="text-[10px] md:text-[14px]">
          Privacy
        </a>
        <a href="/help" className="text-[10px] md:text-[14px]">
          Help Center
        </a>
      </div>
    </div>
  );
};

export default Footer;
