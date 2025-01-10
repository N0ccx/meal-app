import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/app/BottomNav";
import RecipeSection from "../components/app/RecipeSection";

// Navbar Component
const Navbar = ({ username, date }) => (
  <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
    <div>
      <h2 className="text-lg font-bold text-gray-800">Hi, {username || "User"}</h2>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center px-3 py-1 text-white bg-red-600 rounded-md">
        <span className="mr-2">10</span>
        <img src="/Sparkling.png" alt="tokens" className="w-5 h-5" />
      </div>
      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
        <img src="/Notification.png" alt="notifications" className="w-4 h-4" />
      </div>
    </div>
  </div>
);

// Upgrade Section Component
const UpgradeSection = () => (
  <div className="flex flex-col items-center mt-4 px-4">
    <h3 className="text-base font-medium text-gray-800 mb-2">
      Personalize Your Eating Experience
    </h3>
    <Link
      to="/membership"
      className="block w-full max-w-md px-4 py-2 text-center text-white bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:opacity-90"
    >
      Upgrade to a Premium Membership
    </Link>
  </div>
);


// Meal Card Component
const MealCard = ({ meal, details, imageSrc }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
    <img src={imageSrc} alt={meal} className="w-14 h-14 rounded-md" />
    <div className="flex-grow">
      <h5 className="font-semibold text-gray-800">{meal}</h5>
      <p className="text-sm text-gray-600">
        {`Kal: ${details.kal} | Cost: ${details.cost} | Prep Time: ${details.prepTime} | ${details.rating}`}
      </p>
    </div>
    <button className="text-red-500 hover:text-red-600">❤️</button>
  </div>
);



// Main Dashboard Component
const Dashboard1 = ({ username = "Victor" }) => {
  const todayDate = new Date().toLocaleDateString();

  // Mock data
  const globalRecipes = ["Nigerian", "British", "American"];
  const healthSpecific = ["Low Carbs", "Fruits and Veggies", "High Protein"];
  const clevaSpecials = ["Chef's Choice", "Seasonal Favorites", "Quick Bites"];
  const recommendations = ["Fruits & Veggies", "Drinks & Cocktails", "Brunch"];
  const meals = [
    {
      name: "Popcorn",
      details: {
        kal: "200",
        cost: "N150",
        prepTime: "5-10 min",
        rating: "⭐ 4.3",
      },
      imageSrc: "/popcorn.png",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar username={username} date={todayDate} />
      <UpgradeSection />

      {/* Today's Meal Section */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-bold text-gray-800">Today's Meal</h4>
          <Link to="/plan" className="text-sm text-red-500 hover:underline">
            See Full Plan
          </Link>
        </div>
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal.name} details={meal.details} imageSrc={meal.imageSrc} />
        ))}
      </div>

      {/* Recipe Sections */}
      <RecipeSection title="Recommendations" link="/recommendations" items={recommendations} />
      <RecipeSection title="Global Recipes" link="/global-meals" items={globalRecipes} />
      <RecipeSection title="Health Specific" link="/health-meals" items={healthSpecific} />
      <RecipeSection title="Cleva Specials" link="/cleva-specials" items={clevaSpecials} />

      <div className="px-4 py-3">
        <Link
          to="/"
          className="block w-full max-w-md px-4 py-2 text-center text-white bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:opacity-90"
        >
          Generate New Recipe
        </Link>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard1;
