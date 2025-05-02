import React, { useState } from "react";
import Navbar from "../components/NavBar";
import ToggleButton from "../components/app/ToggleButton";

const Reminders = () => {
  const [pantryItems, setPantryItems] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navbar label="Reminders" link="/preferences" />
      <div className="space-y-4">
        <div className="relative bg-white p-4 rounded-lg shadow-md transition-transform duration-300 transform">
          Time to cook(Meal Plan)
        </div>
        <span className="block absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          =
        </span>

        <span className="block absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          ...
        </span>
      </div>
    </div>
  );
};

export default Reminders;
