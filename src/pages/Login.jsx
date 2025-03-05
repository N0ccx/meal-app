import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/images";
import Social from "../components/socialandbuttons";
import InputField from "../components/InputField";
import Navbar from "../components/NavBar";
import PasswordField from "../components/PasswordField";
import axios from "axios";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // Save the token in localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to the dashboard or another protected route
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center h-screen bg-white">
        <Navbar label="Login" link="/get-started2" />

        {/* Logo Section */}
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

        {/* Form */}
        <form className="w-[351px] max-w-md space-y-6" onSubmit={handleLogin}>
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

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="block w-[337px] py-2 text-white bg-custom-gradient rounded-md hover:opacity-90 mt-8"
          >
            Login
          </button>
        </form>

        <Link
          to="/forgot-password"
          className="block text-sm font-bold text-custom-gradient mt-6"
        >
          Forgot Password
        </Link>

        <div className="text-gray-600 text-center text-sm mt-6">
          Don't have an Account?{" "}
          <Link
            to="/register"
            className="text-gray-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>

        <div className="w-[337px] space-y-4 mt-2 bg-white">
          <Social />
        </div>
      </div>
    </>
  );
};

export default Login;