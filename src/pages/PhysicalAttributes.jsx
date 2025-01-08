import React, { useState } from "react";
import { Link } from "react-router-dom";
import Next from "../components/button";
import SelectionGroup from "../components/SelectionGroup";

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
        <SelectionGroup
          label="Biological Sex"
          options={["Female", "Male", "Others"]}
          selectedOption={selectedSex}
          onSelect={setSelectedSex}
        />

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

        {/* Budget */}
        <SelectionGroup
          label="Body Fat"
          options={["Low", "Medium", "High"]}
          selectedOption={bodyFat}
          onSelect={setBodyFat}
        />
      </form>
      <Next label="Next" link="/pf1" />
    </div>
  );
};

export default PhysicalAttributes;
