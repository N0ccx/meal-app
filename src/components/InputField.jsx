import React from "react";

const InputField = ({
  id,
  type = "text", // Default type
  label,
  value,
  onChange,
  placeholder = "Enter text...", // Default placeholder
  className = "",
}) => (
  <div className="w-full">
    {label && (
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-600 mb-1"
      >
        {label}
      </label>
    )}
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={`w-full border-b border-gray-300 text-2xl focus:outline-none focus:border-red-600 ${className}`}
    />
  </div>
);

export default InputField;
