import React, { useState } from "react";
import Navbar from "../components/NavBar";
import ToggleButton from "../components/app/ToggleButton";

const Reminders = () => {
  const [pantryItems, setPantryItems] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      <Navbar label="Reminders" link="/preferences" />
      <div className="space-y-2">
        <span className="block absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          =
        </span>

        <ToggleButton
          label="Time to cook (Meal Plan)"
          isActive={pantryItems}
          onToggle={() => setPantryItems(!pantryItems)}
        />
      </div>
    </div>
  );
};

export default Reminders;
