import React, { useState, useEffect } from "react";
import Next from "../components/button";
import SelectionGroup from "../components/SelectionGroup";
import Navbar from "../components/NavBar";

const CulturalPreferences = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [regionOnly, setRegionOnly] = useState(false);
  const [frequency, setFrequency] = useState("");
  const [cookingSkill, setCookingSkill] = useState("");
  const [budget, setBudget] = useState("");
  const [religion, setReligion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch("/data/countries.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading countries:", error));
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Navbar */}
      <Navbar label="Cultural Preferences" link="/ph1" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-4 mt-4 space-y-6"
      >
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
        <SelectionGroup
          label="Only recommend meals from my current region"
          options={["Often", "Sometimes", "Always"]}
          selectedOption={regionOnly}
          onSelect={setRegionOnly}
        />

        {/* Cooking Frequency */}
        <SelectionGroup
          label="How often do you cook?"
          options={["Never", "Sometimes", "Always"]}
          selectedOption={frequency}
          onSelect={setFrequency}
        />

        {/* Cooking Skill */}
        <SelectionGroup
          label="How would you describe your cooking skill?"
          options={["Beginner", "Intermediate", "Advanced"]}
          selectedOption={cookingSkill}
          onSelect={setCookingSkill}
        />

        {/* Budget */}
        <SelectionGroup
          label="Budget per meal"
          options={["Small", "Okay", "Large"]}
          selectedOption={budget}
          onSelect={setBudget}
        />

        {/* Religious Restrictions */}
        <SelectionGroup
          label="Religious Restrictions"
          options={["Islam (Halal)", "Judaism (Kosher)"]}
          selectedOption={religion}
          onSelect={setReligion}
        />
      </form>

      <Next label="Next" link="/diet" />
    </div>
  );
};

export default CulturalPreferences;
