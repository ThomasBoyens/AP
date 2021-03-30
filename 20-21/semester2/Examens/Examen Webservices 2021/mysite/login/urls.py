from django.urls import path
from . import views

app_name = 'login'

urlpatterns = [
    #path('', views.index, name='index'),
    path('login', views.login, name='login'),
    #path('login/result', views.login_results, name='login_results'),
    path('signup', views.signup, name='signup'),
    #path('signup/result', views.signup_results, name='signup_results'),
]
