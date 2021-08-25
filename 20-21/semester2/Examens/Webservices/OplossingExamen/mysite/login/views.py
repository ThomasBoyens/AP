from django.shortcuts import render
from django.http import HttpResponse

import hashlib


from .models import User

def signup(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        hashedPass = hashlib.sha1(password.encode('utf-8')).hexdigest()
        user_exist = User.objects.filter(email = email)
        if(user_exist):
            return HttpResponse("Email Already Exists")
        else: 
            new_user = User(email=email, password=hashedPass)
            new_user.save()
            return HttpResponse("SIGNED UP")
        

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        hashedPass = hashlib.sha1(password.encode('utf-8')).hexdigest()
        check_user = User.objects.filter(email=email, password=hashedPass)
        
        if (check_user):
            return HttpResponse("LOGGED IN")
        else: 
            return HttpResponse("FAILED TO LOG IN")


    