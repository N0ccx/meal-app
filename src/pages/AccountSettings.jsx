import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
import Navbar from "../components/NavBar";

const Accounts = () => {
  const userEmail = "victor@example.com";

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar label="Account Settings" link="/" />

      <div className="p-4 bg-white shadow-md rounded-lg mx-4 mt-6">
        <Link
          to="/change-email"
          className="flex items-center justify-between py-4 border-b border-gray-300"
        >
          <span className="text-sm font-semibold text-gray-700">Email</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{userEmail}</span>
            <IoChevronForwardOutline size={18} className="text-gray-500" />
          </div>
        </Link>

        <Link
          to="/change-password"
          className="flex items-center justify-between py-4"
        >
          <span className="text-sm font-semibold text-gray-700">
            Change Password
          </span>
          <IoChevronForwardOutline size={18} className="text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

export default Accounts;
