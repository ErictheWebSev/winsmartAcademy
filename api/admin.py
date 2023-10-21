from django.contrib import admin
from .models import RegisteredUser

class RegisteredUserAdmin(admin.ModelAdmin):
	list_display = ('first_name', 'last_name', 'email', 'phone_number',	'confirmation_code', 'date_joined')
	list_filter = ('first_name', 'confirmation_code', 'email')
	search_fields = ('first_name', 'last_name', 'email', 'phone_number', 'confirmation_code')
	
	
admin.site.register(RegisteredUser, RegisteredUserAdmin)
