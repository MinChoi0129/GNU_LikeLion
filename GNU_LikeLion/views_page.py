from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, "main.html")

def planpage(request):
    return render(request, "planpage.html")