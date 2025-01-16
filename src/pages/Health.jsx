import React, { useState } from "react";
import Next from "../components/button";
import Navbar from "../components/NavBar";
import SelectionGroup from "../components/SelectionGroup";

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
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newAllergy, setNewAllergy] = useState("");

  const toggleAllergy = (allergy) => {
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(
        selectedAllergies.filter((item) => item !== allergy)
      );
    } else if (selectedAllergies.length < 5) {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  const toggleCondition = (condition) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(
        selectedConditions.filter((item) => item !== condition)
      );
    } else if (selectedConditions.length < 1) {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };

  const handleAddNew = () => {
    if (newAllergy.trim() && !allergies.includes(newAllergy)) {
      setAllergies([...allergies, newAllergy]);
      setNewAllergy("");
      setIsAddingNew(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar label="Health Preferences" link="/diet" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-4 mt-4 space-y-6 flex-grow"
      >

        <div className="w-full max-w-md">
          <SelectionGroup
            label="Allergies"
            options={allergies}
            selectedOption={selectedAllergies}
            onSelect={toggleAllergy}
            columns={4}
          />

          {isAddingNew ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                className="flex-grow px-2 py-1 text-sm border rounded-md focus:outline-none"
                placeholder="New Allergy"
                value={newAllergy}
                onChange={(e) => setNewAllergy(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddNew()}
              />
              <button
                type="button"
                className="ml-2 px-3 py-1 text-sm font-medium text-white bg-violet-600 rounded-md hover:bg-violet-700"
                onClick={handleAddNew}
              >
                Add
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="mt-2 px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-white hover:shadow-md"
              onClick={() => setIsAddingNew(true)}
            >
              Add New
            </button>
          )}
        </div>
        <div className="w-full max-w-md">
          <SelectionGroup
            label="Health Conditions"
            options={[
              "Diabetes",
              "Heart Condition",
              "Hypertension",
              "Immune Condition",
            ]}
            selectedOption={selectedConditions}
            onSelect={toggleCondition}
            columns={2}
          />
        </div>
      </form>

      <div className="mt-auto px-4 pb-8">
        <Next label="Next" link="/dashboard" />
      </div>
    </div>
  );
};

export default HealthPreferences;
