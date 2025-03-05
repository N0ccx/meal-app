from .models import Profile, PhysicalAttributes, CulturalPreferences, Meal, MealPlan
from django.contrib import admin

admin.site.register(Profile)
admin.site.register(PhysicalAttributes)
admin.site.register(CulturalPreferences)
admin.site.register(Meal)
admin.site.register(MealPlan)