import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CulturalPreferences = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [regionOnly, setRegionOnly] = useState(false);
  const [frequency, setFrequency] = useState("");
  const [cookingSkill, setCookingSkill] = useState("");
  const [budget, setBudget] = useState("");
  const [religion, setReligion] = useState("");

  useEffect(() => {
    fetch("/data/countries.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading countries:", error));
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <Link to="/get-started" className="text-lg font-semibold text-gray-600">
          &#8592;
        </Link>
        <h2 className="text-lg font-bold text-gray-800">Cultural Preferences</h2>
        <div></div>
      </div>

      <form className="flex flex-col items-center px-4 mt-4 space-y-6">
        {/* Country Selection */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Country
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
          >
            <option value="" disabled>
              Select your country
            </option>
            {countries.map((country) => (
              <option key={country.code3} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Selection */}
        {selectedCountry && (
          <div className="w-full max-w-md">
            <label className="block mb-2 text-sm font-semibold text-gray-600">
              State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
            >
              <option value="" disabled>
                Select your state
              </option>
              {countries
                .find((country) => country.name === selectedCountry)
                ?.states.map((state) => (
                  <option key={state.code} value={state.name}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* Region Preference */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Only recommend meals from my current region
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Note: Selecting meals from your current country makes finding
            ingredients easier.
          </p>
          <button
            type="button"
            className={`w-[92px] py-2 text-sm font-semibold rounded-md ${
              regionOnly ? "bg-violet-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setRegionOnly(!regionOnly)}
          >
            {regionOnly ? "Yes" : "No"}
          </button>
        </div>

        {/* Cooking Frequency */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            How often do you cook?
          </label>
          <div className="flex justify-between">
            {["Never", "Sometimes", "Always"].map((option) => (
              <button
                key={option}
                className={`w-[92px] py-2 text-sm font-semibold rounded-md ${
                  frequency === option
                    ? "bg-violet-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setFrequency(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Cooking Skill */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            How would you describe your cooking skill?
          </label>
          <div className="flex justify-between">
            {["Beginner", "Intermediate", "Advanced"].map((skill) => (
              <button
                key={skill}
                className={`w-[92px] py-2 text-sm font-semibold rounded-md ${
                  cookingSkill === skill
                    ? "bg-violet-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setCookingSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Budget per meal
          </label>
          <div className="flex justify-between">
            {["Small", "Okay", "Large"].map((budgetOption) => (
              <button
                key={budgetOption}
                className={`w-[92px] py-2 text-sm font-semibold rounded-md ${
                  budget === budgetOption
                    ? "bg-violet-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setBudget(budgetOption)}
              >
                {budgetOption}
              </button>
            ))}
          </div>
        </div>

        {/* Religious Restrictions */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Religious Restrictions
          </label>
          <div className="flex justify-between">
            {["Islam (Halal)", "Judaism (Kosher)"].map((religiousOption) => (
              <button
                key={religiousOption}
                className={`w-[92px] py-2 text-sm font-semibold rounded-md ${
                  religion === religiousOption
                    ? "bg-violet-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setReligion(religiousOption)}
              >
                {religiousOption}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Link
          to="/diet-preferences"
          className="w-full max-w-md py-2 text-center text-white bg-violet-600 rounded-md hover:opacity-90"
        >
          Next
        </Link>
      </form>
    </div>
  );
};

export default CulturalPreferences;
