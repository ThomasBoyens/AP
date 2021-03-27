from django.urls import path
from . import views

app_name = 'quotes'

urlpatterns = [
	path('', views.index, name='index'),
	path('<int:author_id>', views.detail, name='detail'),
	path('search', views.search, name='search'),
	path('search/results', views.search_results, name='search_results'),
	path('add/author', views.add_author, name='add_author'),
	path('add/author/results', views.add_author_results, name='add_author_results'),
	path('add/quote/<int:author_id>', views.add_quote, name='add_quote'),
	path('add/quote/results', views.add_quote_results, name='add_quote_results'),
]
