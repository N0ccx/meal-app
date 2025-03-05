import React from "react";
import { BsStars } from "react-icons/bs";
import { notification } from "../../assets/images";

const Navbar = ({ label, icon, time, tokens = 10, showNotification = true }) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
      <div className="flex flex-col">
        {label && <h2 className="text-lg font-bold text-gray-800">{label}</h2>}
        {icon && <img src={imgsrc} className="w-4 h-4" />}
        {time && <p className="text-sm text-gray-500">{time}</p>}
      </div>

      {showNotification && (
        <div className="flex items-center gap-4">

          <div className="flex items-center text-white bg-custom-gradient px-3 py-1 rounded-md font-semibold">
            <span>{tokens}</span>
            <BsStars className="ml-1 text-white" />
          </div>
          <button className="relative">
            <img
              src={notification}
              alt="Notification"
              className="w-6 h-6 cursor-pointer"
            />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;