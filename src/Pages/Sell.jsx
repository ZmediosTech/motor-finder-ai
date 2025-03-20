import React, { useState } from "react";
import latina from "../assets/latina.png";
import car11 from "../assets/car11.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import logo from "../assets/logo8.png";
import ChatInput2 from "../components/ChatInput2";
import Marquee from "../components/Marquee";
import { Heart, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cardLogo from "../assets/cardLogo.png";

const carList = [
  {
    name: "sell-AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car11,
    year: 2021,
    mileage: "10,721 km",
    drive: "Left Hand",
  },
  {
    name: "sell-AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car2,
    year: 2022,
    mileage: "5,000 km",
    drive: "Left Hand",
  },
  {
    name: "sell-AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car3,
    year: 2023,
    mileage: "2,500 km",
    drive: "Left Hand",
  },
  {
    name: "sell-AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car4,
    year: 2021,
    mileage: "15,000 km",
    drive: "Left Hand",
  },
];

const CarCard = ({ car, navigate }) => (
  <div className="bg-[#010122] rounded-xl overflow-hidden shadow-lg text-white relative">
    {/* Car Image */}
    <div className="relative">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <button className="absolute top-4 right-4 p-1.5 bg-white/80 backdrop-blur-sm rounded-full">
        <Heart className="w-5 h-5 text-gray-700" />
      </button>

      {/* Bottom Right Circle (End of Image) */}
      <div
        className="absolute right-13 bottom-0 w-16 h-16 bg-white rounded-full border-2 border-gray-200 shadow-md 
                      flex items-center justify-center transform translate-x-1/2 translate-y-1/2"
      >
        <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
      </div>
    </div>

    {/* Card Content */}
    <div className="p-4 mt-6">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="md:text-lg font-semibold">{car.name}</h3>
          <p className="text-sm">{car.edition}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg">{car.price}</p>
        </div>
      </div>

      {/* Car Details */}
      <div className="flex gap-2 text-sm text-gray-300 mb-4">
        <span>{car.year}</span>
        <span>|</span>
        <span>{car.mileage}</span>
        <span>|</span>
        <span>{car.drive}</span>
      </div>

      {/* Chat Button */}
      <button
        className="w-full bg-gradient-to-b from-[#FE8A70] to-[#F800C0] text-white py-3 px-4 rounded-full font-medium flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
        onClick={() => navigate("/detail")}
      >
        Chat with Us
      </button>
    </div>
  </div>
);

const Sell = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Featured");

  return (
    <>
      <Marquee />
      <div className="flex flex-col lg:flex-row mx-2 md:mx-4 lg:mx-8">
        {/* Left Section */}
        <div className="w-full lg:w-[45%] flex flex-col space-y-8 lg:space-y-12 items-center py-8 md:py-16 justify-around lg:h-[calc(100vh-7rem)]">
          <img
            src={latina}
            alt="Lina"
            className=" size-72 md:size-96 lg:size-72"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl text-white">Hey, I’m Lina</h1>
            <h3 className=" text-[18px] md:text-3xl text-white">
              Your Personal AI Motor Agent
            </h3>
          </div>
          <ChatInput2 />
        </div>

        {/* Right Section */}
        <div className=" w-full lg:w-[55%] my-4 rounded-lg relative">
          {/* Background with 10% opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>

          {/* Content */}
          <div className="relative flex  flex-col md:flex-row  items-center text-[8px] md:text-[12px] lg:text-base justify-between p-2 lg:p-4">
            <h1 className="text-white mb-4 md:mb-0 text-sm  font-semibold">
              CAR FOR SALE 12424
            </h1>

            {/* Buttons with Active Gradient Border */}
            <div className="flex md:hidden w-full justify-around items center  ">
              <div className="flex gradient-border items-center text-[8px] md:text-[12px] lg:text-base font-semibold  md:space-x-1 lg:space-x-5">
                {["Featured", "Company", "Listing"].map((btn) => (
                  <button
                    key={btn}
                    onClick={() => setActiveButton(btn)}
                    className={`px-2 lg:px-4 py-1 lg:py-2 rounded-full text-white transition-all duration-300 ${
                      activeButton === btn
                        ? "bg-gradient-to-r from-[#7670FF] to-[#5B42FF] text-white"
                        : "hover:text-gray-200"
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>

              {/* Sort & Filter Dropdown */}
              <select
                className=" px-2 md:px-4 py-2 text-xs md:text-base text-white rounded-full border border-[#5B42FF] bg-gradient-to-r from-[#7670FF] to-[#5B42FF] focus:outline-none focus:ring-2 focus:ring-[#7670FF]"
                style={{ boxShadow: "0px 0px 8px 0px #4B4CFF" }}
              >
                <option value="latest">Sort and Filter</option>
                <option value="price-low-high" className=" text-black">
                  Price: Low to High
                </option>
                <option value="price-high-low" className=" text-black">
                  Price: High to Low
                </option>
                <option value="popular " className=" text-black">
                  Most Popular
                </option>
              </select>
            </div>

            <div className="hidden md:flex gradient-border items-center text-[8px] md:text-[12px] lg:text-base font-semibold  md:space-x-1 lg:space-x-2">
              {["Featured", "Company", "Listing"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setActiveButton(btn)}
                  className={`px-2 lg:px-4 py-1 lg:py-2 rounded-full text-white transition-all duration-300 ${
                    activeButton === btn
                      ? "bg-gradient-to-r from-[#7670FF] to-[#5B42FF] text-white"
                      : "hover:text-gray-200"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Sort & Filter Dropdown */}
            <div className="hidden md:flex items-center space-x-3 ml-4">
              <select
                className=" px-2 md:px-4 py-2 text-xs md:text-base text-white rounded-full border border-[#5B42FF] bg-gradient-to-r from-[#7670FF] to-[#5B42FF] focus:outline-none focus:ring-2 focus:ring-[#7670FF]"
                style={{ boxShadow: "0px 0px 8px 0px #4B4CFF" }}
              >
                <option value="latest">Sort and Filter</option>
                <option value="price-low-high" className=" text-black">
                  Price: Low to High
                </option>
                <option value="price-high-low" className=" text-black">
                  Price: High to Low
                </option>
                <option value="popular " className=" text-black">
                  Most Popular
                </option>
              </select>
            </div>
          </div>

          {/* Car Listings - 4 cards per row on large screens, 2 per row on medium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
            {carList.map((car, index) => (
              <CarCard key={index} car={car} navigate={navigate} />
            ))}
          </div>

          <div className="flex justify-center mt-8 mb-4 relative z-10">
            <button
              className="bg-[#7670FF] text-white px-5 py-2 rounded-full font-semibold text-lg hover:bg-[#5B42FF] transition duration-300"
              style={{ fontFamily: "Gotham Rounded, sans-serif" }}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
