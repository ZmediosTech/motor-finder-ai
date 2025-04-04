import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/logo2.png";
import logo2 from "../assets/t6.png";
import logo3 from "../assets/k.png";
import logo4 from "../assets/l9.png";
import logo5 from "../assets/j8.png";
import logo6 from "../assets/f7.png";
import logo7 from "../assets/rr.png";

const carBrands = [
  { name: "NISSAN", cars: 147, logo: logo4 },
  { name: "PORSCHE", cars: 79, logo: logo2 },
  { name: "ROLLS ROYCE", cars: 31, logo: logo7 },
  { name: "TESLA", cars: 15, logo: logo1 },
  { name: "TOYOTA", cars: 54, logo: logo2 },
  { name: "VOLKSWAGEN", cars: 17, logo: logo4 },
  { name: "BMW", cars: 167, logo: logo3 },
  { name: "FERRARI", cars: 32, logo: logo6 },
  { name: "JEEP", cars: 32, logo: logo5 },
  { name: "KIA", cars: 110, logo: logo3 },
  { name: "LAMBORGHINI", cars: 81, logo: logo4 },
  { name: "LAND ROVER", cars: 164, logo: logo5 },
  { name: "MERCEDES BENZ", cars: 366, logo: logo1 },
];

const Marquee = () => {
  const navigate = useNavigate();
  const [hoveredBrand, setHoveredBrand] = useState(null);

  return (
    <div className="overflow-hidden bg-white shadow-lg mt-6">
      <div className="marquee-container flex space-x-6">
        <div
          className="marquee flex gap-3 py-2 px-2"
          style={{
            animation: hoveredBrand ? "none" : "scroll 30s linear infinite",
          }}
        >
          {carBrands.concat(carBrands).map((brand, index) => (
            <div
              className={`flex items-center gap-4 px-6 w-[200px] py-2 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                hoveredBrand === brand.name
                  ? "bg-[#7670FF] text-white shadow-2xl"
                  : "bg-white"
              }`}
              onMouseEnter={() => setHoveredBrand(brand.name)}
              onMouseLeave={() => setHoveredBrand(null)}
              onClick={() => navigate("/detail1")}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="size-8 object-contain"
              />
              <div className="font-semibold">
                <p className="text-xs md:text-sm">{brand.name}</p>
                <p
                  className={`text-[10px] md:text-xs ${
                    hoveredBrand === brand.name
                      ? "text-gray-200"
                      : "text-gray-500"
                  }`}
                >
                  {brand.cars} Cars
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
