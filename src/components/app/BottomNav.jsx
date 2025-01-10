import React from "react";
import { Link } from "react-router-dom";
import {
  today,
  meal,
  kitchen,
  nutrition,
  prefs,
} from "../../assets/images";

const navItems = [
  { label: "Today", icon: today, link: "/today" },
  { label: "Meal Plan", icon: meal, link: "/meal-plan" },
  { label: "My Kitchen", icon: kitchen, link: "/my-kitchen" },
  { label: "Nutrition", icon: nutrition, link: "/nutrition" },
  { label: "Preferences", icon: prefs, link: "/preferences" },
];

const BottomNav = () => (
  <div className="mt-auto bg-white shadow-t px-4 py-2">
    <div className="flex justify-between">
      {navItems.map(({ label, icon, link }, index) => (
        <Link
          key={index}
          to={link}
          className="flex flex-col items-center space-y-1"
        >
          <img src={icon} alt={label} className="w-6 h-6" />
          <p className="text-xs text-gray-600">{label}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default BottomNav;
