from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render

from .models import Author, Quote


def index(request):
    authors = [a for a in Author.objects.all()]

    return render(request, 'quotes/index.html', {'authors':authors})
    
def detail(request, author_id):
    author = Author.objects.filter(pk=author_id).first()
    quote_list = author.quote_set.all()

    return render(request, 'quotes/detail.html', {'author': author, 'quote_list': quote_list})

def search(request):
    return HttpResponse("Hello, world. You're at the search form.")

def search_results(request):
    return HttpResponse("Hello, world. You're at the search results.")

def add_author(request):
    return HttpResponse("Hello, world. You're at the add form.")