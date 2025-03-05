import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/app/TopNav";
import Next from "../components/button";
import { kitchenItems } from "../assets/images";
import BottomNav from "../components/app/BottomNav";

const MyKitchen = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <Navbar label="Kitchen" tokens={15} showNotification={true} />

        <div className="flex flex-col items-center px-4 mt-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {kitchenItems.map(({ name, imageSrc, link }, index) => (
              <Link
                to={link}
                key={index}
                className="w-[350px] h-[128px] relative border border-white rounded-lg shadow-md flex items-center justify-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex flex-col">
                  <p className="absolute bottom-0 left-4 text-white font-bold text-[15px]">
                    {name}
                  </p>
                  <img
                    src={imageSrc}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Next label="Generate New Recipe" link="/generate" />
        <div className="mt-8 py-4">
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default MyKitchen;
