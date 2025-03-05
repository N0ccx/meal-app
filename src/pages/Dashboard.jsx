import React from "react";
import { recipes, meals, personalize } from "../assets/images";
import RecipeSection from "../components/app/RecipeSection";
import MealCard from "../components/app/MealCard";
import Navbar from "../components/app/TopNav";
import BottomNav from "../components/app/BottomNav";

const Dashboard1 = () => {
  return (
    <div className="flex flex-col h-[1500px] bg-white">
      <Navbar label="Dashboard" tokens={20} showNotification={true} />

      <div className="items-center">
        <img src={personalize} alt={personalize} className="mx-auto items-center py-5" />
      </div>
      <div className="mt-4 px-4">
        <h3 className="text-lg font-bold">Today's Meal</h3>
        <div className="p-4 grid gap-4">
          {meals.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      </div>

      <RecipeSection
        title="Global Recipes"
        link="/global-meals"
        items={recipes.globalRecipes}
      />
      <RecipeSection
        title="Health Specific"
        link="/health-meals"
        items={recipes.healthSpecific}
      />
      <RecipeSection
        title="Cleva Specials"
        link="/cleva-specials"
        items={recipes.clevaSpecials}
      />
      <BottomNav />
    </div>
  );
};

export default Dashboard1;
