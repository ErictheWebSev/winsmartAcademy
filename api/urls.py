from django.urls import path

from . import views

urlpatterns = [
	path('users/', views.get_registered_users, name='registered_users'),
	path('register/', views.registerUser, name='register'),
	]