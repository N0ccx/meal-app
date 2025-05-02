import React from "react";
import { appleIcon, facebookIcon, googleIcon } from "../assets/images";

const providers = [
  { icon: googleIcon, label: "Google" },
  { icon: appleIcon, label: "Apple" },
  { icon: facebookIcon, label: "Facebook" },
];

const Social = () => {
  return (
    <div className="space y-4">
      {providers.map((provider) => (
        <button
          key={provider.label}
          className="flex items-center justify-between w-full p-3 bg-white border border-gray-300 rounded-md"
        >
          <img src={provider.icon} className="w-5 h-5 mr-2" />
          <span className="text-gray-700 font-semibold mr-20">
            Login with {provider.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Social;
