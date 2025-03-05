import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../components/NavBar";
import Next from "../components/button";
import SelectionGroup from "../components/SelectionGroup";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [selectedSex, setSelectedSex] = useState("");
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [image, setImage] = useState(null);
  const [tempImage, setTempImage] = useState(null);

  const feetOptions = Array.from({ length: 8 }, (_, i) => `${i + 1} ft`);
  const inchesOptions = Array.from({ length: 12 }, (_, i) => `${i} in`);
  const weightOptions = Array.from({ length: 300 }, (_, i) => `${i + 30} kg`);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setImage(tempImage);
    console.log("User info has been saved successfully!");
  };

  const handleCancel = () => {
    setTempImage(image);
  };

  useEffect(() => {
    setTempImage(image);
  }, [image]);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Navbar */}
      <Navbar label="User Profile" link="/preferences" />

      <form className="flex flex-col items-center px-4 mt-4 space-y-6">
        {/* Profile Image Upload */}
        <div className="relative w-30 h-30">
          <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="w-[120px] h-[120px] rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-100 overflow-hidden">
              {tempImage ? (
                <img
                  src={tempImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <FaCamera className="text-gray-500 text-3xl" />
              )}
            </div>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2 text-white bg-custom-gradient rounded-md hover:bg-custom-gradient"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 text-white bg-black rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>

        {/* Biological Sex */}
        <SelectionGroup
          label="Biological Sex"
          options={["Female", "Male", "Others"]}
          selectedOption={selectedSex}
          onSelect={setSelectedSex}
          columns={3}
        />

        {/* Age */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Age
          </label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-600"
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
              className="w-[92px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-600"
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
              className="w-[92px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-600"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-600"
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

        {/* Body Fat */}
        <SelectionGroup
          label="Body Fat"
          options={["Low", "Medium", "High"]}
          selectedOption={bodyFat}
          onSelect={setBodyFat}
          columns={3}
        />


        
      </form>
      <Next label="Next" link="/pf1" />
    </div>
  );
};

export default Profile;
