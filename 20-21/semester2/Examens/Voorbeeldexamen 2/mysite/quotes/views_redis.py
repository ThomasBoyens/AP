from django.shortcuts import render
from .models import Author
from .models import Quote
import string
import redis

r = redis.StrictRedis(host='localhost', port=6379, db=0)

def index(request):
    author_list = r.keys('author:*')
    for author in author_list:
        author_names.append(r.get(a))

    return render(request, 'quotes/index.html', {'author_names': author_names})

def detail(request, author_name):
    # get all authors
    author_list = r.keys('author:*')
    # iterate all authors
    for a in author_list:
        # get name
        author = r.get(a)
        # compare to url parameter
        if author == author_name:
            i = string.split(a, ':')[1]
            quote_list = r.smembers('quote:' + i)

    return render(request, 'quotes/detail.html', {'quote_list': quote_list})

def search_form(request):
    return render(request, 'quotes/search_form.html', {})

def search_quotes(request):
    if request.method == 'POST':
        word = request.POST['search_term']
        quote_list = Quote.objects.all()
        result = [q.quote_text for q in quote_list if q.search_quote(word)]

    return render(request, 'quotes/detail.html', {'quote_list': result})
