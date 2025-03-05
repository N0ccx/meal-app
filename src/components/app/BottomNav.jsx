import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../assets/images";


const BottomNav = () => (
  <div className="w-full fixed bottom-0 bg-white shadow-t px-4 py-2">
    <div className="flex justify-between">
      {navItems.map(({ label, icon, link }, index) => (
        <Link
          key={index}
          to={link}
          className="flex flex-col items-center space-y-1"
        >
          <img src={icon} alt={label} className="w-1/2 h-6 hover:bg-red-400" />
          <p className="text-xs text-gray-600">{label}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default BottomNav;
