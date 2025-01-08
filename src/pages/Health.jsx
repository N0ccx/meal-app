import React, { useState } from "react";
import { Link } from "react-router-dom";
import Next from "../components/button";

const HealthPreferences = () => {
  const [allergies, setAllergies] = useState([
    "Shellfish",
    "Fish",
    "Gluten",
    "Dairy Milk",
    "Peanut",
    "Tree Nut",
    "Soy",
    "Egg",
    "Sesame",
    "Sulfite",
    "Nightshade",
  ]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newAllergy, setNewAllergy] = useState("");

  const toggleAllergy = (allergy) => {
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(selectedAllergies.filter((item) => item !== allergy));
    } else if (selectedAllergies.length < 5) {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  const handleAddNew = () => {
    if (newAllergy.trim() && !allergies.includes(newAllergy)) {
      setAllergies([...allergies, newAllergy]);
      setNewAllergy("");
      setIsAddingNew(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
        <Link to="/diet" className="text-lg font-semibold text-gray-600">
          &#8592;
        </Link>
        <h2 className="text-lg font-bold text-gray-800">Health Preferences</h2>
        <button className="text-sm text-violet-600">Save</button>
      </div>

      {/* Allergies Section */}
      <div className="flex-grow p-4">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">Allergies</h3>
        <div className="flex flex-wrap gap-2">
          {allergies.map((allergy, index) => (
            <button
              key={index}
              className={`flex-grow h-[36px] border rounded-md text-sm font-medium ${
                selectedAllergies.includes(allergy)
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-700"
              } hover:shadow-md`}
              onClick={() => toggleAllergy(allergy)}
            >
              {allergy}
            </button>
          ))}
          {/* Add New Button */}
          {isAddingNew ? (
            <div className="flex items-center w-[104px] h-[36px]">
              <input
                type="text"
                className="w-full p-1 text-sm border rounded-md focus:outline-none"
                placeholder="New Allergy"
                value={newAllergy}
                onChange={(e) => setNewAllergy(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddNew()}
              />
              <button className="ml-2 text-violet-600" onClick={handleAddNew}>
                ✔️
              </button>
            </div>
          ) : (
            <button
              className="flex-grow h-[36px] px-4 border rounded-md bg-white text-gray-700 hover:shadow-md border-gray-300"
              onClick={() => setIsAddingNew(true)}
            >
              Add New
            </button>
          )}
        </div>
      </div>

      {/* Health Conditions Section */}
      <div className="flex-grow p-4">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">Health Conditions</h3>
        <div className="flex flex-wrap gap-2">
          {["Diabetes", "Heart Condition", "Hypertension", "Immune Condition"].map(
            (condition, index) => (
              <button
                key={index}
                className={`flex-grow h-[36px] border rounded-md text-sm font-medium ${
                  selectedCondition === condition
                    ? "bg-violet-600 text-white"
                    : "bg-white text-gray-700"
                } hover:shadow-md`}
                onClick={() => setSelectedCondition(condition)}
              >
                {condition}
              </button>
            )
          )}
        </div>
      </div>

      <Next label="Next" link="/dashboard" />
    </div>
  );
};

export default HealthPreferences;
