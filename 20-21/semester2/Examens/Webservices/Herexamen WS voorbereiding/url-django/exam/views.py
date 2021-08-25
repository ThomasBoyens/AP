from django.shortcuts import render

def index(request):
    return render(request, 'exam/index.html')

def result(request):
    return render(request, 'exam/result.html', {'testResource': ""})

def check(request, resource):
    #process the string 
    tmp = resource.split('/')
    result = ""


    #check if null needs to be added 
    for t in tmp:
        result = result + " - " + t
  

    return render(request, 'exam/result.html', {'testResource': result})