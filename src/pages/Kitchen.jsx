import React from "react";
import Navbar from "../components/app/TopNav";
import Next from "../components/button";
import { kitchenItems } from "../assets/images";
import BottomNav from "../components/app/BottomNav";

const MyKitchen = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <Navbar label="Kitchen" tokens={15} showNotification={true} />

        <div className="flex flex-col items-center px-4 mt-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {kitchenItems.map((item, index) => (
              <div
                key={index}
                className="w-[350px] h-[128px] relative border border-white rounded-lg shadow-md flex items-center justify-center text-center"
              >
                <div className="flex flex-col">
                  <p className="absolute bottom-0 left-4 text-white font-bold text-[15px]">
                    {item.name}
                  </p>
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-full h-screen object-contain"
                  />
                </div>
              </div>
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
