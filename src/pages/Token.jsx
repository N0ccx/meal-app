import React from "react";
import Navbar from "../components/NavBar";
import { personalize, character } from "../assets/images";
import TokenBar from "../components/app/TokenBar";
import { BsStars } from "react-icons/bs";

// Common styles for paragraphs
const paragraphStyle = "text-lg mt-1 text-gray-400";

const Token = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar label="Token" link="/dashboard" />

      <div className="items-center">
        <img
          src={personalize}
          alt="Personalize"
          className="mx-auto items-center py-5"
        />
      </div>
      <div className="grid grid-cols-12 rounded-lg gap-4 py-2 px-4 border-none shadow-md">
        <div className="flex flex-col col-span-2 mr-4 items-center">
          <img
            src={character}
            alt="Character"
            className="w-12 h-12 object-cover"
          />
        </div>
        <div className="flex flex-col col-span-10 ">
          <div className="flex items-center text-sm font-bold">
            <h1 className="text-lg">Daily Login</h1>
          </div>
          <TokenBar />
          <p className={paragraphStyle}>Get a free token for every 7 daily logins</p>
        </div>
      </div>
      <div className="text-lg flex flex-col col-span-8">
        <p className={paragraphStyle}>Complete a recipe for a free token</p>
      </div>
    </div>
  );
};

export default Token;