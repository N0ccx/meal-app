import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import InputField from "../components/InputField";
import SelectionGroup from "../components/SelectionGroup";
import ToggleButton from "../components/app/ToggleButton";

const Generate = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [budget, setBudget] = useState("");
  const [more, setMore] = useState([]);
  const [stickToGoal, setStickToGoal] = useState(false);
  const [enableNotifications, setEnableNotifications] = useState(false);
  const [shareWithFriends, setShareWithFriends] = useState(false);
  const [pantryItems, setPantryItems] = useState(false);

  const handleMoreSelection = (option) => {
    setMore((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="flex flex-col h-[1194px] justify-center bg-gray-700 items-center space-y-10 p-4">
      <h2 className="text-white font-semibold text-lg text-center">
        Describe what you would like to have.
      </h2>
      <InputField
        id="custom-input"
        type="text"
        label=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Last updated: 80lbs on November 14 2023."
        className=" w-[344px] h-[113px] rounded-lg border border-gray-300 text-left text-wra text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      <div className="flex flex-col justify-center gap-4 mt-8">
        <SelectionGroup
          label={<span className="text-white">Type</span>}
          options={[
            "Breakfast",
            "Lunch",
            "Dinner",
            "Snack",
            "Dessert",
            "Beverage",
            "Smoothie",
            "Cocktails",
            "Others",
          ]}
          selectedOption={type}
          onSelect={setType}
          columns={3}
        />
        <SelectionGroup
          label={<span className="text-white">Budget</span>}
          options={["Small", "Okay", "Large"]}
          selectedOption={budget}
          onSelect={setBudget}
          columns={3}
        />
        <SelectionGroup
          label={<span className="text-white">Prep Time</span>}
          options={["5-10 min", "15-30 min", "30+ min"]}
          selectedOption={prepTime}
          onSelect={setPrepTime}
          columns={3}
        />
        <SelectionGroup
          label={<span className="text-white">More</span>}
          options={[
            "Sweet",
            "Healthy",
            "Savory",
            "High Protein",
            "Low Carbs",
            "Spicy",
            "Baked",
            "Grilled",
            "Filling",
          ]}
          selectedOption={more}
          onSelect={handleMoreSelection}
          multiple={true}
          columns={3}
        />
      </div>
      <div className="space-y-4">
        <ToggleButton
          label="Stick to weight goal"
          isActive={stickToGoal}
          onToggle={() => setStickToGoal(!stickToGoal)}
        />
        <ToggleButton
          label="Stick to Cultural Preference"
          isActive={enableNotifications}
          onToggle={() => setEnableNotifications(!enableNotifications)}
        />
        <ToggleButton
          label="Stick to Diet Type"
          isActive={shareWithFriends}
          onToggle={() => setShareWithFriends(!shareWithFriends)}
        />
        <ToggleButton
        label="Use only Pantry Items"
        isActive={pantryItems}
        onToggle={() => setPantryItems(!pantryItems)}
      />
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <button
          className="w-[165.23px] h-[56px] bg-custom-gradient rounded-md flex items-center justify-center text-white text-sm hover:bg-gray-600 transition"
          onClick={() => console.log("Generate 1 Recipe")}
          
        >
          Generate 1 Recipe<BsStars className="ml-1 text-white" />
        </button>
        <button
          className="w-[165.23px] h-[56px] bg-custom-gradient rounded-md flex items-center justify-center text-white text-sm hover:bg-gray-600 transition"
          onClick={() => console.log("Generate 2 Recipes")}
        >
          Generate 2 Recipes<BsStars className="ml-1 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Generate;
