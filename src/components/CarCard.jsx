import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo8.png";
import { Heart } from "lucide-react";

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#010122] rounded-2xl overflow-hidden shadow-lg text-white relative">
      {/* Car Image */}
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-50 object-cover"
        />
        <button className="absolute top-4 right-4 p-1.5">
          <Heart className="w-5 h-5" fill="#fff" />
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
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="md:text-lg font-semibold mb-2">{car.name}</h3>
            <p className="text-sm font-light">{car.edition}</p>
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
};

export default CarCard;
