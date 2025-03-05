import React, { useState } from "react";
import InputField from "../components/InputField";
import Navbar from "../components/NavBar";

const Feedback = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col h-screen bg-white  p-2">
      <Navbar label="Feedback" link="/preferences" />
      <h2 className="text-black font-semibold text-lg text-center mb-4">
        Leave us a message
      </h2>
      <InputField
        id="custom-input"
        type="text"
        label=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder=""
        className=" w-[344px] h-[113px] rounded-lg border border-gray-300 text-left text-wrap text-gray-700 text-2xl focus:outline-none focus:ring-2 focus:ring-red-600"
      />
    </div>
  );
};

export default Feedback;
