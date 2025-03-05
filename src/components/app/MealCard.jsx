import React from "react";
import { BsStars } from "react-icons/bs";
import { favorite } from "../../assets/images";

const MealCard = ({ meal }) => {
  const { name, details, imageSrc } = meal;

  return (
    <div className="grid grid-cols-12 border rounded-lg gap-4 py-2 px-4 border-gray-300 shadow-md">
      <div className="flex flex-col items-center col-span-2">
        <img src={imageSrc} alt={imageSrc} className="w-12 h-12 object-cover" />
        <h1 className="text-sm font-bold mt-2">Breakfast</h1>
        <p className="text-xxs mt-1">
          <span>6-9:30</span>
          <span className="ml-1">AM</span>
        </p>
      </div>

      <div className="flex flex-col col-span-10 gap-4">
        <div className="flex justify-between items-center text-sm font-bold">
          <h1>{name}</h1>
          <span className="text-red-600">
            <img src={favorite} alt={favorite} />
          </span>
        </div>

        <div className="flex gap-4 text-xs">
          <div>
            <span className="text-xxs">Kal</span>
            <p className="font-bold">{details.kal}</p>
          </div>
          <div>
            <span className="text-xxs">Cost</span>
            <p className="font-bold">{details.cost}</p>
          </div>
          <div>
            <span className="text-xxs">Prep Time</span>
            <p className="font-bold">{details.prepTime}</p>
          </div>
          <div>
            <span className="text-xxs">Rating</span>
            <p className="font-bold">{details.rating}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <select className="w-32 py-1 px-2 border rounded-md text-sm">
            <option value="1">1 Serving</option>
            <option value="2">2 Servings</option>
            <option value="3">3 Servings</option>
          </select>
          <button className="flex items-center gap-2 bg-custom-gradient text-white font-semibold hover:bg-gray-200 px-3 py-1 rounded-md text-sm">
            Swap Meal
            <BsStars className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
