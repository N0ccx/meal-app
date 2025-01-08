import React from "react";

const InputField = ({ id, type, label, value, onChange, placeholder }) => (
  <div className="w-full">
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-gray-600"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-600"
    />
  </div>
);

export default InputField;
