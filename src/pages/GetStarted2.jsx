import React from "react";
import Social from "../components/socialandbuttons";
import { logo} from "../assets/images";
import { Link } from "react-router-dom";

const GetStarted2 = () => {
  return (
    <>
    <div className="flex flex-col justify-between items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center mt-20">
        <img src={logo} alt="Logo" className="w-[247px] h-auto mb-4" />
        <p className="text-gray-700 text-sm text-center">
          AI Powered Nutrition & Meal Prep Partner
        </p>
      </div>
    <div className="w-[337px] space-y-4 mt-2">
      <Link
          to="/register"
          className="block w-full bg-custom-gradient text-white font-semibold text-center py-2 rounded-md hover:bg-red-700 transition"
        >
          Sign Up with Email
        </Link>
      <Social />
      <p className="text-center text-gray-600 text-sm mt-6">
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
    </>
  );
};

export default GetStarted2;
