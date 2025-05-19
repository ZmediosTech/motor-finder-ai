import React, { useState, useEffect, useRef } from "react";
import { Triangle, Filter } from "lucide-react";

const SortFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort & Filter");

  const dropdownRef = useRef(null);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Set selected option and close dropdown
  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center box-shadow px-4 py-2.5 lg:py-2 2xl:text-[1vw] lg:text-lg font-medium text-white rounded-full border border-[#5B42FF] bg-gradient-to-r from-[#7670FF] to-[#5B42FF]"
    >
      <div
        className="flex items-center justify-between cursor-pointer xl:gap-3 lg:gap-2 gap-2"
        onClick={toggleDropdown}
      >
        <span className="hidden md:block">{selectedOption}</span>

        {/* Filter Icon on Mobile (hidden on md and up) */}
        <Filter className="block md:hidden text-white" fill="#fff" size={17} />

        {/* Triangle Icon on Large Screens (hidden on mobile) */}
        <Triangle
          className={`rotate-180 text-white md:block hidden ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="#fff"
          size={15}
        />
      </div>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-10 mt-2 w-[calc(100%-1rem)] min-w-max bg-white text-black rounded-lg shadow-lg z-10 xl:text-[1vw] lg:text-lg transition-all duration-300 ease-in-out">
          <div
            className="p-2 hover:bg-[#f5f5f5] cursor-pointer rounded-lg"
            onClick={() => handleOptionClick("Sort & Filter")}
          >
            Sort & Filter
          </div>
          <div
            className="p-2 hover:bg-[#f5f5f5] cursor-pointer"
            onClick={() => handleOptionClick("Price: Low to High")}
          >
            Price: Low to High
          </div>
          <div
            className="p-2 hover:bg-[#f5f5f5] cursor-pointer"
            onClick={() => handleOptionClick("Price: High to Low")}
          >
            Price: High to Low
          </div>
          <div
            className="p-2 hover:bg-[#f5f5f5] cursor-pointer rounded-lg"
            onClick={() => handleOptionClick("Most Popular")}
          >
            Most Popular
          </div>
        </div>
      )}
    </div>
  );
};

export default SortFilter;
