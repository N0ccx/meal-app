import React from "react";
import { logo } from "../assets/images";
import Next from "../components/button";

const GetStarted = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="flex flex-col items-center mt-20">
        <img src={logo} alt="logo" className="w-[247px] h-auto mb-4" />
        <p className="text-gray-700 text-sm text-center">
          AI Powered Nutrition & Meal Prep Partner
        </p>
      </div>``

      {/* Bottom Section */}
      <div className="w-[337px] px-4 mb-10">
        <Next label="Get Started" link="/get-started" />
        
      </div>
    </div>
  );
};

export default GetStarted;
