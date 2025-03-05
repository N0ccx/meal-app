import React from "react";
import { Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import GetStarted2 from "./pages/GetStarted2.jsx";
import Register from "./pages/Register.jsx";
import CulturalPref2 from "./pages/CulturalPrefernces.jsx";
import Login from "./pages/Login.jsx";
import DietPreferences from "./pages/DietPreferences.jsx";
import PhysicalAttributes from "./pages/PhysicalAttributes.jsx";
import Health from "./pages/Health.jsx";
import MealPlan from "./pages/MealPlan.jsx";
import KitchenPage from "./pages/Kitchen.jsx";
import Dashboard1 from "./pages/Dashboard.jsx";
import Pantry from "./pages/Pantry.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Nutrition from "./pages/Nutrition.jsx";
import Preferences from "./pages/Preferences.jsx";
import Generate from "./pages/Generate.jsx";
import Tools from "./pages/Tools.jsx";
import Grocery from "./pages/Grocery.jsx";
import Notification from "./pages/Notification.jsx";
import Token from "./pages/Token.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";
import WeightAndGoals from "./pages/WeightAndGoals.jsx";
import Feedback from "./pages/Feedback.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import MealLayout from "./pages/MealLayout.jsx";
import ChangeEmail from "./pages/ChangeEmail.jsx";
import Profile from "./pages/Profile.jsx";
import Reminders from "./pages/Reminders.jsx"
import AccountSettings from "./pages/AccountSettings.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OpeningPage />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/get-started2" element={<GetStarted2 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/diet" element={<DietPreferences />} />
      <Route path="/pf1" element={<CulturalPref2 />} />
      <Route path="/health" element={<Health />} />
      <Route path="/ph1" element={<PhysicalAttributes />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard1 />
          </ProtectedRoute>
        }
      />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/kitchen" element={<KitchenPage />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/pantry" element={<Pantry />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/token" element={<Token />} />
      <Route path="/meal-plan" element={<MealPlan />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/weight-goals" element={<WeightAndGoals />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/change-email" element={<ChangeEmail />} />
      <Route path="/meal-layout" element={<MealLayout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reminders" element={<Reminders />} />
      <Route path="/settings" element={<AccountSettings />} />
    </Routes>
  );
}

export default App;
