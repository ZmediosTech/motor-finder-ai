import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-end mx-4 md:mx-8 mt-6">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo h-[10vw] sm:h-[8vw] md:h-[6vw] lg:h-[5vw] xl:h-[4vw]" />
      </Link>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <div className="gradient-border rounded-full text-[2.5vw] md:text-[2vw] lg:text-[2vw] xl:text-[1vw] text-white flex items-center px-2 md:px-4 py-1 md:py-2 gap-4">
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
          className="text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-[2.5vw] md:text-[2vw] lg:text-[2vw] xl:text-[1vw]"
          style={{
            background: "linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)",
            boxShadow: "0px 0px 8px 0px #4B4CFF",
            // border: "none",
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
