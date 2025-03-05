import React, { useState } from "react";
import { diets } from "../assets/images";
import Next from "../components/button";
import Navbar from "../components/NavBar";

const DietPreferences = () => {
  const [selectedDiet, setSelectedDiet] = useState("");

  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar label="Diet Type" link="/pf1" />
      <div className="flex flex-1 items-center justify-center">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 p-4">
          {diets.map((diet, index) => (
            <div
              key={index}
              className={`relative bg-custom-gradient-0 py-4 flex justify-between px-2 items-center gap-4 border rounded-lg shadow-md h-[83px] w-[346px] overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                selectedDiet === diet.name
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setSelectedDiet(diet.name)}
            >
              <img
                src={diet.icon}
                alt={`${diet.name} Icon`}
                className="w-1/2 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="block font-semibold py-4 px-4">
                {diet.name}
              </p>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
          ))}
        </div>
      </div>

      <Next label="Next" link="/health" />
    </div>
  );
};

export default DietPreferences;
