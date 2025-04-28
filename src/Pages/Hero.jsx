import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import ChatInput from "../components/ChatInput";

// Assets Images

import robot from "../assets/robot-2.png";
import suv from "../assets/suv.png";
import topBrands from "../assets/topBrans.png";
import rentalCars from "../assets/RentalCars.png";
import popularBrands from "../assets/popularBrands.png";
import luxuryCars from "../assets/luxuryCars.png";
import carsForSell from "../assets/carsForSell.png";
import RegisterMotor from "../components/RegisterMotor";



const Hero = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);
  const [positions, setPositions] = useState([]);
  const [isMobile, setIsMobile] = useState(false); // Track if it's a mobile device

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      // Check if the screen is mobile size (e.g., smaller than 576px)
      setIsMobile(width < 576);

      // Set positions for different screen sizes
      if (width >= 1920) {
        setPositions([
          { x: "35%", y: "10%" }, //last suv
          { x: "-20%", y: "-22%" }, //Top
          { x: "3.5%", y: "-34%" }, //popular
          { x: "-35%", y: "10%" }, //first suv
          { x: "15%", y: "-5%" }, //luxury
          { x: "-17%", y: "23%" }, //rental
          { x: "17%", y: "32%" }, //for sell
        ]);
      } else if (width >= 1440) {
        setPositions([
          { x: "35%", y: "10%" }, //last suv
          { x: "-20%", y: "-20%" }, //Top
          { x: "3.5%", y: "-28%" }, //popular
          { x: "-35%", y: "10%" }, //first suv
          { x: "15%", y: "-5%" }, //luxury
          { x: "-17%", y: "23%" }, //rental
          { x: "17%", y: "32%" }, //for sell
        ]);
      } else if (width >= 1024) {
        setPositions([
          { x: "35%", y: "10%" }, //last suv
          { x: "-20%", y: "-15%" }, //Top
          { x: "3.5%", y: "-22%" }, //popular
          { x: "-35%", y: "10%" }, //first suv
          { x: "15%", y: "-5%" }, //luxury
          { x: "-17%", y: "20%" }, //rental
          { x: "17%", y: "32%" }, //for sell
        ]);
      } else {
        setPositions([
          { x: "35%", y: "10%" }, //last suv
          { x: "-20%", y: "-15%" }, //Top
          { x: "3.5%", y: "-22%" }, //popular
          { x: "-35%", y: "10%" }, //first suv
          { x: "17%", y: "-5%" }, //luxury
          { x: "-18%", y: "20%" }, //rental
          { x: "19%", y: "26%" }, //for sell
        ]);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    // If it's a mobile device, stop the animation
    if (isMobile) {
      setAnimate(false);
    } else {
      const interval = setInterval(() => {
        setAnimate(false);
        setTimeout(() => setAnimate(true), 1000); // Reset animation after 1s
      }, 5000); // Run every 5 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isMobile]); // Re-run the effect when isMobile changes

  const images = [
    { src: suv, alt: "SUV" },
    { src: topBrands, alt: "Top Brands" },
    { src: popularBrands, alt: "Popular Brands" },
    { src: suv, alt: "SUV" },
    { src: luxuryCars, alt: "Luxury Cars" },
    { src: rentalCars, alt: "Rental Cars" },
    { src: carsForSell, alt: "Cars for Sale" },
  ];

  return (
    <div className="relative pb-10 flex-1">
      {/* Main Container */}
      <div className="relative h-[440px] flex items-center justify-center">
        <div className="relative">
          <img
            src={robot}
            className="h-auto sm:h-[18vw] md:h-[16vw] lg:h-[14vw] xl:h-[13.5vw] transform transition-transform duration-500 hover:scale-105 active:scale-95 xl:mt-35 lg:mt-30 md:mt-25 md:p-0 p-5"
            alt="AI-Powered Robot"
          />
        </div>

        {/* Animated Images */}
        {images?.map((img, index) => (
          <div
            key={index}
            className={isMobile ? "hidden" : "absolute"}
            style={{
              top: animate
                ? `calc(50% + ${positions[index]?.y || "0%"})`
                : "50%",
              left: animate
                ? `calc(50% + ${positions[index]?.x || "0%"})`
                : "50%",
              transform: animate
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -50%) scale(0.1)",
              opacity: animate ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.1
                }s`,
              cursor: "pointer",
            }}
            onClick={() => navigate("/detail")}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-[10vw] sm:h-[10vw] md:h-[8vw] lg:h-[8vw] xl:h-[7.5vw]"
            />
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="flex justify-center items-center max-w-full px-4">
        <h1 className="font-[Gotham Rounded] text-[#7670FF] text-lg sm:text-[4vw] md:text-[4vw] lg:text-[4vw] xl:text-[3.7vw] mt-2 md:mt-2 lg:mt-4 xl:mt-0 text-center">
          Find Your Motor with AI-Powered Agent
        </h1>
      </div>

      <ChatInput />
      <RegisterMotor />
    </div>
  );
};

export default Hero;
