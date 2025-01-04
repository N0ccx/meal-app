import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage.jsx";
import GetStartedPage from "./pages/GetStarted.jsx";
import GetStartedPage2 from "./pages/GetStarted2.jsx";
import Register from "./pages/Register.jsx";
import CulturalPref2 from "./pages/CulturalPrefernces.jsx";
import Login from "./pages/Login.jsx";
import DietPreferences from "./pages/DietPreferences.jsx";
import PhysicalAttributes from "./pages/Physical.jsx";
import Health from "./pages/Health.jsx";
import MealPlan from "./pages/MealPlan.jsx";
import KitchenPage from "./pages/Kitchen.jsx";
import Dashboard1 from "./pages/Dashboard.jsx";
import MyTools from "./pages/Pantry.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/get-started2" element={<GetStartedPage2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/diet" element={<DietPreferences/>} />
        <Route path="/pf1" element={<CulturalPref2 />} />
        <Route path="/health" element={<Health />} />
        <Route path="/ph1" element={<PhysicalAttributes />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/dashboard" element={<Dashboard1 />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/tools" element={<MyTools />} />
      </Routes>
    </Router>
  );
}

export default App;
