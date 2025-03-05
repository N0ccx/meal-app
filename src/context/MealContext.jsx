import React, { createContext, useContext, useState, useEffect } from "react";
import { recipes, meals, diets, kitchenItems, navItems, generateCalendarItems, cookwareItems, utensilsItems, knivesItems, days } from "../assets/images";


const MealContext = createContext();


export const useMealContext = () => useContext(MealContext);


export const MealProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [selectedDiet, setSelectedDiet] = useState(null); // Selected diet
  const [selectedMeals, setSelectedMeals] = useState([]); // Selected meals
  const [calendarItems, setCalendarItems] = useState(generateCalendarItems()); // Calendar items
  const [loading, setLoading] = useState(false); // Loading state for API calls

  // Fetch user data from the backend
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/user"); // Replace with your backend API endpoint
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch meals from the backend
  const fetchMeals = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/meals"); // Replace with your backend API endpoint
      const data = await response.json();
      setSelectedMeals(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update selected diet
  const updateDiet = (diet) => {
    setSelectedDiet(diet);
  };

  // Add a meal to the selected meals
  const addMeal = (meal) => {
    setSelectedMeals((prevMeals) => [...prevMeals, meal]);
  };

  // Remove a meal from the selected meals
  const removeMeal = (mealId) => {
    setSelectedMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
  };

  // Context value to be provided
  const value = {
    user,
    selectedDiet,
    selectedMeals,
    calendarItems,
    loading,
    recipes,
    meals,
    diets,
    kitchenItems,
    navItems,
    cookwareItems,
    utensilsItems,
    knivesItems,
    days,
    fetchUserData,
    fetchMeals,
    updateDiet,
    addMeal,
    removeMeal,
  };

  return <MealContext.Provider value={value}>{children}</MealContext.Provider>;
};