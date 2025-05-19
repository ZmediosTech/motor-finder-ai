import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Register from "../assets/register.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  console.log(isLoggedIn, "isLoggedIn");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    // Listen for login/logout events
    window.addEventListener("authChanged", checkAuth);

    return () => {
      window.removeEventListener("authChanged", checkAuth);
    };
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      window.dispatchEvent(new Event("authChanged")); // notify Navbar
    } else {
      window.dispatchEvent(new Event("authChanged")); // notify Navbar

      setIsOpen(true);
      // navigate("/signup?query=yes");
    }
  };

  const localStorageToken = localStorage.getItem("token");

  useEffect(() => {
    if (localStorageToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    // setLoading(true);
    // setError("");

    try {
      const response = await fetch(`${API_URL}/auth/login_motor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      if (data.status == "SUCCESS") {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.data?.access_token);
      window.dispatchEvent(new Event("authChanged")); // notify Navbar

        setIsOpen(false);
        setEmail("");
        setPassword("");
        setError("");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
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
            <button
              className="hover:text-gray-300"
              onClick={() => navigate("/buy")}
            >
              Buy
            </button>
            <button
              onClick={() => navigate("/sell")}
              className="hover:text-gray-300"
            >
              Sell
            </button>
            <button
              className="hover:text-gray-300"
              onClick={() => navigate("/rent")}
            >
              Rent
            </button>
          </div>
        )}

        <button
          onClick={handleAuthClick}
          className="text-white px-4 py-2 rounded-full text-[2.5vw]  md:text-[1.5vw] xl:text-[1vw]"
          style={{
            background: "linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)",
            boxShadow: "0px 0px 8px 0px #4B4CFF",
          }}
        >
          {isLoggedIn ? "Logout" : "Sign In"}
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
              <button
                onClick={() => {
                  navigate("/buy");
                  setMenuOpen(false);
                }}
              >
                Buy
              </button>
              <button
                onClick={() => {
                  navigate("/sell");
                  setMenuOpen(false);
                }}
              >
                Sell
              </button>
              <button
                onClick={() => {
                  navigate("/rent");
                  setMenuOpen(false);
                }}
              >
                Rent
              </button>
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

      {/* login modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000000a6] bg-opacity-50 z-50">
          <div className="bg-[#00013c] rounded-xl p-6 w-full max-w-md shadow-lg relative  flex flex-col">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#7670FF] hover:text-gray-500 text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#7670FF]">
              Login
            </h2>

            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-grow gap-4 justify-between"
            >
              {/* Input fields area */}
              <div className="flex flex-col gap-7">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-[#4b4cff] box-shadow rounded-full px-3 py-2 w-full text-white gradient-border"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-[#4b4cff] box-shadow rounded-full px-3 py-2 w-full text-white gradient-border"
                  required
                />
              </div>

              {/* Submit button area */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-b from-[#FE8A70] to-[#F800C0] text-white py-3 px-4 rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Logging in..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
