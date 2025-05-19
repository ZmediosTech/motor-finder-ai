import React from "react";
import Register from "../assets/register.png";
import WelcomeVideo from "../assets/AudioFile/motornew.mp4";
import { useNavigate } from "react-router-dom";

const RegisterMotor = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center space-x-2 items- cursor-pointer">
        <div
          onClick={(e) => {
            e.preventDefault();
            navigate(`/signup?query=yes`);
          }}
        >
          <video
            style={{ width: "450px", height: "200px" }}
            className="object-cover"
            autoPlay
            muted
            loop
          >
            <source src={WelcomeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
export default RegisterMotor;
