import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Next from "../components/button";
import SelectionGroup from "../components/SelectionGroup";

const PhysicalAttributes = () => {
  const [selectedSex, setSelectedSex] = useState("");
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [errors, setErrors] = useState({});

  const feetOptions = Array.from({ length: 8 }, (_, i) => `${i + 1} ft`);
  const inchesOptions = Array.from({ length: 12 }, (_, i) => `${i} in`);
  const weightOptions = Array.from({ length: 300 }, (_, i) => `${i + 30} kg`);

  const validateForm = () => {
    const newErrors = {};

    if (!selectedSex) {
      newErrors.selectedSex = "Please select your biological sex.";
    }
    if (!age) {
      newErrors.age = "Please select your age.";
    }
    if (!heightFeet) {
      newErrors.heightFeet = "Please select your height (feet).";
    }
    if (!heightInches) {
      newErrors.heightInches = "Please select your height (inches).";
    }
    if (!weight) {
      newErrors.weight = "Please select your weight.";
    }
    if (!bodyFat) {
      newErrors.bodyFat = "Please select your body fat level.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation passes, proceed to save or navigate
      console.log("Form submitted successfully!");
      console.log("Sex:", selectedSex);
      console.log("Height:", heightFeet, heightInches);
      console.log("Weight:", weight);
      console.log("Body Fat:", bodyFat);
      console.log("Age:", age);
      // Navigate to the next page or save data
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Navbar */}
      <Navbar label="Physical Attributes" link="/register" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-4 mt-4 space-y-6"
      >
        {/* Biological Sex */}
        <div className="w-full max-w-md">
          <SelectionGroup
            label="Biological Sex"
            options={["Female", "Male", "Others"]}
            selectedOption={selectedSex}
            onSelect={setSelectedSex}
            columns={3}
          />
          {errors.selectedSex && (
            <p className="text-sm text-red-500 mt-1">{errors.selectedSex}</p>
          )}
        </div>

        {/* Age */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Age
          </label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`w-full px-3 py-2 border ${
              errors.age ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring focus:ring-red-600`}
          >
            <option value="" disabled>
              Select your age
            </option>
            {Array.from({ length: 83 }, (_, i) => (
              <option key={i} value={i + 18}>
                {i + 18}
              </option>
            ))}
          </select>
          {errors.age && (
            <p className="text-sm text-red-500 mt-1">{errors.age}</p>
          )}
        </div>

        {/* Height */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Height
          </label>
          <div className="flex space-x-4">
            <div>
              <select
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                className={`w-[92px] px-3 py-2 border ${
                  errors.heightFeet ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-red-600`}
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
              {errors.heightFeet && (
                <p className="text-sm text-red-500 mt-1">{errors.heightFeet}</p>
              )}
            </div>
            <div>
              <select
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                className={`w-[92px] px-3 py-2 border ${
                  errors.heightInches ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-red-600`}
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
              {errors.heightInches && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.heightInches}
                </p>
              )}
            </div>
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
            className={`w-[92px] px-3 py-2 border ${
              errors.weight ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring focus:ring-red-600`}
          >
            <option value="" disabled>
              kg
            </option>
            {weightOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.weight && (
            <p className="text-sm text-red-500 mt-1">{errors.weight}</p>
          )}
        </div>

        {/* Body Fat */}
        <div className="w-full max-w-md">
          <SelectionGroup
            label="Body Fat"
            options={["Low", "Medium", "High"]}
            selectedOption={bodyFat}
            onSelect={setBodyFat}
            columns={3}
          />
          {errors.bodyFat && (
            <p className="text-sm text-red-500 mt-1">{errors.bodyFat}</p>
          )}
        </div>
      </form>

      {/* Next Button */}
      <Next label="Next" link="/ph2" onClick={handleSubmit} />
    </div>
  );
};

export default PhysicalAttributes;