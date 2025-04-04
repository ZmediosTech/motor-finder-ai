import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex lg:flex-row md:flex-col flex-col space-y-2 items-center justify-between px-2 md:px-4 lg:px-8 pb-2 mt-5">

      <h6 className="text-[#4B4CFF] text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[1vw]">
        © 2025 Copyright motorsfinder.ai / All Rights Reserved.
      </h6>

      <div className="flex gap-1 md:gap-2 lg:gap-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="xl:size-[1vw] lg:size-[1.5vw] md:size-[2vw] size-[3vw] text-[#4B4CFF]" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="xl:size-[1vw] lg:size-[1.5vw] md:size-[2vw] size-[3vw] text-[#4B4CFF]" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="xl:size-[1vw] lg:size-[1.5vw] md:size-[2vw] size-[3vw] text-[#4B4CFF]" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="xl:size-[1vw] lg:size-[1.5vw] md:size-[2vw] size-[3vw] text-[#4B4CFF]" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="xl:size-[1vw] lg:size-[1.5vw] md:size-[2vw] size-[3vw] text-[#4B4CFF]" />
        </a>
      </div>
      <div className="text-[#4B4CFF] font-semibold space-x-4 md:space-x-2 lg:space-x-4 text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[1vw]">
        <a href="">
          Language:{" "} &nbsp;
          <span className="text-white font-thin lg:font-normal">
            English
          </span>{" "}
        </a>
        <a href="">
          Country:&nbsp;
          <span className="text-white font-thin lg:font-normal">
            UAE
          </span>
        </a>
        <a href="/about">
          About Us{" "}
        </a>
        <a href="/privacy">
          Privacy
        </a>
        <a href="/help">
          Help Center
        </a>
      </div>
    </div>
  );
};

export default Footer;
