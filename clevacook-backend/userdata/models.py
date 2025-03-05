from django.db import models
from django.contrib.auth.models import User

class PhysicalAttributes():
	SEX = (
		("male", "Male"),
		("female", "Female"),
		("others", "Others"),
	)
	biological_sex = models.CharField(max_length=10, choices=SEX)