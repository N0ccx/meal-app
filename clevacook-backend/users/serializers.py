from django.contrib.auth.model import getusermodel
from rest_framework import serializers
from .models import Trip

User = getusermodel()

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'
		extra_kwargs = {"password": {"write_only": True}}

	def create(self, validated_data):
		user = UserSerializer.objects.create_user(**validated_data)
		return user
