import React from "react";
import { Link } from "react-router-dom";

const RecipeSection = ({ title, link, items }) => {
  return (
    <div className="mt-8">
      {/* Section Header */}
      <div className="flex justify-between items-center px-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <Link to={link} className="text-sm text-violet-600 hover:underline">
          See All
        </Link>
      </div>

      {/* Items Grid */}
      <div className="grid grid-flow-col md:auto-cols-[150px] overflow-x-scroll gap-4 mt-4 px-4">
        {items.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center bg-white shadow rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <img
              src={item.imageSrc}
              alt={item.name}
              className="w-[141px] h-[96px] object-cover"
            />
            <p className="text-sm font-medium text-gray-700 mt-2">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecipeSection;
