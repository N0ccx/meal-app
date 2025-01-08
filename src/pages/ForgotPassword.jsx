import React, { useState } from "react";
import Navbar from "../components/NavBar";
import InputField from "../components/InputField";
import Next from "../components/button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar label="Forgot Password" link="/signin" />

      {/* Form */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <form className="w-[351px] max-w-md space-y-6">
          <InputField
            id="email"
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <div className="pt-4">
            <Next label="Recover your account" link="/pf1" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
