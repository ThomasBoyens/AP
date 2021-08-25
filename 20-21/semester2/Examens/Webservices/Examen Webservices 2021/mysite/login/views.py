from django.http.response import HttpResponse
from django.shortcuts import render
from django.shortcuts import redirect
from .models import User
import hashlib

def index(request):
    return render(request, 'login/index.html', {})

def signup(request):
    if request.method == "POST":
        u = User()
        u.user_email = request.POST["email"]
        u.user_password = hashlib.sha1(request.POST["password"].encode('utf-8')).hexdigest()

        u.save()
        return HttpResponse("SIGNED UP", content_type="text/plain")

    return render(request, 'login/signupForm.html', {})

def login(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = hashlib.sha1(request.POST["password"].encode('utf-8')).hexdigest()
        usersFound = User.objects.filter(user_email=email).filter(user_password=password)

        # Logging in does not work in tests, but works in browser
        if(usersFound.exists()):
            return HttpResponse("LOGGED IN", content_type="text/plain")
        
        return HttpResponse("FAILED TO LOG IN", content_type="text/plain")

    
    return render(request, 'login/loginForm.html', {})
