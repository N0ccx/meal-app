import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import { IoChevronForwardOutline } from "react-icons/io5";

const Preferences = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8">
        <Navbar label="Preferences" link="/dashboard" />
        <div>
          <h2 className="text-xl font-semibold">Victor</h2>
          <p className="text-gray-600">Junior Cook</p>
          <button className="text-blue-500 hover:underline">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Free Token</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Daily Login</h3>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-gray-200 p-2 rounded text-center">
                Day {i + 1}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-4">
            Get a free token for every 7 daily logins
          </p>

          <div className="grid grid-cols-4 space-y-4">
            <div className=" bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">
                Complete a recipe for a free token
              </p>
              <p className="text-gray-600">
                Cook and upload a photo of your meal for a free token
              </p>
              <button className="span-cols-mt-2 bg-custom-gradient text-white px-4 py-2 rounded">
                Start
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Share on X for a free token</p>
              <p className="text-gray-600">
                Share Cleva Cook with your followers
              </p>
              <button className="span-cols-4mt-2 bg-custom-gradient text-white px-4 py-2 rounded">
                Share
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">
                Share on Facebook for a free token
              </p>
              <p className="text-gray-600">
                Share Cleva Cook with your friends on Facebook for a free token
              </p>
              <button className="mt-2 bg-custom-gradient text-white px-4 py-2 rounded">
                Share
              </button>
            </div>
          </div>

          <button className="items-center mt-4 text-custom-gradient hover:underline">
            See more
          </button>
        </div>
      </div>

      {/* Diet & Nutrition Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Diet & Nutrition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Diet Type</h3>
          <div className="space-y-4">
            <Link
              to="/weight-goals"
              className="flex items-center justify-between py-4 border-b border-gray-300"
            >
              <span className="font-semibold text-gray-700">
                Weight and Goals
              </span>

              <div className="flex items-center gap-2">
                <IoChevronForwardOutline size={18} className="text-gray-500" />
              </div>
            </Link>

            <Link
              to="/pf1"
              className="flex items-center justify-between py-4 border-b border-gray-300"
            >
              <span className="font-semibold text-gray-700">
                Cultural Preferences
              </span>

              <div className="flex items-center gap-2">
                <IoChevronForwardOutline size={18} className="text-gray-500" />
              </div>
            </Link>
            <Link
              to="/pf1"
              className="flex items-center justify-between py-4 border-b border-gray-300"
            >
              <span className="font-semibold text-gray-700">
                Health Preferences
              </span>

              <div className="flex items-center gap-2">
                <IoChevronForwardOutline size={18} className="text-gray-500" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Meal & Schedule Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Meal & Schedule</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Meal Layout / Settings</h3>
          <Link
              to="/reminders"
              className="flex items-center justify-between py-4 border-none border-gray-300"
            >
              <span className="font-semibold text-gray-700">
                Reminders
              </span>

              <div className="flex items-center gap-2">
                <IoChevronForwardOutline size={18} className="text-gray-500" />
              </div>
            </Link>
        </div>
      </div>

      {/* Account Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Account</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <div className="space-y-4">
            <button className="text-blue-500 hover:underline">
              Restart Tutorial/Walkthrough
            </button>
            <button className="text-blue-500 hover:underline">
              Send Feedback
            </button>
            <button className="text-red-500 hover:underline">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
