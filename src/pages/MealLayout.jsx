import React, { useState } from "react";
import Navbar from "../components/NavBar";

const MealLayout = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const meals = ["Breakfast", "Lunch", "Dinner", "Brunch", "Dessert"];

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <Navbar label="Meal Layout" link="/meal-plan" />

      <p className="justify-center mb-4 items-center">Tap drag and arrange meal in the order you want them to appear on your meal plan</p>

      <div className="space-y-4">
        {meals.map((meal, index) => (
          <div
            key={index}
            className={`relative bg-white p-4 rounded-lg shadow-md transition-transform duration-300 transform ${
              selectedMeal === meal ? "-translate-y-2" : ""
            }`}
            style={{ paddingLeft: "60px" }}
            onClick={() => handleMealClick(meal)}
          >
            <span className="block absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              =
            </span>

            <span className="text-lg font-semibold">{meal}</span>

            <span className="block absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              ...
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealLayout;
