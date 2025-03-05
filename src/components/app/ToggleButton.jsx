import React from "react";

const ToggleButton = ({ label, isActive, onToggle }) => {
    return (
    <div className="flex justify-between items-center w-[344px] mb-4">
      <span className="text-white text-sm">{label}</span>
      <button
        onClick={onToggle}
        className={`w-12 h-6 rounded-full ${
          isActive ? "bg-custom-gradient" : "bg-gray-400"
        } relative`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
            isActive ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  )}

export default ToggleButton;