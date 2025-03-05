from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/', default='avatars/default.jpg')
    bio = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"

    # Resizing images
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.avatar.path)

        if img.height > 100 or img.width > 100:
            new_img = (100, 100)
            img.thumbnail(new_img)
            img.save(self.avatar.path)


class PhysicalAttributes(models.Model):
    BODYFAT_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="physical_attributes")
    sex = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')])
    age = models.PositiveIntegerField()
    height = models.FloatField(help_text="Height in ft")
    weight = models.FloatField(help_text="Weight in g")
    body_fat = models.CharField(max_length=10, choices=BODYFAT_CHOICES, help_text="Body fat category")
    physical_attrs = models.ForeignKey(User, on_delete=models.CASCADE, related_name="physical")

    def __str__(self):
        return f"{self.user.username}'s Physical Attributes"


class CulturalPreferences(models.Model):
    LOCAL_MEALS_CHOICES = [
        ('never', 'Never'),
        ('sometimes', 'Sometimes'),
        ('always', 'Always'),
    ]
    COOKING_SKILL_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    ]
    BUDGET_CHOICES = [
        ('small', 'Small'),
        ('okay', 'Okay'),
        ('large', 'Large'),
    ]
    RELIGIOUS_RESTRICTIONS_CHOICES = [
        ('islam', 'Islam (Halal)'),
        ('judaism', 'Judaism (Kosher)'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="cultural_preferences")
    local_meals = models.CharField(max_length=10, choices=LOCAL_MEALS_CHOICES)
    cooking_skill = models.CharField(max_length=15, choices=COOKING_SKILL_CHOICES)
    budget_per_meal = models.DecimalField(max_digits=6, decimal_places=2, help_text="Budget in USD")
    religious_restrictions = models.CharField(max_length=15, choices=RELIGIOUS_RESTRICTIONS_CHOICES, blank=True)

    def __str__(self):
        return f"{self.user.username}'s Cultural Preferences"


class Meal(models.Model):
    user = models.ManyToManyField(User,related_name="meals")
    name = models.CharField(max_length=200)
    country = models.CharField(max_length=100)
    calories = models.FloatField()
    cost = models.DecimalField(max_digits=6, decimal_places=2)
    dietary_restrictions = models.TextField(blank=True, help_text="Comma-separated restrictions")

    def __str__(self):
        return self.name


class MealPlan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="meal_plans")
    date = models.DateField()
    meals = models.TextField(help_text="Comma-separated meal names")
    total_calories = models.FloatField(help_text="Total calories for the day")
    total_cost = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"Meal Plan for {self.user.username} on {self.date}"
