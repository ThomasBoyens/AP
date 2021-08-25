from django.urls import path
from . import views

app_name = 'login'

urlpatterns = [
    path('login', views.login, name='login'),
    path('home', views.index, name='index'),
    path('signup', views.signup, name='signup'),
]
