import React, { useState } from "react";
import latina from "../assets/latina.png";
import car11 from "../assets/car11.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import companyImage from "../assets/company.jpg";
import ChatInput2 from "../components/ChatInput2";
import Marquee from "../components/Marquee";
import CarCard from "../components/CarCard";
import SortFilter from "../components/SortFilter";
import CompanyCard from "../components/CompanyCard";

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

const companyList = [
  {
    name: "Zmedios Pvt. Ltd.",
    address: "Sec 58 Noida",
    image: companyImage,
    review: 5678,
  },
  {
    name: "Zmedios Pvt. Ltd.",
    address: "Sec 58 Noida",
    image: companyImage,
    review: 5678,
  },
  {
    name: "Zmedios Pvt. Ltd.",
    address: "Sec 58 Noida",
    image: companyImage,
    review: 5678,
  },
  {
    name: "Zmedios Pvt. Ltd.",
    address: "Sec 58 Noida",
    image: companyImage,
    review: 5678,
  },
];
const Sell = ({ type }) => {
  const pageType = type.charAt(0).toUpperCase() + type.slice(1);
  const tabs = ["Featured", "Company", "Listing"];
  const [activeButton, setActiveButton] = useState(tabs[0]);

  const renderTabContent = () => {
    switch (activeButton) {
      case "Featured":
        return carList.map((car, index) => <CarCard key={index} car={car} />);
      case "Company":
        return companyList.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ));
      case "Listing":
        return carList
          .slice(0, 4)
          .map((car, index) => <CarCard key={index} car={car} />);
      default:
        return null;
    }
  };

  return (
    <>
      <Marquee />
      <div className="flex flex-col xl:flex-row mx-2 md:mx-4 lg:mx-8">
        <div className="w-full xl:w-[45%] flex flex-col space-y-8 lg:space-y-12 items-center py-8 md:py-16 justify-around lg:h-[calc(100vh-7rem)]">
          <img
            src={latina}
            alt="Lina"
            className=" size-72 md:size-96 lg:size-72 2xl:size-96"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl text-white">Hey, I’m Lina</h1>
            <h3 className=" text-[18px] md:text-3xl text-white">
              Your Personal AI Motor Agent
            </h3>
          </div>
          <ChatInput2 />
        </div>

        <div className=" w-full xl:w-[55%] my-4 rounded-t-3xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-3xl"></div>

          <div className="relative p-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h4 className="text-white mb-4 md:mb-0 xl:text-[1.2vw] lg:text-lg text-lg font-medium flex-grow">
                Cars for {pageType} 12424
              </h4>
              <div className="flex flex-row items-center justify-between md:w-auto w-full flex-grow">
                <div className="flex gradient-border rounded-full box-shadow items-center 2xl:text-[1.2vw] lg:text-lg font-medium md:gap-1 lg:gap-3">
                  {tabs.map((btn) => (
                    <button
                      key={btn}
                      onClick={() => setActiveButton(btn)}
                      className={`px-2 lg:px-4 py-2 rounded-full text-white transition-all duration-300 ${
                        activeButton === btn
                          ? "bg-gradient-to-r from-[#7670FF] to-[#5B42FF] text-white box-shadow border-0 border-[#5B42FF]"
                          : "hover:text-gray-200"
                      }`}
                    >
                      {btn}
                    </button>
                  ))}
                </div>

                <SortFilter />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
            {renderTabContent()}
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
