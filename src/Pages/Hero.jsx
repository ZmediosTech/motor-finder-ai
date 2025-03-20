import React, { useEffect, useState, useCallback } from "react";
import robot from "../assets/robot.png";
import popularBrands from "../assets/RentalCars.png";
import rentalCars from "../assets/RentalCars.png";
import luxuryCars from "../assets/topBrans.png";
import carsForSell from "../assets/RentalCars.png";
import suv from "../assets/suv.png";
import topBrands from "../assets/topBrans.png";
import ChatInput from "../components/ChatInput";
import Register from "../assets/register.png";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;

      if (width >= 1920) {
        setPositions([
          { x: "-12%", y: "-35%" },
          { x: "-30%", y: "-15%" },
          { x: "25%", y: "-10%" },
          { x: "-40%", y: "10%" },
          { x: "35%", y: "12%" },
          { x: "-20%", y: "35%" },
          { x: "28%", y: "25%" },
          { x: "20%", y: "40%" },
        ]);
      } else if (width >= 1440) {
        setPositions([
          { x: "-10%", y: "-30%" },
          { x: "-25%", y: "-12%" },
          { x: "20%", y: "-10%" },
          { x: "-35%", y: "8%" },
          { x: "30%", y: "10%" },
          { x: "-18%", y: "28%" },
          { x: "22%", y: "28%" },
          { x: "10%", y: "32%" },
        ]);
      } else if (width >= 1024) {
        setPositions([
          { x: "-8%", y: "-25%" },
          { x: "-20%", y: "-10%" },
          { x: "15%", y: "-8%" },
          { x: "-30%", y: "5%" },
          { x: "25%", y: "8%" },
          { x: "-15%", y: "22%" },
          { x: "18%", y: "22%" },
          { x: "8%", y: "26%" },
        ]);
      } else {
        // Mobile: Space things out more, center images better
        setPositions([
          { x: "-5%", y: "-15%" },
          { x: "-12%", y: "-5%" },
          { x: "10%", y: "-5%" },
          { x: "-20%", y: "5%" },
          { x: "18%", y: "5%" },
          { x: "-8%", y: "15%" },
          { x: "12%", y: "15%" },
          { x: "5%", y: "20%" },
        ]);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  const images = [
    { src: popularBrands, alt: "Popular Brands" },
    { src: topBrands, alt: "Top Brands" },
    { src: rentalCars, alt: "Rental Cars" },
    { src: suv, alt: "SUV" },
    { src: luxuryCars, alt: "Luxury Cars" },
    { src: carsForSell, alt: "Cars for Sale" },
    { src: suv, alt: "SUV" },
  ];

  return (
    <div className="h-[calc(100vh-7rem)] relative overflow-hidden">
      {/* Main Container */}
      <div className="relative h-[50%] md:h-[50%] flex items-center justify-center">
        <img
          src={robot}
          className="w-[250px] md:w-[400px] lg:w-[500px] h-auto mt-20 relative"
          alt="AI-Powered Robot"
        />
        {/* Animated Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute"
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
              transition: `all 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${
                index * 0.1
              }s`,
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-14 md:h-20 lg:h-24 xl:h-28"
            />
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="flex justify-center md:mt-32 lg:mt-0 items-center">
        <h1 className="font-[Gotham Rounded] text-[#7670FF] text-sm md:text-3xl lg:text-5xl mt-10 text-center">
          Find Your Motor with AI-Powered Agent
        </h1>
      </div>

      {/* Chat Input */}
      <ChatInput />

      {/* Register Section */}
      <div className="flex justify-center mt-8 items-center">
        <div className="flex justify-center space-x-2 items-center">
          <img
            src={Register}
            alt="Register"
            className="size-8 md:size-10 animate-rotate"
          />
          <a
            href="#"
            className="text-[#F800C0] font-semibold text-sm md:text-base"
          >
            Register with Motors
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
