import React, { useState } from "react";
import Navbar from "../components/NavBar";
import SelectionGroup from "../components/SelectionGroup";

const Tools = () => {
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
  const [activeSection, setActiveSection] = useState("cookware");


  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < 5) {
      setSelectedItems([...selectedItems, item]);
    }
  };


  const handleAddNew = () => {
    if (newTool.trim()) {
      switch (activeSection) {
        case "cookware":
          setCookwareItems([...cookwareItems, newTool]);
          break;
        case "utensils":
          setUtensilsItems([...utensilsItems, newTool]);
          break;
        case "knives":
          setKnivesItems([...knivesItems, newTool]);
          break;
        default:
          break;
      }
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
    <div className="flex flex-col h-screen bg-white">
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
            selectedOptions={selectedCookware}
            onSelect={(item) =>
              toggleSelection(item, selectedCookware, setSelectedCookware)
            }
            columns={4}
            
          />

          {isAddingNew && activeSection === "cookware" ? (
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
                className="ml-2 px-3 py-1 text-sm font-medium text-white bg-custom-gradient rounded-md hover:bg-custom-gradient"
                onClick={handleAddNew}
              >
                Add
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="mt-2 px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-white hover:shadow-md"
              onClick={() => {
                setIsAddingNew(true);
                setActiveSection("cookware");
              }}
            >
              + Add
            </button>
          )}
        </div>

        {/* Utensils Section */}
        <div className="w-full max-w-md">
          <SelectionGroup
            label="Utensils"
            options={utensilsItems}
            selectedOptions={selectedUtensils}
            onSelect={(item) =>
              toggleSelection(item, selectedUtensils, setSelectedUtensils)
            }
            columns={4}
          />

          {isAddingNew && activeSection === "utensils" ? (
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
                className="ml-2 px-3 py-1 text-sm font-medium text-white bg-custom-gradient rounded-md hover:bg-custom-gradient"
                onClick={handleAddNew}
              >
                Add
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="mt-2 px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-white hover:shadow-md"
              onClick={() => {
                setIsAddingNew(false);
                setActiveSection("utensils");
              }}
            >
              + Add
            </button>
          )}
        </div>

        {/* Knives Section */}
        <div className="w-full max-w-md">
          <SelectionGroup
            label="Knives and Cutting Tools"
            options={knivesItems}
            selectedOptions={selectedKnives}
            onSelect={(item) =>
              toggleSelection(item, selectedKnives, setSelectedKnives)
            }
            columns={4}
          />

          {isAddingNew && activeSection === "knives" ? (
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
                className="ml-2 px-3 py-1 text-sm font-medium text-white bg-custom-gradient rounded-md hover:bg-custom-gradient"
                onClick={handleAddNew}
              >
                Add
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="mt-2 px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-white hover:shadow-md"
              onClick={() => {
                setIsAddingNew(true);
                setActiveSection("knives");
              }}
            >
              + Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Tools;