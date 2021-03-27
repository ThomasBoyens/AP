from django.urls import path
from . import views

app_name = 'examProject'

urlpatterns = [
	path('', views.index, name='index'),
	path('result/', views.result, name='result'),
	path('result/<path:resource>', views.check, name='result')
	
]
