import React from "react";

const SelectionGroup = ({ label, options, selectedOption, onSelect, columns = 3 }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block mb-2 text-sm font-semibold text-gray-600">{label}</label>
      <div
        className={`grid gap-2`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, // Set dynamic columns
        }}
      >
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`flex justify-center items-center px-3 py-2 text-sm font-semibold rounded-md ${
              selectedOption === option
                ? "bg-violet-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionGroup;
