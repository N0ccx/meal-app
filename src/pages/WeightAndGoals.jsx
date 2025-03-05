import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Next from "../components/button";
import SelectionGroup from "../components/SelectionGroup";

const WeightAndGoals = () => {
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [goal, setGoal] = useState("");
  const [weightGoal, setWeightGoal] = useState("");
  const [errors, setErrors] = useState({}); // State to track validation errors

  const feetOptions = Array.from({ length: 8 }, (_, i) => `${i + 1} ft`);
  const inchesOptions = Array.from({ length: 12 }, (_, i) => `${i} in`);
  const weightOptions = Array.from({ length: 300 }, (_, i) => `${i + 30} kg`);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

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
    if (!goal) {
      newErrors.goal = "Please select your goal.";
    }
    if (!weightGoal) {
      newErrors.weightGoal = "Please select your weight goal.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation passes, proceed to save or navigate
      console.log("Form submitted successfully!");
      console.log("Height:", heightFeet, heightInches);
      console.log("Weight:", weight);
      console.log("Body Fat:", bodyFat);
      console.log("Goal:", goal);
      console.log("Weight Goal:", weightGoal);
      // Navigate to the next page or save data
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar label="Weight and Goals" link="/preferences" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-4 mt-4 space-y-6"
      >
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

        <div className="w-full max-w-md">
          <SelectionGroup
            label="Goal"
            options={[
              "Lose Fat",
              "Maintain Weight",
              "Add Weight",
              "Build Muscle",
              "Set Exact Goal",
            ]}
            selectedOption={goal}
            onSelect={setGoal}
            columns={3}
          />
          {errors.goal && (
            <p className="text-sm text-red-500 mt-1">{errors.goal}</p>
          )}
        </div>

        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Weight Goal
          </label>
          <select
            value={weightGoal}
            onChange={(e) => setWeightGoal(e.target.value)}
            className={`w-[92px] px-3 py-2 border ${
              errors.weightGoal ? "border-red-500" : "border-gray-300"
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
          {errors.weightGoal && (
            <p className="text-sm text-red-500 mt-1">{errors.weightGoal}</p>
          )}
        </div>

        <Next label="Save" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default WeightAndGoals;
