import React from "react";
import { eyeIcon, eyeOffIcon } from "../assets/images";

const PasswordField = ({
  id,
  label,
  value,
  onChange,
  isVisible,
  toggleVisibility,
  placeholder,
}) => (
  <div className="relative w-full">
    <label htmlFor={id} className="block text-sm font-semibold text-gray-600">
      {label}
    </label>
    <input
      type={isVisible ? "text" : "password"}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full border-b border-gray-300 text-sm focus:outline-none focus:border-red-600"
    />
    <img
      src={isVisible ? eyeOffIcon : eyeIcon}
      alt="Toggle Password Visibility"
      onClick={toggleVisibility}
      className="mt-2.5 absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
    />
  </div>
);

export default PasswordField;
