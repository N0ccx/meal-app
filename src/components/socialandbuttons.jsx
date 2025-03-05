import React from "react";
import { appleIcon, facebookIcon, googleIcon } from "../assets/images";

const Social = () => {
  return (
    <>
      <button className="flex items-center justify-center w-full p-3 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition">
        <img src={googleIcon} alt="Google Icon" className="w-5 h-5 mr-2" />
        <span className="text-gray-700 font-semibold">Login with Google</span>
      </button>
      <button className="flex items-center justify-center w-full p-3 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition">
        <img src={facebookIcon} alt="Facebook Icon" className="w-5 h-5 mr-2" />
        <span className="text-gray-700 font-semibold">Login with Facebook</span>
      </button>
      <button className="flex items-center justify-center w-full p-3 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition">
        <img src={appleIcon} alt="Apple Icon" className="w-5 h-5 mr-2" />
        <span className="text-gray-700 font-semibold">Login with Apple</span>
      </button>
    </>
  );
};

export default Social;
