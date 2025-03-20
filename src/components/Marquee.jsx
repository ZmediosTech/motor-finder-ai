import React from 'react'
import logo1 from "../assets/logo2.png";
import logo2 from "../assets/t6.png";
import logo3 from "../assets/k.png";
import logo4 from "../assets/l9.png";
import logo5 from "../assets/j8.png";
import logo6 from "../assets/f7.png";
import logo7 from "../assets/rr.png";
const carBrands = [
    { name: "NISSAN", cars: 147, logo:logo4 },
    { name: "PORSCHE", cars: 79, logo: logo2},
    { name: "ROLLS ROYCE", cars: 31, logo: logo7 },
    { name: "TESLA", cars: 15, logo:logo1 },
    { name: "TOYOTA", cars: 54, logo: logo2 },
    { name: "VOLKSWAGEN", cars: 17, logo: logo4 },
    { name: "BMW", cars: 167, logo: logo3 },
    { name: "FERRARI", cars: 32, logo: logo6 },
    { name: "JEEP", cars: 32, logo: logo5},
    { name: "KIA", cars: 110, logo: logo3 },
    { name: "LAMBORGHINI", cars: 81, logo: logo4 },
    { name: "LAND ROVER", cars: 164, logo: logo5},
    { name: "MERCEDES BENZ", cars: 366, logo: logo1 },
  ];
const Marquee = () => {
  return (
    <div className="overflow-hidden bg-white py-2 shadow-lg mt-6">
    <div className="marquee-container flex space-x-6">
      <div className="marquee flex space-x-6">
        {carBrands.concat(carBrands).map((brand, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 bg-white px-4 py-0.5 rounded-lg shadow-lg w-auto"
          >
            <img src={brand.logo} alt={brand.name} className="size-6 object-contain" />
            <div className="text-gray-700 font-semibold">
              <p className="text-xs">{brand.name}</p>
              <p className="text-[8px] md:text-xs text-gray-500">{brand.cars} Cars</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Marquee