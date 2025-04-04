import React from "react";
import Register from "../assets/register.png";
import { useNavigate } from "react-router-dom";

const RegisterMotor = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center space-x-2 items-center">
        <img
          src={Register}
          alt="Register"
          className="size-[4vw] md:size-[3vw] lg:size-[3vw] xl:size-[2vw] animate-rotate"
        />
        <a
          onClick={() => navigate("/signup")}
          className="text-[#F800C0] font-semibold text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1vw]"
        >
          Register with Motors
        </a>
      </div>
    </div>
  )
}
export default RegisterMotor;