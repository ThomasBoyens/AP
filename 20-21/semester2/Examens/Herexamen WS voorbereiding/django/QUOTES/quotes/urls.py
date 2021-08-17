from django.urls import path
from . import views

app_name = 'quotes'

urlpatterns = [
    path('', views.index, name='index'),
    path('search', views.search, name='search'),
    path('search/results', views.search_results, name='search_results'),
    path('add/author', views.add_author, name='add_author'),
    path('<int:actor_id>/', views.detail, name='detail'),
]  