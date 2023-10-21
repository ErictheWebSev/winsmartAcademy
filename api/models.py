from django.db import models

EXPERIENCE_CHOICES = (
    ('beginner', 'Beginner'),
    ('intermediate', 'Intermediate'),
    ('expert', 'Expert'),
  )

class RegisteredUser(models.Model):
  first_name = models.CharField(max_length=100)
  last_name = models.CharField(max_length=100)
  phone_number = models.CharField(max_length=11)
  email = models.EmailField()
  confirmation_code = models.CharField(max_length=10)
  experience = models.CharField(max_length=25, choices=EXPERIENCE_CHOICES, blank=True, null=True)
  date_joined = models.DateTimeField(auto_now_add=True)
  
  def __str__(self):
    return self.first_name + ' ' + self.last_name