from django.shortcuts import render
from django.shortcuts import redirect
from .models import User
import hashlib

#def index(request):
    #users = [u for u in User.objects.all()]

    #return render(request, 'login/index.html', {'users': users})

#def signup(request):
    #return render(request, 'login/signup.html', {})

def signup(request):
    if request.method == 'POST':
        user_email = request.POST['user_email']
        user_password = hashlib.sha1(b'user_password')
        new_user = User(user_email=user_email, user_password=user_password.hexdigest())
        new_user.save
        result = "SIGNED UP"
    
    return result

#def login(request):
    #return render(request, 'login/login.html', {})
