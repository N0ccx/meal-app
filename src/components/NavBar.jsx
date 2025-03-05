import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ label, link }) => {
  return (
    <div className="flex items-start justify-between px-4 py-3 bg-white border-b">
        <Link to={link} className="text-4xl font-bold text-gray-600">
          &#8592;
        </Link>
        <h2 className="text-lg font-bold text-gray-800">
          {label}
        </h2>
        <div></div>
      </div>
  );
};

export default Navbar;
