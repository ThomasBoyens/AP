from django.urls import path
from . import views

app_name = 'quotes'

urlpatterns = [
	path('', views.index, name='index'),
	path('search/form', views.search_form, name='search_form'),
	path('search/results', views.search_results, name='search_results'),
	path('add/form', views.add_form, name='add_form'),
	path('add/results', views.add_results, name='add_results'),
	path('<int:author_id>', views.detail, name='detail'),
]
