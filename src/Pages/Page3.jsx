import React, { useState } from "react";
import { MapPin, Share2 } from "lucide-react";
import { Heart } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import latina from "../assets/latina.png";
import companyLogo from "../assets/comapnyLogo.png";
import appleStore from "../assets/download_apple.png";
import playStore from "../assets/download_play.png";
import huwaiStore from "../assets/download_huawei.png";
import ChatInput2 from "../components/ChatInput2";
import CarCard from "../components/CarCard";

const carList = [
  {
    name: "BMW M3 Competition",
    edition: "Premium Sport Edition",
    price: "AED 345,000",
    image:
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800",
    year: 2021,
    mileage: "10,721 km",
    drive: "Left Hand",
  },
  {
    name: "Mercedes AMG GT",
    edition: "Sport Coupe Edition",
    price: "AED 490,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AxAXRV0hWJKpqlR3EGzn7Vhs6lUy9XFmUw&s",
    year: 2022,
    mileage: "5,000 km",
    drive: "Left Hand",
  },
  {
    name: "Porsche 911 Turbo",
    edition: "High Performance",
    price: "AED 650,000",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg",
    year: 2023,
    mileage: "2,500 km",
    drive: "Left Hand",
  },
  {
    name: "Audi R8 V10",
    edition: "Performance Edition",
    price: "AED 580,000",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A5/11864/1721137944455/front-left-side-47.jpg",
    year: 2021,
    mileage: "15,000 km",
    drive: "Left Hand",
  },
];

const Page3 = () => {
  const [activeButton, setActiveButton] = useState("Featured Motor Listing");
  return (
    <>
      <div className="relative my-6 mx-8 p-6 relative rounded-lg  ">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>

        <div className="flex flex-wrap lg:flex-nowrap lg:items-center md:items-start items-center lg:gap-8 gap-4 border-b pb-6 border-[#F800C0]">
          {/* Company Logo */}
          <div className="flex items-center justify-center bg-white rounded-full border border-[#5B42FF]">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Company Info */}
          <div className="text-white flex-1 w-full">
            <div className="flex flex-wrap xl:flex-nowrap justify-between items-center gap-4">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold whitespace-nowrap">
                Company Name
              </h2>

              {/* Stats */}
              <div className="text-lg lg:text-xl flex justify-between gap-2 lg:gap-2 xl:gap-4 xl:gap-y-5 lg:gap-x-6 md:gap-x-6 items-center flex-wrap md:order-3 xl:order-0 order-0 flex-grow">
                <p className="text-[#F800C0] w-full md:w-auto">
                  Active Listing /{" "}
                  <span className="font-bold text-white">5</span>
                </p>
                <p className="text-[#F800C0] w-full md:w-auto">
                  Agent / <span className="font-bold text-white">3</span>
                </p>
                <p className="text-[#F800C0] w-full md:w-auto">
                  Location / <span className="font-bold text-white">Dubai</span>
                </p>
                <p className="text-[#F800C0] w-full md:w-auto">
                  Review / <span className="font-bold text-white">8374</span>
                </p>
              </div>

              {/* Icons */}
              <div className="flex text-white text-base sm:text-lg">
                <button className="p-2 rounded-full hover:bg-white/20 transition">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </button>
                <button className="p-2 rounded-full hover:bg-white/20 transition">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </button>
                <button className="p-2 rounded-full hover:bg-white/20 transition">
                  <Share2 className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Description (Hidden on small screens) */}
            <p className="text-xl text-gray-300 mt-4 leading-relaxed font-light lg:block hidden text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris egestas vulputate ante sed imperdiet. In placerat euismod justo.
            </p>

          </div>
          {/* Description (Visible on smaller screens) */}
          <p className="text-xl text-gray-300 leading-relaxed font-light lg:hidden text-justify flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris egestas vulputate ante sed imperdiet. In placerat euismod justo.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row mx-2 md:mx-4 space-x-8 ">
          {/* Left Section */}
          <div className="w-full xl:w-[45%] flex flex-col space-y-8 lg:space-y-12 items-center py-8 md:py-16 justify-around lg:h-[calc(100vh-7rem)]">
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

          {/* Right Section with Same Opacity Background */}
          <div className=" w-full xl:w-[55%] lg:my-4 rounded-lg relative">
            <div className=" ">
              {/* Buttons with Active Gradient Border */}
              <div className=" flex justify-center my-6">
                <div className="flex gradient-border rounded-full box-shadow items-center text-[8px] md:text-[12px] lg:text-[14px]  text-[10px] font-semibold  md:space-x-1 lg:space-x-5">
                  {["Featured Motor Listing", "Motor Listing", "Agents"].map(
                    (btn) => (
                      <button
                        key={btn}
                        onClick={() => setActiveButton(btn)}
                        className={`px-2 lg:px-4 py-1 lg:py-2 rounded-full text-white transition-all duration-300 ${activeButton === btn
                          ? "bg-gradient-to-r from-[#7670FF] to-[#5B42FF] text-white"
                          : "hover:text-gray-200"
                          }`}
                      >
                        {btn}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Car Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {carList.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-8 mb-6">
              <button
                className="bg-[#7670FF] text-white px-5 py-2 rounded-full font-semibold text-lg hover:bg-[#5B42FF] transition duration-300"
                style={{ fontFamily: "Gotham Rounded, sans-serif" }}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <div className="text-white  mx-8">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide className="text-white flex">
              <img src="../../src/assets/swiper.png" alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="../../src/assets/swiper.png" alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="../../src/assets/swiper.png" alt="swiper" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="my-6 mx-8 flex justify-center">
          <div className="flex space-x-5 md:space-x-8 lg:space-x-10 ">
            <img src={appleStore} alt="" className="h-5 md:h-6 lg:h-auto" />
            <img src={playStore} alt="" className="h-5 md:h-6 lg:h-auto" />
            <img src={huwaiStore} alt="" className="h-5 md:h-6 lg:h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
