import React, { useState } from "react";
import { Link } from "react-router-dom";

const PhysicalAttributes = () => {
  const [selectedSex, setSelectedSex] = useState("");
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");

  const feetOptions = Array.from({ length: 8 }, (_, i) => `${i + 1} ft`);
  const inchesOptions = Array.from({ length: 12 }, (_, i) => `${i} in`);
  const weightOptions = Array.from({ length: 300 }, (_, i) => `${i + 30} kg`);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
        <Link to="/get-started" className="text-lg font-semibold text-gray-600">
          &#8592;
        </Link>
        <h2 className="text-lg font-bold text-gray-800">Physical Attributes</h2>
        <div></div>
      </div>

      <form className="flex flex-col items-center px-4 mt-4 space-y-6">
        {/* Biological Sex */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Biological Sex
          </label>
          <div className="flex justify-between">
            {["Female", "Male", "Others"].map((sex) => (
              <button
                key={sex}
                type="button"
                className={`w-[92px] py-2 text-sm font-semibold rounded-md ${
                  selectedSex === sex
                    ? "bg-violet-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedSex(sex)}
              >
                {sex}
              </button>
            ))}
          </div>
        </div>

        {/* Age */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Age
          </label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
          >
            <option value="" disabled>
              Select your age
            </option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Height */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Height
          </label>
          <div className="flex space-x-4">
            <select
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              className="w-[92px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
            >
              <option value="" disabled>
                ft
              </option>
              {feetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
              className="w-[92px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
            >
              <option value="" disabled>
                in
              </option>
              {inchesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Weight */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Weight
          </label>
          <select
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
          >
            <option value="" disabled>
              Select weight
            </option>
            {weightOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Body Fat */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Body Fat
          </label>
          <div className="flex justify-between">
            {["Low", "Medium", "High"].map((fat) => (
              <button
                key={fat}
                type="button"
                className={`w-[92px] py-2 text-sm font-semibold rounded-md ${
                  bodyFat === fat
                    ? "bg-violet-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setBodyFat(fat)}
              >
                {fat}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Link
          to="/pf1"
          className="w-full max-w-md py-2 text-center text-white bg-violet-600 rounded-md hover:opacity-90"
        >
          Next
        </Link>
      </form>
    </div>
  );
};

export default PhysicalAttributes;
