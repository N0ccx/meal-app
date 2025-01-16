import React, { useState } from "react";
import Navbar from "../components/NavBar";
import SelectionGroup from "../components/SelectionGroup";

const Pantry = () => {
  const [cookwareItems, setCookwareItems] = useState([
    "Frying Pan",
    "Saucepan",
    "Stockpot",
    "Wok",
    "Griddle",
    "Roasting Pan",
    "Skillet",
    "Pressure Cooker",
    "Small Oven",
    "Stock Pot",
    "Duet Oven",
    "Rice Cooker",
  ]);

  const [utensilsItems, setUtensilsItems] = useState([
    "Spatula",
    "Whisk",
    "Ladle",
    "Tongs",
    "Peeler",
    "Silicone",
    "Rolling Pin",
    "Potato Masher",
    "Spotted Spoon",
    "Garlic Press",
  ]);

  const [knivesItems, setKnivesItems] = useState([
    "Chef Knife",
    "Paring Knife",
    "Bread Knife",
    "Santoku Knife",
    "Cleaver",
    "Kitchen Scissors",
    "Mandoline Slicer",
    "Meat Tenderizer",
  ]);

  const [selectedCookware, setSelectedCookware] = useState([]);
  const [selectedUtensils, setSelectedUtensils] = useState([]);
  const [selectedKnives, setSelectedKnives] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTool, setNewTool] = useState("");

  // Toggle selection for items
  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < 5) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleAddNew = () => {
    if (newTool.trim()) {
      setCookwareItems([...cookwareItems, newTool]);
      setNewTool("");
      setIsAddingNew(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cookware:", selectedCookware);
    console.log("Utensils:", selectedUtensils);
    console.log("Knives:", selectedKnives);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar label="My Tools" link="/kitchen" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-4 mt-4 space-y-6 flex-grow"
      >
        {/* Cookware Section */}
        <div className="w-full max-w-md">
          <SelectionGroup
            label="Cookware"
            options={cookwareItems}
            selectedOption={selectedCookware}
            onSelect={(item) => toggleSelection(item, selectedCookware, setSelectedCookware)}
            columns={4}
          />

          {isAddingNew ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                className="flex-grow px-2 py-1 text-sm border rounded-md focus:outline-none"
                placeholder="New Tool"
                value={newTool}
                onChange={(e) => setNewTool(e.target.value)}
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

        {/* Utensils Section */}
        <div className="w-full max-w-md">
          <SelectionGroup
            label="Utensils"
            options={utensilsItems}
            selectedOption={selectedUtensils}
            onSelect={(item) => toggleSelection(item, selectedUtensils, setSelectedUtensils)}
            columns={4}
          />
        </div>

        {/* Knives Section */}
        <div className="w-full max-w-md">
          <SelectionGroup
            label="Knives and Cutting Tools"
            options={knivesItems}
            selectedOption={selectedKnives}
            onSelect={(item) => toggleSelection(item, selectedKnives, setSelectedKnives)}
            columns={4}
          />
        </div>
      </form>
    </div>
  );
};

export default Pantry;
