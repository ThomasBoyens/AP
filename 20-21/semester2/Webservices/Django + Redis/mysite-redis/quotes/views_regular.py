from django.shortcuts import render
from django.shortcuts import redirect
from .models import Author
from .models import Quote
import string

def index(request):
    authors = [a for a in Author.objects.all()]

    return render(request, 'quotes/index.html', {'authors': authors})

def detail(request, author_id):
    author = Author.objects.filter(pk=author_id).first()
    quote_list = author.quote_set.all()

    return render(request, 'quotes/detail.html', {'author': author, 'quote_list': quote_list})

def search(request):
    return render(request, 'quotes/search_form.html', {})

def search_results(request):
    if request.method == 'POST':
        word = request.POST['word']
        quote_list = Quote.objects.all()
        result = [q.quote_text + ' - ' + Author.objects.filter(pk=q.quote_author_id).first().author_name for q in quote_list if q.search_quote(word)]

    return render(request, 'quotes/search_result.html', {'quote_list': result})

def add_author(request):
    return render(request, 'quotes/add_author_form.html', {})

def add_author_results(request):
    if request.method == 'POST':
        author_name = request.POST['author_name']
        author_bio = request.POST['author_bio']
        new_author = Author(author_name=author_name, author_bio=author_bio)
        new_author.save()

    return redirect('http://localhost:8000/quotes')

def add_quote(request, author_id):
    return render(request, 'quotes/add_quote_form.html', {'author_id': author_id})

def add_quote_results(request):
    if request.method == 'POST':
        quote_text = request.POST['quote_text']
        author_id = int(request.POST['author_id'])
        author = Author.objects.filter(pk=author_id).first()
        new_quote = Quote(quote_text=quote_text, quote_author=author)
        new_quote.save()

    return redirect('http://localhost:8000/quotes')
