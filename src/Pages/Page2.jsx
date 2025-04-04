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
import Upload from "../assets/upload.png";
import { Star } from "lucide-react";
import { useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarCard from "../components/CarCard";
import SortFilter from "../components/SortFilter";

const carList = [
  {
    name: "sell - AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car11,
    year: 2021,
    mileage: "10,721 km",
    drive: "Left Hand",
  },
  {
    name: "sell - AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car2,
    year: 2022,
    mileage: "5,000 km",
    drive: "Left Hand",
  },
  {
    name: "sell - AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car3,
    year: 2023,
    mileage: "2,500 km",
    drive: "Left Hand",
  },
  {
    name: "sell - AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car4,
    year: 2021,
    mileage: "15,000 km",
    drive: "Left Hand",
  },
  {
    name: "sell - AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car4,
    year: 2021,
    mileage: "15,000 km",
    drive: "Left Hand",
  },
  {
    name: "sell - AED 345,000",
    edition: "cadliac Escalade premium luxury",
    image: car4,
    year: 2021,
    mileage: "15,000 km",
    drive: "Left Hand",
  }
];

const Page2 = () => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  return (
    <>
      <div className="my-6 mx-2 md:mx-4 lg:mx-8 flex flex-col lg:flex-row gap-4 xl:gap-8 lg:gap-4 md:gap-6">
        {/* Left Section */}
        <div className="lg:w-[50%] relative rounded-lg p-5 text-white">
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
              <button className="p-1">
                <Heart className="text-white size-6" fill="#fff" />
              </button>
              <button className="p-1">
                <MapPin className="text-white size-6" />
              </button>
              <button className="p-1">
                <Share2 className="text-white size-6" fill="#fff" />
              </button>
            </div>
            <div className="absolute top-4 right-4 bg-white p-2 h-12 w-12 flex items-center justify-center rounded-full">
              <span className="text-xs font-bold text-black">Your Logo</span>
            </div>
          </div>
          {/* Pricing Section */}
          <div className="flex justify-between text-pink-500 mt-4 font-semibold">
            <p className="text-pink-500">Daily <span className="opacity-80 text-white"> / AED 2500</span></p>
            <p className="text-pink-500">Weekly <span className="opacity-80 text-white"> / AED 2500</span></p>
            <p className="text-pink-500">Monthly <span className="opacity-80 text-white"> / AED 2500</span></p>
          </div>
          {/* Description */}
          <div className="mt-4 border-t border-pink-500 pt-4">
            <h2 className="text-xl text-pink-500 mb-3 font-semibold">Description</h2>
            <p className="text-xl opacity-80 leading-relaxed font-light">
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
            <h2 className="text-xl text-pink-500 mb-3 font-semibold">Overview</h2>
            <div className="text-xl flex flex-col space-y-2 font-light">
              <p className="text-pink-500">
                Body Type / <span className="opacity-80 text-white">SUV</span>
              </p>
              <p className="text-pink-500">
                Salik / Toll Charges / {" "}
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
            <button className="bg-gradient-to-r from-[#7670FF] to-[#5B42FF] px-5 py-3 rounded-full text-sm box-shadow font-semibold">
              Enquiry Now
            </button>
            <button className="bg-gradient-to-r from-[#7670FF] to-[#5B42FF] px-5 py-3 rounded-full text-sm box-shadow font-semibold">
              Talk to Agent
            </button>
          </div>
          {/* Review Section */}
          <div className="mt-6 border-t border-pink-500 pt-4 relative z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-pink-500 font-semibold">Write a Review</h2>
              <button className="text-md hover:text-pink-400 font-semibold">
                Read Reviews
              </button>
            </div>
            <div className="mt-4 flex items-center gap-4 flex-wrap justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                  className="w-12 h-12 rounded-full object-cover"
                  alt="User Profile"
                />
                <p className="">Simon Quitzon</p>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`size-6 cursor-pointer ${star <= rating
                      ? "fill-pink-500 text-pink-500"
                      : "text-gray-500"
                      }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
              <button className="box-shadow flex items-center gap-5 border border-[#4b4cff] px-5 py-3 rounded-full bg-transparent">
                Add some photos <img src={Upload} alt="Upload" />
              </button>
            </div>
            <div className="mt-4 flex items-center gap-5 mt-10 flex-wrap justify-between">
              <div className="border border-[#4b4cff] box-shadow rounded-full md:p-6 p-3 xl:w-3/5 lg:w-full md:w-3/5 w-full">
                <input
                  type="text"
                  className="w-full bg-transparent placeholder-white focus:outline-none font-semibold"
                  placeholder="Type your review here..."
                  value={review} // Bind value to state
                  onChange={(e) => setReview(e.target.value)}
                />
              </div>
              <button className="bg-gradient-to-b from-[#FE8A70] to-[#F800C0] border md:px-10 md:py-6 px-6 py-3 rounded-full border-transparent">
                Submit Review
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[100%] lg:w-[50%] relative rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>

          <div className="relative py-3 px-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white xl:text-[1.2vw] lg:text-lg text-lg font-medium">
                Similar Motors 3843
              </h2>

              <div className="ml-auto">
                <SortFilter />
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
