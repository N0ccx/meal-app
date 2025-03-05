import React, { useState } from "react";
import Navbar from "../components/NavBar";
import InputField from "../components/InputField";
import Next from "../components/button";
import PasswordField from "../components/PasswordField";

const ChangeEmail = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlechangeEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/profile", {
        email,
        password,
      });

      // Save the token in localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to the dashboard or another protected route
      navigate("/settings");
    } catch (err) {
      setError("Your changes could not be saved. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Navbar */}
      <Navbar label="Change Email" link="/preferences" />

      {/* Form */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <form onClick={handlechangeEmail} className="w-[351px] max-w-md space-y-6">
          <InputField
            id="email"
            type="email"
            label="New Email"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder=""
          />
          <PasswordField
            id="password"
            label="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            
            
            placeholder=""
          />
          <div className="pt-2">
            <Next label="Save" link="/settings" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeEmail;
