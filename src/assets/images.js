// src/assets.js
import logo from './logo.png';
import googleIcon from './google-icon.png';
import facebookIcon from './facebook-icon.png';
import appleIcon from './apple-icon.png';
import eyeIcon from './Eye.png';
import eyeOffIcon from './Eyeoff.png';
import balanced from './balanced.png';
import carnivore from './carnivore.png';
import pescatarian from './pescatarian.png';
import vegan from './vegan.png';
import vegetarian from './vegetarian.png';
import keto from './keto.png';
import meal from './meal plan-icon.png';
import american from './american.png';
import british from './british.png';
import nigerian from './nigerian.png';
import fruits from './fruits and veggies.png';
import protein from './high protein.png';
import brunch from './brunch.png';
import lowCarbsImage from './low-carbs.png';
import fruitsVeggiesImage from './fruits and veggies.png';
import highProteinImage from './high protein.png';
import chefsChoiceImage from './sweet-healthy.png';
import seasonalFavoritesImage from './drinks-cocktails.png';
import quickBitesImage from './quick-bites.png';
import storePantry from './store-pantry.png'
import cookware from './cookware.png'
import utensils from './utensils-appliances.png'
import grocery from './grocery-list.png'
import favRecipe from './favorite-recipes.png'
import popcorn from './popcorn.png'
import favorite from './Favorite.png'
import notification from './Notification.png'
import nutrition from './app/nutrition-icon.png'
import kitchen from './app/my kitchen-icon.png'
import prefs from './app/preferences-icon.png'
import today from './app/today-icon.png'
import personalize from './Personalize.png'



export {
  logo,
  googleIcon,
  facebookIcon,
  appleIcon,
  eyeIcon,
  eyeOffIcon,
  balanced,
  carnivore,
  pescatarian,
  vegan,
  vegetarian,
  keto,
  meal,
  prefs,
  today,
  american,
  british,
  nigerian,
  fruits,
  protein,
  brunch,
  lowCarbsImage,
  fruitsVeggiesImage,
  highProteinImage,
  storePantry,
  cookware,
  utensils,
  grocery,
  favRecipe,
  popcorn,
  favorite,
  notification,
  kitchen,
  nutrition,
  personalize,
};



export const recipes = {
  globalRecipes: [
    { name: "Nigerian", imageSrc: nigerian },
    { name: "British", imageSrc: british },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
    { name: "American", imageSrc: american },
  ],

  healthSpecific: [
    { name: "Low Carbs", imageSrc: lowCarbsImage },
    { name: "Fruits & Veggies", imageSrc: fruitsVeggiesImage },
    { name: "High Protein", imageSrc: highProteinImage },
  ],

  clevaSpecials: [
    { name: "Sweet & Healthy", imageSrc: chefsChoiceImage },
    { name: "Seasonal Favorites", imageSrc: seasonalFavoritesImage },
    { name: "Quick Bites", imageSrc: quickBitesImage },
  ],
};
  
export const meals = [
    {
      name: "Popcorn",
      details: {
        kal: "200",
        cost: "N150",
        prepTime: "5-10 min",
        rating: "⭐ 4.3",
        budget: ['Okay','Small', 'Large'],
        category: []
      },
      imageSrc: popcorn,
    },
    {
      name: "Eba & Egusi Soup",
      details: {
        kal: "300",
        cost: "N350",
        prepTime: "30-40 min",
        rating: "⭐ 4.8",
      },
      imageSrc: popcorn,
    },
    {
      name: "Vegetable & Potato Stir-Fry",
      details: {
        kal: "250",
        cost: "N233",
        prepTime: "15-20 min",
        rating: "⭐ 4.5",
      },
      imageSrc: popcorn,
    },
  ];
  

export const diets = [
    { name: "Balanced", icon: balanced },
    { name: "Keto", icon: keto },
    { name: "Vegetarian", icon: vegetarian },
    { name: "Pescatarian", icon: pescatarian },
    { name: "Vegan", icon: vegan },
    { name: "Carnivore", icon: carnivore },
  ];

  export const kitchenItems = [
    { name: "My Store/Pantry", imageSrc: storePantry },
    { name: "Cookware", imageSrc: cookware },
    { name: "Utensils & Appliances", imageSrc: utensils },
    { name: "Grocery List", imageSrc: grocery },
    { name: "Favorite Recipes", imageSrc: favRecipe },
  ];

  export const navItems = [
    { label: "Today", icon: today, link: "/today"},
    { label: "Meal Plan", icon: meal, link: "/meal-plan"},
    { label: "Preferences", icon:prefs, link: "/preferences"},
    { label: "Kitchen", icon:kitchen, link: "/kitchen"},
    { label: "Nutrition", icon: nutrition, link: "/nutrition" },

  ];

  export const generateCalendarItems = (days = 5) => {
    const today = new Date();
    const calendar = [];
  
    for (let i = 0; i < days; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
  
      const dayName = futureDate.toLocaleDateString("en-US", { weekday: "short" });
      const monthName = futureDate.toLocaleDateString("en-US", { month: "long" });
      const dateNumber = futureDate.getDate();
  
      calendar.push({ day: dayName, date: monthName, number: dateNumber });
    }
  
    return calendar;
  };

export const cookwareItems = ["Frying Pan", "Saucepan", "Stockpot", "Wok", "Griddle", "Roasting Pan", "Skillet", "Pressure Cooker", "Small Oven", "Stock Pot","Duet Oven", "Rice Cooker"];
export const utensilsItems = ["Spatula", "Whisk", "Ladle", "Tongs", "Peeler", "Silicone", "Rolling Pin", "Potato Masher", "Spotted Spoon", "Garlic Press"];
export const knivesItems = ["Chef Knife", "Paring Knife", "Bread Knife", "Santoku Knife", "Cleaver", "Kitchen Scissors", "Mandoline Slicer", "Meat Tenderizer"];

