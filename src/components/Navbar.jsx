import React, { useState } from "react";
import logo from "../assets/logo.png";
import Register from "../assets/register.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex justify-between items-center mx-4 md:mx-8 pt-4 relative">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="logo h-[10vw] sm:h-[8vw] md:h-[6vw] lg:h-[5vw] xl:h-[4vw]"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4">
        {location.pathname !== "/signup" && location.pathname !== "/" && (
          <div className="flex items-center space-x-2">
            <img
              src={Register}
              alt="Register"
              className="size-7 lg:size-10 animate-rotate"
            />
            <Link
              to="/signup?query=yes"
              className="text-[#F800C0] font-semibold text-[2.5vw]  md:text-[1.5vw] xl:text-[1vw]"
            >
              Register with Motors
            </Link>
          </div>
        )}

        {location.pathname !== "/signup" && (
          <div className="gradient-border rounded-full text-[2.5vw]  md:text-[1.5vw] xl:text-[1vw] text-white flex items-center px-4 py-2 gap-4">
            <button className="hover:text-gray-300" onClick={() => navigate("/buy")}>Buy</button>
            <button
              onClick={() => navigate("/sell")}
              className="hover:text-gray-300"
            >
              Sell
            </button>
            <button className="hover:text-gray-300" onClick={() => navigate("/rent")}>Rent</button>
          </div>
        )}

        <button
          className="text-white px-4 py-2 rounded-full text-[2.5vw]  md:text-[1.5vw] xl:text-[1vw]"
          style={{
            background: "linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)",
            boxShadow: "0px 0px 8px 0px #4B4CFF",
          }}
        >
          Sign In
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-white rounded-lg shadow-lg p-4 w-56 z-10 flex flex-col gap-4 md:hidden text-black">
          {location.pathname !== "/signup" && location.pathname !== "/" && (
            <div className="flex items-center space-x-2">
              <img
                src={Register}
                alt="Register"
                className="size-6 animate-rotate"
              />
              <Link
                to="/signup?query=yes"
                className="text-[#F800C0] font-semibold text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Register with Motors
              </Link>
            </div>
          )}

          {location.pathname !== "/signup" && (
            <>
              <button onClick={() => { navigate("/buy");setMenuOpen(false)}}>Buy</button>
              <button onClick={() => { navigate("/sell"); setMenuOpen(false); }}>Sell</button>
              <button onClick={() => { navigate("/rent");setMenuOpen(false)}}>Rent</button>
            </>
          )}

          <button
            className="text-white px-4 py-2 rounded-full text-sm"
            style={{
              background: "linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)",
              boxShadow: "0px 0px 8px 0px #4B4CFF",
            }}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
