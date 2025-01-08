import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import Social from "../components/socialandbuttons";
import InputField from "../components/InputField";
import Navbar from "../components/NavBar";
import PasswordField from "../components/PasswordField";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center h-screen bg-gray-100">
      <Navbar label="Login" link="/" />

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
        <form className="w-[351px] max-w-md space-y-6">
          <InputField
            id="email"
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <PasswordField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isVisible={passwordVisible}
            toggleVisibility={togglePasswordVisibility}
            placeholder="Enter your password"
          />
        </form>
        <button
          type="submit"
          className="w-[337px] py-2 text-white bg-custom-gradient rounded-md hover:opacity-90 mt-8"
        >
          Login
        </button>
        <Link
          to="/forgot-password"
          className="block text-sm font-semibold text-custom-gradient mt-6"
        >
          Forgot Password
        </Link>
        <div className="text-gray-600 text-center text-text-sm mt-6">
          Don't have an Account? {"  "}
          <Link
            to="/register"
            className="text-gray-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
        <div className="w-[337px] space-y-4 mt-2 bg-gray-100">
          <Social />
        </div>
      </div>
    </>
  );
};

export default Login;
