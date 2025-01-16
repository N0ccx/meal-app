import React, { useState } from "react";
import { diets } from "../assets/images";
import Next from "../components/button";
import Navbar from "../components/NavBar";

const DietPreferences = () => {
  const [selectedDiet, setSelectedDiet] = useState("");

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar label="Diet Type" link="/pf1" />
      <div className="flex flex-1 items-center justify-center">
        <div className="grid md:grid-cols-1 gap-2 p-4">
          {diets.map((diet, index) => (
            <div
              key={index}
              className={`bg-custom-gradient-0 py-4 flex justify-between px-2 items-center gap-4 border rounded-lg shadow-md h-[83px] w-[346px] overflow-hidden ${
                selectedDiet === diet.name
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-700"
              } cursor-pointer`}
              onClick={() => setSelectedDiet(diet.name)}
            >
              <img
                src={diet.icon}
                alt={`${diet.name} Icon`}
                className="w-1/2"
              />
              <p className="block font-semibold py-4 px-4 text-white">
                {diet.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Next label="Next" link="/health" />
    </div>
  );
};

export default DietPreferences;
