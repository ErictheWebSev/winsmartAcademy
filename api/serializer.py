from rest_framework import serializers
from .models import RegisteredUser

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = RegisteredUser
    fields = '__all__'
    
    