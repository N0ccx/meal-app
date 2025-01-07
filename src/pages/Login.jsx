import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, eyeIcon, eyeOffIcon } from "../assets/images";
import Social from "../components/socialandbuttons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center h-screen bg-white">
        {/* Navbar */}
        <div className="flex items-center justify-between w-full px-4 py-2 white">
          <Link
            to="/get-started"
            className="text-lg font-semibold text-gray-600"
          >
            &#8592;
          </Link>
          <h2 className="block text-lg font-bold text-gray-800">Login</h2>
          <div></div>
        </div>

        {/*Logo Section */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={logo}
            alt="Company Logo"
            className="w-[247px] h-auto mb-4"
          />
          <p className="text-gray-700 text-sm text-center">
            AI Powered Nutrition & Meal Prep Partner
          </p>
        </div>

        {/*Form */}
        <form className="w-[351px] max-w-md space-y-4 border-none outline-none">
          {/*Email */}
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

          {/*Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600"
            >
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
        </form>
        <button
          type="submit"
          className="w-[337px] py-2 text-white bg-custom-gradient rounded-md hover:opacity-90 mt-8"
        >
          Login
        </button>
        <Link
          to="/signin"
          className="block text-sm font-semibold text-custom-gradient mt-6"
        >
          Forgot Password
        </Link>
        <div className="text-gray-600 text-center text-text-sm mt-6">
          Don't have an Account? {"  "}
          <Link
            to="/signin"
            className="text-gray-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
        <div className="w-[337px] space-y-4 mt-2">
        <Social />
        </div>
      </div>
    </>
  );
};

export default Login;
