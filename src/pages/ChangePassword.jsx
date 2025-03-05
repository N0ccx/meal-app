import React, { useState } from "react";
import Navbar from "../components/NavBar";
import InputField from "../components/InputField";
import Next from "../components/button";
import PasswordField from "../components/PasswordField";

const ChangePassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Navbar */}
      <Navbar label="Change  Password" link="/settings" />

      {/* Form */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <form className="w-[351px] max-w-md space-y-6">
          <InputField
            id="oldPassword"
            type="password"
            label="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder=""
          />
          <PasswordField
            id="newPassword"
            type="password"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            isVisible={passwordVisible}
            toggleVisibility={togglePasswordVisibility}
            placeholder=""
          />
          <PasswordField
            id="newPassword"
            type="password"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            isVisible={passwordVisible}
            toggleVisibility={togglePasswordVisibility}
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

export default ChangePassword;
