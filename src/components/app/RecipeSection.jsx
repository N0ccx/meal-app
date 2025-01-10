// RecipeSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useImages } from "../../context/ImageContext";

const RecipeSection = ({ title, link, items }) => {
  const images = useImages();

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center px-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <Link to={link} className="text-sm text-violet-600 hover:underline">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-4 bg-white shadow rounded-lg"
          >
            <img
              src={images[item.toLowerCase()]}
              alt={item}
              className="w-20 h-20 object-cover"
            />
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSection;
