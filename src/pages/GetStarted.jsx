import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
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
        <Link
          to="/get-started2"
          className="block w-full bg-custom-gradient text-white font-semibold text-center py-2 rounded-md hover:bg-red-700 transition"
        >
          Get Started
        </Link>
        <p className="text-center text-gray-600 text-sm mt-4">
          Already a Member?{" "}
          <Link
            to="/signin"
            className="text-gray-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
