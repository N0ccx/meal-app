import React from "react";


const WeekDays = () => {
  const days = [
    { name: "Day 1", active: true },
    { name: "Day 2", active: true },
    { name: "Day 3", active: true },
    { name: "Day 4", active: true },
    { name: "Day 5", active: false },
    { name: "Day 6", active: false },
    { name: "Token", active: true, isToken: true },
  ];

  return (
    <div className="flex w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
      {days.map((day, index) => (
        <div
          key={index}
          className={`flex-1 flex items-center justify-center text-center text-sm h-[33px] 
          ${
            day.isToken
              ? "bg-custom-gradient text-white font-bold"
              : day.active
              ? "bg-custom-gradient text-white font-bold"
              : "bg-gray-300 text-white font-bold"
          } 
          border-r last:border-r-0 border-white/20`}
        >
          {day.name}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;
