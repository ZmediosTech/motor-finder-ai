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
import logo from "../assets/logo8.png";

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

const Page3 = () => {
  const [activeButton, setActiveButton] = useState("Featured Motor Listing");
  return (
    <>
      <div className="relative my-6 mx-8 p-6 relative rounded-lg  ">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>

        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 border-b pb-6 border-[#F800C0]">
          {/* Company Logo */}
          <div className="size-20 md:size-24 flex items-center justify-center bg-white rounded-full border border-[#5B42FF]">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Company Info */}
          <div className="text-white flex-1 w-full">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
              <h2 className="text-lg md:text-2xl font-bold">Company Name</h2>

              {/* Stats */}
              <div className="text-sm space-x-2 md:space-x-16 flex flex-wrap md:flex-nowrap items-center">
                <p className="text-[#F800C0]">
                  Active Listing /{" "}
                  <span className="font-bold text-white">5</span>
                </p>
                <p className="text-[#F800C0]">
                  Agent / <span className="font-bold text-white">3</span>
                </p>
                <p className="text-[#F800C0]">
                  Location / <span className="font-bold text-white">Dubai</span>
                </p>
                <p className="text-[#F800C0]">
                  Review / <span className="font-bold text-white">8374</span>
                </p>
              </div>

              {/* Icons */}
              <div className="flex space-x-2 md:space-x-4 text-white text-lg">
                <button className="p-2 md:p-3 rounded-full hover:bg-white transition">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button className="p-2 md:p-3 rounded-full hover:bg-white transition">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button className="p-2 md:p-3 rounded-full hover:bg-white transition">
                  <Share2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-gray-300 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus euismod gravida. Morbi ultrices, quam ac scelerisque
              cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est.
              Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec
              velit est, tempor nec lectus sed, sagittis hendrerit orci.
              Phasellus sit amet tempus velit.ultrices, quam ac scelerisque
              cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est.
              Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec
              velit est, tempor nec lectus sed, sagittis hendrerit orci.
              Phasellus sit amet tempus velit.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mx-2 md:mx-4 space-x-8 ">
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

          {/* Right Section with Same Opacity Background */}
          <div className=" w-full lg:w-[55%] my-4 rounded-lg relative">
            <div className=" ">
              {/* Buttons with Active Gradient Border */}
              <div className=" flex justify-center my-6">
                <div className="flex gradient-border items-center text-[8px] md:text-[12px] lg:text-base font-semibold  md:space-x-1 lg:space-x-5">
                  {["Featured Motor Listing", "Motor Listing", "Agents"].map(
                    (btn) => (
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
        <div className="text-white  ml-4">
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
