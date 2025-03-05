import React from "react";


const CalendarSection = ({ calendarItems }) => {
  
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {calendarItems.map((item, index) => {
        const isMiddle = index === 2; // Highlight middle item
        const isDefault = index < 2; // Default style for the first two items

        const boxStyles = isMiddle
          ? "h-[121px] bg-custom-gradient text-white"
          : isDefault
          ? "h-[91px] bg-gray-100 text-gray-700"
          : "h-[91px] bg-yellow-100 text-gray-900";

        const dayTextColor = isDefault || isMiddle ? "text-white" : "text-red-600";

        return (
          <div
            key={index}
            className={`flex flex-col justify-center items-center border rounded-lg shadow-md ${boxStyles}`}
          >
            <p className={`text-sm font-semibold ${dayTextColor}`}>
              {item.day}
            </p>
            <p className="text-xs font-medium">{item.month}</p>
            <p className="text-2xl font-bold">{item.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarSection;
