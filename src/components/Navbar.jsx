import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex md:h-12 justify-between items-center mx-4 md:mx-8 mt-6">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-7 md:h-10 lg:h-12" />
      </Link>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="gradient-border text-[10px] md:text-sm lg:text-base text-white flex items-center space-x-2 md:space-x-4 px-2 md:px-4 py-1 md:py-2">
          <button className="hover:text-gray-300">Buy</button>
          <button
            onClick={() => navigate("/sell")}
            className="hover:text-gray-300"
          >
            Sell
          </button>
          <button className="hover:text-gray-300">Rent</button>
        </div>

        {/* Sign In Button */}
        <button
          className="text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-[10px] md:text-sm lg:text-base"
          style={{
            background: "linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)",
            boxShadow: "0px 0px 8px 0px #4B4CFF",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
