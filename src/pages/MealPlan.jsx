import React from "react";
import Navbar from "../components/app/TopNav";
import CalendarSection from "../components/app/CalenderSection";
import { generateCalendarItems, personalize, meals } from "../assets/images";
import { Link } from "react-router-dom";
import MealCard from "../components/app/MealCard";
import Next from "../components/button";
import BottomNav from "../components/app/BottomNav";

const MealPlan = () => {
  const calendarItems = generateCalendarItems();
  return (
    <div className="flex flex-col h-[1023px] bg-white">
      <Navbar label="Meal Plan" tokens={15} showNotification={true} />
      <div className="items-center">
        <img
          src={personalize}
          alt={personalize}
          className="mx-auto items-center py-5"
        />
      </div>
      <CalendarSection calendarItems={calendarItems} />{" "}
      <div className="flex justify-between items-center px-4">
        <h3 className="text-lg font-bold ml-2">Today's Meal</h3>
        <Link
          to="/today-layout"
          className="text-sm text-red-600 hover:underline"
        >
          Today's Layout
        </Link>
      </div>
      <div className="p-4 grid gap-4">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
      <Next label="Generate New Recipe" link="/generate" />
      <BottomNav />
    </div>
  );
};

export default MealPlan;
