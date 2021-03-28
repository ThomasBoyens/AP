from django.shortcuts import render
from django.shortcuts import redirect
from .models import Author
from .models import Quote
import string

def index(request):
    authors = [a for a in Author.objects.all()]

    return render(request, 'quotes/index.html', {'authors': authors})

def detail(request, id):
    author = Author.objects.filter(id=id).first()
    quote_list = author.quote_set.all()

    return render(request, 'quotes/detail.html', {'author_name': author.author_name, 'quote_list': quote_list})

def search_form(request):
    return render(request, 'quotes/search_form.html', {})

def add_form(request):
    return render(request, 'quotes/add_form.html', {})

def search_results(request):
    if request.method == 'POST':
        word = request.POST['search_term']
        quote_list = Quote.objects.all()
        result = [q.quote_text for q in quote_list if q.search_quote(word)]

    return render(request, 'quotes/detail.html', {'quote_list': result})

def add_results(request):
    if request.method == 'POST':
        name = request.POST['author_name']
        bio = request.POST['author_bio']
        new_author = Author(author_name=name, author_bio=bio)
        new_author.save()

        return redirect('http://localhost:8000/quotes')