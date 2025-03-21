import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// Components
import ChatInput from "../components/ChatInput";

// Assets Images
import popularBrands from "../assets/popularBrands.png";
import suv from "../assets/suv.png";
import robot from "../assets/robot.png";
import rentalCars from "../assets/RentalCars.png";
import luxuryCars from "../assets/luxuryCars.png";
import topBrands from "../assets/topBrans.png";
import Register from "../assets/register.png";
import carsForSell from "../assets/carsForSell.png";

const Hero = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 1000); // Reset animation after 1s
    }, 5000); // Run every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;

      if (width >= 1920) {
        setPositions([
          { x: "-8%", y: "-35%" },
          { x: "-20%", y: "-15%" },
          { x: "10%", y: "-30%" },
          { x: "-40%", y: "10%" },
          { x: "35%", y: "12%" },
          { x: "-20%", y: "35%" },
          { x: "20%", y: "30%" },
        ]);
      } else if (width >= 1440) {
        setPositions([
          { x: "-5%", y: "-30%" },
          { x: "-20%", y: "-12%" },
          { x: "20%", y: "-10%" },
          { x: "-35%", y: "8%" },
          { x: "35%", y: "10%" },
          { x: "-18%", y: "28%" },
          { x: "16%", y: "28%" },
        ]);
      } else if (width >= 1024) {
        setPositions([
          { x: "-4%", y: "-25%" },
          { x: "-25%", y: "-10%" },
          { x: "20%", y: "-16%" },
          { x: "-40%", y: "5%" },
          { x: "30%", y: "15%" },
          { x: "-15%", y: "25%" },
          { x: "15%", y: "42%" },
        ]);
      } else {
        setPositions([
          { x: "-5%", y: "-25%" },
          { x: "-24%", y: "-8%" },
          { x: "22%", y: "-10%" },
          { x: "-30%", y: "20%" },
          { x: "16%", y: "38%" },
          { x: "-12%", y: "40%" },
          { x: "25%", y: "15%" },
        ]);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

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
    <div className="h-[calc(100vh-7rem)] relative overflow-hidden">
      {/* Main Container */}
      <div className="relative h-[50%] md:h-[50%] flex items-center justify-center">
        <img
          src={robot}
          className="w-[250px] md:w-[400px] lg:w-[500px] h-auto mt-20 relative"
          alt="AI-Powered Robot"
        />
        {/* Animated Images */}
        {images?.map((img, index) => (
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
              cursor: "pointer",
            }}
            onClick={() => navigate("/sell")}
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
      <div className="flex justify-center md:mt-0 lg:mt-0 items-center">
        <h1 className="font-[Gotham Rounded] text-[#7670FF] text-sm md:text-3xl lg:text-5xl mt-10 text-center">
          Find Your Motor with AI-Powered Agent
        </h1>
      </div>

      <ChatInput />

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
