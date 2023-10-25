from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required

from .models import RegisteredUser
from .serializer import UserSerializer
import random

'''
@api_view(['GET'])
def api_overview(request):
	api_urls = {
		'List': '/task-list/',
		'Detail': '/task-detail/<str:pk>',
		'Create': '/task-create/',
		'Update': '/task-update/<str:pk>',
		'Delete': '/task-delete/<str:pk>',
	}
	return Response(api_urls)'''
	
@api_view(['POST'])
def registerUser(request):
  if request.method == 'POST':
    confirmation_code = ''.join(random.choices('0123456789', k=6))
    request.data['confirmation_code'] = confirmation_code
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      
      context = {
        'name': serializer.validated_data['first_name'],
        'code': serializer.validated_data['confirmation_code'],
        }
        
      email_content = render_to_string('email-template.html', context)
      
      subject = 'Seminar Registration Confirmation'
    #  message = f'Thank you for registering! Your confirmation code is: {confirmation_code}'
      from_email = 'alfrederic371@gmail.com'
      recipient_list = [serializer.validated_data['email']]
      email = EmailMessage(subject, email_content, from_email, recipient_list)
      email.content_subtype = 'html'
      
      try:
        email.send()
        if email.send():
          print('sent')
          Response({'success': 'Email sent'})
      except Exception as e:
        return Response({'error': 'Email sending failed'})
      return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['GET'])
def get_registered_users(request):
  users = RegisteredUser.objects.all()
  serializer = UserSerializer(users, many=True)
  
  return Response(serializer.data)  

@login_required
def view(request):
  return render(request, 'email-template.html')