import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/images";
import Next from "../components/button";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import Navbar from "../components/NavBar";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [receivePromotions, setReceivePromotions] = useState(false);
  const [InputNameError, setInputNameError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", { email, password });
      localStorage.setItem("token", response.data.token); // Store token in localStorage
      navigate("/dashboard");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };
  useEffect(() =>{
    if (username.length < 3) {
      setInputNameError("Name must be more than three characters long!")
    }
    else {
      setInputNameError('')
    }
  })

  return (
    <div className="flex flex-col items-center h-screen bg-white">
    <Navbar label="Create Account" link="/signin" />

      {/*Logo Section */}
      <div className="flex flex-col items-center mt-6">
        <img src={logo} alt="Company Logo" className="w-[247px] h-auto mb-4" />
        <p className="text-gray-700 text-sm text-center">
          AI Powered Nutrition & Meal Prep Partner
        </p>
      </div>

      {/*Form */}
      <form onSubmit={handleRegister} className="w-[351px] max-w-md space-y-4 border-none outline-none">
        {InputNameError && <p>{InputNameError}</p>}
      <InputField
            id="username"
            type="text"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />

        {/*Email */}
        <InputField
            id="email"
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

        {/*Password */}
        <PasswordField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isVisible={passwordVisible}
            toggleVisibility={togglePasswordVisibility}
            placeholder="Enter your password"
          />

        {/*Terms and Conditions */}
        <div className="flex items-center space-x-2 col-span-10">
          <input
            type="checkbox"
            id="terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="col-span-2 w-4 h-4 text-violet-500 border-gray-300 rounded focus:ring-red-600"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the <Link to="/terms" className="text-red-600 underline col-span-8">Terms of Service</Link>
          </label>
        </div>

        {/* Receive Promotions */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="promotions"
            checked={receivePromotions}
            onChange={(e) => setReceivePromotions(e.target.checked)}
            className="justify-end w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
          />
          <label htmlFor="promotions" className="text-sm text-gray-600">
            Send me updates on promotional offers
          </label>
        </div>

       <Next label="Get Started" link="/ph1" />
      </form>

      {/* Already a Member */}
      <p className="text-center text-sm text-gray-600 mb-5">
        Already a Member?{" "}
        <Link to="/signin" className="text-gray-600 font-semibold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
