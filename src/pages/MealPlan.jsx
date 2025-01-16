import React from "react";
import Navbar from "../components/app/TopNav";
import CalendarSection from "../components/app/CalenderSection";
import { generateCalendarItems } from "../assets/images";

const MealPlan = () => {
  const calendarItems = generateCalendarItems();
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar label="Meal Plan" tokens={15} showNotification={true} />
      <CalendarSection calendarItems={calendarItems} />
    </div>
  );
};

export default MealPlan;
