from django.shortcuts import render
from django.shortcuts import redirect
from quotes.models import Author
from quotes.models import Quote
import string
import redis
import random

r = redis.StrictRedis('localhost', 6379, decode_responses=True)


def index(request):
    keys = r.keys('author:*')
    authors = []
    for key in keys:
        author = Author()
        author.id = key.split(':')[1]
        author.author_name = key.split(':')[2]
        author.author_bio = r.get(key)
        authors.append(author)

    return render(request, 'quotes/index.html', {'authors': authors})


def detail(request, author_id):
    keys = r.keys('author:' + str(author_id) + ':*')
    key = keys[0]
    author = Author()
    author.id = int(author_id)
    author.author_name = key.split(':')[2]
    quote_list = r.smembers('quote:' + str(author.id))

    return render(request, 'quotes/detail.html', {'author': author, 'quote_list': quote_list})


def search(request):
    return render(request, 'quotes/search_form.html', {})


def search_results(request):
    quote_list = []
    if request.method == 'POST':
        word = request.POST['word']
        quotes = r.keys('quote:*')
        for key in quotes:
            author_id = key.split(':')[1]
            for txt in r.smembers(key):
                q = Quote()
                q.quote_text = txt
                if q.search_quote(word):
                    quote_list.append(
                        q.quote_text + ' - ' + r.keys('author:' + author_id + ':*')[0].split(':')[2])

    return render(request, 'quotes/search_result.html', {'quote_list': quote_list})


def add_author(request):
    return render(request, 'quotes/add_author_form.html', {})


def add_author_results(request):
    if request.method == 'POST':
        author_name = request.POST['author_name']
        author_bio = request.POST['author_bio']
        r.incr('author_count')
        r.set('author:' + str(r.get('author_count')) + ':' + author_name, author_bio)

    return redirect('http://localhost:8000/quotes')


def add_quote(request, author_id):
    return render(request, 'quotes/add_quote_form.html', {'author_id': author_id})

def add_quote_results(request):
    if request.method == 'POST':
        quote_text = request.POST['quote_text']
        author_id= int(request.POST['author_id'])
        r.sadd('quote:' + str(author_id), quote_text)

    return redirect('http://localhost:8000/quotes')

def random_quote(request):
    quote_key = ''
    while (quote_key.find('quote') == -1):
        quote_key = r.randomkey()

    quote = random.choice(tuple(r.smembers(quote_key)))
    quote += ' - ' + r.keys('author:' + quote_key.split(':')[1] + ':*')[0].split(':')[2]

    return render(request, 'quotes/search_result.html', {'quote_list': [quote]})
