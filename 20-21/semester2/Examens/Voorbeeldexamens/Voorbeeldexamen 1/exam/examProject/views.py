from django.shortcuts import render
import string

# Create your views here.

def index(request):
    return render(request, 'examProject/index.html')

def result(request):
    return render(request, 'examProject/result.html', {'testResource': ""})


# get everything behind and return the string of processed url
def check(request, resource):
    #process the string 
    tmp = resource.split('/')
    result = ""


    #check if null needs to be added 
    for t in tmp:
        result = result + " - " + t
  

    return render(request, 'examProject/result.html', {'testResource': result})
