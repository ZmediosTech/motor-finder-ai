import React from "react";
import { MapPin, Share2 } from "lucide-react";
import { Heart } from "lucide-react";
import appleStore from "../assets/download_apple.png";
import playStore from "../assets/download_play.png";
import huwaiStore from "../assets/download_huawei.png";
import car11 from "../assets/car11.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import { Star, Upload } from "lucide-react";
import { useState } from "react";
import { Pagination, Autoplay  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarCard from "../components/CarCard";

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

const Page2 = () => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  return (
    <>
      <div className="my-6 mx-2 md:mx-4 lg:mx-8 flex flex-col space-y-4 lg:flex-row space-x-4">
        {/* Left Section */}
        <div className="lg:w-[50%] relative rounded-lg p-4 text-white">
          {" "}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>
          {/* Car Image & Icons */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80  "
              alt="Luxury Car"
              className="w-full  object-cover h-[450px] rounded-lg"
            />
            <div className="absolute flex flex-col top-4 left-4 space-y-2">
              <button className="p-2 bg-white/30 rounded-full">
                <Heart className="text-white size-6" />
              </button>
              <button className="p-2 bg-white/30 rounded-full">
                <MapPin className="text-white size-6" />
              </button>
              <button className="p-2 bg-white/30 rounded-full">
                <Share2 className="text-white size-6" />
              </button>
            </div>
            <div className="absolute top-4 right-4 bg-white p-2 h-12 w-12 flex items-center justify-center rounded-full">
              <span className="text-xs font-bold text-black">Your Logo</span>
            </div>
          </div>
          {/* Pricing Section */}
          <div className="flex justify-between text-pink-500 mt-4">
            <span>Daily / AED 2500</span>
            <span>Weekly / AED 2500</span>
            <span>Monthly / AED 2500</span>
          </div>
          {/* Description */}
          <div className="mt-4 border-t border-pink-500 pt-4">
            <h2 className="text-xl text-pink-500">Description</h2>
            <p className="text-sm opacity-80">
              Rent and Drive this Cadillac Escalade Platinum Sport 2023-model in
              Dubai, UAE for AED 950/day & AED 22000/month. Rental cost includes
              basic comprehensive insurance and standard mileage limit of 250
              km/day (AED 3 per additional km applicable). Security deposit of
              AED 2000 is required. Contact Speedy Machine Car Rental directly
              for bookings and inquiries...
            </p>
          </div>
          {/* Overview */}
          <div className="mt-4 border-t border-pink-500 pt-4">
            <h2 className="text-xl text-pink-500 mb-2">Overview</h2>
            <div className="text-sm flex flex-col space-y-2">
              <p className="text-pink-500">
                Body Type / <span className="opacity-80 text-white">SUV</span>
              </p>
              <p className="text-pink-500">
                Salik / Toll Charges /{" "}
                <span className="opacity-80 text-white">AED 5</span>
              </p>
              <p className="text-pink-500">
                Model /
                <span className="opacity-80 text-white">
                  Escalade Platinum Sport
                </span>
              </p>
              <p className="text-pink-500">
                Seating Capacity /
                <span className="opacity-80 text-white">7 Passengers</span>
              </p>
              <p className="text-pink-500">
                Fits No. of Bags /
                <span className="opacity-80 text-white">3</span>
              </p>
              <p className="text-pink-500">
                Exterior / Interior /
                <span className="opacity-80 text-white">Black & Blue</span>
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-6 flex space-x-4 relative z-10">
            <button className="bg-gradient-to-r from-[#7670FF] to-[#5B42FF] px-4 py-2 rounded-full text-sm">
              Enquiry Now
            </button>
            <button className="bg-gradient-to-r from-[#7670FF] to-[#5B42FF] px-4 py-2 rounded-full text-sm">
              Talk to Agent
            </button>
          </div>
          {/* Review Section */}
          <div className="mt-6 border-t border-pink-500 pt-4 relative z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-pink-500">Write a Review</h2>
              <button className="text-sm hover:text-pink-400">
                Read Reviews
              </button>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                className="w-12 h-12 rounded-full object-cover"
                alt="User Profile"
              />
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`size-6 cursor-pointer ${
                      star <= rating
                        ? "fill-pink-500 text-pink-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
              <button className="ml-auto flex items-center gap-2 border border-pink-500 px-3 py-1 rounded-full">
                <Upload className="size-5" /> Add photos
              </button>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                className="w-full bg-transparent border border-pink-500 px-4 py-2 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Type your review here..."
                value={review} // Bind value to state
                onChange={(e) => setReview(e.target.value)}
              />
              <button className="ml-2 bg-pink-500 hover:bg-pink-400 px-6 py-2 rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[100%] lg:w-[50%] relative rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>

          <div className="relative p-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xs md:text-2xl font-semibold">
                Similar Motors 3843
              </h2>

              <div className="ml-auto">
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

            {/* Car Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {carList.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8 mb-6 relative z-10">
            <button
              className="bg-[#7670FF] text-white px-5 py-2 rounded-full font-semibold text-lg hover:bg-[#5B42FF] transition duration-300 cursor-pointer"
              style={{ fontFamily: "Gotham Rounded, sans-serif" }}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-6 ">
        <div className="text-white mx-8">
          <Swiper pagination={true}
            modules={[Pagination, Autoplay]} // Add the Autoplay module here
            autoplay={{
              delay: 3000, // Set the autoplay delay to 3 seconds (3000ms)
              disableOnInteraction: false, // Keep autoplay running after interaction
            }} className="mySwiper">
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

export default Page2;
