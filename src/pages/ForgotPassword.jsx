import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col justify-between items-center h-screen bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-4 py-2 white">
        <Link to="/get-started" className="text-lg font-semibold text-gray-600">
          &#8592;
        </Link>
        <h2 className="block text-lg font-bold text-gray-800 text-center">
          Forgot Password
        </h2>
      </div>
      <form className="w-[351px] max-w-md space-y-4 border-none outline-none">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          className="w-[337px] py-2 text-white bg-custom-gradient rounded-md hover:opacity-90"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
