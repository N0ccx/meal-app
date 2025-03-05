from django.utils import timezone
from .models import Meal, MealPlan

def generate_meal_plan(user):
    try:
        # Retrieve user attributes and preferences
        physical_attrs = user.physical_attributes
        cultural_prefs = user.cultural_preferences

        # Filter meals based on preferences
        meals = Meal.objects.filter(
            country=cultural_prefs.country,
            dietary_restrictions__icontains=cultural_prefs.dietary_restrictions
        ).filter(
            calories__lte=physical_attrs.weight * 30,  # Example calorie calculation (weight in kg * 30)
            cost__lte=cultural_prefs.budget_per_meal
        )

        if not meals.exists():
            return None  # No suitable meals found

        # Generate a daily meal plan (e.g., 3 meals per day)
        selected_meals = meals[:3]  # Adjust the number of meals as needed
        meal_plan = MealPlan.objects.create(
            user=user,
            date=timezone.now(),
            meals=",".join([meal.name for meal in selected_meals]),
            total_calories=sum(meal.calories for meal in selected_meals),
            total_cost=sum(meal.cost for meal in selected_meals)
        )
        return meal_plan
    except Exception as e:
        print(f"Error generating meal plan: {e}")
        return None
        