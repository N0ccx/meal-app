import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, eyeIcon, eyeOffIcon } from "../assets/images";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [receivePromotions, setReceivePromotions] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-200">
        <Link to="/get-started" className="text-lg font-semibold text-gray-600">
          &#8592;
        </Link>
        <h2 className="text-lg font-bold text-gray-800 text-center">Create Account</h2>
      </div>

      {/*Logo Section */}
      <div className="flex flex-col items-center mt-6">
        <img src={logo} alt="Company Logo" className="w-[247px] h-auto mb-4" />
        <p className="text-gray-700 text-sm text-center">
          AI Powered Nutrition & Meal Prep Partner
        </p>
      </div>

      {/*Form */}
      <form className="w-[351px] max-w-md space-y-4 border-none outline-none">
        {/*Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-semibold text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
            placeholder="Enter your username"
            required
          />
        </div>

        {/*Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
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

        {/*Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-600"
              placeholder="Enter your password"
              required
            />
            <img
              src={passwordVisible ? eyeOffIcon : eyeIcon}
              alt="Toggle Password Visibility"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
            />
          </div>
        </div>

        {/*Terms and Conditions */}
        <div className="flex items-center space-x-2 col-span-10">
          <input
            type="checkbox"
            id="terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="col-span-2 w-4 h-4 text-violet-500 border-gray-300 rounded focus:ring-violet-600"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the <Link to="/terms" className="text-violet-600 underline col-span-8">Terms of Service</Link>
          </label>
        </div>

        {/* Receive Promotions */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="promotions"
            checked={receivePromotions}
            onChange={(e) => setReceivePromotions(e.target.checked)}
            className="justify-end w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-600"
          />
          <label htmlFor="promotions" className="text-sm text-gray-600">
            Send me updates on promotional offers
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 text-white bg-custom-gradient rounded-md hover:opacity-90"
        >
          Get Started
        </button>
      </form>

      {/* Already a Member */}
      <p className="text-center text-sm text-gray-600 mb-5">
        Already a Member?{" "}
        <Link to="/signin" className="text-violet-600 font-semibold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
