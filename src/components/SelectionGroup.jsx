import React from "react";

const SelectionGroup = ({ label, options, selectedOption, onSelect }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block mb-2 text-sm font-semibold text-gray-600">
        {label}
      </label>
      <div className="flex gap-x-4">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`flex-grow py-2 text-sm font-semibold rounded-md ${
              selectedOption === option
                ? "bg-violet-600 text-white"
                : "bg-gray-200 text-gray-700"
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
